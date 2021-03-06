import { IForm } from "@/base-ui/form/types"

export const searchFormConfig: IForm = {
  labelWidth: "120px",
  itemStyle: {
    padding: "5px 30px"
  },
  formItems: [
    {
      field: "name",
      type: "input",
      label: "角色名称",
      rules: [],
      placeholder: "请输入角色名称"
    },
    {
      field: "createAt",
      type: "input",
      label: "角色介绍",
      placeholder: "请输入介绍信息"
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
