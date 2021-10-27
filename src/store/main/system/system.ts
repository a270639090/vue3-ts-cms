import { IRootState } from "@/store/types"
import { Module } from "vuex"
import { ISystemState } from "./types"

const systemModule: Module<ISystemState, IRootState> = {
  state() {
    return {
      userList: [],
      userCount: 0
    }
  },
  actions: {
    // getPageList() {}
  }
}

export default systemModule
