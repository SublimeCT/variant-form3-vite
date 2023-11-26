/** 栅格 组件 */
interface GridWidget {
  type: 'grid';
  category: 'container';
  icon: 'grid';
  cols: any[];
  options: GridWidgetOptions;
}
/** 栅格 组件配置项 */
export interface GridWidgetOptions {
  /** 唯一名称 */
  name: string;
  /** 隐藏 */
  hidden: boolean;
  /** 栅格属性设置 */
  gutter: number;
  colHeight?: any;
  /** 自定义CSS样式 */
  customClass: string;
}

/** 表格 组件 */
interface TableWidget {
  type: 'table';
  category: 'container';
  icon: 'table';
  rows: any[];
  options: TableWidgetOptions;
}
/** 表格 组件配置项 */
export interface TableWidgetOptions {
  /** 唯一名称 */
  name: string;
  /** 隐藏 */
  hidden: boolean;
  /** 自定义CSS样式 */
  customClass: string;
}

/** 标签页 组件 */
interface TabWidget {
  type: 'tab';
  category: 'container';
  icon: 'tab';
  displayType: string;
  tabs: any[];
  options: TabWidgetOptions;
}
/** 标签页 组件配置项 */
export interface TabWidgetOptions {
  /** 唯一名称 */
  name: string;
  /** 隐藏 */
  hidden: boolean;
  /** 自定义CSS样式 */
  customClass: string;
}

/** 栅格列 组件 */
interface GridColWidget {
  type: 'grid-col';
  category: 'container';
  icon: 'grid-col';
  internal: boolean;
  widgetList: any[];
  options: GridColWidgetOptions;
}
/** 栅格列 组件配置项 */
export interface GridColWidgetOptions {
  /** 唯一名称 */
  name: string;
  /** 隐藏 */
  hidden: boolean;
  span: number;
  offset: number;
  push: number;
  pull: number;
  responsive: boolean;
  md: number;
  sm: number;
  xs: number;
  /** 自定义CSS样式 */
  customClass: string;
}

/** 单元格 组件 */
interface TableCellWidget {
  type: 'table-cell';
  category: 'container';
  icon: 'table-cell';
  internal: boolean;
  widgetList: any[];
  merged: boolean;
  options: TableCellWidgetOptions;
}
/** 单元格 组件配置项 */
export interface TableCellWidgetOptions {
  /** 唯一名称 */
  name: string;
  /** 宽度 */
  cellWidth: string;
  /** 高度 */
  cellHeight: string;
  colspan: number;
  rowspan: number;
  /** 文字自动换行 */
  wordBreak: boolean;
  /** 自定义CSS样式 */
  customClass: string;
}

/** 选项卡页 组件 */
interface TabPaneWidget {
  type: 'tab-pane';
  category: 'container';
  icon: 'tab-pane';
  internal: boolean;
  widgetList: any[];
  options: TabPaneWidgetOptions;
}
/** 选项卡页 组件配置项 */
export interface TabPaneWidgetOptions {
  /** 唯一名称 */
  name: string;
  /** 标签 */
  label: string;
  /** 隐藏 */
  hidden: boolean;
  active: boolean;
  /** 禁用 */
  disabled: boolean;
  /** 自定义CSS样式 */
  customClass: string;
}

/** 单行输入 组件 */
interface InputWidget {
  type: 'input';
  icon: 'text-field';
  formItemFlag: boolean;
  options: InputWidgetOptions;
}
/** 单行输入 组件配置项 */
export interface InputWidgetOptions {
  /** 唯一名称 */
  name: string;
  /** 标签 */
  label: string;
  /** 字段标签对齐 */
  labelAlign: string;
  /** 显示类型 */
  type: string;
  /** 默认值 */
  defaultValue: string;
  /** 占位内容 */
  placeholder: string;
  /** 组件列宽 */
  columnWidth: string;
  /** 组件大小 */
  size: string;
  labelWidth?: any;
  /** 隐藏字段标签 */
  labelHidden: boolean;
  /** 只读 */
  readonly: boolean;
  /** 禁用 */
  disabled: boolean;
  /** 隐藏 */
  hidden: boolean;
  /** 可清除 */
  clearable: boolean;
  /** 可显示密码 */
  showPassword: boolean;
  /** 必填字段 */
  required: boolean;
  /** 必填校验提示 */
  requiredHint: string;
  /** 字段校验 */
  validation: string;
  /** 校验失败提示 */
  validationHint: string;
  /** 自定义CSS样式 */
  customClass: string;
  labelIconClass?: any;
  /** 标签Icon位置 */
  labelIconPosition: string;
  labelTooltip?: any;
  minLength?: any;
  maxLength?: any;
  /** 显示字数统计 */
  showWordLimit: boolean;
  /** 头部Icon */
  prefixIcon: string;
  /** 尾部Icon */
  suffixIcon: string;
  /** 输入框按钮设置 */
  appendButton: boolean;
  /** 后置按钮禁用 */
  appendButtonDisabled: boolean;
  /** 后置按钮Icon */
  buttonIcon: string;
  /** 编写代码 */
  onCreated: string;
  /** 编写代码 */
  onMounted: string;
  /** 编写代码 */
  onInput: string;
  /** 编写代码 */
  onChange: string;
  /** 编写代码 */
  onFocus: string;
  /** 编写代码 */
  onBlur: string;
  /** 编写代码 */
  onValidate: string;
  onAppendButt/** 编写代码 */
  onClick: string;
}

