import comp from "/Users/a58/2023/algorithm/docs/.vuepress/.temp/pages/review/Foundation.html.vue"
const data = JSON.parse("{\"path\":\"/review/Foundation.html\",\"title\":\"基础热门考题\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"1、如何解决⻚⾯请求接⼝⼤规模并发问题？\",\"slug\":\"_1、如何解决⻚面请求接口大规模并发问题\",\"link\":\"#_1、如何解决⻚面请求接口大规模并发问题\",\"children\":[{\"level\":3,\"title\":\"1. 问题的原因分析\",\"slug\":\"_1-问题的原因分析\",\"link\":\"#_1-问题的原因分析\",\"children\":[]},{\"level\":3,\"title\":\"2. 解决方案\",\"slug\":\"_2-解决方案\",\"link\":\"#_2-解决方案\",\"children\":[]},{\"level\":3,\"title\":\"3. 实际应用策略\",\"slug\":\"_3-实际应用策略\",\"link\":\"#_3-实际应用策略\",\"children\":[]}]},{\"level\":2,\"title\":\"2、如何用AI工具 提升开发效率？\",\"slug\":\"_2、如何用ai工具-提升开发效率\",\"link\":\"#_2、如何用ai工具-提升开发效率\",\"children\":[{\"level\":3,\"title\":\"1. 代码自动补全与智能建议\",\"slug\":\"_1-代码自动补全与智能建议\",\"link\":\"#_1-代码自动补全与智能建议\",\"children\":[]},{\"level\":3,\"title\":\"2. 代码重构与优化\",\"slug\":\"_2-代码重构与优化\",\"link\":\"#_2-代码重构与优化\",\"children\":[]},{\"level\":3,\"title\":\"3. 代码调试与错误检测\",\"slug\":\"_3-代码调试与错误检测\",\"link\":\"#_3-代码调试与错误检测\",\"children\":[]},{\"level\":3,\"title\":\"4. 代码文档自动生成\",\"slug\":\"_4-代码文档自动生成\",\"link\":\"#_4-代码文档自动生成\",\"children\":[]},{\"level\":3,\"title\":\"5. 自动化测试\",\"slug\":\"_5-自动化测试\",\"link\":\"#_5-自动化测试\",\"children\":[]},{\"level\":3,\"title\":\"6. 智能代码审查\",\"slug\":\"_6-智能代码审查\",\"link\":\"#_6-智能代码审查\",\"children\":[]},{\"level\":3,\"title\":\"7. 自然语言与代码生成\",\"slug\":\"_7-自然语言与代码生成\",\"link\":\"#_7-自然语言与代码生成\",\"children\":[]},{\"level\":3,\"title\":\"8. 智能构建与部署\",\"slug\":\"_8-智能构建与部署\",\"link\":\"#_8-智能构建与部署\",\"children\":[]},{\"level\":3,\"title\":\"9. 优化开发流程管理\",\"slug\":\"_9-优化开发流程管理\",\"link\":\"#_9-优化开发流程管理\",\"children\":[]},{\"level\":3,\"title\":\"总结：\",\"slug\":\"总结\",\"link\":\"#总结\",\"children\":[]}]}],\"git\":{\"updatedTime\":1736759836000,\"contributors\":[{\"name\":\"杨永生\",\"email\":\"yangyongsheng@58.com\",\"commits\":2}]},\"filePathRelative\":\"review/Foundation.md\",\"excerpt\":\"<!-- @format -->\\n<h1>基础热门考题</h1>\\n<h2>1、如何解决⻚⾯请求接⼝⼤规模并发问题？</h2>\\n<p>页面请求接口大规模并发问题是指在前端应用中同时发起大量网络请求时，可能会导致性能问题（如浏览器或服务器崩溃）、请求失败、服务器资源紧张等问题。以下是几种常见的解决方案：</p>\\n<hr>\\n<h3><strong>1. 问题的原因分析</strong></h3>\\n<ol>\\n<li><strong>浏览器限制并发连接数</strong>：大部分浏览器对同一个域名的并发请求数量有限制（通常是 6~8 个）。</li>\\n<li><strong>服务器压力</strong>：过多的并发请求可能导致服务器负载过高，出现响应延迟或失败。</li>\\n<li><strong>接口依赖关系</strong>：某些请求可能依赖于其他请求的结果，增加了复杂性。</li>\\n<li><strong>网络带宽问题</strong>：过多请求同时进行可能会占用客户端的网络资源，导致拥塞。</li>\\n</ol>\"}")
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
