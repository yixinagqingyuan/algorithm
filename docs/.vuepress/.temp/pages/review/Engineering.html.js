import comp from "/Users/a58/2023/algorithm/docs/.vuepress/.temp/pages/review/Engineering.html.vue"
const data = JSON.parse("{\"path\":\"/review/Engineering.html\",\"title\":\"工程化热门考题\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1737013072000,\"contributors\":[{\"name\":\"杨永生\",\"email\":\"yangyongsheng@58.com\",\"commits\":1}]},\"filePathRelative\":\"review/Engineering.md\",\"excerpt\":\"<!-- @format -->\\n<h1>工程化热门考题</h1>\\n\"}")
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