/** 多行输入 组件 */
interface TextareaWidget {
  type: 'textarea';
  icon: 'textarea-field';
  formItemFlag: boolean;
  options: TextareaWidgetOptions;
}
/** 多行输入 组件配置项 */
export interface TextareaWidgetOptions {
  /** 唯一名称 */
  name: string;
  /** 标签 */
  label: string;
  /** 字段标签对齐 */
  labelAlign: string;
  /** 行数 */
  rows: number;
  /** 默认值 */
  defaultValue: string;
  /** 占位内容 */
  placeholder: string;
  /** 组件列宽 */
  columnWidth: string;
  /** 组件大小 */
  size: string;
  labelWidth?: any;
  /** 隐藏字段标签 */
  labelHidden: boolean;
  /** 只读 */
  readonly: boolean;
  /** 禁用 */
  disabled: boolean;
  /** 隐藏 */
  hidden: boolean;
  /** 必填字段 */
  required: boolean;
  /** 必填校验提示 */
  requiredHint: string;
  /** 字段校验 */
  validation: string;
  /** 校验失败提示 */
  validationHint: string;
  /** 自定义CSS样式 */
  customClass: string;
  labelIconClass?: any;
  /** 标签Icon位置 */
  labelIconPosition: string;
  labelTooltip?: any;
  minLength?: any;
  maxLength?: any;
  /** 显示字数统计 */
  showWordLimit: boolean;
  /** 编写代码 */
  onCreated: string;
  /** 编写代码 */
  onMounted: string;
  /** 编写代码 */
  onInput: string;
  /** 编写代码 */
  onChange: string;
  /** 编写代码 */
  onFocus: string;
  /** 编写代码 */
  onBlur: string;
  /** 编写代码 */
  onValidate: string;
}

/** 计数器 组件 */
interface NumberWidget {
  type: 'number';
  icon: 'number-field';
  formItemFlag: boolean;
  options: NumberWidgetOptions;
}
/** 计数器 组件配置项 */
export interface NumberWidgetOptions {
  /** 唯一名称 */
  name: string;
  /** 标签 */
  label: string;
  /** 字段标签对齐 */
  labelAlign: string;
  /** 默认值 */
  defaultValue: number;
  /** 占位内容 */
  placeholder: string;
  /** 组件列宽 */
  columnWidth: string;
  /** 组件大小 */
  size: string;
  labelWidth?: any;
  /** 隐藏字段标签 */
  labelHidden: boolean;
  /** 禁用 */
  disabled: boolean;
  /** 隐藏 */
  hidden: boolean;
  /** 必填字段 */
  required: boolean;
  /** 必填校验提示 */
  requiredHint: string;
  /** 字段校验 */
  validation: string;
  /** 校验失败提示 */
  validationHint: string;
  /** 自定义CSS样式 */
  customClass: string;
  labelIconClass?: any;
  /** 标签Icon位置 */
  labelIconPosition: string;
  labelTooltip?: any;
  /** 最小值 */
  min: number;
  /** 最大值 */
  max: number;
  /** 精度 */
  precision: number;
  /** 增减步长 */
  step: number;
  /** 控制按钮位置 */
  controlsPosition: string;
  /** 编写代码 */
  onCreated: string;
  /** 编写代码 */
  onMounted: string;
  /** 编写代码 */
  onChange: string;
  /** 编写代码 */
  onFocus: string;
  /** 编写代码 */
  onBlur: string;
  /** 编写代码 */
  onValidate: string;
}

