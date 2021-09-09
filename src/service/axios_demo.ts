import axios, { AxiosResponse } from "axios"

axios
  .get("http://123.207.32.32:8000/home/multidata")
  .then((res: AxiosResponse) => {
    console.log(res)
  })

axios
  .get("http://httpbin.org/", {
    params: {
      name: "lx",
      age: 22
    }
  })
  .then((res) => {
    console.log(res)
  })

// 请求拦截
axios.interceptors.request.use(
  (config) => {
    // 可做配置
    return config
  },
  (err) => {
    console.log(err)
  }
)
// 响应拦截
axios.interceptors.response.use(
  (res) => {
    // 拦截响应内容
    return res
  },
  (err) => {
    console.log(err)
    // 拦截400、500等错误返回
  }
)
