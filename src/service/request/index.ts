import axios from "axios"
import { AxiosInstance } from "axios"
import { HYRequestInterceptor, HYRequestConfig } from "./type"

import { ElLoading } from "element-plus"
import { ILoadingInstance } from "element-plus/lib/el-loading/src/loading.type"

const DEAFULT_LOADING = true

class HYrequset {
  instance: AxiosInstance
  interceptors?: HYRequestInterceptor
  showLoading: boolean
  loading?: ILoadingInstance

  // 每次new HYrequset都能创建一个新的实例
  // 默认类型为 config: AxiosRequestConfig
  // config: HYRequestConfig  在进行实例化时能添加自定义的拦截属性
  constructor(config: HYRequestConfig) {
    // 创建实例
    this.instance = axios.create(config)

    // 保存基本信息
    this.interceptors = config.interceptors
    this.showLoading = config.showLoading ?? DEAFULT_LOADING

    // 使用拦截器
    // 1.从config中取出的拦截器是对应的实例拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    // 2. 添加所有实例的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        // console.log("所有实例的拦截器, 请求成功拦截")

        // 增加loading
        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: "正在请求数据...",
            background: "rgba(0, 0, 0, 0.5)"
          })
        }
        return config
      },
      (err) => {
        // console.log("所有实例都有的拦截器: 请求失败拦截")
        return err
      }
    )
    this.instance.interceptors.response.use(
      (result) => {
        // console.log("所有实例的响应成拦截")

        // 将loading移除
        this.loading?.close()

        const data = result.data
        if (data.returnCode === "-1001") {
          // console.log("请求失败-, 错误信息")
        } else {
          return data
        }
      },
      (err) => {
        console.log("所有实例的响应失败拦截")
        // 例子: 判断不同的错误信息, 应用于对于请求失败错误的场景
        if (err.response.state === 404) {
          console.log("404的错误-")
        }
        return err
      }
    )
  }

  request<T>(config: HYRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      // 单个请求对config的处理
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors?.requestInterceptor(config)
      }

      // 是否需要显示loading
      if (config.showLoading === false) {
        this.showLoading = config.showLoading
      }

      this.instance
        .request<any, T>(config)
        .then((res) => {
          // 单个请求对数据的处理
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors?.responseInterceptor(res)
          }

          // 恢复默认值,不然将一直处于上次结果
          this.showLoading = DEAFULT_LOADING

          resolve(res)
        })
        .catch((err) => {
          this.showLoading = DEAFULT_LOADING
          reject(err)
          return err
        })
    })
  }

  get<T = any>(config: HYRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "GET" })
  }

  post<T = any>(config: HYRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "POST" })
  }

  delete<T = any>(config: HYRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "DELETE" })
  }

  patch<T = any>(config: HYRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "PATCH" })
  }
}

export { HYrequset }
