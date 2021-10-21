import { IForm } from "@/base-ui/form/types"

export const searchFormConfig: IForm = {
  labelWidth: "120px",
  itemStyle: {
    padding: "5px 30px"
  },
  formItems: [
    {
      type: "input",
      label: "用户名",
      rules: [],
      placeholder: "请输入用户名"
    },
    {
      type: "input",
      label: "密码",
      placeholder: "请输入密码"
    },
    {
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
