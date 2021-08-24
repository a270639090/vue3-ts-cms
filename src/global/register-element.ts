// 按需引用element ui组件
// 封装element注册

import { App } from "vue"
import "element-plus/lib/theme-chalk/base.css"
import {
  ElButton,
  ElTable,
  ElAlert,
  ElAside,
  ElAutocomplete,
  ElAvatar,
  ElBacktop,
  ElBadge
} from "element-plus"

const components = [
  ElButton,
  ElTable,
  ElAlert,
  ElAside,
  ElAutocomplete,
  ElAvatar,
  ElBacktop,
  ElBadge
]

export default function (app: App): void {
  for (const cpn of components) {
    app.component(cpn.name, cpn)
    // vue3组件注册方法
    // cpn.name 为element-ui plus的组件名称
  }
}