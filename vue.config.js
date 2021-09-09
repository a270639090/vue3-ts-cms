const { resolve } = require("path")

module.exports = {
  // 配置1. cli提供得属性
  outputDir: "build",
  // 配置2. 与webpack相同的，最后会与webpack合并
  // // 对象形式
  // configureWebpack: {
  //   resolve: {
  //     alias: {
  //       components: "@/components"
  //     }
  //   }
  // }
  // 函数形式，将会覆盖webpack中的配置
  // configureWebpack: (config) => {
  //   config.resolve.alias = {
  //     "@": resolve(__dirname, "src"),
  //     components: "@/components"
  //   }
  // }
  // 配置3. 链式编程
  chainWebpack: (config) => {
    config.resolve.alias.set("@", resolve(__dirname, "src")).set("components", "@/components")
  },
  devServer: {
    open: true
  },
  publicPath: "./",
  pages: {
    index: {
      // page入口
      entry: "./src/main.ts",
      // 模板来源
      template: "./public/index.html"
    }
  }
}
