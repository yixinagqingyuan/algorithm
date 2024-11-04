import comp from "/Users/a58/2023/algorithm/docs/.vuepress/.temp/pages/review/HTML.html.vue"
const data = JSON.parse("{\"path\":\"/review/HTML.html\",\"title\":\"这是 html\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"review/HTML.md\",\"excerpt\":\"<!-- @format -->\\n<h1>这是 html</h1>\\n\"}")
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
