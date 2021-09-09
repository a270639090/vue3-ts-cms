import {
  createRouter,
  createWebHashHistory
} from "vue-router"
import type { RouteRecordRaw } from "vue-router"

// type 声明是个类型 不是函数

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/login"
  },
  {
    path: "/login",
    component: () => import("@/views/login/login.vue")
  },
  {
    path: "/main",
    component: () => import("@/views/main/main.vue")
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

export default router
