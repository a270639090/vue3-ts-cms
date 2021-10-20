import { RouteRecordRaw } from "vue-router"

// 映射路由与全部菜单关系
// 将菜单权限有的部分才进行动态路由注册
export function mapMEnusToRouters(userMenus: any[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = []

  // 1. 先加载默认所有的routes
  const allRoutes: RouteRecordRaw[] = []
  const routeFiles = require.context("../router/main", true, /\.ts/)
  routeFiles.keys().forEach((key) => {
    // routeFiles.keys()为全部 mian 下 ts 文件路径
    const route = require("../router/main" + key.split(".")[1])
    allRoutes.push(route.default)
  })

  // 2. 根据菜单获取需要添加的routes
  // 递归对比全部 路由path 与菜单中有的路由url
  const _recurseGetRoute = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 2) {
        const route = allRoutes.find((route) => route.path === menu.url)
        if (route) routes.push(route)
      } else {
        _recurseGetRoute(menu.children)
      }
    }
  }

  _recurseGetRoute(userMenus)

  return routes
}