/** 单选项 组件 */
interface RadioWidget {
  type: 'radio';
  icon: 'radio-field';
  formItemFlag: boolean;
  options: RadioWidgetOptions;
}
/** 单选项 组件配置项 */
export interface RadioWidgetOptions {
  /** 唯一名称 */
  name: string;
  /** 标签 */
  label: string;
  /** 字段标签对齐 */
  labelAlign: string;
  defaultValue?: any;
  /** 组件列宽 */
  columnWidth: string;
  /** 组件大小 */
  size: string;
  /** 显示样式 */
  displayStyle: string;
  /** 显示为按钮 */
  buttonStyle: boolean;
  /** 带有边框 */
  border: boolean;
  labelWidth?: any;
  /** 隐藏字段标签 */
  labelHidden: boolean;
  /** 禁用 */
  disabled: boolean;
  /** 隐藏 */
  hidden: boolean;
  /** 选项设置 */
  optionItems: OptionItem[];
  /** 必填字段 */
  required: boolean;
  /** 必填校验提示 */
  requiredHint: string;
  /** 字段校验 */
  validation: string;
  /** 校验失败提示 */
  validationHint: string;
  /** 自定义CSS样式 */
  customClass: string;
  labelIconClass?: any;
  /** 标签Icon位置 */
  labelIconPosition: string;
  labelTooltip?: any;
  /** 编写代码 */
  onCreated: string;
  /** 编写代码 */
  onMounted: string;
  /** 编写代码 */
  onChange: string;
  /** 编写代码 */
  onValidate: string;
}
interface OptionItem {
  label: string;
  value: number;
}

/** 多选项 组件 */
interface CheckboxWidget {
  type: 'checkbox';
  icon: 'checkbox-field';
  formItemFlag: boolean;
  options: CheckboxWidgetOptions;
}
/** 多选项 组件配置项 */
export interface CheckboxWidgetOptions {
  /** 唯一名称 */
  name: string;
  /** 标签 */
  label: string;
  /** 字段标签对齐 */
  labelAlign: string;
  /** 默认值 */
  defaultValue: any[];
  /** 组件列宽 */
  columnWidth: string;
  /** 组件大小 */
  size: string;
  /** 显示样式 */
  displayStyle: string;
  /** 显示为按钮 */
  buttonStyle: boolean;
  /** 带有边框 */
  border: boolean;
  labelWidth?: any;
  /** 隐藏字段标签 */
  labelHidden: boolean;
  /** 禁用 */
  disabled: boolean;
  /** 隐藏 */
  hidden: boolean;
  /** 选项设置 */
  optionItems: OptionItem[];
  /** 必填字段 */
  required: boolean;
  /** 必填校验提示 */
  requiredHint: string;
  /** 字段校验 */
  validation: string;
  /** 校验失败提示 */
  validationHint: string;
  /** 自定义CSS样式 */
  customClass: string;
  labelIconClass?: any;
  /** 标签Icon位置 */
  labelIconPosition: string;
  labelTooltip?: any;
  /** 编写代码 */
  onCreated: string;
  /** 编写代码 */
  onMounted: string;
  /** 编写代码 */
  onChange: string;
  /** 编写代码 */
  onValidate: string;
}
interface OptionItem {
  label: string;
  value: number;
}

/** 下拉选项 组件 */
interface SelectWidget {
  type: 'select';
  icon: 'select-field';
  formItemFlag: boolean;
  options: SelectWidgetOptions;
}
/** 下拉选项 组件配置项 */
export interface SelectWidgetOptions {
  /** 唯一名称 */
  name: string;
  /** 标签 */
  label: string;
  /** 字段标签对齐 */
  labelAlign: string;
  /** 默认值 */
  defaultValue: string;
  /** 占位内容 */
  placeholder: string;
  /** 组件列宽 */
  columnWidth: string;
  /** 组件大小 */
  size: string;
  labelWidth?: any;
  /** 隐藏字段标签 */
  labelHidden: boolean;
  /** 禁用 */
  disabled: boolean;
  /** 隐藏 */
  hidden: boolean;
  /** 可清除 */
  clearable: boolean;
  /** 可搜索选项 */
  filterable: boolean;
  /** 允许创建选项 */
  allowCreate: boolean;
  /** 可远程搜索 */
  remote: boolean;
  /** 自动弹出选项 */
  automaticDropdown: boolean;
  /** 选项可多选 */
  multiple: boolean;
  /** 多选数量限制 */
  multipleLimit: number;
  /** 选项设置 */
  optionItems: OptionItem[];
  /** 必填字段 */
  required: boolean;
  /** 必填校验提示 */
  requiredHint: string;
  /** 字段校验 */
  validation: string;
  /** 校验失败提示 */
  validationHint: string;
  /** 自定义CSS样式 */
  customClass: string;
  labelIconClass?: any;
  /** 标签Icon位置 */
  labelIconPosition: string;
  labelTooltip?: any;
  /** 编写代码 */
  onCreated: string;
  /** 编写代码 */
  onMounted: string;
  /** 编写代码 */
  onRemoteQuery: string;
  /** 编写代码 */
  onChange: string;
  /** 编写代码 */
  onFocus: string;
  /** 编写代码 */
  onBlur: string;
  /** 编写代码 */
  onValidate: string;
}
interface OptionItem {
  label: string;
  value: number;
}

