import comp from "/Users/a58/2023/algorithm/docs/.vuepress/.temp/pages/project/wangEditor.html.vue"
const data = JSON.parse("{\"path\":\"/project/wangEditor.html\",\"title\":\"这是 wangeditor 的文档\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1730712998000,\"contributors\":[{\"name\":\"杨永生\",\"email\":\"yangyongsheng@58.com\",\"commits\":1}]},\"filePathRelative\":\"project/wangEditor.md\",\"excerpt\":\"<!-- @format -->\\n<h1>这是 wangeditor 的文档</h1>\\n\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}