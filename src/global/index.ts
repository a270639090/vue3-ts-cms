import { App } from "@vue/runtime-core"
import "element-plus/lib/theme-chalk/base.css"
import {
  ElButton,
  ElTable,
  ElAlert,
  ElAside,
  ElAutocomplete,
  ElAvatar,
  ElBacktop,
  ElBadge,
} from 'element-plus'

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

export function  registerApp(app: App): void {
  for (const cpn of components) {
    app.component(cpn.name, cpn)
  }
}