/** 时间 组件 */
interface TimeWidget {
  type: 'time';
  icon: 'time-field';
  formItemFlag: boolean;
  options: TimeWidgetOptions;
}
/** 时间 组件配置项 */
export interface TimeWidgetOptions {
  /** 唯一名称 */
  name: string;
  /** 标签 */
  label: string;
  /** 字段标签对齐 */
  labelAlign: string;
  defaultValue?: any;
  /** 占位内容 */
  placeholder: string;
  /** 组件列宽 */
  columnWidth: string;
  /** 组件大小 */
  size: string;
  /** 自动拉伸宽度 */
  autoFullWidth: boolean;
  labelWidth?: any;
  /** 隐藏字段标签 */
  labelHidden: boolean;
  /** 只读 */
  readonly: boolean;
  /** 禁用 */
  disabled: boolean;
  /** 隐藏 */
  hidden: boolean;
  /** 可清除 */
  clearable: boolean;
  /** 可输入 */
  editable: boolean;
  format: string;
  /** 必填字段 */
  required: boolean;
  /** 必填校验提示 */
  requiredHint: string;
  /** 字段校验 */
  validation: string;
  /** 校验失败提示 */
  validationHint: string;
  /** 自定义CSS样式 */
  customClass: string;
  labelIconClass?: any;
  /** 标签Icon位置 */
  labelIconPosition: string;
  labelTooltip?: any;
  /** 编写代码 */
  onCreated: string;
  /** 编写代码 */
  onMounted: string;
  /** 编写代码 */
  onChange: string;
  /** 编写代码 */
  onFocus: string;
  /** 编写代码 */
  onBlur: string;
  /** 编写代码 */
  onValidate: string;
}

/** 时间范围 组件 */
interface TimeRangeWidget {
  type: 'time-range';
  icon: 'time-range-field';
  formItemFlag: boolean;
  options: TimeRangeWidgetOptions;
}
/** 时间范围 组件配置项 */
export interface TimeRangeWidgetOptions {
  /** 唯一名称 */
  name: string;
  /** 标签 */
  label: string;
  /** 字段标签对齐 */
  labelAlign: string;
  defaultValue?: any;
  /** 起始占位内容 */
  startPlaceholder: string;
  /** 截止占位内容 */
  endPlaceholder: string;
  /** 组件列宽 */
  columnWidth: string;
  /** 组件大小 */
  size: string;
  /** 自动拉伸宽度 */
  autoFullWidth: boolean;
  labelWidth?: any;
  /** 隐藏字段标签 */
  labelHidden: boolean;
  /** 只读 */
  readonly: boolean;
  /** 禁用 */
  disabled: boolean;
  /** 隐藏 */
  hidden: boolean;
  /** 可清除 */
  clearable: boolean;
  /** 可输入 */
  editable: boolean;
  format: string;
  /** 必填字段 */
  required: boolean;
  /** 必填校验提示 */
  requiredHint: string;
  /** 字段校验 */
  validation: string;
  /** 校验失败提示 */
  validationHint: string;
  /** 自定义CSS样式 */
  customClass: string;
  labelIconClass?: any;
  /** 标签Icon位置 */
  labelIconPosition: string;
  labelTooltip?: any;
  /** 编写代码 */
  onCreated: string;
  /** 编写代码 */
  onMounted: string;
  /** 编写代码 */
  onChange: string;
  /** 编写代码 */
  onFocus: string;
  /** 编写代码 */
  onBlur: string;
  /** 编写代码 */
  onValidate: string;
}

