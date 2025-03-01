export const themeData = JSON.parse("{\"navbar\":[\"/\",{\"text\":\"复习指南\",\"children\":[{\"text\":\"基础真题\",\"link\":\"/review/Foundation.md\"},{\"text\":\"HTML\",\"link\":\"/review/HTML.md\"},{\"text\":\"h5\",\"link\":\"/review/h5.md\"},{\"text\":\"CSS\",\"link\":\"/review/CSS.md\"},{\"text\":\"JavaScript\",\"link\":\"/review/JavaScript.md\"},{\"text\":\"浏览器\",\"link\":\"/review/browser.md\"},{\"text\":\"Vue\",\"link\":\"/review/Vue.md\"},{\"text\":\"React\",\"link\":\"/review/React.md\"},{\"text\":\"性能优化\",\"link\":\"/review/Performanceoptimization.md\"},{\"text\":\"工程化\",\"link\":\"/review/Engineering.md\"},{\"text\":\"设计模式\",\"link\":\"/review/DesignPatterns.md\"},{\"text\":\"node\",\"link\":\"/review/node.md\"}]},{\"text\":\"片汤话指南\",\"children\":[{\"text\":\"个人简介\",\"link\":\"/politeLanguage/personalProfile.md\"},{\"text\":\"面试话术\",\"link\":\"/politeLanguage/languageSkills.md\"}]},{\"text\":\"面经\",\"link\":\"/faceClassic/\"},{\"text\":\"面试项目\",\"children\":[{\"text\":\"sentry性能监控\",\"link\":\"/project/sentry.md\"},{\"text\":\"wangEditor富文本编辑器\",\"link\":\"/project/wangEditor.md\"},{\"text\":\"LowCode低代码平台\",\"link\":\"/project/LowCode.md\"}]}],\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"logo\":null,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebar\":\"heading\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
