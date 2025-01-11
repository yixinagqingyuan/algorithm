<template><div><!-- @format -->
<h1 id="vue-热门考题" tabindex="-1"><a class="header-anchor" href="#vue-热门考题"><span>vue 热门考题</span></a></h1>
<h2 id="什么是-vue-中的-slot-它有什么作用" tabindex="-1"><a class="header-anchor" href="#什么是-vue-中的-slot-它有什么作用"><span>什么是 Vue 中的 slot？它有什么作用？</span></a></h2>
<p>在 Vue.js 中，<code v-pre>slot</code> 是一种用来分发内容的机制，允许开发者在父组件中定义内容，并将其插入到子组件的特定位置。这种机制使得组件更加灵活和可复用。</p>
<h3 id="作用" tabindex="-1"><a class="header-anchor" href="#作用"><span>作用：</span></a></h3>
<ol>
<li><strong>分发内容</strong>：父组件可以通过 <code v-pre>slot</code> 将内容插入到子组件的特定位置。</li>
<li><strong>提高复用性</strong>：<code v-pre>slot</code> 让组件可以接收不同的内容，适应更多场景。</li>
<li><strong>保持结构化</strong>：通过具名插槽（<code v-pre>named slot</code>），可以更加明确和灵活地组织内容。</li>
<li><strong>动态渲染</strong>：根据需要动态改变插槽的内容，提高交互性。</li>
</ol>
<hr>
<h3 id="slot-的类型" tabindex="-1"><a class="header-anchor" href="#slot-的类型"><span>Slot 的类型：</span></a></h3>
<h4 id="_1-默认插槽-default-slot" tabindex="-1"><a class="header-anchor" href="#_1-默认插槽-default-slot"><span>1. <strong>默认插槽（Default Slot）</strong></span></a></h4>
<ul>
<li>子组件中使用 <code v-pre>&lt;slot&gt;</code> 标签作为占位符，父组件未指定具体的 <code v-pre>name</code> 时，默认内容会插入到该位置。</li>
</ul>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token comment">&lt;!-- 子组件 --></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span><span class="token punctuation">></span></span>默认内容<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token comment">&lt;!-- 父组件 --></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ChildComponent</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>插入的内容<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ChildComponent</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出结果</strong>：</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>插入的内容<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-具名插槽-named-slot" tabindex="-1"><a class="header-anchor" href="#_2-具名插槽-named-slot"><span>2. <strong>具名插槽（Named Slot）</strong></span></a></h4>
<ul>
<li>通过 <code v-pre>name</code> 属性为插槽命名，用于将内容插入到指定的插槽中。</li>
</ul>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token comment">&lt;!-- 子组件 --></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>header</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>header<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>默认头部<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>header</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span><span class="token punctuation">></span></span>默认主体<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token comment">&lt;!-- 父组件 --></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ChildComponent</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#header</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>自定义头部<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>自定义主体<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ChildComponent</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出结果</strong>：</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>header</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>自定义头部<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>header</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>自定义主体<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-作用域插槽-scoped-slot" tabindex="-1"><a class="header-anchor" href="#_3-作用域插槽-scoped-slot"><span>3. <strong>作用域插槽（Scoped Slot）</strong></span></a></h4>
<ul>
<li>用于将子组件的数据传递给插槽中的内容，从而实现更加动态的内容渲染。</li>
</ul>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token comment">&lt;!-- 子组件 --></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token attr-name">:items</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>items<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">items</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'苹果'</span><span class="token punctuation">,</span> <span class="token string">'香蕉'</span><span class="token punctuation">,</span> <span class="token string">'橙子'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token comment">&lt;!-- 父组件 --></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ChildComponent</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#default</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{ items }<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item in items<span class="token punctuation">"</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>{{ item }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ChildComponent</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出结果</strong>：</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>苹果<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>香蕉<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>橙子<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结：</span></a></h3>
<ul>
<li><strong><code v-pre>slot</code> 是 Vue 中一种强大的内容分发机制，支持父子组件之间的灵活内容传递</strong>。</li>
<li>默认插槽、具名插槽和作用域插槽适应了多种需求，使得组件开发更加灵活和动态。</li>
</ul>
<h2 id="在-vue-渲染模板时-如何保留模板中的-html-注释" tabindex="-1"><a class="header-anchor" href="#在-vue-渲染模板时-如何保留模板中的-html-注释"><span>在 Vue 渲染模板时，如何保留模板中的 HTML 注释？</span></a></h2>
<p>在 Vue.js 中，默认情况下，编译模板时会移除 HTML 注释。如果你想要保留这些注释，可以使用 <code v-pre>v-html</code> 指令来手动插入包含注释的 HTML 字符串，或者使用自定义的渲染函数（render function）和虚拟 DOM。</p>
<p>但是，直接在单文件组件（SFCs）或字符串模板中写的 HTML 注释会被编译过程移除。这是因为 Vue 的模板编译器默认配置是不保留注释节点的。</p>
<p>如果你想在开发过程中留下注释用于调试或其他目的，你可以通过以下几种方式实现：</p>
<ol>
<li>
<p><strong>使用 <code v-pre>v-html</code> 插入包含注释的 HTML</strong>:
你可以将 HTML 注释作为字符串绑定到 <code v-pre>v-html</code> 指令上，这样它将会被插入到最终的 DOM 中。</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-html</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">'</span>&lt;!-- This is a comment -->'<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p><strong>使用 JavaScript 注释</strong>:
在 <code v-pre>&lt;script&gt;</code> 标签内的代码中使用标准的 JavaScript 注释 (<code v-pre>//</code> 或者 <code v-pre>/* */</code>)，这些不会出现在最终的渲染结果中，但可以在源码中保留下来供开发者查看。</p>
</li>
<li>
<p><strong>在构建工具中配置</strong>:
如果你使用的是 Webpack 或其他构建工具，你可以尝试修改其配置以改变对 HTML 注释的处理方式。例如，在使用 vue-loader 时，你可以调整其选项来控制是否保留注释。</p>
</li>
<li>
<p><strong>使用特殊的标记代替注释</strong>:
有时候，为了在生产环境中移除这些信息，可以用特定的标记或数据属性来替代注释，并在需要的时候通过 CSS 或 JavaScript 来隐藏或显示它们。</p>
</li>
<li>
<p><strong>自定义渲染函数</strong>:
如果你需要更复杂的逻辑，你可以选择使用 Vue 的渲染函数（render function），这允许你更加精细地控制 VNode 的创建，包括添加注释节点。</p>
</li>
</ol>
<p>请记住，HTML 注释通常不会对用户可见，而且对于性能的影响很小，但在生产环境中可能还是希望移除不必要的注释以减少页面体积。因此，确保你的选择符合项目的实际需求。</p>
<h2 id="什么是前端异步编程-请介绍一下-promise、async-await-在-javascript-中的作用及用法。" tabindex="-1"><a class="header-anchor" href="#什么是前端异步编程-请介绍一下-promise、async-await-在-javascript-中的作用及用法。"><span>什么是前端异步编程？请介绍一下 Promise、async/await 在 JavaScript 中的作用及用法。</span></a></h2>
<p>前端异步编程是指在程序运行过程中，可以执行某些耗时的操作（如网络请求、文件读取或定时器）而不阻塞主线程，使用户界面依然保持响应的编程方式。在 JavaScript 中，异步操作是非常常见的，尤其是在处理 I/O 操作时（如 AJAX 请求、文件读取等）。</p>
<h3 id="异步编程的典型方案-promise-和-async-await" tabindex="-1"><a class="header-anchor" href="#异步编程的典型方案-promise-和-async-await"><span>异步编程的典型方案：Promise 和 async/await</span></a></h3>
<h5 id="_1-回调函数-callback-functions" tabindex="-1"><a class="header-anchor" href="#_1-回调函数-callback-functions"><span><strong>1.回调函数（Callback Functions）</strong>：</span></a></h5>
<p>这是最基本的异步编程模式，通过将一个函数作为参数传递给另一个函数，在异步操作完成后调用该函数。但是，当多个异步操作嵌套时，容易导致所谓的“回调地狱”。</p>
<h4 id="_2-promise" tabindex="-1"><a class="header-anchor" href="#_2-promise"><span><strong>2. Promise</strong></span></a></h4>
<p><strong>Promise</strong> 是 ES6 引入的一种用于处理异步操作的对象，它可以更优雅地处理回调函数嵌套的问题（也称“回调地狱”）。Promise 代表的是一个尚未完成的操作及其最终结果。</p>
<h5 id="基本概念" tabindex="-1"><a class="header-anchor" href="#基本概念"><span><strong>基本概念</strong></span></a></h5>
<ul>
<li>
<p><strong>三种状态</strong>：</p>
<ol>
<li><strong>Pending（进行中）</strong>：初始状态，操作尚未完成。</li>
<li><strong>Fulfilled（已完成）</strong>：操作成功完成，返回一个结果值。</li>
<li><strong>Rejected（已失败）</strong>：操作失败，返回一个原因。</li>
</ol>
</li>
<li>
<p><strong>状态不可逆</strong>：Promise 一旦从 <code v-pre>Pending</code> 状态变为 <code v-pre>Fulfilled</code> 或 <code v-pre>Rejected</code>，就不可更改。</p>
</li>
</ul>
<h5 id="用法" tabindex="-1"><a class="header-anchor" href="#用法"><span><strong>用法</strong></span></a></h5>
<p>创建一个 Promise：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> promise <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> success <span class="token operator">=</span> <span class="token boolean">true</span> <span class="token comment">// 模拟成功或失败</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>success<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">'操作成功！'</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token function">reject</span><span class="token punctuation">(</span><span class="token string">'操作失败！'</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 使用 then 和 catch 处理</span></span>
<span class="line">promise</span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">result</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span> <span class="token comment">// 输出: 操作成功！</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token comment">// 输出: 操作失败！</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">finally</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'操作结束。'</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="promise-链式调用" tabindex="-1"><a class="header-anchor" href="#promise-链式调用"><span><strong>Promise 链式调用</strong></span></a></h5>
<p>通过链式调用可以处理多个异步任务：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token comment">// 输出: 1</span></span>
<span class="line">    <span class="token keyword">return</span> value <span class="token operator">+</span> <span class="token number">1</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token comment">// 输出: 2</span></span>
<span class="line">    <span class="token keyword">return</span> value <span class="token operator">+</span> <span class="token number">1</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="常用方法" tabindex="-1"><a class="header-anchor" href="#常用方法"><span><strong>常用方法</strong></span></a></h5>
<ol>
<li><strong><code v-pre>Promise.all()</code></strong>：等待多个 Promise 全部完成。</li>
<li><strong><code v-pre>Promise.race()</code></strong>：只要有一个 Promise 完成，就返回其结果。</li>
<li><strong><code v-pre>Promise.allSettled()</code></strong>：等待所有 Promise 完成，无论成功还是失败。</li>
<li><strong><code v-pre>Promise.any()</code></strong>：只要有一个 Promise 成功，就返回其结果。</li>
</ol>
<hr>
<h4 id="_3-async-await" tabindex="-1"><a class="header-anchor" href="#_3-async-await"><span><strong>3. async/await</strong></span></a></h4>
<p><code v-pre>async/await</code> 是 ES2017 引入的语法糖，基于 Promise，目的是让异步代码看起来像同步代码，提升代码的可读性。</p>
<h5 id="用法-1" tabindex="-1"><a class="header-anchor" href="#用法-1"><span><strong>用法</strong></span></a></h5>
<ul>
<li><strong><code v-pre>async</code></strong>：用于声明一个异步函数，返回一个 Promise。</li>
<li><strong><code v-pre>await</code></strong>：用于等待一个 Promise 的结果，必须在 <code v-pre>async</code> 函数中使用。</li>
</ul>
<p>示例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">// 定义一个异步函数</span></span>
<span class="line"><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">fetchData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">'数据加载成功！'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span> <span class="token comment">// 输出: 数据加载成功！</span></span>
<span class="line">  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token comment">// 捕获错误</span></span>
<span class="line">  <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'操作完成。'</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token function">fetchData</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="结合多个异步操作" tabindex="-1"><a class="header-anchor" href="#结合多个异步操作"><span><strong>结合多个异步操作</strong></span></a></h5>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">process</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> step1 <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token operator">=></span></span>
<span class="line">    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">'步骤 1 完成'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">)</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>step1<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">const</span> step2 <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token operator">=></span></span>
<span class="line">    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">'步骤 2 完成'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">)</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>step2<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'所有步骤完成！'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token function">process</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">// 输出:</span></span>
<span class="line"><span class="token comment">// 步骤 1 完成</span></span>
<span class="line"><span class="token comment">// 步骤 2 完成</span></span>
<span class="line"><span class="token comment">// 所有步骤完成！</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h3 id="promise-vs-async-await" tabindex="-1"><a class="header-anchor" href="#promise-vs-async-await"><span>Promise vs async/await</span></a></h3>
<table>
<thead>
<tr>
<th>特性</th>
<th><strong>Promise</strong></th>
<th><strong>async/await</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>代码可读性</strong></td>
<td>嵌套较多时可能不够直观</td>
<td>更加接近同步代码，清晰明了</td>
</tr>
<tr>
<td><strong>错误处理</strong></td>
<td>使用 <code v-pre>.catch()</code> 处理错误</td>
<td>使用 <code v-pre>try/catch</code> 处理错误</td>
</tr>
<tr>
<td><strong>控制流复杂性</strong></td>
<td>链式调用适合简单的异步操作链</td>
<td>更适合复杂的异步流程</td>
</tr>
<tr>
<td><strong>学习曲线</strong></td>
<td>初学者需要理解 Promise 概念</td>
<td>基于 Promise，更易学习</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="总结-1" tabindex="-1"><a class="header-anchor" href="#总结-1"><span>总结</span></a></h3>
<ol>
<li><strong>Promise</strong>：提供了一种标准化的方式来处理异步操作，避免“回调地狱”。</li>
<li><strong>async/await</strong>：对 Promise 进行了封装，提供了更加直观的语法，适合复杂的异步逻辑。</li>
<li><strong>实际开发建议</strong>：推荐使用 <code v-pre>async/await</code>，并结合 <code v-pre>try/catch</code> 处理错误，代码更简洁且易于维护。</li>
</ol>
<h2 id="如何基于-vue-router-实现动态切换导航栏标题-请详细描述一下实现的过程。" tabindex="-1"><a class="header-anchor" href="#如何基于-vue-router-实现动态切换导航栏标题-请详细描述一下实现的过程。"><span>如何基于 Vue Router 实现动态切换导航栏标题？请详细描述一下实现的过程。</span></a></h2>
<p>在 Vue 应用中，使用 <strong>Vue Router</strong> 可以轻松实现根据当前路由动态切换导航栏标题。这种需求在多页面应用中非常常见，比如在不同的页面中显示不同的标题。</p>
<p>以下是实现动态切换导航栏标题的详细步骤：</p>
<hr>
<h3 id="_1-定义路由时配置标题" tabindex="-1"><a class="header-anchor" href="#_1-定义路由时配置标题"><span>1. <strong>定义路由时配置标题</strong></span></a></h3>
<p>在 Vue Router 的路由配置中，为每个路由添加一个 <code v-pre>meta</code> 字段，用于定义页面的标题。</p>
<p>示例代码：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">// router/index.js</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> createRouter<span class="token punctuation">,</span> createWebHistory <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue-router'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Home'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'@/views/Home.vue'</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'首页'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// 定义标题</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/about'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'About'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'@/views/About.vue'</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'关于我们'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// 定义标题</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'/contact'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Contact'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'@/views/Contact.vue'</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">meta</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'联系我们'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// 定义标题</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">createRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">history</span><span class="token operator">:</span> <span class="token function">createWebHistory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  routes<span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> router</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h3 id="_2-监听路由变化并设置标题" tabindex="-1"><a class="header-anchor" href="#_2-监听路由变化并设置标题"><span>2. <strong>监听路由变化并设置标题</strong></span></a></h3>
<p>利用 Vue Router 提供的 <code v-pre>router.beforeEach</code> 钩子，每次路由跳转时，动态设置页面的标题。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">// main.js</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span></span>
<span class="line"><span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">'./App.vue'</span></span>
<span class="line"><span class="token keyword">import</span> router <span class="token keyword">from</span> <span class="token string">'./router'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 动态设置标题</span></span>
<span class="line">router<span class="token punctuation">.</span><span class="token function">beforeEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> from<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 获取当前路由的标题</span></span>
<span class="line">  <span class="token keyword">const</span> title <span class="token operator">=</span> to<span class="token punctuation">.</span>meta<span class="token punctuation">.</span>title</span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>title<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    document<span class="token punctuation">.</span>title <span class="token operator">=</span> title <span class="token comment">// 设置页面标题</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 继续导航</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>router<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">'#app'</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h3 id="_3-动态更新导航栏的标题" tabindex="-1"><a class="header-anchor" href="#_3-动态更新导航栏的标题"><span>3. <strong>动态更新导航栏的标题</strong></span></a></h3>
<p>假设我们有一个导航栏组件，需要根据当前路由动态切换标题。可以通过 <code v-pre>useRoute</code> 或 Vue Router 的全局钩子实现。</p>
<h4 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码"><span>示例代码：</span></a></h4>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>header</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>navbar<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>{{ currentTitle }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>header</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> computed <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> useRoute <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue-router'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Navbar'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> route <span class="token operator">=</span> <span class="token function">useRoute</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 动态获取当前标题</span></span>
<span class="line">    <span class="token keyword">const</span> currentTitle <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> route<span class="token punctuation">.</span>meta<span class="token punctuation">.</span>title <span class="token operator">||</span> <span class="token string">'默认标题'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">      currentTitle<span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css"></span>
<span class="line"><span class="token selector">.navbar</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">padding</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">background-color</span><span class="token punctuation">:</span> #42b983<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h3 id="_4-扩展功能-支持动态标题模板" tabindex="-1"><a class="header-anchor" href="#_4-扩展功能-支持动态标题模板"><span>4. <strong>扩展功能：支持动态标题模板</strong></span></a></h3>
<p>如果希望标题包含动态信息（例如添加应用名称），可以在 <code v-pre>beforeEach</code> 钩子中进行扩展。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">router<span class="token punctuation">.</span><span class="token function">beforeEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> from<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> baseTitle <span class="token operator">=</span> <span class="token string">'我的应用'</span></span>
<span class="line">  <span class="token keyword">const</span> pageTitle <span class="token operator">=</span> to<span class="token punctuation">.</span>meta<span class="token punctuation">.</span>title</span>
<span class="line">  document<span class="token punctuation">.</span>title <span class="token operator">=</span> pageTitle <span class="token operator">?</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>pageTitle<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> - </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>baseTitle<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span> <span class="token operator">:</span> baseTitle</span>
<span class="line">  <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h3 id="_5-最终结果" tabindex="-1"><a class="header-anchor" href="#_5-最终结果"><span>5. <strong>最终结果</strong></span></a></h3>
<ol>
<li><strong>页面标题</strong>：浏览器页面的标题会根据路由动态切换。</li>
<li><strong>导航栏标题</strong>：应用内部的导航栏标题也会动态切换。</li>
<li><strong>扩展性强</strong>：可以通过 <code v-pre>meta</code> 配置字段，进一步添加如权限、描述等功能。</li>
</ol>
<hr>
<h3 id="小提示" tabindex="-1"><a class="header-anchor" href="#小提示"><span>小提示</span></a></h3>
<ul>
<li><strong>性能优化</strong>：对于复杂场景，避免频繁监听全局路由变化，可以通过组合式 API 的 <code v-pre>watch</code> 精准监听特定路由参数。</li>
<li><strong>SSR 支持</strong>：在服务端渲染（SSR）中，也可以通过路由的 <code v-pre>meta</code> 字段设置页面标题。</li>
</ul>
<p>通过上述步骤，你可以实现一个基于 Vue Router 动态切换导航栏标题的完整解决方案。</p>
<h2 id="项目前端使用了-vant-ui-组件库-请列举几个你用到的-vant-ui-组件并介绍它们的用途" tabindex="-1"><a class="header-anchor" href="#项目前端使用了-vant-ui-组件库-请列举几个你用到的-vant-ui-组件并介绍它们的用途"><span>项目前端使用了 Vant UI 组件库，请列举几个你用到的 Vant UI 组件并介绍它们的用途？</span></a></h2>
<p>Vant 是一个轻量、简洁的移动端 Vue 组件库，由有赞前端团队开发。它提供了丰富的组件，帮助开发者快速搭建高性能的移动应用界面。以下是几个常见的 Vant UI 组件及其用途：</p>
<ol>
<li>
<p><strong>Button 按钮</strong>:</p>
<ul>
<li>用于触发事件或操作，如提交表单、打开对话框等。Vant 的 Button 组件支持多种样式和尺寸，可以满足不同场景下的需求。</li>
</ul>
</li>
<li>
<p><strong>Cell 单元格</strong>:</p>
<ul>
<li>Cell 是列表项的基础组件，常用于展示条目信息。它可以包含标题、图标、描述文字以及右侧箭头等元素，通常与 <code v-pre>CellGroup</code> 组件一起使用来构建分组的列表。</li>
</ul>
</li>
<li>
<p><strong>Popup 弹出层</strong>:</p>
<ul>
<li>Popup 是一个可自定义内容的浮层组件，适用于需要临时显示一些额外信息或者交互控件的情况，比如选择器、菜单等。</li>
</ul>
</li>
<li>
<p><strong>Tab 标签页</strong>:</p>
<ul>
<li>Tab 组件允许用户在多个面板之间进行切换，非常适合用来组织和导航大量内容。通过 <code v-pre>Tabs</code> 和 <code v-pre>Tab</code> 组件组合使用，可以创建水平或垂直排列的标签页。</li>
</ul>
</li>
<li>
<p><strong>Field 输入框</strong>:</p>
<ul>
<li>Field 提供了文本输入、密码输入等功能，并且可以轻松集成验证规则。它是表单中最基本也是最常用的组件之一。</li>
</ul>
</li>
<li>
<p><strong>Picker 选择器</strong>:</p>
<ul>
<li>Picker 是一种下拉选择器，用户可以从预定义的选项中选择一项或多项。它支持日期选择、时间选择、地区选择等多种类型。</li>
</ul>
</li>
<li>
<p><strong>Toast 轻提示</strong>:</p>
<ul>
<li>Toast 用于显示简短的消息提示，不会打断用户的操作流程。它可以用来通知用户某些操作的结果（成功/失败）或者其他重要信息。</li>
</ul>
</li>
<li>
<p><strong>Loading 加载</strong>:</p>
<ul>
<li>Loading 组件用来表示正在加载中的状态，可以放置在整个页面中央，也可以嵌入到其他组件内部作为局部加载指示。</li>
</ul>
</li>
<li>
<p><strong>Dialog 对话框</strong>:</p>
<ul>
<li>Dialog 是一个模态窗口，用来请求用户确认某个动作或者输入必要的信息。它通常包含标题、正文和按钮。</li>
</ul>
</li>
<li>
<p><strong>Icon 图标</strong>:</p>
<ul>
<li>Icon 组件提供了一套丰富的矢量图标集合，可以直接在项目中使用，简化了图标的管理和使用过程。</li>
</ul>
</li>
</ol>
<p>这些只是 Vant 中的一部分组件，实际上它还涵盖了更多种类的组件以适应各种业务需求。每个组件都设计得非常灵活，可以根据实际应用场景调整其属性和样式。此外，Vant 还提供了详细的文档和示例代码，使得开发者能够快速上手并高效地构建应用。</p>
<h2 id="请介绍一下-vue-3-的新特性和与-vue-2-相比有哪些变化" tabindex="-1"><a class="header-anchor" href="#请介绍一下-vue-3-的新特性和与-vue-2-相比有哪些变化"><span>请介绍一下 Vue 3 的新特性和与 Vue 2 相比有哪些变化？</span></a></h2>
<p><strong>Vue 3</strong> 是对 Vue 2 的全面升级，不仅引入了新的功能和性能优化，还重新设计了架构，以便更好地支持大型应用程序的开发。以下是 Vue 3 的主要新特性以及与 Vue 2 的关键变化：</p>
<hr>
<h3 id="_1-性能提升" tabindex="-1"><a class="header-anchor" href="#_1-性能提升"><span>1. <strong>性能提升</strong></span></a></h3>
<p>Vue 3 的性能得到了显著优化，尤其是在以下方面：</p>
<ul>
<li><strong>编译时间更快</strong>：基于 Proxy 的响应式系统减少了多余的依赖跟踪。</li>
<li><strong>内存占用更小</strong>：树形结构组件优化了渲染过程。</li>
<li><strong>更快的渲染速度</strong>：Virtual DOM 的重写提升了渲染性能。</li>
</ul>
<hr>
<h3 id="_2-基于-proxy-的响应式系统" tabindex="-1"><a class="header-anchor" href="#_2-基于-proxy-的响应式系统"><span>2. <strong>基于 Proxy 的响应式系统</strong></span></a></h3>
<ul>
<li><strong>变化</strong>：Vue 2 使用 <code v-pre>Object.defineProperty</code> 实现响应式，而 Vue 3 使用了 ES6 的 <code v-pre>Proxy</code>。</li>
<li><strong>优势</strong>：
<ol>
<li>支持对对象属性的动态添加和删除（Vue 2 无法响应新增属性）。</li>
<li>支持响应数组的索引操作和长度变化。</li>
<li>无需依赖 <code v-pre>$set</code> 和 <code v-pre>$delete</code> 方法。</li>
</ol>
</li>
</ul>
<p>示例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Vue'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">state<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">'Vue 3'</span> <span class="token comment">// 响应式更新</span></span>
<span class="line">state<span class="token punctuation">.</span>newProperty <span class="token operator">=</span> <span class="token string">'New'</span> <span class="token comment">// 响应式添加新属性</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h3 id="_3-composition-api" tabindex="-1"><a class="header-anchor" href="#_3-composition-api"><span>3. <strong>Composition API</strong></span></a></h3>
<ul>
<li><strong>变化</strong>：新增的 Composition API 提供了更灵活的功能组合方式，相较于 Vue 2 的 Options API，更适合大型复杂应用。</li>
<li><strong>主要功能</strong>：
<ol>
<li><code v-pre>setup</code>：用于定义组件逻辑，是 Composition API 的入口。</li>
<li><code v-pre>reactive</code> 和 <code v-pre>ref</code>：实现响应式数据。</li>
<li><code v-pre>computed</code> 和 <code v-pre>watch</code>：增强数据处理和监听。</li>
<li><code v-pre>provide</code> 和 <code v-pre>inject</code>：简化跨组件通信。</li>
</ol>
</li>
</ul>
<p>示例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> computed <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">const</span> double <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> count<span class="token punctuation">.</span>value <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">function</span> <span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      count<span class="token punctuation">.</span>value<span class="token operator">++</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span> count<span class="token punctuation">,</span> double<span class="token punctuation">,</span> increment <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h3 id="_4-teleport-传送门" tabindex="-1"><a class="header-anchor" href="#_4-teleport-传送门"><span>4. <strong>Teleport（传送门）</strong></span></a></h3>
<ul>
<li><strong>变化</strong>：Vue 3 引入了 <code v-pre>Teleport</code> 组件，用于将 DOM 节点渲染到组件外的指定位置（例如全局的 <code v-pre>body</code>）。</li>
<li><strong>用途</strong>：常用于模态框、弹窗等不应受组件父级 DOM 限制的场景。</li>
</ul>
<p>示例：</p>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>teleport</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>body<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>modal<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>模态框内容<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>teleport</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h3 id="_5-fragment-片段" tabindex="-1"><a class="header-anchor" href="#_5-fragment-片段"><span>5. <strong>Fragment（片段）</strong></span></a></h3>
<ul>
<li><strong>变化</strong>：Vue 3 支持在组件中返回多个根节点，而 Vue 2 强制要求一个根节点。</li>
<li><strong>优势</strong>：组件模板更加简洁，减少不必要的包装标签。</li>
</ul>
<p>示例：</p>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>标题<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>描述内容<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h3 id="_6-suspense-异步组件处理" tabindex="-1"><a class="header-anchor" href="#_6-suspense-异步组件处理"><span>6. <strong>Suspense（异步组件处理）</strong></span></a></h3>
<ul>
<li><strong>变化</strong>：Vue 3 引入了 <code v-pre>Suspense</code>，用于处理异步组件加载时的占位内容。</li>
<li><strong>用途</strong>：为异步内容（如 API 数据加载）提供更好的用户体验。</li>
</ul>
<p>示例：</p>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>suspense</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#default</span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>AsyncComponent</span> <span class="token punctuation">/></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#fallback</span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>加载中...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>suspense</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h3 id="_7-更好的-typescript-支持" tabindex="-1"><a class="header-anchor" href="#_7-更好的-typescript-支持"><span>7. <strong>更好的 TypeScript 支持</strong></span></a></h3>
<ul>
<li>Vue 3 原生支持 TypeScript，类型定义更加完善。</li>
<li>更适合构建大型项目，开发体验更友好。</li>
</ul>
<hr>
<h3 id="_8-全新的自定义渲染器-api" tabindex="-1"><a class="header-anchor" href="#_8-全新的自定义渲染器-api"><span>8. <strong>全新的自定义渲染器 API</strong></span></a></h3>
<ul>
<li><strong>变化</strong>：Vue 3 提供了 <code v-pre>createRenderer</code>，支持自定义渲染目标（如绘图库、游戏引擎）。</li>
<li><strong>用途</strong>：开发 WebGL、Canvas 等非 DOM 环境的应用。</li>
</ul>
<hr>
<h3 id="_9-tree-shaking-支持" tabindex="-1"><a class="header-anchor" href="#_9-tree-shaking-支持"><span>9. <strong>Tree Shaking 支持</strong></span></a></h3>
<ul>
<li>Vue 3 的模块设计更加适合 Tree Shaking。</li>
<li>未使用的代码会被自动移除，减小打包体积。</li>
</ul>
<hr>
<h3 id="_10-其他改进" tabindex="-1"><a class="header-anchor" href="#_10-其他改进"><span>10. <strong>其他改进</strong></span></a></h3>
<ul>
<li><strong>全局 API 的变化</strong>：
<ul>
<li><code v-pre>Vue.component</code>、<code v-pre>Vue.use</code> 等迁移到 <code v-pre>app</code> 实例。</li>
<li>全局配置变为链式调用，如 <code v-pre>app.config.globalProperties</code>。</li>
</ul>
</li>
<li><strong>事件监听器的合并策略</strong>：支持多个同名事件监听器。</li>
</ul>
<hr>
<h3 id="vue-3-和-vue-2-的对比总结" tabindex="-1"><a class="header-anchor" href="#vue-3-和-vue-2-的对比总结"><span>Vue 3 和 Vue 2 的对比总结</span></a></h3>
<table>
<thead>
<tr>
<th><strong>特性</strong></th>
<th><strong>Vue 2</strong></th>
<th><strong>Vue 3</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>响应式实现</td>
<td><code v-pre>Object.defineProperty</code></td>
<td><code v-pre>Proxy</code></td>
</tr>
<tr>
<td>API 风格</td>
<td>Options API</td>
<td>Options API + Composition API</td>
</tr>
<tr>
<td>根节点限制</td>
<td>只能有一个根节点</td>
<td>支持多个根节点（Fragment）</td>
</tr>
<tr>
<td>DOM 操作</td>
<td>不支持 Teleport</td>
<td>支持 Teleport</td>
</tr>
<tr>
<td>异步内容处理</td>
<td>需要手动编写逻辑</td>
<td>支持 Suspense</td>
</tr>
<tr>
<td>TypeScript 支持</td>
<td>基础支持</td>
<td>原生支持，类型定义更完整</td>
</tr>
<tr>
<td>Tree Shaking 支持</td>
<td>较弱</td>
<td>强支持，按需引入模块</td>
</tr>
<tr>
<td>性能</td>
<td>渲染较快</td>
<td>性能更优（内存占用更小、编译更高效）</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="总结-2" tabindex="-1"><a class="header-anchor" href="#总结-2"><span>总结</span></a></h3>
<p>Vue 3 的新特性主要围绕性能优化、灵活性提升和开发体验改进。对于简单项目，Vue 3 的 Options API 保持了与 Vue 2 的一致性；对于复杂项目，Composition API 和其他新功能显著提高了代码的组织能力和扩展性。</p>
<p><strong>迁移建议</strong>：</p>
<ul>
<li>新项目推荐直接使用 Vue 3。</li>
<li>旧项目可以根据需要逐步迁移至 Vue 3，官方提供了<a href="https://v3.vuejs.org/guide/migration/introduction.html" target="_blank" rel="noopener noreferrer">迁移指南</a>。</li>
</ul>
<h2 id="vue-js-中的组件通信方式有哪些" tabindex="-1"><a class="header-anchor" href="#vue-js-中的组件通信方式有哪些"><span>Vue.js 中的组件通信方式有哪些？</span></a></h2>
<h3 id="vue2-0-组件通信方式" tabindex="-1"><a class="header-anchor" href="#vue2-0-组件通信方式"><span>vue2.0 组件通信方式</span></a></h3>
<p>在 Vue.js 中，组件之间的通信是构建复杂用户界面的核心部分。Vue 提供了多种机制来实现组件间的通信，包括父子组件间的通信、兄弟组件间的通信以及跨层级的通信。以下是几种常见的组件通信方式：</p>
<h3 id="_1-props-和-events" tabindex="-1"><a class="header-anchor" href="#_1-props-和-events"><span>1. Props 和 Events</span></a></h3>
<p>这是最基础也是最常用的父子组件通信方式。</p>
<ul>
<li>
<p><strong>Props</strong>：父组件通过 <code v-pre>props</code> 向子组件传递数据。</p>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token comment">&lt;!-- ParentComponent.vue --></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ChildComponent</span> <span class="token attr-name">:message</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>parentMessage<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">parentMessage</span><span class="token operator">:</span> <span class="token string">'Hello from parent'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>Events ($emit)</strong>：子组件可以通过 <code v-pre>$emit</code> 触发自定义事件，并向上传递数据给父组件。</p>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token comment">&lt;!-- ChildComponent.vue --></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>sendMessage<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Click me<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">sendMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">'child-event'</span><span class="token punctuation">,</span> <span class="token string">'Hello from child'</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>父组件可以监听这些事件：</p>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token comment">&lt;!-- ParentComponent.vue --></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ChildComponent</span> <span class="token attr-name">@child-event</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleEvent<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">handleEvent</span><span class="token punctuation">(</span><span class="token parameter">message</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="_2-provide-inject" tabindex="-1"><a class="header-anchor" href="#_2-provide-inject"><span>2. Provide / Inject</span></a></h3>
<p>用于祖辈组件向后代组件提供数据，不局限于直接的父子关系。</p>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token comment">&lt;!-- AncestorComponent.vue --></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ChildComponent</span> <span class="token punctuation">/></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">provide</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">      祖先提供的属性或方法<span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>后代组件使用 <code v-pre>inject</code> 接收：</p>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token comment">&lt;!-- DescendantComponent.vue --></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">inject</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'祖先提供的属性或方法'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-vuex-状态管理模式" tabindex="-1"><a class="header-anchor" href="#_3-vuex-状态管理模式"><span>3. Vuex (状态管理模式)</span></a></h3>
<p>对于需要共享状态的应用，尤其是大型应用，推荐使用 Vuex 来集中管理状态。Vuex 是一个专门为 Vue 应用设计的状态管理模式和库，它采用集中式存储管理应用的所有组件的状态，并以规则保证以可预测的方式发生变化。</p>
<h3 id="_4-event-bus-事件总线" tabindex="-1"><a class="header-anchor" href="#_4-event-bus-事件总线"><span>4. Event Bus (事件总线)</span></a></h3>
<p>适用于非父子组件之间的通信。你可以创建一个空的 Vue 实例作为中央事件中心，任何组件都可以向这个实例派发事件或者监听来自它的事件。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">// eventBus.js</span></span>
<span class="line"><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">'vue'</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> EventBus <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后，在组件中使用：</p>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token comment">&lt;!-- ComponentA.vue --></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> EventBus <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./eventBus'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    EventBus<span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">'id-selected'</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>id<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token comment">&lt;!-- ComponentB.vue --></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> EventBus <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./eventBus'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    EventBus<span class="token punctuation">.</span><span class="token function">$on</span><span class="token punctuation">(</span><span class="token string">'id-selected'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">id</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// 执行相应逻辑</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-refs" tabindex="-1"><a class="header-anchor" href="#_5-refs"><span>5. Refs</span></a></h3>
<p><code v-pre>refs</code> 主要用于获取对子组件的引用，可以直接访问子组件实例或其 DOM 节点。这种方式主要用于操作子组件的方法调用或者直接修改子组件的数据。</p>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token comment">&lt;!-- ParentComponent.vue --></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ChildComponent</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>childComponent<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>childComponent<span class="token punctuation">.</span><span class="token function">someMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-global-mixins-或-plugins" tabindex="-1"><a class="header-anchor" href="#_6-global-mixins-或-plugins"><span>6. Global Mixins 或 Plugins</span></a></h3>
<p>如果你想让某些功能在整个应用程序中可用，可以考虑创建全局混入（mixin）或插件（plugin）。不过要注意，滥用 global mixins 可能会导致代码难以维护。</p>
<p>每种通信方式都有其适用场景，选择合适的通信模式取决于你的具体需求和项目的规模。随着 Vue 3 的发布，Composition API 的引入为组合逻辑提供了更加灵活和强大的工具，进一步丰富了组件通信的选择。</p>
<h3 id="vue3-0-组件通信方式" tabindex="-1"><a class="header-anchor" href="#vue3-0-组件通信方式"><span>vue3.0 组件通信方式</span></a></h3>
<p>在 Vue 3 中，组件通信的方式与 Vue 2 保持一致，但由于 Vue 3 引入了 Composition API（组合式 API），使得某些通信方式变得更加灵活。以下是 Vue 3 中常见的组件通信方式：</p>
<hr>
<h3 id="_1-父子组件通信" tabindex="-1"><a class="header-anchor" href="#_1-父子组件通信"><span><strong>1. 父子组件通信</strong></span></a></h3>
<h4 id="_1-1-props-传递数据-父传子" tabindex="-1"><a class="header-anchor" href="#_1-1-props-传递数据-父传子"><span>1.1 <strong><code v-pre>props</code> 传递数据（父传子）</strong></span></a></h4>
<ul>
<li>父组件通过 <code v-pre>props</code> 向子组件传递数据，子组件通过 <code v-pre>props</code> 接收并使用这些数据。</li>
</ul>
<p><strong>示例</strong>：</p>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token comment">&lt;!-- 父组件 --></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ChildComponent</span> <span class="token attr-name">:message</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>parentMessage<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> parentMessage <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">'Hello from Parent'</span><span class="token punctuation">)</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token comment">&lt;!-- 子组件 --></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>{{ message }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">message</span><span class="token operator">:</span> String<span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-2-emit-触发事件-子传父" tabindex="-1"><a class="header-anchor" href="#_1-2-emit-触发事件-子传父"><span>1.2 <strong><code v-pre>$emit</code> 触发事件（子传父）</strong></span></a></h4>
<ul>
<li>子组件使用 <code v-pre>$emit</code> 向父组件发送事件，父组件通过监听事件来获取子组件传递的数据。</li>
</ul>
<p><strong>示例</strong>：</p>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token comment">&lt;!-- 父组件 --></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ChildComponent</span> <span class="token attr-name">@update</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleUpdate<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">handleUpdate</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Received from child:'</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token comment">&lt;!-- 子组件 --></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>sendData<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Send Data to Parent<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">sendData</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">'update'</span><span class="token punctuation">,</span> <span class="token string">'Hello from Child'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h3 id="_2-兄弟组件通信" tabindex="-1"><a class="header-anchor" href="#_2-兄弟组件通信"><span><strong>2. 兄弟组件通信</strong></span></a></h3>
<h4 id="_2-1-通过事件总线-event-bus" tabindex="-1"><a class="header-anchor" href="#_2-1-通过事件总线-event-bus"><span>2.1 <strong>通过事件总线（Event Bus）</strong></span></a></h4>
<p>Vue 3 中没有内置的事件总线机制，但可以使用外部的 <code v-pre>mitt</code> 库或者其他自定义实现事件总线。</p>
<p><strong>示例</strong>：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> <span class="token function">install</span> mitt</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">// eventBus.js</span></span>
<span class="line"><span class="token keyword">import</span> mitt <span class="token keyword">from</span> <span class="token string">'mitt'</span></span>
<span class="line"><span class="token keyword">const</span> eventBus <span class="token operator">=</span> <span class="token function">mitt</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> eventBus</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token comment">&lt;!-- 组件 A --></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>sendMessage<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Send to Sibling<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">import</span> eventBus <span class="token keyword">from</span> <span class="token string">'./eventBus'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">sendMessage</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  eventBus<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">'message'</span><span class="token punctuation">,</span> <span class="token string">'Hello from Component A'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token comment">&lt;!-- 组件 B --></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>{{ message }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> onMounted<span class="token punctuation">,</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span></span>
<span class="line"><span class="token keyword">import</span> eventBus <span class="token keyword">from</span> <span class="token string">'./eventBus'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> message <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  eventBus<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'message'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    message<span class="token punctuation">.</span>value <span class="token operator">=</span> data</span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-2-vuex-状态管理" tabindex="-1"><a class="header-anchor" href="#_2-2-vuex-状态管理"><span>2.2 <strong>Vuex 状态管理</strong></span></a></h4>
<p>通过 Vuex 管理应用的全局状态，兄弟组件可以通过共享的状态进行通信。</p>
<p><strong>示例</strong>：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">// store.js</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> createStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vuex'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">createStore</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">state</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">'Hello from Vuex'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">mutations</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">updateMessage</span><span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> payload</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      state<span class="token punctuation">.</span>message <span class="token operator">=</span> payload</span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token comment">&lt;!-- 组件 A --></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>updateMessage<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Update Message<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> useStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vuex'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">useStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">updateMessage</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  store<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">'updateMessage'</span><span class="token punctuation">,</span> <span class="token string">'Updated message from Component A'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token comment">&lt;!-- 组件 B --></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>{{ message }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> useStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vuex'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">useStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> message <span class="token operator">=</span> store<span class="token punctuation">.</span>state<span class="token punctuation">.</span>message</span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h3 id="_3-跨层级组件通信" tabindex="-1"><a class="header-anchor" href="#_3-跨层级组件通信"><span><strong>3. 跨层级组件通信</strong></span></a></h3>
<h4 id="_3-1-provide-和-inject" tabindex="-1"><a class="header-anchor" href="#_3-1-provide-和-inject"><span>3.1 <strong><code v-pre>provide</code> 和 <code v-pre>inject</code></strong></span></a></h4>
<p>Vue 3 中的 <code v-pre>provide</code> 和 <code v-pre>inject</code> 用于跨层级传递数据，适合祖先组件与后代组件之间的通信。</p>
<ul>
<li>祖先组件通过 <code v-pre>provide</code> 提供数据。</li>
<li>后代组件通过 <code v-pre>inject</code> 获取数据。</li>
</ul>
<p><strong>示例</strong>：</p>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token comment">&lt;!-- 祖先组件 --></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ChildComponent</span> <span class="token punctuation">/></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> provide <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> sharedData <span class="token operator">=</span> <span class="token string">'Hello from Ancestor'</span></span>
<span class="line"><span class="token function">provide</span><span class="token punctuation">(</span><span class="token string">'sharedData'</span><span class="token punctuation">,</span> sharedData<span class="token punctuation">)</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token comment">&lt;!-- 后代组件 --></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>{{ sharedData }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> inject <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> sharedData <span class="token operator">=</span> <span class="token function">inject</span><span class="token punctuation">(</span><span class="token string">'sharedData'</span><span class="token punctuation">)</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h3 id="_4-全局状态管理" tabindex="-1"><a class="header-anchor" href="#_4-全局状态管理"><span><strong>4. 全局状态管理</strong></span></a></h3>
<h4 id="_4-1-vuex" tabindex="-1"><a class="header-anchor" href="#_4-1-vuex"><span>4.1 <strong>Vuex</strong></span></a></h4>
<p>Vue 3 继续使用 Vuex 来管理全局状态，适合复杂应用中多组件共享状态的场景。通过 <code v-pre>useStore()</code> 钩子来访问 Vuex。</p>
<p><strong>示例</strong>：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">// store.js</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> createStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vuex'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">createStore</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">state</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">'Hello from Vuex'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">mutations</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">updateMessage</span><span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> payload</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      state<span class="token punctuation">.</span>message <span class="token operator">=</span> payload</span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token comment">&lt;!-- 组件 A --></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>updateMessage<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Update Message<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> useStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vuex'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">useStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">updateMessage</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  store<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">'updateMessage'</span><span class="token punctuation">,</span> <span class="token string">'Updated message from Component A'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token comment">&lt;!-- 组件 B --></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>{{ message }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> useStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vuex'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">useStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> message <span class="token operator">=</span> store<span class="token punctuation">.</span>state<span class="token punctuation">.</span>message</span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h3 id="_5-使用-composition-api-实现更灵活的通信" tabindex="-1"><a class="header-anchor" href="#_5-使用-composition-api-实现更灵活的通信"><span><strong>5. 使用 Composition API 实现更灵活的通信</strong></span></a></h3>
<h4 id="_5-1-reactive-和-ref" tabindex="-1"><a class="header-anchor" href="#_5-1-reactive-和-ref"><span>5.1 <strong><code v-pre>reactive</code> 和 <code v-pre>ref</code></strong></span></a></h4>
<p>使用 <code v-pre>reactive</code> 或 <code v-pre>ref</code> 来在多个组件间共享响应式数据。可以通过组合式 API 提供一个共享的状态。</p>
<p><strong>示例</strong>：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">// useStore.js</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> reactive <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">'Shared message'</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">useStore</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> state</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token comment">&lt;!-- 组件 A --></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>changeMessage<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Change Message<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> useStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./useStore'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token function">useStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">changeMessage</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  state<span class="token punctuation">.</span>message <span class="token operator">=</span> <span class="token string">'Message updated from Component A'</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token comment">&lt;!-- 组件 B --></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>{{ state.message }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> useStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./useStore'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token function">useStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h3 id="_6-其他通信方式" tabindex="-1"><a class="header-anchor" href="#_6-其他通信方式"><span><strong>6. 其他通信方式</strong></span></a></h3>
<h4 id="_6-1-attrs-和-listeners" tabindex="-1"><a class="header-anchor" href="#_6-1-attrs-和-listeners"><span>6.1 <strong><code v-pre>$attrs</code> 和 <code v-pre>$listeners</code></strong></span></a></h4>
<p>Vue 3 中的 <code v-pre>$attrs</code> 和 <code v-pre>$listeners</code> 仍然可用于传递父组件的属性和事件给子组件，特别是在自定义组件库中非常有用。</p>
<h4 id="_6-2-ref-引用" tabindex="-1"><a class="header-anchor" href="#_6-2-ref-引用"><span>6.2 <strong><code v-pre>ref</code> 引用</strong></span></a></h4>
<p>Vue 3 中使用 <code v-pre>ref</code> 获取子组件实例，通过子组件的公共方法与属性进行通信。</p>
<p><strong>示例</strong>：</p>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token comment">&lt;!-- 父组件 --></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ChildComponent</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>child<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>callChildMethod<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Call Child Method<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span></span>
<span class="line"><span class="token keyword">import</span> ChildComponent <span class="token keyword">from</span> <span class="token string">'./ChildComponent.vue'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> child <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">callChildMethod</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  child<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">childMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token comment">&lt;!-- 子组件 --></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Child Component<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">childMethod</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Child method called!'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h3 id="总结-3" tabindex="-1"><a class="header-anchor" href="#总结-3"><span><strong>总结</strong></span></a></h3>
<p>在 Vue 3 中，组件之间的通信方式与 Vue 2 类似，但由于 Vue 3 引入了 Composition API，通信方式变得更加灵活。常见的通信方式包括：</p>
<ul>
<li><strong>父子组件</strong>：<code v-pre>props</code> 和 <code v-pre>$emit</code>。</li>
<li><strong>兄弟组件</strong>：事件总线、Vuex。</li>
<li><strong>跨层级组件</strong>：<code v-pre>provide</code> 和 <code v-pre>inject</code>。</li>
<li><strong>全局状态管理</strong>：Vuex、响应式共享状态。</li>
<li><strong>Composition API</strong>：<code v-pre>reactive</code> 和 <code v-pre>ref</code>。</li>
</ul>
<p>根据实际需求，选择合适的通信方式来组织组件间的交互。</p>
<h2 id="vue-diff-算法的原理是什么" tabindex="-1"><a class="header-anchor" href="#vue-diff-算法的原理是什么"><span>vue diff 算法的原理是什么？</span></a></h2>
<p>在 Vue 中，<strong>DIFF 算法</strong>用于高效地更新虚拟 DOM（Virtual DOM）和实际 DOM 的差异。Vue 通过该算法来最小化页面重新渲染的开销，提高应用性能。Vue 的 DIFF 算法基于 <strong>O(n) 时间复杂度</strong>，大大减少了传统的虚拟 DOM 比较的计算量，具体来说，Vue 在比对时采用了<strong>逐层比较</strong>和<strong>最小化重渲染</strong>的策略。</p>
<h3 id="_1-vue-diff-算法的核心原理" tabindex="-1"><a class="header-anchor" href="#_1-vue-diff-算法的核心原理"><span><strong>1. Vue DIFF 算法的核心原理</strong></span></a></h3>
<p>Vue 的 DIFF 算法通过以下几种策略来高效地更新 DOM：</p>
<h4 id="_1-1-按层比较" tabindex="-1"><a class="header-anchor" href="#_1-1-按层比较"><span><strong>1.1. 按层比较</strong></span></a></h4>
<p>Vue 采用了基于<strong>逐层比较</strong>的策略，首先从根节点开始，递归地对比每个节点的虚拟 DOM 和实际 DOM，然后只更新那些发生变化的部分。这种方法避免了传统的完全遍历比较所有子节点的高开销。</p>
<h4 id="_1-2-同级节点比较-同层比较" tabindex="-1"><a class="header-anchor" href="#_1-2-同级节点比较-同层比较"><span><strong>1.2. 同级节点比较（同层比较）</strong></span></a></h4>
<p>在 Vue 中，DOM 节点的比较只会发生在同一层级上，即仅在同一层级的节点进行对比。如果是父子节点的改变，则会对子节点进行递归比较，直到子节点。</p>
<h4 id="_1-3-最小化-dom-更新" tabindex="-1"><a class="header-anchor" href="#_1-3-最小化-dom-更新"><span><strong>1.3. 最小化 DOM 更新</strong></span></a></h4>
<p>Vue 对比两个虚拟 DOM 时，采用了以下策略来最小化实际 DOM 的更新：</p>
<ul>
<li><strong>Key 属性</strong>：如果子节点使用了 <code v-pre>key</code> 属性，Vue 会根据 <code v-pre>key</code> 来判断节点是否发生了变化。<code v-pre>key</code> 使得 Vue 能够精确地识别和复用 DOM 元素，避免不必要的元素重建。</li>
<li><strong>节点复用</strong>：如果 Vue 确定某个节点没有发生变化，它会复用该节点，而不是重新创建它。这样可以减少 DOM 操作，提高性能。</li>
</ul>
<h4 id="_1-4-双指针比较算法" tabindex="-1"><a class="header-anchor" href="#_1-4-双指针比较算法"><span><strong>1.4. 双指针比较算法</strong></span></a></h4>
<p>Vue 使用了 <strong>双指针算法</strong>来高效对比同层节点。具体来说，Vue 会通过两个指针同时遍历两个虚拟节点列表：</p>
<ul>
<li><strong>从前往后比较</strong>：从头到尾比较两个节点，如果节点相同则跳过。</li>
<li><strong>从后往前比较</strong>：如果从前往后的比较无法完成，Vue 会从后往前进行比较，进一步提高性能。</li>
</ul>
<p>这种双指针算法能有效减少不必要的比较操作，从而提升性能。</p>
<h4 id="_1-5-最小化节点移动" tabindex="-1"><a class="header-anchor" href="#_1-5-最小化节点移动"><span><strong>1.5. 最小化节点移动</strong></span></a></h4>
<p>如果两个节点在不同的位置，但具有相同的内容或 <code v-pre>key</code>，Vue 会进行位置交换而非完全删除和重建。这减少了节点的重新渲染次数，优化了性能。</p>
<h3 id="_2-vue-diff-算法的比较流程" tabindex="-1"><a class="header-anchor" href="#_2-vue-diff-算法的比较流程"><span><strong>2. Vue DIFF 算法的比较流程</strong></span></a></h3>
<p>在 Vue 中，虚拟 DOM 采用了<strong>递归比较</strong>和<strong>同层比较</strong>策略。具体步骤如下：</p>
<ol>
<li><strong>初始化虚拟 DOM</strong>：在初次渲染时，Vue 会根据模板生成虚拟 DOM。</li>
<li><strong>更新虚拟 DOM</strong>：每当组件的状态或数据发生变化时，Vue 会重新计算新的虚拟 DOM。</li>
<li><strong>比较旧的虚拟 DOM 和新的虚拟 DOM</strong>：Vue 使用 DIFF 算法将旧的虚拟 DOM 和新的虚拟 DOM 进行对比，找出差异。</li>
<li><strong>更新实际 DOM</strong>：根据 DIFF 算法找到的差异，Vue 会最小化更新操作，将这些变化应用到实际 DOM 上。</li>
</ol>
<h3 id="_3-关键优化点" tabindex="-1"><a class="header-anchor" href="#_3-关键优化点"><span><strong>3. 关键优化点</strong></span></a></h3>
<h4 id="_3-1-通过-key-优化列表渲染" tabindex="-1"><a class="header-anchor" href="#_3-1-通过-key-优化列表渲染"><span><strong>3.1. 通过 <code v-pre>key</code> 优化列表渲染</strong></span></a></h4>
<p>在渲染列表时，Vue 强烈建议为每个列表项提供一个唯一的 <code v-pre>key</code> 值。<code v-pre>key</code> 值帮助 Vue 识别每个节点的身份，使得 Vue 可以准确地判断哪些节点需要重渲染，哪些可以复用。没有 <code v-pre>key</code> 时，Vue 会使用默认的算法进行比较，这可能会导致性能下降。</p>
<h4 id="_3-2-只更新变化的部分" tabindex="-1"><a class="header-anchor" href="#_3-2-只更新变化的部分"><span><strong>3.2. 只更新变化的部分</strong></span></a></h4>
<p>Vue DIFF 算法避免了完全重新渲染整个 DOM，而是只更新发生变化的部分。通过对比两个虚拟 DOM 树的差异，Vue 只渲染那些需要更新的部分，大大减少了 DOM 操作，提高了性能。</p>
<h4 id="_3-3-性能优化-双指针和跳过无效比较" tabindex="-1"><a class="header-anchor" href="#_3-3-性能优化-双指针和跳过无效比较"><span><strong>3.3. 性能优化：双指针和跳过无效比较</strong></span></a></h4>
<p>Vue 在同层比较时使用双指针来同时从头和尾部开始比较虚拟节点，进一步优化了性能。如果某些节点没有发生变化，它们将被跳过，避免不必要的重新渲染。</p>
<h3 id="_4-总结" tabindex="-1"><a class="header-anchor" href="#_4-总结"><span><strong>4. 总结</strong></span></a></h3>
<p>Vue 的 DIFF 算法在性能上进行了大量优化，以确保能够高效地更新虚拟 DOM 和实际 DOM。核心思想是：</p>
<ul>
<li><strong>按层级和同层次节点比较</strong>。</li>
<li>使用 <strong><code v-pre>key</code></strong> 属性来精确标识节点，减少不必要的 DOM 操作。</li>
<li>使用 <strong>双指针算法</strong>来提高节点比较的效率。</li>
<li><strong>最小化 DOM 更新</strong>，只更新有变化的部分。</li>
</ul>
<p>这些优化策略使得 Vue 在处理大型应用时能够高效地更新视图，减少性能瓶颈，提供更流畅的用户体验。</p>
<p>在 Vue 的 <strong>DIFF 算法</strong>中，<strong>最长递增子序列</strong>（LIS, Longest Increasing Subsequence）是一种优化策略，用于减少节点移动操作的次数，从而提升 DOM 更新的性能。该算法常见于对比<strong>有 <code v-pre>key</code> 属性的子节点</strong>时，用来确定哪些节点需要移动，哪些可以保持不变。</p>
<hr>
<h3 id="_1-背景与问题" tabindex="-1"><a class="header-anchor" href="#_1-背景与问题"><span><strong>1. 背景与问题</strong></span></a></h3>
<p>在 Vue 中，当对比两个虚拟 DOM 列表时，若两个列表的节点顺序发生变化（例如重新排序或插入新节点），Vue 会通过 <strong>双端比较</strong> 来快速找出需要新增、删除或移动的节点。</p>
<p>然而，仅靠简单的比较无法确定哪些节点可以保持位置不动。为了优化这种情况，Vue 引入了 <strong>最长递增子序列</strong> 算法，来识别出可以复用且顺序正确的节点，减少节点的移动次数。</p>
<hr>
<h3 id="_2-什么是最长递增子序列" tabindex="-1"><a class="header-anchor" href="#_2-什么是最长递增子序列"><span><strong>2. 什么是最长递增子序列？</strong></span></a></h3>
<p>最长递增子序列（LIS）是一个数组的子序列，子序列中的元素按照原数组的顺序排列，并且是严格递增的。例如：</p>
<ul>
<li>数组 <code v-pre>[10, 22, 9, 33, 21, 50, 41, 60]</code> 的最长递增子序列是 <code v-pre>[10, 22, 33, 50, 60]</code>。</li>
<li>数组 <code v-pre>[3, 10, 2, 1, 20]</code> 的最长递增子序列是 <code v-pre>[3, 10, 20]</code>。</li>
</ul>
<p>在 Vue 的 DIFF 算法中，最长递增子序列的作用是找出子节点中<strong>无需移动的节点集合</strong>。</p>
<hr>
<h3 id="_3-vue-中最长递增子序列的作用" tabindex="-1"><a class="header-anchor" href="#_3-vue-中最长递增子序列的作用"><span><strong>3. Vue 中最长递增子序列的作用</strong></span></a></h3>
<h4 id="_3-1-用于优化节点移动" tabindex="-1"><a class="header-anchor" href="#_3-1-用于优化节点移动"><span><strong>3.1. 用于优化节点移动</strong></span></a></h4>
<p>当 Vue 比较两个虚拟 DOM 列表时，Vue 会计算新旧节点的映射关系（通过 <code v-pre>key</code> 属性识别），然后确定哪些节点可以保持原位、哪些需要新增或删除。为了减少 DOM 的移动次数，Vue 会计算新节点序列中的<strong>最长递增子序列</strong>，用以标记无需移动的节点，其他节点则被移动或更新。</p>
<h4 id="_3-2-作用示例" tabindex="-1"><a class="header-anchor" href="#_3-2-作用示例"><span><strong>3.2. 作用示例</strong></span></a></h4>
<p>假设有以下两个节点列表：</p>
<ul>
<li>旧列表：<code v-pre>[a, b, c, d]</code></li>
<li>新列表：<code v-pre>[b, c, e, a]</code></li>
</ul>
<p>在比较时，Vue 会找到新列表中节点在旧列表中的位置映射关系：</p>
<ul>
<li>旧列表对应索引：<code v-pre>[3, 0, -1, 1]</code> （<code v-pre>-1</code> 表示 <code v-pre>e</code> 是新节点）</li>
<li>这时，Vue 会计算最长递增子序列，即 <code v-pre>[0, 1]</code>，对应的新节点 <code v-pre>b</code> 和 <code v-pre>c</code> 可以复用且位置正确。</li>
</ul>
<p>最终 Vue 只需移动 <code v-pre>a</code> 和新增 <code v-pre>e</code>，而 <code v-pre>b</code> 和 <code v-pre>c</code> 的 DOM 不会被移动。</p>
<hr>
<h3 id="_4-vue-中计算-lis-的实现" tabindex="-1"><a class="header-anchor" href="#_4-vue-中计算-lis-的实现"><span><strong>4. Vue 中计算 LIS 的实现</strong></span></a></h3>
<p>Vue 在计算最长递增子序列时使用了一种高效算法，时间复杂度为 <strong>O(n log n)</strong>。以下是核心实现步骤：</p>
<h4 id="_4-1-基本步骤" tabindex="-1"><a class="header-anchor" href="#_4-1-基本步骤"><span><strong>4.1. 基本步骤</strong></span></a></h4>
<ol>
<li>遍历数组，维护一个递增序列的索引数组 <code v-pre>piles</code>，其中每个元素表示当前递增序列的最小值。</li>
<li>对于每个元素，用二分查找确定它在 <code v-pre>piles</code> 中的位置：
<ul>
<li>如果比当前递增序列的最大值大，则直接追加；</li>
<li>如果比某个值小，则替换掉该值，保持递增序列尽可能小。</li>
</ul>
</li>
<li>遍历结束后，<code v-pre>piles</code> 中的元素即为最长递增子序列。</li>
</ol>
<hr>
<h4 id="_4-2-vue-的伪代码" tabindex="-1"><a class="header-anchor" href="#_4-2-vue-的伪代码"><span><strong>4.2. Vue 的伪代码</strong></span></a></h4>
<p>以下是 Vue 中最长递增子序列的伪代码实现：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">getLongestIncreasingSubsequence</span><span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> piles <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">// 用于存储 LIS</span></span>
<span class="line">  <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token function">Array</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// 记录每个元素的前驱</span></span>
<span class="line">  <span class="token keyword">const</span> indices <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">// 记录 piles 中每个元素的索引</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">continue</span> <span class="token comment">// -1 表示该节点不在新列表中</span></span>
<span class="line">    <span class="token keyword">const</span> num <span class="token operator">=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 二分查找</span></span>
<span class="line">    <span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line">      right <span class="token operator">=</span> piles<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span></span>
<span class="line">    <span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;=</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">const</span> mid <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>left <span class="token operator">+</span> right<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span></span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>piles<span class="token punctuation">[</span>mid<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">&lt;</span> num<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        left <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span></span>
<span class="line">      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">        right <span class="token operator">=</span> mid <span class="token operator">-</span> <span class="token number">1</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 更新 piles 和前驱索引</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> piles<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      piles<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">=</span> i</span>
<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">      piles<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    indices<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> left <span class="token operator">></span> <span class="token number">0</span> <span class="token operator">?</span> piles<span class="token punctuation">[</span>left <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// 根据 indices 回溯得到 LIS</span></span>
<span class="line">  <span class="token keyword">let</span> lastIndex <span class="token operator">=</span> piles<span class="token punctuation">[</span>piles<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span></span>
<span class="line">  <span class="token keyword">const</span> lis <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line">  <span class="token keyword">while</span> <span class="token punctuation">(</span>lastIndex <span class="token operator">!==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    lis<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span>lastIndex<span class="token punctuation">)</span></span>
<span class="line">    lastIndex <span class="token operator">=</span> indices<span class="token punctuation">[</span>lastIndex<span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">return</span> lis</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h3 id="_5-vue-diff-中的具体应用" tabindex="-1"><a class="header-anchor" href="#_5-vue-diff-中的具体应用"><span><strong>5. Vue DIFF 中的具体应用</strong></span></a></h3>
<p>在 Vue 的 <strong>核心 DIFF 算法</strong>中，最长递增子序列应用于以下场景：</p>
<ol>
<li>当 Vue 比较两个列表时，先对节点进行简单的增删操作。</li>
<li>使用 <code v-pre>key</code> 标记的节点，Vue 会尝试寻找新旧列表中的相对顺序。</li>
<li>通过最长递增子序列计算，确定哪些节点可以保持不变（无需移动）。</li>
<li>对剩余的节点进行插入或移动操作，从而减少 DOM 操作次数。</li>
</ol>
<hr>
<h3 id="_6-总结" tabindex="-1"><a class="header-anchor" href="#_6-总结"><span><strong>6. 总结</strong></span></a></h3>
<ol>
<li><strong>最长递增子序列（LIS）</strong> 是 Vue DIFF 算法中的关键优化点，用于减少节点移动次数。</li>
<li>它通过标记新节点中的一部分节点为“无需移动”，从而优化 DOM 更新过程。</li>
<li>Vue 使用时间复杂度为 <strong>O(n log n)</strong> 的高效算法来计算 LIS，保证了虚拟 DOM 比较的性能。</li>
<li>在项目中，使用 <code v-pre>key</code> 属性显得尤为重要，因为它能够帮助 Vue 准确识别和比较节点，从而更好地发挥 DIFF 算法和 LIS 的优化效果。</li>
</ol>
<h2 id="如果要实现一个-vue3-的弹窗组件-你会如何设计" tabindex="-1"><a class="header-anchor" href="#如果要实现一个-vue3-的弹窗组件-你会如何设计"><span>如果要实现一个 Vue3 的弹窗组件，你会如何设计？</span></a></h2>
<p>实现一个 <strong>Vue 3 弹窗组件</strong>，需要考虑以下几个方面：弹窗的通用性、灵活性、可复用性以及易维护性。以下是设计弹窗组件的完整思路和实现步骤：</p>
<hr>
<h3 id="_1-功能需求分析" tabindex="-1"><a class="header-anchor" href="#_1-功能需求分析"><span><strong>1. 功能需求分析</strong></span></a></h3>
<p>设计一个通用的弹窗组件，需满足以下需求：</p>
<ol>
<li><strong>基本功能</strong>：支持弹窗的显示与隐藏。</li>
<li><strong>动态内容</strong>：通过插槽支持动态内容的插入。</li>
<li><strong>灵活配置</strong>：支持外部传入标题、按钮等配置项。</li>
<li><strong>事件通信</strong>：支持弹窗关闭、确认等事件的回调处理。</li>
<li><strong>动画效果</strong>：支持显示/隐藏的过渡动画。</li>
<li><strong>其他功能</strong>（可选）：
<ul>
<li>点击遮罩层关闭弹窗。</li>
<li>支持自定义宽高。</li>
<li>支持阻止滚动（防止背景页面滚动）。</li>
</ul>
</li>
</ol>
<hr>
<h3 id="_2-设计方案" tabindex="-1"><a class="header-anchor" href="#_2-设计方案"><span><strong>2. 设计方案</strong></span></a></h3>
<h4 id="_2-1-组件结构" tabindex="-1"><a class="header-anchor" href="#_2-1-组件结构"><span><strong>2.1. 组件结构</strong></span></a></h4>
<p>一个弹窗组件大致包含以下几部分：</p>
<ul>
<li><strong>遮罩层（Mask）</strong>：控制弹窗的背景层，通常带有半透明效果。</li>
<li><strong>弹窗容器（Container）</strong>：弹窗的主体部分，用于展示内容。</li>
<li><strong>插槽（Slots）</strong>：插入动态内容，如标题、正文、按钮。</li>
<li><strong>关闭按钮（Optional）</strong>：允许用户关闭弹窗。</li>
<li><strong>动画</strong>：为弹窗的显示与隐藏增加动画效果。</li>
</ul>
<hr>
<h3 id="_3-实现步骤" tabindex="-1"><a class="header-anchor" href="#_3-实现步骤"><span><strong>3. 实现步骤</strong></span></a></h3>
<h4 id="_3-1-基础代码结构" tabindex="-1"><a class="header-anchor" href="#_3-1-基础代码结构"><span><strong>3.1. 基础代码结构</strong></span></a></h4>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>visible<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>popup-overlay<span class="token punctuation">"</span></span> <span class="token attr-name">@click.self</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>onMaskClick<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>popup-container<span class="token punctuation">"</span></span> <span class="token attr-name">:style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>customStyle<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token comment">&lt;!-- Header 部分 --></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>popup-header<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>header<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">></span></span>{{ title }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>popup-close<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>close<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>×<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line">      <span class="token comment">&lt;!-- Body 部分 --></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>popup-body<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span><span class="token punctuation">></span></span></span>
<span class="line">          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>这是默认内容区域。<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line">      <span class="token comment">&lt;!-- Footer 部分 --></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>popup-footer<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>footer<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>confirm<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>确认<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></span>
<span class="line">          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>close<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>取消<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> watch<span class="token punctuation">,</span> onMounted<span class="token punctuation">,</span> onUnmounted <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Popup'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">modelValue</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> Boolean<span class="token punctuation">,</span> <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// 控制弹窗显示/隐藏</span></span>
<span class="line">    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span> <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">'提示'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// 弹窗标题</span></span>
<span class="line">    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span> <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">'400px'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// 自定义宽度</span></span>
<span class="line">    <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span> <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">'auto'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// 自定义高度</span></span>
<span class="line">    <span class="token literal-property property">maskClosable</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> Boolean<span class="token punctuation">,</span> <span class="token keyword">default</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// 点击遮罩关闭</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">emits</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'update:modelValue'</span><span class="token punctuation">,</span> <span class="token string">'confirm'</span><span class="token punctuation">,</span> <span class="token string">'close'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 定义事件</span></span>
<span class="line">  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span> <span class="token punctuation">{</span> emit <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> visible <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span>modelValue<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 自定义样式</span></span>
<span class="line">    <span class="token keyword">const</span> customStyle <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">width</span><span class="token operator">:</span> props<span class="token punctuation">.</span>width<span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">height</span><span class="token operator">:</span> props<span class="token punctuation">.</span>height<span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 关闭弹窗</span></span>
<span class="line">    <span class="token keyword">const</span> <span class="token function-variable function">close</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">'update:modelValue'</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span></span>
<span class="line">      <span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">'close'</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 确认弹窗</span></span>
<span class="line">    <span class="token keyword">const</span> <span class="token function-variable function">confirm</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">'confirm'</span><span class="token punctuation">)</span></span>
<span class="line">      <span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 点击遮罩关闭</span></span>
<span class="line">    <span class="token keyword">const</span> <span class="token function-variable function">onMaskClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span>props<span class="token punctuation">.</span>maskClosable<span class="token punctuation">)</span> <span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 同步 props 和内部状态</span></span>
<span class="line">    <span class="token function">watch</span><span class="token punctuation">(</span></span>
<span class="line">      <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> props<span class="token punctuation">.</span>modelValue<span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">(</span><span class="token parameter">newVal</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">        visible<span class="token punctuation">.</span>value <span class="token operator">=</span> newVal</span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 阻止背景滚动（可选）</span></span>
<span class="line">    <span class="token keyword">const</span> <span class="token function-variable function">disableScroll</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>style<span class="token punctuation">.</span>overflow <span class="token operator">=</span> <span class="token string">'hidden'</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">const</span> <span class="token function-variable function">enableScroll</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>style<span class="token punctuation">.</span>overflow <span class="token operator">=</span> <span class="token string">''</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token function">watch</span><span class="token punctuation">(</span>visible<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">newVal</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">      newVal <span class="token operator">?</span> <span class="token function">disableScroll</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token function">enableScroll</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> visible<span class="token punctuation">.</span>value <span class="token operator">&amp;&amp;</span> <span class="token function">disableScroll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token function">onUnmounted</span><span class="token punctuation">(</span>enableScroll<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span> visible<span class="token punctuation">,</span> customStyle<span class="token punctuation">,</span> close<span class="token punctuation">,</span> confirm<span class="token punctuation">,</span> onMaskClick <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css"></span>
<span class="line"><span class="token selector">.popup-overlay</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">position</span><span class="token punctuation">:</span> fixed<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">width</span><span class="token punctuation">:</span> 100vw<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.5<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">z-index</span><span class="token punctuation">:</span> 1000<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">.popup-container</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">background</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">border-radius</span><span class="token punctuation">:</span> 8px<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 4px 10px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.2<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">animation</span><span class="token punctuation">:</span> fadeIn 0.3s ease<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">.popup-header</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">padding</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">border-bottom</span><span class="token punctuation">:</span> 1px solid #f0f0f0<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">justify-content</span><span class="token punctuation">:</span> space-between<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">.popup-header h3</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">font-size</span><span class="token punctuation">:</span> 18px<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">.popup-close</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">background</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">font-size</span><span class="token punctuation">:</span> 18px<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">.popup-body</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">padding</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">.popup-footer</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">padding</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">border-top</span><span class="token punctuation">:</span> 1px solid #f0f0f0<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">text-align</span><span class="token punctuation">:</span> right<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token selector">button</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">margin-left</span><span class="token punctuation">:</span> 8px<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token atrule"><span class="token rule">@keyframes</span> fadeIn</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token selector">from</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>0.95<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token selector">to</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">opacity</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>1<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h3 id="_4-组件功能详解" tabindex="-1"><a class="header-anchor" href="#_4-组件功能详解"><span><strong>4. 组件功能详解</strong></span></a></h3>
<ol>
<li>
<p><strong><code v-pre>props</code> 属性</strong></p>
<ul>
<li><code v-pre>modelValue</code>：用于父组件控制弹窗的显示与隐藏。</li>
<li><code v-pre>title</code>：弹窗标题的默认值。</li>
<li><code v-pre>width</code> 和 <code v-pre>height</code>：支持用户自定义弹窗的宽高。</li>
<li><code v-pre>maskClosable</code>：是否支持点击遮罩关闭弹窗。</li>
</ul>
</li>
<li>
<p><strong>插槽</strong></p>
<ul>
<li><code v-pre>header</code>：自定义头部内容。</li>
<li>默认插槽：插入主体内容。</li>
<li><code v-pre>footer</code>：自定义底部按钮组。</li>
</ul>
</li>
<li>
<p><strong>事件</strong></p>
<ul>
<li><code v-pre>update:modelValue</code>：用于 v-model 双向绑定。</li>
<li><code v-pre>close</code>：关闭弹窗事件。</li>
<li><code v-pre>confirm</code>：点击确认按钮的事件。</li>
</ul>
</li>
<li>
<p><strong>动画效果</strong></p>
<ul>
<li>使用 <code v-pre>@keyframes</code> 提供弹窗的进入动画。</li>
</ul>
</li>
<li>
<p><strong>防止背景滚动</strong></p>
<ul>
<li>当弹窗显示时，通过修改 <code v-pre>document.body.style.overflow</code> 禁止滚动，提升用户体验。</li>
</ul>
</li>
</ol>
<hr>
<h3 id="_5-使用示例" tabindex="-1"><a class="header-anchor" href="#_5-使用示例"><span><strong>5. 使用示例</strong></span></a></h3>
<h4 id="父组件" tabindex="-1"><a class="header-anchor" href="#父组件"><span><strong>父组件</strong></span></a></h4>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>showPopup = true<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>打开弹窗<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Popup</span></span>
<span class="line">      <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>showPopup<span class="token punctuation">"</span></span></span>
<span class="line">      <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>提示<span class="token punctuation">"</span></span></span>
<span class="line">      <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>500px<span class="token punctuation">"</span></span></span>
<span class="line">      <span class="token attr-name">mask-closable</span></span>
<span class="line">      <span class="token attr-name">@confirm</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleConfirm<span class="token punctuation">"</span></span></span>
<span class="line">      <span class="token attr-name">@close</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleClose<span class="token punctuation">"</span></span></span>
<span class="line">    <span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#header</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">></span></span>自定义标题<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>这是弹窗的内容。<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#footer</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>showPopup = false<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>取消<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>handleConfirm<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>确认<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Popup</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">import</span> Popup <span class="token keyword">from</span> <span class="token string">'./Popup.vue'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span> Popup <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">showPopup</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">handleConfirm</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'用户点击了确认按钮'</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function">handleClose</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'弹窗关闭'</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h3 id="_6-扩展功能-可选" tabindex="-1"><a class="header-anchor" href="#_6-扩展功能-可选"><span><strong>6. 扩展功能（可选）</strong></span></a></h3>
<ul>
<li><strong>全局注册弹窗</strong>：通过 Vue 提供的 <code v-pre>provide/inject</code> 实现全局弹窗调用。</li>
<li><strong>动态创建弹窗</strong>：使用 <code v-pre>createVNode</code> 和 <code v-pre>render</code> 动态挂载弹窗组件。</li>
<li><strong>动画优化</strong>：支持更多过渡效果（如 <code v-pre>fade</code>、<code v-pre>slide</code>）。</li>
</ul>
<p>此设计思路保证了弹窗的通用性和灵活性，同时代码易读、易扩展，可适用于大多数项目需求。</p>
<h2 id="vue-的-template-标签有什么用" tabindex="-1"><a class="header-anchor" href="#vue-的-template-标签有什么用"><span>Vue 的 template 标签有什么用？</span></a></h2>
<p>在 Vue 中，<code v-pre>&lt;template&gt;</code> 标签是一个专门用于定义组件模板的容器标签。它不会被渲染为实际的 DOM 元素，而是作为 Vue 的模板编译系统的一部分，用于组织和编写模板代码。以下是 <code v-pre>template</code> 标签的主要作用和特点：</p>
<hr>
<h3 id="_1-主要作用" tabindex="-1"><a class="header-anchor" href="#_1-主要作用"><span><strong>1. 主要作用</strong></span></a></h3>
<h4 id="_1-1-定义组件模板" tabindex="-1"><a class="header-anchor" href="#_1-1-定义组件模板"><span><strong>1.1 定义组件模板</strong></span></a></h4>
<p><code v-pre>&lt;template&gt;</code> 标签用于定义 Vue 组件的 HTML 模板。模板中的内容将由 Vue 的模板编译器解析，并最终渲染为 DOM。</p>
<p>示例：</p>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>Hello, Vue!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>这是一个组件的模板内容。<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'MyComponent'</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>上述例子中，<code v-pre>&lt;template&gt;</code> 包裹了组件的所有模板代码，组件渲染时会根据模板生成对应的 DOM。</li>
</ul>
<hr>
<h4 id="_1-2-条件性内容渲染" tabindex="-1"><a class="header-anchor" href="#_1-2-条件性内容渲染"><span><strong>1.2 条件性内容渲染</strong></span></a></h4>
<p>在使用条件渲染（如 <code v-pre>v-if</code> 和 <code v-pre>v-else</code>）时，<code v-pre>&lt;template&gt;</code> 标签可以作为一个逻辑容器，避免在条件分支中生成多余的 DOM 元素。</p>
<p>示例：</p>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>isLoggedIn<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>欢迎回来，用户！<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">v-else</span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>请先登录。<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">isLoggedIn</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>在这种情况下，<code v-pre>&lt;template&gt;</code> 不会被渲染为实际的 DOM，但它的内容会根据条件动态渲染。</li>
</ul>
<hr>
<h4 id="_1-3-渲染列表-v-for" tabindex="-1"><a class="header-anchor" href="#_1-3-渲染列表-v-for"><span><strong>1.3 渲染列表（v-for）</strong></span></a></h4>
<p>当使用 <code v-pre>v-for</code> 指令渲染列表时，<code v-pre>&lt;template&gt;</code> 标签可以避免生成多余的父级 DOM 元素。</p>
<p>示例：</p>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item in items<span class="token punctuation">"</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>item.id<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>{{ item.name }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">items</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'苹果'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'香蕉'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'橙子'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>在这里，<code v-pre>&lt;template&gt;</code> 仅作为一个逻辑容器，<code v-pre>v-for</code> 的每次迭代会生成一个 <code v-pre>&lt;li&gt;</code> 元素，而不会额外生成包含 <code v-pre>&lt;template&gt;</code> 的多余 DOM。</li>
</ul>
<hr>
<h3 id="_2-特点" tabindex="-1"><a class="header-anchor" href="#_2-特点"><span><strong>2. 特点</strong></span></a></h3>
<ol>
<li>
<p><strong>不会渲染为实际 DOM</strong>：</p>
<ul>
<li><code v-pre>&lt;template&gt;</code> 标签只在编译阶段起作用，最终不会出现在 DOM 中。</li>
</ul>
</li>
<li>
<p><strong>用于逻辑分组</strong>：</p>
<ul>
<li>用于组织条件渲染和列表渲染的逻辑，而不会影响最终生成的 DOM 结构。</li>
</ul>
</li>
<li>
<p><strong>可以嵌套</strong>：</p>
<ul>
<li><code v-pre>&lt;template&gt;</code> 标签支持嵌套，用于更复杂的模板逻辑。</li>
</ul>
</li>
<li>
<p><strong>更语义化</strong>：</p>
<ul>
<li>使用 <code v-pre>&lt;template&gt;</code> 标签可以让模板结构更加清晰和易于维护。</li>
</ul>
</li>
</ol>
<hr>
<h3 id="_3-使用场景" tabindex="-1"><a class="header-anchor" href="#_3-使用场景"><span><strong>3. 使用场景</strong></span></a></h3>
<ol>
<li>
<p><strong>组件模板的根容器</strong>：</p>
<ul>
<li>Vue 组件必须有一个根节点，但在单文件组件（SFC）中，<code v-pre>&lt;template&gt;</code> 是用来包裹所有模板内容的标签。</li>
</ul>
</li>
<li>
<p><strong>避免生成多余 DOM</strong>：</p>
<ul>
<li>在条件渲染或列表渲染中，使用 <code v-pre>&lt;template&gt;</code> 可以避免不必要的父级 DOM 元素。</li>
</ul>
</li>
<li>
<p><strong>组织模板逻辑</strong>：</p>
<ul>
<li>在复杂模板中，使用 <code v-pre>&lt;template&gt;</code> 可以提升代码的可读性和维护性。</li>
</ul>
</li>
</ol>
<hr>
<h3 id="_4-注意事项" tabindex="-1"><a class="header-anchor" href="#_4-注意事项"><span><strong>4. 注意事项</strong></span></a></h3>
<ol>
<li><code v-pre>&lt;template&gt;</code> 只能用在模板中，不能直接插入到 DOM 中使用。</li>
<li>如果 <code v-pre>&lt;template&gt;</code> 中的内容没有绑定到模板指令（如 <code v-pre>v-if</code>、<code v-pre>v-for</code>），它的内容将被忽略，不会被渲染。</li>
<li>在 Vue 3 中，<code v-pre>&lt;template&gt;</code> 的作用并未改变，同时可以结合 Vue 3 的 <code v-pre>Fragment</code> 功能一起使用，使组件可以返回多个根节点。</li>
</ol>
<hr>
<h3 id="总结-4" tabindex="-1"><a class="header-anchor" href="#总结-4"><span><strong>总结</strong></span></a></h3>
<p><code v-pre>&lt;template&gt;</code> 标签是 Vue 模板设计中的重要工具，它提供了一个逻辑分组的容器，用于定义组件的结构、逻辑分支以及动态渲染，而不会生成多余的 DOM 元素。在实际开发中，合理使用 <code v-pre>&lt;template&gt;</code> 可以让代码更加简洁和高效。</p>
<h2 id="vue2-和-vue3-区别" tabindex="-1"><a class="header-anchor" href="#vue2-和-vue3-区别"><span>vue2 和 vue3 区别</span></a></h2>
<table>
<thead>
<tr>
<th>特性</th>
<th>Vue 2</th>
<th>Vue 3</th>
</tr>
</thead>
<tbody>
<tr>
<td>根节点要求</td>
<td>必须有唯一根节点</td>
<td>支持多个根节点（Fragment）</td>
</tr>
<tr>
<td>模板编译优化</td>
<td>静态内容重复编译</td>
<td>静态提升，性能更优</td>
</tr>
<tr>
<td>插槽支持</td>
<td><code v-pre>slot</code> 和 <code v-pre>slot-scope</code></td>
<td><code v-pre>v-slot</code> 更简洁</td>
</tr>
<tr>
<td>组合式 API 支持</td>
<td>不支持</td>
<td>支持，通过 <code v-pre>setup</code> 使用</td>
</tr>
<tr>
<td>多 <code v-pre>&lt;template&gt;</code> 标签</td>
<td>不支持</td>
<td>支持多 <code v-pre>&lt;template&gt;</code> 结合条件渲染</td>
</tr>
</tbody>
</table>
<p>Vue 3 的 <code v-pre>&lt;template&gt;</code> 变得更灵活和高效，使开发者能以更简洁的方式编写复杂模板逻辑，同时带来了更好的性能优化能力。</p>
</div></template>