/** 日期 组件 */
interface DateWidget {
  type: 'date';
  icon: 'date-field';
  formItemFlag: boolean;
  options: DateWidgetOptions;
}
/** 日期 组件配置项 */
export interface DateWidgetOptions {
  /** 唯一名称 */
  name: string;
  /** 标签 */
  label: string;
  /** 字段标签对齐 */
  labelAlign: string;
  /** 显示类型 */
  type: string;
  defaultValue?: any;
  /** 占位内容 */
  placeholder: string;
  /** 组件列宽 */
  columnWidth: string;
  /** 组件大小 */
  size: string;
  /** 自动拉伸宽度 */
  autoFullWidth: boolean;
  labelWidth?: any;
  /** 隐藏字段标签 */
  labelHidden: boolean;
  /** 只读 */
  readonly: boolean;
  /** 禁用 */
  disabled: boolean;
  /** 隐藏 */
  hidden: boolean;
  /** 可清除 */
  clearable: boolean;
  /** 可输入 */
  editable: boolean;
  format: string;
  valueFormat: string;
  /** 必填字段 */
  required: boolean;
  /** 必填校验提示 */
  requiredHint: string;
  /** 字段校验 */
  validation: string;
  /** 校验失败提示 */
  validationHint: string;
  /** 自定义CSS样式 */
  customClass: string;
  labelIconClass?: any;
  /** 标签Icon位置 */
  labelIconPosition: string;
  labelTooltip?: any;
  /** 编写代码 */
  onCreated: string;
  /** 编写代码 */
  onMounted: string;
  /** 编写代码 */
  onChange: string;
  /** 编写代码 */
  onFocus: string;
  /** 编写代码 */
  onBlur: string;
  /** 编写代码 */
  onValidate: string;
}

/** 日期范围 组件 */
interface DateRangeWidget {
  type: 'date-range';
  icon: 'date-range-field';
  formItemFlag: boolean;
  options: DateRangeWidgetOptions;
}
/** 日期范围 组件配置项 */
export interface DateRangeWidgetOptions {
  /** 唯一名称 */
  name: string;
  /** 标签 */
  label: string;
  /** 字段标签对齐 */
  labelAlign: string;
  /** 显示类型 */
  type: string;
  defaultValue?: any;
  /** 起始占位内容 */
  startPlaceholder: string;
  /** 截止占位内容 */
  endPlaceholder: string;
  /** 组件列宽 */
  columnWidth: string;
  /** 组件大小 */
  size: string;
  /** 自动拉伸宽度 */
  autoFullWidth: boolean;
  labelWidth?: any;
  /** 隐藏字段标签 */
  labelHidden: boolean;
  /** 只读 */
  readonly: boolean;
  /** 禁用 */
  disabled: boolean;
  /** 隐藏 */
  hidden: boolean;
  /** 可清除 */
  clearable: boolean;
  /** 可输入 */
  editable: boolean;
  format: string;
  valueFormat: string;
  /** 必填字段 */
  required: boolean;
  /** 必填校验提示 */
  requiredHint: string;
  /** 字段校验 */
  validation: string;
  /** 校验失败提示 */
  validationHint: string;
  /** 自定义CSS样式 */
  customClass: string;
  labelIconClass?: any;
  /** 标签Icon位置 */
  labelIconPosition: string;
  labelTooltip?: any;
  /** 编写代码 */
  onCreated: string;
  /** 编写代码 */
  onMounted: string;
  /** 编写代码 */
  onChange: string;
  /** 编写代码 */
  onFocus: string;
  /** 编写代码 */
  onBlur: string;
  /** 编写代码 */
  onValidate: string;
}

/** 开关 组件 */
interface SwitchWidget {
  type: 'switch';
  icon: 'switch-field';
  formItemFlag: boolean;
  options: SwitchWidgetOptions;
}
/** 开关 组件配置项 */
export interface SwitchWidgetOptions {
  /** 唯一名称 */
  name: string;
  /** 标签 */
  label: string;
  /** 字段标签对齐 */
  labelAlign: string;
  defaultValue?: any;
  /** 组件列宽 */
  columnWidth: string;
  labelWidth?: any;
  /** 隐藏字段标签 */
  labelHidden: boolean;
  /** 禁用 */
  disabled: boolean;
  /** 隐藏 */
  hidden: boolean;
  /** 自定义CSS样式 */
  customClass: string;
  labelIconClass?: any;
  /** 标签Icon位置 */
  labelIconPosition: string;
  labelTooltip?: any;
  /** 开关宽度（像素） */
  switchWidth: number;
  /** 开启时文字描述 */
  activeText: string;
  /** 关闭时文字描述 */
  inactiveText: string;
  activeColor?: any;
  inactiveColor?: any;
  /** 编写代码 */
  onCreated: string;
  /** 编写代码 */
  onMounted: string;
  /** 编写代码 */
  onChange: string;
  /** 编写代码 */
  onValidate: string;
}

