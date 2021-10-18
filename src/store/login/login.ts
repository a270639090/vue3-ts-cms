import { Module } from "vuex"
import router from "@/router"

import { ILoginState } from "./types"
import { IRootState } from "../types"
import { IAccount } from "../../service/login/type"

import { accountLogin, requestUserInfoById, requestUserMenusByRoleId } from "@/service/login/login"
import LocalCache from "@/untils/cache"

// Module 中的<S>为 state-类型 <R>为根 store 中 state 类型
const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state: () => {
    return {
      token: "",
      userInfo: {},
      userMenus: {}
    }
  },
  getters: {},
  mutations: {
    changeToken(state, token: string) {
      state.token = token
    },
    changeUserInfo(state, userInfo: any) {
      state.userInfo = userInfo
    },
    changeUserMenus(state, userMenus) {
      state.userMenus = userMenus
    }
  },
  actions: {
    async accountLoginActive({ commit }, payload: IAccount) {
      // 1. 登录
      const accountResult = await accountLogin(payload)
      const { id, token } = accountResult.data
      commit("changeToken", token)
      LocalCache.setLocal("token", token)

      // 2. 请求用户信息
      const userInfoResult = await requestUserInfoById(id)
      const userInfo = userInfoResult.data
      commit("changeUserInfo", userInfo)
      LocalCache.setLocal("userInfo", userInfo)

      // 3. 请求用户菜单
      const userMenusResult = await requestUserMenusByRoleId(userInfo.role.id)
      const userMenus = userMenusResult.data
      commit("changeUserMenus", userMenus)
      LocalCache.setLocal("userMenus", userMenus)

      // 4. 跳转
      router.push("/main")
    },
    // 刷新获取vuex数据
    loadLocalLogin({ commit }) {
      const token = LocalCache.getLocal("token")
      if (token) {
        commit("changeToken", token)
      }
      const userInfo = LocalCache.getLocal("userInfo")
      if (userInfo) {
        commit("changeUserInfo", userInfo)
      }
      const userMenus = LocalCache.getLocal("userMenus")
      if (token) {
        commit("changeUserMenus", userMenus)
      }
    }
  }
}

export default loginModule
