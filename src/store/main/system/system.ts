import { IRootState } from "@/store/types"
import { Module } from "vuex"
import { ISystemState } from "./types"

import { getPageListData } from "@/service/main/system/system"

const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      usersList: [],
      userCount: 0,
      roleList: [],
      roleCount: 0
    }
  },
  mutations: {
    changeUsersList(state, list: any[]) {
      state.usersList = list
    },
    changeUsersCount(state, listCount: number) {
      state.userCount = listCount
    },
    changeRoleList(state, list: any[]) {
      state.roleList = list
    },
    changeRoleCount(state, listCount: number) {
      state.roleCount = listCount
    }
  },
  getters: {
    pageListData(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}List`]
        // switch (pageName) {
        //   case "users":
        //     return state.usersList
        //   case "role":
        //     return state.roleList
        // }
      }
    }
  },
  actions: {
    async getPageListActive({ commit }, payload) {
      // 1. 获取对应Url
      const pageName = payload.pageName
      const pageUrl = `/${pageName}/list`
      // switch (pageName) {
      //   case "users":
      //     pageUrl = "/users/list"
      //     break
      //   case "role":
      //     pageUrl = "/role/list"
      //     break
      // }

      // 2. 对页面发送请求
      const pageResult = await getPageListData(pageUrl, payload.queryInfo)
      const { list, listCount } = pageResult.data
      const changePageName = pageName.slice(0, 1).toUpperCase() + pageName.slice(1)

      // 3. 将对应数据存储到不同变量
      commit(`change${changePageName}List`, list)
      commit(`change${changePageName}Count`, listCount)
      // switch (pageName) {
      //   case "users":
      //     commit("changeUserList", list)
      //     commit("changeUserCount", listCount)
      //     break
      //   case "role":
      //     commit("changeRoleList", list)
      //     commit("changeRoleCount", listCount)
      //     break
      // }
    }
  }
}

export default systemModule
