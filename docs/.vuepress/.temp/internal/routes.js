export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/a58/2023/algorithm/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Home"} }],
  ["/faceClassic/", { loader: () => import(/* webpackChunkName: "faceClassic_index.html" */"/Users/a58/2023/algorithm/docs/.vuepress/.temp/pages/faceClassic/index.html.js"), meta: {"title":"复习指南"} }],
  ["/project/LowCode.html", { loader: () => import(/* webpackChunkName: "project_LowCode.html" */"/Users/a58/2023/algorithm/docs/.vuepress/.temp/pages/project/LowCode.html.js"), meta: {"title":"这是低代码"} }],
  ["/project/sentry.html", { loader: () => import(/* webpackChunkName: "project_sentry.html" */"/Users/a58/2023/algorithm/docs/.vuepress/.temp/pages/project/sentry.html.js"), meta: {"title":"前端监控"} }],
  ["/project/wangEditor.html", { loader: () => import(/* webpackChunkName: "project_wangEditor.html" */"/Users/a58/2023/algorithm/docs/.vuepress/.temp/pages/project/wangEditor.html.js"), meta: {"title":"wangEditor 考点解析"} }],
  ["/politeLanguage/languageSkills.html", { loader: () => import(/* webpackChunkName: "politeLanguage_languageSkills.html" */"/Users/a58/2023/algorithm/docs/.vuepress/.temp/pages/politeLanguage/languageSkills.html.js"), meta: {"title":"话术"} }],
  ["/politeLanguage/personalProfile.html", { loader: () => import(/* webpackChunkName: "politeLanguage_personalProfile.html" */"/Users/a58/2023/algorithm/docs/.vuepress/.temp/pages/politeLanguage/personalProfile.html.js"), meta: {"title":"个人简介"} }],
  ["/review/CSS.html", { loader: () => import(/* webpackChunkName: "review_CSS.html" */"/Users/a58/2023/algorithm/docs/.vuepress/.temp/pages/review/CSS.html.js"), meta: {"title":"css 热门考题"} }],
  ["/review/DesignPatterns.html", { loader: () => import(/* webpackChunkName: "review_DesignPatterns.html" */"/Users/a58/2023/algorithm/docs/.vuepress/.temp/pages/review/DesignPatterns.html.js"), meta: {"title":"设计模式热门考题"} }],
  ["/review/Engineering.html", { loader: () => import(/* webpackChunkName: "review_Engineering.html" */"/Users/a58/2023/algorithm/docs/.vuepress/.temp/pages/review/Engineering.html.js"), meta: {"title":"工程化热门考题"} }],
  ["/review/Foundation.html", { loader: () => import(/* webpackChunkName: "review_Foundation.html" */"/Users/a58/2023/algorithm/docs/.vuepress/.temp/pages/review/Foundation.html.js"), meta: {"title":"基础热门考题"} }],
  ["/review/HTML.html", { loader: () => import(/* webpackChunkName: "review_HTML.html" */"/Users/a58/2023/algorithm/docs/.vuepress/.temp/pages/review/HTML.html.js"), meta: {"title":"html 热门考题"} }],
  ["/review/JavaScript.html", { loader: () => import(/* webpackChunkName: "review_JavaScript.html" */"/Users/a58/2023/algorithm/docs/.vuepress/.temp/pages/review/JavaScript.html.js"), meta: {"title":"javascript 热门考题"} }],
  ["/review/Performanceoptimization.html", { loader: () => import(/* webpackChunkName: "review_Performanceoptimization.html" */"/Users/a58/2023/algorithm/docs/.vuepress/.temp/pages/review/Performanceoptimization.html.js"), meta: {"title":"性能优化热门考题"} }],
  ["/review/", { loader: () => import(/* webpackChunkName: "review_index.html" */"/Users/a58/2023/algorithm/docs/.vuepress/.temp/pages/review/index.html.js"), meta: {"title":"这是总纲"} }],
  ["/review/React.html", { loader: () => import(/* webpackChunkName: "review_React.html" */"/Users/a58/2023/algorithm/docs/.vuepress/.temp/pages/review/React.html.js"), meta: {"title":"react 热门考题"} }],
  ["/review/Vue.html", { loader: () => import(/* webpackChunkName: "review_Vue.html" */"/Users/a58/2023/algorithm/docs/.vuepress/.temp/pages/review/Vue.html.js"), meta: {"title":"vue 热门考题"} }],
  ["/review/browser.html", { loader: () => import(/* webpackChunkName: "review_browser.html" */"/Users/a58/2023/algorithm/docs/.vuepress/.temp/pages/review/browser.html.js"), meta: {"title":"浏览器热门考题"} }],
  ["/review/h5.html", { loader: () => import(/* webpackChunkName: "review_h5.html" */"/Users/a58/2023/algorithm/docs/.vuepress/.temp/pages/review/h5.html.js"), meta: {"title":"移动端热门考题"} }],
  ["/review/http.html", { loader: () => import(/* webpackChunkName: "review_http.html" */"/Users/a58/2023/algorithm/docs/.vuepress/.temp/pages/review/http.html.js"), meta: {"title":"网络协议热门考题"} }],
  ["/review/node.html", { loader: () => import(/* webpackChunkName: "review_node.html" */"/Users/a58/2023/algorithm/docs/.vuepress/.temp/pages/review/node.html.js"), meta: {"title":"nodejs 热门考题"} }],
  ["/review/typescript.html", { loader: () => import(/* webpackChunkName: "review_typescript.html" */"/Users/a58/2023/algorithm/docs/.vuepress/.temp/pages/review/typescript.html.js"), meta: {"title":"Typescript 热门考题"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/a58/2023/algorithm/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
  ["/review/Scene.html", { loader: () => import(/* webpackChunkName: "review_Scene.html" */"/Users/a58/2023/algorithm/docs/.vuepress/.temp/pages/review/Scene.html.js"), meta: {"title":"场景热门考题"} }],
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
