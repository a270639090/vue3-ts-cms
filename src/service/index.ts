// service 统一出口
import { HYrequset } from "./request"
import { BASE_URL, TIME_OUT } from "./request/config"

import LocalCache from "@/untils/cache"

const hyRequset = new HYrequset({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      const token = LocalCache.getLocal("token")
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }

      return config
    },
    requestInterceptorCatch: (err) => {
      return err
    },
    responseInterceptor: (res) => {
      return res
    },
    responseInterceptorCatch: (err) => {
      return err
    }
  }
})

export default hyRequset
