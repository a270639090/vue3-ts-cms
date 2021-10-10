import hyRequest from "../index"
import IAccount from "./type"

enum LoginApi {
  AccountLogin = "/login"
}

export function accountLogin(account: IAccount) {
  return hyRequest.post({
    url: LoginApi.AccountLogin,
    data: account
  })
}
