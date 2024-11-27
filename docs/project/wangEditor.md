<!-- @format -->

https://juejin.cn/post/7406161967616507941#heading-6

# wangEditor 考点解析

怎么开发的 是不是基于 slatejs

# 使用主流技术

wangEditor 从 V5 版本开始，有较大的技术更新。

# 1. 升级为 L1 能力

弃用了 document.execCommand API ，使用 slate.js（但不依赖 React）为内核，升级为 L1 能力。

这也是目前主流富文本编辑器的技术方案，如知名的 Quill ProseMirror Draft 都在使用。

# 2. 使用 vdom

使用 vdom 技术（基于 snabbdom.js ）做视图更新，model 和 view 分离，增加稳定性。

# 3. 扩展性

使用扩展插件和模块的机制，保证扩展性。未来还会继续扩展更多功能。

其实，现在 wangEditor 内置的各个功能，也都是通过扩展插件和模块的形式搭建起来的。

# slate.js
 https://juejin.cn/post/6917123466307698696

 https://juejin.cn/post/6954896971370856485

 https://juejin.cn/post/6968061014046670884