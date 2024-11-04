import comp from "/Users/a58/2023/algorithm/docs/.vuepress/.temp/pages/review/browser.html.vue"
const data = JSON.parse("{\"path\":\"/review/browser.html\",\"title\":\"这是浏览器\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"review/browser.md\",\"excerpt\":\"<!-- @format -->\\n<h1>这是浏览器</h1>\\n\"}")
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
