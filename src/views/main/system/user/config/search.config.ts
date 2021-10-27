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
      field: "password",
      type: "input",
      label: "密码",
      placeholder: "请输入密码"
    },
    {
      field: "sports",
      type: "select",
      label: "喜欢的运动",
      rules: [],
      placeholder: "请选择运动",
      options: [
        {
          label: "足球",
          value: "football"
        },
        {
          label: "篮球",
          value: "basketball"
        }
      ]
    },
    {
      field: "createTime",
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
