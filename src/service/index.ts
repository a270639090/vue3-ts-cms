// service 统一出口
import { HYrequset } from "./request"
import { BASE_URL, TIME_OUT } from "./request/config"

const hyRequset = new HYrequset({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      console.log("拦截请求信息")
      return config
    },
    requestInterceptorCatch: (err) => {
      console.log("拦截请求失败信息")
      return err
    },
    responseInterceptor: (res) => {
      console.log("拦截响应成功信息")
      return res
    },
    responseInterceptorCatch: (err) => {
      console.log("拦截响应失败信息")
      return err
    }
  }
})

export default hyRequset
