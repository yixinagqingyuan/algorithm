import comp from "/Users/a58/2023/algorithm/docs/.vuepress/.temp/pages/review/Engineering.html.vue"
const data = JSON.parse("{\"path\":\"/review/Engineering.html\",\"title\":\"工程化热门考题\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"1、vite 为什么比webpack快？\",\"slug\":\"_1、vite-为什么比webpack快\",\"link\":\"#_1、vite-为什么比webpack快\",\"children\":[{\"level\":3,\"title\":\"1. 原生 ES 模块支持\",\"slug\":\"_1-原生-es-模块支持\",\"link\":\"#_1-原生-es-模块支持\",\"children\":[]},{\"level\":3,\"title\":\"2. 热更新（HMR）\",\"slug\":\"_2-热更新-hmr\",\"link\":\"#_2-热更新-hmr\",\"children\":[]},{\"level\":3,\"title\":\"3. 使用 esbuild 进行预构建\",\"slug\":\"_3-使用-esbuild-进行预构建\",\"link\":\"#_3-使用-esbuild-进行预构建\",\"children\":[]},{\"level\":3,\"title\":\"4. 按需加载与静态资源优化\",\"slug\":\"_4-按需加载与静态资源优化\",\"link\":\"#_4-按需加载与静态资源优化\",\"children\":[]},{\"level\":3,\"title\":\"5. 优化后的生产构建\",\"slug\":\"_5-优化后的生产构建\",\"link\":\"#_5-优化后的生产构建\",\"children\":[]},{\"level\":3,\"title\":\"6. 更轻量的配置\",\"slug\":\"_6-更轻量的配置\",\"link\":\"#_6-更轻量的配置\",\"children\":[]},{\"level\":3,\"title\":\"总结：\",\"slug\":\"总结\",\"link\":\"#总结\",\"children\":[]}]}],\"git\":{\"updatedTime\":1737013072000,\"contributors\":[{\"name\":\"杨永生\",\"email\":\"yangyongsheng@58.com\",\"commits\":1}]},\"filePathRelative\":\"review/Engineering.md\",\"excerpt\":\"<!-- @format -->\\n<h1>工程化热门考题</h1>\\n<h2>1、vite 为什么比webpack快？</h2>\\n<p>Vite 相比于 Webpack 更快，主要是因为它采用了 <strong>不同的构建和开发模式</strong>，解决了 Webpack 在开发过程中的一些性能瓶颈。具体来说，Vite 的速度优势体现在以下几个方面：</p>\\n<h3>1. <strong>原生 ES 模块支持</strong></h3>\\n<ul>\\n<li>\\n<p><strong>Vite</strong>：在开发模式下，Vite 利用了现代浏览器对 ES 模块（ESM, ECMAScript Modules）的原生支持。在开发时，Vite 不需要像 Webpack 那样打包所有的模块，而是直接使用原生的 ES 模块导入机制。</p>\\n<ul>\\n<li>当你启动开发服务器时，Vite 只对页面上实际请求的模块进行即时编译，并且是按需加载的。也就是说，只有当你访问某个页面时，相关的 JavaScript 文件才会被处理，并且每个模块都是独立请求的，这减少了不必要的构建时间。</li>\\n<li>例如，假设项目有很多文件，但你只修改了其中一个文件，Vite 只会重新加载修改过的文件，而不会重新打包整个项目。</li>\\n</ul>\\n</li>\\n<li>\\n<p><strong>Webpack</strong>：Webpack 采用的是传统的打包方式，它需要将所有模块编译成一个或多个捆绑包。即使在开发模式下，Webpack 也需要对每个模块进行打包，生成较大的 bundle 文件，这导致了较长的构建时间，尤其是在大项目中。</p>\\n</li>\\n</ul>\"}")
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
