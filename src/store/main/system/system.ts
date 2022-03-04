import { IRootState } from "@/store/types"
import { Module } from "vuex"
import { ISystemState } from "./types"

import { getPageListData } from "@/service/main/system/system"

const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      userList: [],
      userCount: 0,
      roleList: [],
      roleCount: 0
    }
  },
  mutations: {
    changeUserList(state, list: any[]) {
      state.userList = list
    },
    changeUserCount(state, listCount: number) {
      state.userCount = listCount
    },
    changeRoleList(state, list: any[]) {
      state.roleList = list
    },
    changeRoleCount(state, listCount: number) {
      state.roleCount = listCount
    }
  },
  actions: {
    async getPageListActive({ commit }, payload) {
      console.log(payload, "payload")

      // 1. 获取对应Url
      const pageName = payload.pageName
      let pageUrl = ""
      switch (pageName) {
        case "user":
          pageUrl = "/users/list"
          break
        case "role":
          pageUrl = "/role/list"
          break
      }

      // 2. 对页面发送请求
      const pageResult = await getPageListData(pageUrl, payload.queryInfo)
      const { list, listCount } = pageResult.data
      // 3. 将对应数据存储到不同变量
      switch (pageName) {
        case "user":
          commit("changeUserList", list)
          commit("changeUserCount", listCount)
          break
        case "role":
          commit("changeRoleList", list)
          commit("changeRoleCount", listCount)
          break
      }
    }
  }
}

export default systemModule
