import { createApp } from "vue"
import { globalRegister } from "./global"
import "normalize.css"
import "./assets/css/index.less"

import App from "./App.vue"

import hyRequset from "./service"

import router from "./router"
import store from "./store"

const app = createApp(App)
// 组件注册函数
app.use(globalRegister)
app.use(router)
app.use(store)
app.mount("#app")

// hyRequset.request({
//   url: "/home/multidata",
//   method: "GET",
//   interceptors: {
//     requestInterceptor: (config) => {
//       console.log("单独请求的config", config)
//       return config
//     },
//     responseInterceptor: (res) => {
//       console.log("单独响应的res", res)
//       return res
//     }
//   }
// })

interface DataType {
  data: any
  returnCode: string
  success: boolean
}

hyRequset
  .request<DataType>({
    url: "/home/multidata",
    method: "GET",
    showLoading: true
  })
  .then()
