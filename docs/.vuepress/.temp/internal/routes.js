export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/a58/2023/algorithm/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Home"} }],
  ["/politeLanguage/languageSkills.html", { loader: () => import(/* webpackChunkName: "politeLanguage_languageSkills.html" */"/Users/a58/2023/algorithm/docs/.vuepress/.temp/pages/politeLanguage/languageSkills.html.js"), meta: {"title":"话术"} }],
  ["/politeLanguage/personalProfile.html", { loader: () => import(/* webpackChunkName: "politeLanguage_personalProfile.html" */"/Users/a58/2023/algorithm/docs/.vuepress/.temp/pages/politeLanguage/personalProfile.html.js"), meta: {"title":"个人简介"} }],
  ["/project/LowCode.html", { loader: () => import(/* webpackChunkName: "project_LowCode.html" */"/Users/a58/2023/algorithm/docs/.vuepress/.temp/pages/project/LowCode.html.js"), meta: {"title":"这是低代码"} }],
  ["/project/sentry.html", { loader: () => import(/* webpackChunkName: "project_sentry.html" */"/Users/a58/2023/algorithm/docs/.vuepress/.temp/pages/project/sentry.html.js"), meta: {"title":"前端监控"} }],
  ["/project/wangEditor.html", { loader: () => import(/* webpackChunkName: "project_wangEditor.html" */"/Users/a58/2023/algorithm/docs/.vuepress/.temp/pages/project/wangEditor.html.js"), meta: {"title":"这是 wangeditor 的文档"} }],
  ["/review/CSS.html", { loader: () => import(/* webpackChunkName: "review_CSS.html" */"/Users/a58/2023/algorithm/docs/.vuepress/.temp/pages/review/CSS.html.js"), meta: {"title":"这是 css"} }],
  ["/review/HTML.html", { loader: () => import(/* webpackChunkName: "review_HTML.html" */"/Users/a58/2023/algorithm/docs/.vuepress/.temp/pages/review/HTML.html.js"), meta: {"title":"这是 html"} }],
  ["/review/JavaScript.html", { loader: () => import(/* webpackChunkName: "review_JavaScript.html" */"/Users/a58/2023/algorithm/docs/.vuepress/.temp/pages/review/JavaScript.html.js"), meta: {"title":"这是 javascript"} }],
  ["/review/", { loader: () => import(/* webpackChunkName: "review_index.html" */"/Users/a58/2023/algorithm/docs/.vuepress/.temp/pages/review/index.html.js"), meta: {"title":"这是总纲"} }],
  ["/review/React.html", { loader: () => import(/* webpackChunkName: "review_React.html" */"/Users/a58/2023/algorithm/docs/.vuepress/.temp/pages/review/React.html.js"), meta: {"title":"这是 react"} }],
  ["/review/Vue.html", { loader: () => import(/* webpackChunkName: "review_Vue.html" */"/Users/a58/2023/algorithm/docs/.vuepress/.temp/pages/review/Vue.html.js"), meta: {"title":"这是 vue"} }],
  ["/review/browser.html", { loader: () => import(/* webpackChunkName: "review_browser.html" */"/Users/a58/2023/algorithm/docs/.vuepress/.temp/pages/review/browser.html.js"), meta: {"title":"这是浏览器"} }],
  ["/faceClassic/", { loader: () => import(/* webpackChunkName: "faceClassic_index.html" */"/Users/a58/2023/algorithm/docs/.vuepress/.temp/pages/faceClassic/index.html.js"), meta: {"title":"复习指南"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/a58/2023/algorithm/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
