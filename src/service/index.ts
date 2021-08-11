// service 统一出口
import { HYrequset } from "./request"
import { BASE_URL, TIME_OUT } from "./request/config"

const hyRequset = new HYrequset({
  baseURL: BASE_URL,
  timeout: TIME_OUT
})

export default hyRequset
