import comp from "/Users/a58/2023/algorithm/docs/.vuepress/.temp/pages/review/Performanceoptimization.html.vue"
const data = JSON.parse("{\"path\":\"/review/Performanceoptimization.html\",\"title\":\"性能优化热门考题\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":3,\"title\":\"1. 减少 HTTP 请求\",\"slug\":\"_1-减少-http-请求\",\"link\":\"#_1-减少-http-请求\",\"children\":[]},{\"level\":3,\"title\":\"2. 使用 CDN（内容分发网络）\",\"slug\":\"_2-使用-cdn-内容分发网络\",\"link\":\"#_2-使用-cdn-内容分发网络\",\"children\":[]},{\"level\":3,\"title\":\"3. 使用缓存机制\",\"slug\":\"_3-使用缓存机制\",\"link\":\"#_3-使用缓存机制\",\"children\":[]},{\"level\":3,\"title\":\"4. 异步加载资源\",\"slug\":\"_4-异步加载资源\",\"link\":\"#_4-异步加载资源\",\"children\":[]},{\"level\":3,\"title\":\"5. 减少和优化 JavaScript 执行\",\"slug\":\"_5-减少和优化-javascript-执行\",\"link\":\"#_5-减少和优化-javascript-执行\",\"children\":[]},{\"level\":3,\"title\":\"6. 优化 CSS\",\"slug\":\"_6-优化-css\",\"link\":\"#_6-优化-css\",\"children\":[]},{\"level\":3,\"title\":\"7. 优化 Web 字体\",\"slug\":\"_7-优化-web-字体\",\"link\":\"#_7-优化-web-字体\",\"children\":[]},{\"level\":3,\"title\":\"8. 利用 HTTP/2 和 HTTP/3\",\"slug\":\"_8-利用-http-2-和-http-3\",\"link\":\"#_8-利用-http-2-和-http-3\",\"children\":[]},{\"level\":3,\"title\":\"9. 减少重绘与回流\",\"slug\":\"_9-减少重绘与回流\",\"link\":\"#_9-减少重绘与回流\",\"children\":[]},{\"level\":3,\"title\":\"10. 前端框架与库的优化\",\"slug\":\"_10-前端框架与库的优化\",\"link\":\"#_10-前端框架与库的优化\",\"children\":[]},{\"level\":3,\"title\":\"11. 网络优化\",\"slug\":\"_11-网络优化\",\"link\":\"#_11-网络优化\",\"children\":[]},{\"level\":3,\"title\":\"12. 监控和性能分析\",\"slug\":\"_12-监控和性能分析\",\"link\":\"#_12-监控和性能分析\",\"children\":[]},{\"level\":3,\"title\":\"总结\",\"slug\":\"总结\",\"link\":\"#总结\",\"children\":[]}],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"review/Performanceoptimization.md\",\"excerpt\":\"<!-- @format -->\\n<h1>性能优化热门考题</h1>\\n<h1>1、说一下前端性能优化</h1>\\n<p>前端性能优化是提升网页加载速度、用户体验和响应速度的过程。良好的前端性能优化能够减少页面加载时间，降低带宽使用，改善用户体验，特别是在移动设备和低网络速度环境下。以下是一些常见的前端性能优化方法，涵盖了从资源加载、渲染、脚本执行等多个方面。</p>\\n<h3>1. <strong>减少 HTTP 请求</strong></h3>\\n<ul>\\n<li><strong>合并文件：</strong> 将多个 CSS 和 JavaScript 文件合并为一个文件，减少浏览器的请求次数。</li>\\n<li><strong>图片精灵（Image Sprite）：</strong> 将多个小图标合并成一个大图，再通过 CSS 的 <code>background-position</code> 来显示对应的部分，减少图片的 HTTP 请求。</li>\\n<li><strong>图像压缩：</strong> 优化图片大小，使用合适的格式（如 PNG、JPEG、WebP 等），通过工具压缩图片，降低图片体积。</li>\\n</ul>\"}")
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
