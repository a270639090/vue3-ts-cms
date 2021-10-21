type IFormType = "input" | "password" | "select" | "datepicker"

export interface IFormItems {
  type: IFormType
  label: string
  rules?: any[]
  placeholder?: string
  // 针对select
  // 针对其他的表单组件
  options?: any[]
  otherOptions?: any
}

export interface IForm {
  formItems: IFormItems[]
  labelWidth?: string
  itemStyle?: any
  colLayout?: any
}