/** 评分 组件 */
interface RateWidget {
  type: 'rate';
  icon: 'rate-field';
  formItemFlag: boolean;
  options: RateWidgetOptions;
}
/** 评分 组件配置项 */
export interface RateWidgetOptions {
  /** 唯一名称 */
  name: string;
  /** 标签 */
  label: string;
  /** 字段标签对齐 */
  labelAlign: string;
  defaultValue?: any;
  /** 组件列宽 */
  columnWidth: string;
  labelWidth?: any;
  /** 隐藏字段标签 */
  labelHidden: boolean;
  /** 禁用 */
  disabled: boolean;
  /** 隐藏 */
  hidden: boolean;
  /** 必填字段 */
  required: boolean;
  /** 必填校验提示 */
  requiredHint: string;
  /** 字段校验 */
  validation: string;
  /** 校验失败提示 */
  validationHint: string;
  /** 自定义CSS样式 */
  customClass: string;
  labelIconClass?: any;
  /** 标签Icon位置 */
  labelIconPosition: string;
  labelTooltip?: any;
  /** 最大值 */
  max: number;
  /** 低分界限值 */
  lowThreshold: number;
  /** 高分界限值 */
  highThreshold: number;
  /** 允许半选 */
  allowHalf: boolean;
  /** 显示辅助文字 */
  showText: boolean;
  /** 显示当前分数 */
  showScore: boolean;
  /** 编写代码 */
  onCreated: string;
  /** 编写代码 */
  onMounted: string;
  /** 编写代码 */
  onChange: string;
  /** 编写代码 */
  onValidate: string;
}

/** 颜色选择器 组件 */
interface ColorWidget {
  type: 'color';
  icon: 'color-field';
  formItemFlag: boolean;
  options: ColorWidgetOptions;
}
/** 颜色选择器 组件配置项 */
export interface ColorWidgetOptions {
  /** 唯一名称 */
  name: string;
  /** 标签 */
  label: string;
  /** 字段标签对齐 */
  labelAlign: string;
  defaultValue?: any;
  /** 组件列宽 */
  columnWidth: string;
  /** 组件大小 */
  size: string;
  labelWidth?: any;
  /** 隐藏字段标签 */
  labelHidden: boolean;
  /** 禁用 */
  disabled: boolean;
  /** 隐藏 */
  hidden: boolean;
  /** 必填字段 */
  required: boolean;
  /** 必填校验提示 */
  requiredHint: string;
  /** 字段校验 */
  validation: string;
  /** 校验失败提示 */
  validationHint: string;
  /** 自定义CSS样式 */
  customClass: string;
  labelIconClass?: any;
  /** 标签Icon位置 */
  labelIconPosition: string;
  labelTooltip?: any;
  /** 编写代码 */
  onCreated: string;
  /** 编写代码 */
  onMounted: string;
  /** 编写代码 */
  onChange: string;
  /** 编写代码 */
  onValidate: string;
}

/** 滑块 组件 */
interface SliderWidget {
  type: 'slider';
  icon: 'slider-field';
  formItemFlag: boolean;
  options: SliderWidgetOptions;
}
/** 滑块 组件配置项 */
export interface SliderWidgetOptions {
  /** 唯一名称 */
  name: string;
  /** 标签 */
  label: string;
  /** 字段标签对齐 */
  labelAlign: string;
  /** 组件列宽 */
  columnWidth: string;
  /** 显示间断点 */
  showStops: boolean;
  /** 组件大小 */
  size: string;
  labelWidth?: any;
  /** 隐藏字段标签 */
  labelHidden: boolean;
  /** 禁用 */
  disabled: boolean;
  /** 隐藏 */
  hidden: boolean;
  /** 必填字段 */
  required: boolean;
  /** 必填校验提示 */
  requiredHint: string;
  /** 字段校验 */
  validation: string;
  /** 校验失败提示 */
  validationHint: string;
  /** 自定义CSS样式 */
  customClass: string;
  labelIconClass?: any;
  /** 标签Icon位置 */
  labelIconPosition: string;
  labelTooltip?: any;
  /** 最小值 */
  min: number;
  /** 最大值 */
  max: number;
  /** 增减步长 */
  step: number;
  /** 是否为范围选择 */
  range: boolean;
  height?: any;
  /** 编写代码 */
  onCreated: string;
  /** 编写代码 */
  onMounted: string;
  /** 编写代码 */
  onChange: string;
  /** 编写代码 */
  onValidate: string;
}

/** 静态文字 组件 */
interface StaticTextWidget {
  type: 'static-text';
  icon: 'static-text';
  formItemFlag: boolean;
  options: StaticTextWidgetOptions;
}
/** 静态文字 组件配置项 */
export interface StaticTextWidgetOptions {
  /** 唯一名称 */
  name: string;
  /** 组件列宽 */
  columnWidth: string;
  /** 隐藏 */
  hidden: boolean;
  /** 静态文字 */
  textContent: string;
  /** 文字对齐 */
  textAlign: string;
  /** 字体大小 */
  fontSize: string;
  /** 自动换行 */
  preWrap: boolean;
  /** 自定义CSS样式 */
  customClass: string;
  /** 编写代码 */
  onCreated: string;
  /** 编写代码 */
  onMounted: string;
}

