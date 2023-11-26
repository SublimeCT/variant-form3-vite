import { join } from 'node:path/posix'
import Properties from '../src/components/form-designer/setting-panel/propertyRegister'
import { containers, basicFields, advancedFields } from '../src/components/form-designer/widget-panel/widgetsConfig'
import { glob } from 'glob'
import { basename } from 'node:path'
import { readFile, writeFile } from 'node:fs/promises'
import lang from '../src/lang/zh-CN'
import { get, startCase } from 'lodash-es'
import JsonToTs from 'json-to-ts'

/** 所有字段的 key */
type PropertiesNames = (keyof typeof Properties.COMMON_PROPERTIES) | (keyof typeof Properties.ADVANCED_PROPERTIES) | (keyof typeof Properties.EVENT_PROPERTIES)

type ArrayItem<T> = T extends Array<infer U> ? U : never;
/** 所有组件的类型 */
type ComponentJson = (ArrayItem<typeof containers> | ArrayItem<typeof basicFields> | ArrayItem<typeof advancedFields>) & {
  /** 生成的 interface 代码 */
  $code?: string
}

/** 所有组件的 key */
type ComponentNames = ComponentJson['type']

/** 每个字段的信息 */
class PropertiesInfo {
  /** 源文件路径 */
  filePath: string = ''
  /** 字段对应的中文名称, 用来作为注释 */
  name: string = ''
  constructor(
    /** 文件名 */
    public fileName: string
  ) { }
}

/** 输出目录 */
const outputFilePath = join(__dirname, '../FormJson.ts')

/** 属性编辑组件所在目录 */
const rootPath = join(__dirname, '../src/components/form-designer/setting-panel')

class JsonInterfaceGenerator {
  properties: Record<PropertiesNames, PropertiesInfo>
  components: Record<ComponentNames, ComponentJson>
  constructor() {
    const properties: Record<PropertiesNames, any> = {
      ...Properties.COMMON_PROPERTIES,
      ...Properties.ADVANCED_PROPERTIES,
      ...Properties.EVENT_PROPERTIES,
    }
    for (const k in properties) {
      properties[k as PropertiesNames] = new PropertiesInfo(properties[k as PropertiesNames] + '.vue')
    }
    this.properties = properties
    const components: Partial<JsonInterfaceGenerator['components']> = {}
    for (const c of [...containers, ...basicFields, ...advancedFields]) {
      components[c.type as ComponentNames] = c
    }
    this.components = components as JsonInterfaceGenerator['components']
  }
  async run() {
    // 1. 获取每个属性对应的文件路径
    await this._getFiles()
    // 2. 从源码文件中读取属性名称
    await this._getName()
    // 3. 生成每个组件的 interface, 并增加 jsdoc 格式的注释, 注释内容为 2 中获取的属性名称
    const code =await this._toInterface()
    // 4. 写入 outputJson.d.ts 文件
    await writeFile(outputFilePath, code)
    // console.log(this.properties)
    console.log(this.components)
  }
  private async _getFiles() {
    const files = await glob(
      '**/*.vue',
      {
        ignore: 'node_modules',
        cwd: rootPath,
      }
    )
    const fileNameMap: Record<string, string> = {}
    files.forEach(f => fileNameMap[basename(f)] = f)
    for (const k in this.properties) {
      const property = this.properties[k as PropertiesNames]
      property.filePath = fileNameMap[property.fileName] || ''
    }
  }
  private async _getName() {
    for (const k in this.properties) {
      const property = this.properties[k as PropertiesNames]
      if (!property.filePath) continue
      const content = await readFile(join(rootPath, property.filePath))
      const name = this._matchPropertyName(content.toString())
      property.name = name
    }
  }

  private _matchPropertyName(content: string) {
    const matches = content.match(/i18nt\(['"](.*?)['"]\)/)
    if (!matches) return ''
    const label = matches[1]
    // if (label.indexOf('i18n') === 0) { // 多语言 key
    return get(lang, label) || ''
    // } else {
    //   return label
    // }
  }
  private async _toInterface() {
    let code = ''
    for (const k in this.components) {
      const component = this.components[k as ComponentNames]
      const componentKey = startCase(component.type).replace(' ', '')
      const optionsInterfaceName = componentKey + 'Widget'
      const interfaceCode = JsonToTs(component, { rootName: optionsInterfaceName })
      const componentName = this._getComponentName(component)
      const componentNote = `/** ${componentName} 组件 */`
      component.$code = componentNote + '\n' + this._formatComponentCode(interfaceCode.join('\n'), component)
      code += component.$code + '\n\n'
    }
    return code
  }
  private _getComponentName(component: ComponentJson) {
    return get(lang, `designer.widgetLabel.${component.type}`) || ''
  }
  private _formatComponentCode(code: string, component: ComponentJson) {
    const componentName = this._getComponentName(component)
    const componentKey = startCase(component.type).replace(' ', '')
    const optionsInterfaceName = componentKey + 'WidgetOptions'
    const category = get(component, 'category')
    return code
      // .replace(`interface RootObject`, 'export interface ' + startCase(component.type).replace(' ', '') + 'Widget')
      .replace('type: string', `type: '${component.type}'`)
      .replace('icon: string', `icon: '${component.icon}'`)
      .replace('category: string', `category: ${category ? '\'' + category + '\'' : 'string'}`)
      .replace(/interface\sOptions\s*{([\s\S]*?)}/m, optionsCode => {
        for (const k in this.properties) {
          const property = this.properties[k as PropertiesNames]
          if (!property.name) continue
          optionsCode = optionsCode.replace(`${k}: `, `/** ${property.name} */\n  ` + k + ': ')
        }
        return optionsCode
      })
      .replace(`interface Options`, `/** ${componentName} 组件配置项 */\n` + 'export interface ' + optionsInterfaceName)
      .replace(`options: Options`, 'options: ' + optionsInterfaceName)
  }
}

const generator = new JsonInterfaceGenerator()
generator.run()

