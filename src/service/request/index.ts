import axios from "axios"
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios"

// 自定义拦截类型接口
interface HYRequestInterceptor {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: AxiosResponse) => AxiosResponse
  responseInterceptorCatch?: (error: any) => any
}

// 将AxiosRequestConfig类型与自定义拦截类型进行组合使用
interface HYRequestConfig extends AxiosRequestConfig {
  interceptors?: HYRequestInterceptor
}

class HYrequset {
  instance: AxiosInstance
  interceptors?: HYRequestInterceptor

  // 每次new HYrequset都能创建一个新的实例
  // 默认类型为 config: AxiosRequestConfig
  // config: HYRequestConfig  在进行实例化时能添加自定义的拦截属性
  constructor(config: HYRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors

    // 请求拦截
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )

    // 响应拦截
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )
  }

  request(config: HYRequestConfig): void {
    this.instance.request(config).then((res) => {
      console.log(res)
    })
  }
}

export { HYrequset }
