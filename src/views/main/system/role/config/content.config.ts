export const pageContentConfig = {
  title: "角色列表",
  isShowIndexColum: true,
  isShowSelection: true,
  propList: [
    { prop: "name", label: "角色", minWidth: "100" },
    { prop: "intro", label: "角色介绍", minWidth: "100" },
    { prop: "createAt", label: "创建时间", minWidth: "250", slotName: "createAt" },
    { prop: "updateAt", label: "更新时间", minWidth: "250", slotName: "updateAt" },
    { prop: "option", label: "操作", minWidth: "", slotName: "option" }
  ]
}
