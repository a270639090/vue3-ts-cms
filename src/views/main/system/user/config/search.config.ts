import { IForm } from "@/base-ui/form/types"

export const searchFormConfig: IForm = {
  labelWidth: "120px",
  itemStyle: {
    padding: "5px 30px"
  },
  formItems: [
    {
      field: "id",
      type: "input",
      label: "id",
      rules: [],
      placeholder: "请输入id"
    },
    {
      field: "name",
      type: "input",
      label: "用户名",
      rules: [],
      placeholder: "请输入用户名"
    },
    {
      field: "realname",
      type: "input",
      label: "真实姓名",
      placeholder: "请输入真实姓名"
    },
    {
      field: "cellphone",
      type: "input",
      label: "手机号码",
      placeholder: "请输入手机号码"
    },
    {
      field: "enable",
      type: "select",
      label: "用户状态",
      rules: [],
      placeholder: "请选择用户状态",
      options: [
        {
          label: "启用",
          value: 1
        },
        {
          label: "禁用",
          value: 0
        }
      ]
    },
    {
      field: "createAt",
      type: "datepicker",
      label: "创建时间",
      otherOptions: {
        type: "daterange",
        startPlaceholder: "开始时间",
        endPlaceholder: "结束时间"
      }
    }
  ]
}
