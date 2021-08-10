import { createApp } from "vue"
import { globalRegister } from "./global"
import "./service/axios_demo"

import App from "./App.vue"

import router from "./router"
import store from "./store"

console.log(process.env.VUE_APP_BASE_URL)

const app = createApp(App)
// 组件注册函数
app.use(globalRegister)
app.use(router)
app.use(store)
app.mount("#app")
