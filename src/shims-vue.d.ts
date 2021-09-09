/* eslint-disable */

// declare --申明模块
declare module "*.vue" {
  import type { DefineComponent } from "vue"
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare let $store: any