/** HTML 组件 */
interface HtmlTextWidget {
  type: 'html-text';
  icon: 'html-text';
  formItemFlag: boolean;
  options: HtmlTextWidgetOptions;
}
/** HTML 组件配置项 */
export interface HtmlTextWidgetOptions {
  /** 唯一名称 */
  name: string;
  /** 组件列宽 */
  columnWidth: string;
  /** 隐藏 */
  hidden: boolean;
  /** HTML */
  htmlContent: string;
  /** 自定义CSS样式 */
  customClass: string;
  /** 编写代码 */
  onCreated: string;
  /** 编写代码 */
  onMounted: string;
}

/** 按钮 组件 */
interface ButtonWidget {
  type: 'button';
  icon: 'button';
  formItemFlag: boolean;
  options: ButtonWidgetOptions;
}
/** 按钮 组件配置项 */
export interface ButtonWidgetOptions {
  /** 唯一名称 */
  name: string;
  /** 标签 */
  label: string;
  /** 组件列宽 */
  columnWidth: string;
  /** 组件大小 */
  size: string;
  /** 显示样式 */
  displayStyle: string;
  /** 禁用 */
  disabled: boolean;
  /** 隐藏 */
  hidden: boolean;
  /** 显示类型 */
  type: string;
  /** 朴素按钮 */
  plain: boolean;
  /** 圆角按钮 */
  round: boolean;
  /** 圆形按钮 */
  circle: boolean;
  icon?: any;
  /** 自定义CSS样式 */
  customClass: string;
  /** 编写代码 */
  onCreated: string;
  /** 编写代码 */
  onMounted: string;
  /** 编写代码 */
  onClick: string;
}

/** 分隔线 组件 */
interface DividerWidget {
  type: 'divider';
  icon: 'divider';
  formItemFlag: boolean;
  options: DividerWidgetOptions;
}
/** 分隔线 组件配置项 */
export interface DividerWidgetOptions {
  /** 唯一名称 */
  name: string;
  /** 标签 */
  label: string;
  /** 组件列宽 */
  columnWidth: string;
  direction: string;
  /** 文字位置 */
  contentPosition: string;
  /** 隐藏 */
  hidden: boolean;
  /** 自定义CSS样式 */
  customClass: string;
  /** 编写代码 */
  onCreated: string;
  /** 编写代码 */
  onMounted: string;
}

/** 图片 组件 */
interface PictureUploadWidget {
  type: 'picture-upload';
  icon: 'picture-upload-field';
  formItemFlag: boolean;
  options: PictureUploadWidgetOptions;
}
/** 图片 组件配置项 */
export interface PictureUploadWidgetOptions {
  /** 唯一名称 */
  name: string;
  /** 标签 */
  label: string;
  /** 字段标签对齐 */
  labelAlign: string;
  labelWidth?: any;
  /** 隐藏字段标签 */
  labelHidden: boolean;
  /** 组件列宽 */
  columnWidth: string;
  /** 禁用 */
  disabled: boolean;
  /** 隐藏 */
  hidden: boolean;
  /** 必填字段 */
  required: boolean;
  /** 必填校验提示 */
  requiredHint: string;
  customRule: string;
  customRuleHint: string;
  /** 上传参数设置 */
  uploadURL: string;
  /** 上传提示内容 */
  uploadTip: string;
  /** 发送cookie凭证 */
  withCredentials: boolean;
  /** 文件可多选 */
  multipleSelect: boolean;
  showFileList: boolean;
  /** 最大上传数量 */
  limit: number;
  /** 文件大小限制(MB) */
  fileMaxSize: number;
  fileTypes: string[];
  /** 自定义CSS样式 */
  customClass: string;
  labelIconClass?: any;
  /** 标签Icon位置 */
  labelIconPosition: string;
  labelTooltip?: any;
  /** 编写代码 */
  onCreated: string;
  /** 编写代码 */
  onMounted: string;
  /** 编写代码 */
  onBeforeUpload: string;
  /** 编写代码 */
  onUploadSuccess: string;
  /** 编写代码 */
  onUploadError: string;
  onFileRemove: string;
  /** 编写代码 */
  onValidate: string;
}

