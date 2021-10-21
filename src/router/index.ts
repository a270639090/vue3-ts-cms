import { createRouter, createWebHashHistory } from "vue-router"
import type { RouteRecordRaw } from "vue-router"

import LocalCache from "@/untils/cache"
import { firstMenu } from "@/untils/map-menu"

// type 声明是个类型 不是函数

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/main"
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/login.vue")
  },
  {
    path: "/main",
    name: "main",
    component: () => import("@/views/main/main.vue")
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: () => import("@/views/not-found/not-found.vue")
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

// 导航守卫
router.beforeEach((to) => {
  if (to.path !== "/login") {
    const token = LocalCache.getLocal("token")
    if (!token) {
      return "/login"
    }
  }

  if (to.path === "/main") {
    return firstMenu.url
  }
})

export default router
