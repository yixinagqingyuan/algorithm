import comp from "/Users/a58/2023/algorithm/docs/.vuepress/.temp/pages/review/browser.html.vue"
const data = JSON.parse("{\"path\":\"/review/browser.html\",\"title\":\"这是浏览器\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"说说你对 fetch 的理解，它有哪些优点和不足？\",\"slug\":\"说说你对-fetch-的理解-它有哪些优点和不足\",\"link\":\"#说说你对-fetch-的理解-它有哪些优点和不足\",\"children\":[{\"level\":3,\"title\":\"fetch 的理解\",\"slug\":\"fetch-的理解\",\"link\":\"#fetch-的理解\",\"children\":[]},{\"level\":3,\"title\":\"优点\",\"slug\":\"优点\",\"link\":\"#优点\",\"children\":[]},{\"level\":3,\"title\":\"不足\",\"slug\":\"不足\",\"link\":\"#不足\",\"children\":[]},{\"level\":3,\"title\":\"总结\",\"slug\":\"总结\",\"link\":\"#总结\",\"children\":[]}]}],\"git\":{\"updatedTime\":1736587243000,\"contributors\":[{\"name\":\"杨永生\",\"email\":\"yangyongsheng@58.com\",\"commits\":2}]},\"filePathRelative\":\"review/browser.md\",\"excerpt\":\"<!-- @format -->\\n<h1>这是浏览器</h1>\\n<h2>说说你对 fetch 的理解，它有哪些优点和不足？</h2>\\n<h3><strong><code>fetch</code> 的理解</strong></h3>\\n<p><code>fetch</code> 是现代浏览器提供的一种用于进行 HTTP 请求的原生 JavaScript API，它比 <code>XMLHttpRequest</code>（XHR）更加简洁、灵活、支持 Promise，并且可以更方便地进行异步编程。<code>fetch</code> 提供了一种更为现代的方式来处理网络请求，它基于 Promise，能更好地与 <code>async</code>/<code>await</code> 配合使用。</p>\"}")
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
