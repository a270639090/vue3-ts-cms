// const BASE_URL = "http://lllx.org.prod"
// const BASE_URL = "http://lllx.org.prod"
// const BASE_URL = "http://lllx.org.prod"

// 根据process.env.NODE_ENV区分
// 开发环境 development
// 生产环境 production
// 测试 test

let BASE_URL = ""
const TIME_OUT = 10000

if (process.env.NODE_ENV === "development") {
  BASE_URL = "http://123.207.32.32:8000/"
} else if (process.env.NODE_ENV === "production") {
  BASE_URL = "XXX"
}

export { BASE_URL, TIME_OUT }
