import { createStore } from "vuex"
import { IRootState } from "./types"
import loginModule from "./login/login"

const store = createStore<IRootState>({
  state: () => {
    return {
      name: "lx",
      age: 22
    }
  },
  mutations: {},
  getters: {},
  actions: {},
  modules: {
    loginModule
  }
})

export function setupStore() {
  store.dispatch("loginModule/loadLocalLogin")
}

export default store
