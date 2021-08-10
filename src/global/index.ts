// 全局注册方法
import { App } from "@vue/runtime-core"
import registerElement from "./register-element"

export function globalRegister(app: App): void {
  app.use(registerElement)
}
