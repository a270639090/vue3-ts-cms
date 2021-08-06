module.exports = {
  plugins: [
    // 用于element-plus组件的自动按需引用样式
    [
      "import",
      {
        libraryName: "element-plus",
        customStyleName: (name) => {
          return `element-plus/lib/theme-chalk/${name}.css`
        }
      }
    ]
  ],
  presets: ["@vue/cli-plugin-babel/preset"]
}
