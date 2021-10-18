import hyRequest from "../index"
import { IAccount, IDataType, ILoginData } from "./type"

enum LoginApi {
  AccountLogin = "/login",
  LoginUserInfo = "/users/",
  UserMenus = "/role/"
}

export function accountLogin(account: IAccount) {
  return hyRequest.post<IDataType<ILoginData>>({
    url: LoginApi.AccountLogin,
    data: account
  })
}

export function requestUserInfoById(id: number) {
  return hyRequest.get<IDataType>({
    url: LoginApi.LoginUserInfo + id,
    showLoading: false
  })
}

export function requestUserMenusByRoleId(id: number) {
  return hyRequest.get<IDataType>({
    url: LoginApi.UserMenus + id + "/menu"
  })
}
