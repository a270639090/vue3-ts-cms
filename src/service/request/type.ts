// 将定义类型抽离成一个单独文件
import { AxiosRequestConfig, AxiosResponse } from "axios"

// 自定义拦截类型接口
interface HYRequestInterceptor {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: any) => any
  // responseInterceptor?: (res: AxiosResponse) => AxiosResponse
  responseInterceptorCatch?: (error: any) => any
}

// 将AxiosRequestConfig类型与自定义拦截类型进行组合使用
interface HYRequestConfig extends AxiosRequestConfig {
  interceptors?: HYRequestInterceptor
  showLoading?: boolean
}

export { HYRequestInterceptor, HYRequestConfig }
