import comp from "/Users/a58/2023/algorithm/docs/.vuepress/.temp/pages/project/wangEditor.html.vue"
const data = JSON.parse("{\"path\":\"/project/wangEditor.html\",\"title\":\"wangEditor 考点解析\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1732674882000,\"contributors\":[{\"name\":\"杨永生\",\"email\":\"yangyongsheng@58.com\",\"commits\":2}]},\"filePathRelative\":\"project/wangEditor.md\",\"excerpt\":\"<!-- @format -->\\n<p>https://juejin.cn/post/7406161967616507941#heading-6</p>\\n<h1>wangEditor 考点解析</h1>\\n<p>怎么开发的 是不是基于 slatejs</p>\\n<h1>使用主流技术</h1>\\n<p>wangEditor 从 V5 版本开始，有较大的技术更新。</p>\\n<h1>1. 升级为 L1 能力</h1>\\n<p>弃用了 document.execCommand API ，使用 slate.js（但不依赖 React）为内核，升级为 L1 能力。</p>\\n<p>这也是目前主流富文本编辑器的技术方案，如知名的 Quill ProseMirror Draft 都在使用。</p>\"}")
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
