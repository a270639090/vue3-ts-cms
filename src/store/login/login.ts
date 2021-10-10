import { Module } from "vuex"
import { ILoginState } from "./types"
import { IRootState } from "../types"
import IAccount from "../../service/login/type"

import { accountLogin } from "@/service/login/login"

// Module 中的<S>为 state-类型 <R>为根 store 中 state 类型
const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state: () => {
    return {
      token: "",
      userInfo: {}
    }
  },
  getters: {},
  mutations: {},
  actions: {
    async accountLoginActive(
      { commit },
      payload: IAccount
    ) {
      const accountResult = await accountLogin(payload)
      console.log(accountResult, commit)
    }
    // phoneLoginActive({ commit }, payload: any) {
    //   console.log("phoneLoginActive", payload)
    // }
  }
}

export default loginModule
