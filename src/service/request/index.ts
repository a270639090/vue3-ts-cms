import axios from "axios"
import { AxiosInstance, AxiosRequestConfig } from "axios"

// interface HYRequestHook {}

class HYrequset {
  instance: AxiosInstance
  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config)
  }

  request(config: AxiosRequestConfig) {
    this.instance.request(config).then((res) => {
      console.log(res, "11111")
    })
  }
}

export { HYrequset }