/** 文件 组件 */
interface FileUploadWidget {
  type: 'file-upload';
  icon: 'file-upload-field';
  formItemFlag: boolean;
  options: FileUploadWidgetOptions;
}
/** 文件 组件配置项 */
export interface FileUploadWidgetOptions {
  /** 唯一名称 */
  name: string;
  /** 标签 */
  label: string;
  /** 字段标签对齐 */
  labelAlign: string;
  labelWidth?: any;
  /** 隐藏字段标签 */
  labelHidden: boolean;
  /** 组件列宽 */
  columnWidth: string;
  /** 禁用 */
  disabled: boolean;
  /** 隐藏 */
  hidden: boolean;
  /** 必填字段 */
  required: boolean;
  /** 必填校验提示 */
  requiredHint: string;
  customRule: string;
  customRuleHint: string;
  /** 上传参数设置 */
  uploadURL: string;
  /** 上传提示内容 */
  uploadTip: string;
  /** 发送cookie凭证 */
  withCredentials: boolean;
  /** 文件可多选 */
  multipleSelect: boolean;
  showFileList: boolean;
  /** 最大上传数量 */
  limit: number;
  /** 文件大小限制(MB) */
  fileMaxSize: number;
  fileTypes: string[];
  /** 自定义CSS样式 */
  customClass: string;
  labelIconClass?: any;
  /** 标签Icon位置 */
  labelIconPosition: string;
  labelTooltip?: any;
  /** 编写代码 */
  onCreated: string;
  /** 编写代码 */
  onMounted: string;
  /** 编写代码 */
  onBeforeUpload: string;
  /** 编写代码 */
  onUploadSuccess: string;
  /** 编写代码 */
  onUploadError: string;
  onFileRemove: string;
  /** 编写代码 */
  onValidate: string;
}

/** 富文本 组件 */
interface RichEditorWidget {
  type: 'rich-editor';
  icon: 'rich-editor-field';
  formItemFlag: boolean;
  options: RichEditorWidgetOptions;
}
/** 富文本 组件配置项 */
export interface RichEditorWidgetOptions {
  /** 唯一名称 */
  name: string;
  /** 标签 */
  label: string;
  /** 字段标签对齐 */
  labelAlign: string;
  /** 占位内容 */
  placeholder: string;
  labelWidth?: any;
  /** 隐藏字段标签 */
  labelHidden: boolean;
  /** 组件列宽 */
  columnWidth: string;
  contentHeight: string;
  /** 禁用 */
  disabled: boolean;
  /** 隐藏 */
  hidden: boolean;
  /** 必填字段 */
  required: boolean;
  /** 必填校验提示 */
  requiredHint: string;
  customRule: string;
  customRuleHint: string;
  /** 自定义CSS样式 */
  customClass: string;
  labelIconClass?: any;
  /** 标签Icon位置 */
  labelIconPosition: string;
  labelTooltip?: any;
  minLength?: any;
  maxLength?: any;
  /** 显示字数统计 */
  showWordLimit: boolean;
  /** 编写代码 */
  onCreated: string;
  /** 编写代码 */
  onMounted: string;
  /** 编写代码 */
  onValidate: string;
}

/** 级联选择 组件 */
interface CascaderWidget {
  type: 'cascader';
  icon: 'cascader-field';
  formItemFlag: boolean;
  options: CascaderWidgetOptions;
}
/** 级联选择 组件配置项 */
export interface CascaderWidgetOptions {
  /** 唯一名称 */
  name: string;
  /** 标签 */
  label: string;
  /** 字段标签对齐 */
  labelAlign: string;
  /** 默认值 */
  defaultValue: string;
  /** 占位内容 */
  placeholder: string;
  /** 组件大小 */
  size: string;
  labelWidth?: any;
  /** 隐藏字段标签 */
  labelHidden: boolean;
  /** 组件列宽 */
  columnWidth: string;
  /** 禁用 */
  disabled: boolean;
  /** 隐藏 */
  hidden: boolean;
  /** 可清除 */
  clearable: boolean;
  /** 可搜索选项 */
  filterable: boolean;
  /** 选项可多选 */
  multiple: boolean;
  /** 任意级节点可选 */
  checkStrictly: boolean;
  /** 显示完整路径 */
  showAllLevels: boolean;
  /** 选项设置 */
  optionItems: OptionItem[];
  /** 必填字段 */
  required: boolean;
  /** 必填校验提示 */
  requiredHint: string;
  customRule: string;
  customRuleHint: string;
  /** 自定义CSS样式 */
  customClass: string;
  labelIconClass?: any;
  /** 标签Icon位置 */
  labelIconPosition: string;
  labelTooltip?: any;
  /** 编写代码 */
  onCreated: string;
  /** 编写代码 */
  onMounted: string;
  /** 编写代码 */
  onChange: string;
  /** 编写代码 */
  onFocus: string;
  /** 编写代码 */
  onBlur: string;
  /** 编写代码 */
  onValidate: string;
}
interface OptionItem {
  label: string;
  value: number;
  children?: Child[];
}
interface Child {
  label: string;
  value: number;
}

