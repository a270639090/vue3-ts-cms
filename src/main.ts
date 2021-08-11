import { createApp } from "vue"
import { globalRegister } from "./global"
import hyRequset from "./service"
import App from "./App.vue"

import router from "./router"
import store from "./store"

hyRequset.request({
  url: "/home/multidata",
  method: "GET"
})

const app = createApp(App)
// 组件注册函数
app.use(globalRegister)
app.use(router)
app.use(store)
app.mount("#app")
