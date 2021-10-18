interface IAccount {
  name: string
  password: string
}

interface ILoginData {
  id: number
  name: string
  token: string
}
interface IDataType<T = any> {
  code: number
  data: T
}

// 当规定类型时可以加入 IDataType 中的泛型
// interface IUserInfoData {
//   code: number
//   data: any
// }

export { IAccount, ILoginData, IDataType }
