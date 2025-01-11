<template><div><!-- @format -->
<p>https://juejin.cn/post/7406161967616507941#heading-6</p>
<h1 id="wangeditor-考点解析" tabindex="-1"><a class="header-anchor" href="#wangeditor-考点解析"><span>wangEditor 考点解析</span></a></h1>
<p>怎么开发的 是不是基于 slatejs</p>
<h1 id="使用主流技术" tabindex="-1"><a class="header-anchor" href="#使用主流技术"><span>使用主流技术</span></a></h1>
<p>wangEditor 从 V5 版本开始，有较大的技术更新。</p>
<h1 id="_1-升级为-l1-能力" tabindex="-1"><a class="header-anchor" href="#_1-升级为-l1-能力"><span>1. 升级为 L1 能力</span></a></h1>
<p>弃用了 document.execCommand API ，使用 slate.js（但不依赖 React）为内核，升级为 L1 能力。</p>
<p>这也是目前主流富文本编辑器的技术方案，如知名的 Quill ProseMirror Draft 都在使用。</p>
<h1 id="_2-使用-vdom" tabindex="-1"><a class="header-anchor" href="#_2-使用-vdom"><span>2. 使用 vdom</span></a></h1>
<p>使用 vdom 技术（基于 snabbdom.js ）做视图更新，model 和 view 分离，增加稳定性。</p>
<h1 id="_3-扩展性" tabindex="-1"><a class="header-anchor" href="#_3-扩展性"><span>3. 扩展性</span></a></h1>
<p>使用扩展插件和模块的机制，保证扩展性。未来还会继续扩展更多功能。</p>
<p>其实，现在 wangEditor 内置的各个功能，也都是通过扩展插件和模块的形式搭建起来的。</p>
<h1 id="slate-js" tabindex="-1"><a class="header-anchor" href="#slate-js"><span>slate.js</span></a></h1>
<p>https://juejin.cn/post/6917123466307698696</p>
<p>https://juejin.cn/post/6954896971370856485</p>
<p>https://juejin.cn/post/6968061014046670884</p>
</div></template>


