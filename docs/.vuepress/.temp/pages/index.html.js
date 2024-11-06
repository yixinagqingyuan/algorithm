import comp from "/Users/a58/2023/algorithm/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"Home\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":true,\"title\":\"Home\",\"actions\":[{\"text\":\"开始旅途\",\"link\":\"/review/\",\"type\":\"primary\"}],\"footer\":\"老骥farmer的blog\"},\"headers\":[],\"git\":{\"updatedTime\":1730712998000,\"contributors\":[{\"name\":\"杨永生\",\"email\":\"yangyongsheng@58.com\",\"commits\":3},{\"name\":\"杨永生\",\"email\":\"1245997863@qq.com\",\"commits\":1}]},\"filePathRelative\":\"README.md\"}")
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
