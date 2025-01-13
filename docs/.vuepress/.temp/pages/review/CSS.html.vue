<template><div><!-- @format -->
<h1 id="css-热门考题" tabindex="-1"><a class="header-anchor" href="#css-热门考题"><span>css 热门考题</span></a></h1>
<h2 id="_1、使用-link-和-import-引用-css-的区别" tabindex="-1"><a class="header-anchor" href="#_1、使用-link-和-import-引用-css-的区别"><span>1、使用 link 和 @import 引用 CSS 的区别</span></a></h2>
<table>
<thead>
<tr>
<th>特性</th>
<th><code v-pre>&lt;link&gt;</code></th>
<th><code v-pre>@import</code></th>
</tr>
</thead>
<tbody>
<tr>
<td>加载方式</td>
<td>并行加载</td>
<td>串行加载</td>
</tr>
<tr>
<td>语法位置</td>
<td>HTML 中使用</td>
<td>CSS 或 <code v-pre>&lt;style&gt;</code> 中使用</td>
</tr>
<tr>
<td>兼容性</td>
<td>兼容性更好</td>
<td>早期浏览器兼容性较差</td>
</tr>
<tr>
<td>性能</td>
<td>加载速度更快</td>
<td>加载速度较慢</td>
</tr>
<tr>
<td>控制能力</td>
<td>灵活性更高，支持多个属性</td>
<td>控制能力较弱</td>
</tr>
</tbody>
</table>
<h3 id="推荐使用场景" tabindex="-1"><a class="header-anchor" href="#推荐使用场景"><span><strong>推荐使用场景</strong></span></a></h3>
<ul>
<li><strong><code v-pre>&lt;link&gt;</code></strong>：首选方式，用于引用外部样式表，加载速度快且兼容性好。</li>
<li><strong><code v-pre>@import</code></strong>：可以在 CSS 文件中嵌套引入，但应避免用于关键样式加载，以免影响性能。</li>
</ul>
<h2 id="_2、css-中-display-属性的值及其作用" tabindex="-1"><a class="header-anchor" href="#_2、css-中-display-属性的值及其作用"><span>2、CSS 中 display 属性的值及其作用</span></a></h2>
<table>
<thead>
<tr>
<th>值</th>
<th>描述</th>
<th>示例用途</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>block</code></td>
<td>块级元素，占据整行</td>
<td><code v-pre>&lt;div&gt;</code></td>
</tr>
<tr>
<td><code v-pre>inline</code></td>
<td>内联元素，占据内容宽度</td>
<td><code v-pre>&lt;span&gt;</code></td>
</tr>
<tr>
<td><code v-pre>inline-block</code></td>
<td>内联块级，可设置宽高</td>
<td>图标、按钮等</td>
</tr>
<tr>
<td><code v-pre>flex</code></td>
<td>弹性盒模型</td>
<td>横向或纵向布局</td>
</tr>
<tr>
<td><code v-pre>grid</code></td>
<td>网格布局</td>
<td>二维布局</td>
</tr>
<tr>
<td><code v-pre>none</code></td>
<td>隐藏元素，不占据空间</td>
<td>隐藏菜单项</td>
</tr>
<tr>
<td><code v-pre>contents</code></td>
<td>仅显示子元素</td>
<td>结构化排版</td>
</tr>
<tr>
<td><code v-pre>table</code></td>
<td>表格布局</td>
<td>模拟表格</td>
</tr>
<tr>
<td><code v-pre>list-item</code></td>
<td>列表项</td>
<td><code v-pre>&lt;li&gt;</code> 列表</td>
</tr>
</tbody>
</table>
<p>选择合适的 <code v-pre>display</code> 值可以大幅提升布局的灵活性和性能！</p>
<h2 id="_3、doctype-文档类型-的作用是什么" tabindex="-1"><a class="header-anchor" href="#_3、doctype-文档类型-的作用是什么"><span>3、DOCTYPE（文档类型）的作用是什么？</span></a></h2>
<p><code v-pre>DOCTYPE</code>（文档类型声明）是 HTML 文档开头的一条声明，用来告知浏览器应该以哪种<strong>HTML 或 XML 标准</strong>解析该文档。它是 HTML 标准中至关重要的一部分，对页面的渲染方式和兼容性有直接影响。</p>
<hr>
<h3 id="_1-作用" tabindex="-1"><a class="header-anchor" href="#_1-作用"><span><strong>1. 作用</strong></span></a></h3>
<ol>
<li>
<p><strong>指定 HTML 文档的标准版本</strong></p>
<ul>
<li><code v-pre>DOCTYPE</code> 声明让浏览器知道当前文档使用的是哪种 HTML 标准（如 HTML4、HTML5 等），从而选择合适的解析规则。</li>
<li>不同 HTML 标准的解析方式可能有细微或显著差异。</li>
</ul>
</li>
<li>
<p><strong>触发浏览器的渲染模式</strong></p>
<ul>
<li>决定浏览器以 <strong>标准模式</strong> 或 <strong>怪异模式</strong>（Quirks Mode）渲染页面：
<ul>
<li><strong>标准模式</strong>：遵循最新的 HTML 和 CSS 标准解析页面。</li>
<li><strong>怪异模式</strong>：为兼容早期浏览器和过时的网页设计而采用的老旧解析方式。</li>
</ul>
</li>
<li><strong>文档中缺少 <code v-pre>DOCTYPE</code> 或错误声明 <code v-pre>DOCTYPE</code> 时，浏览器可能会进入怪异模式，导致布局和样式异常。</strong></li>
</ul>
</li>
<li>
<p><strong>提高浏览器的兼容性</strong></p>
<ul>
<li>明确指定文档类型有助于减少不同浏览器之间的解析差异，避免渲染问题。</li>
</ul>
</li>
</ol>
<hr>
<h3 id="_2-语法" tabindex="-1"><a class="header-anchor" href="#_2-语法"><span><strong>2. 语法</strong></span></a></h3>
<p><code v-pre>DOCTYPE</code> 声明的语法结构简单明了：</p>
<ul>
<li>
<p>HTML5 的 <code v-pre>DOCTYPE</code>：</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>不区分大小写。</li>
<li>是一种简化的声明形式。</li>
<li>告诉浏览器使用 HTML5 标准解析。</li>
</ul>
</li>
<li>
<p>HTML4 的 <code v-pre>DOCTYPE</code> 示例：</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span> <span class="token name">PUBLIC</span> <span class="token string">"-//W3C//DTD HTML 4.01 Transitional//EN"</span> <span class="token string">"http://www.w3.org/TR/html4/loose.dtd"</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>包含更详细的信息，包括版本、DTD（文档类型定义）地址等。</li>
<li>指定为 HTML 4.01 的宽松（Transitional）标准。</li>
</ul>
</li>
<li>
<p>XHTML 的 <code v-pre>DOCTYPE</code> 示例：</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span> <span class="token name">PUBLIC</span> <span class="token string">"-//W3C//DTD XHTML 1.0 Strict//EN"</span> <span class="token string">"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>声明文档遵循 XHTML 1.0 的严格模式。</li>
</ul>
</li>
</ul>
<hr>
<h3 id="_3-渲染模式" tabindex="-1"><a class="header-anchor" href="#_3-渲染模式"><span><strong>3. 渲染模式</strong></span></a></h3>
<p><code v-pre>DOCTYPE</code> 直接决定浏览器进入的渲染模式：</p>
<ol>
<li>
<p><strong>标准模式（Standards Mode）</strong></p>
<ul>
<li>浏览器完全按照 W3C 的最新标准渲染页面。</li>
<li>需要正确声明 <code v-pre>DOCTYPE</code>。</li>
</ul>
</li>
<li>
<p><strong>怪异模式（Quirks Mode）</strong></p>
<ul>
<li>浏览器使用兼容早期版本的方式渲染页面，可能忽略部分 CSS 和布局规范。</li>
<li>发生在以下情况：
<ul>
<li>缺少 <code v-pre>DOCTYPE</code>。</li>
<li>错误的 <code v-pre>DOCTYPE</code> 声明。</li>
<li>使用了过时的文档类型。</li>
</ul>
</li>
</ul>
</li>
<li>
<p><strong>接近标准模式（Almost Standards Mode 或 Limited Quirks Mode）</strong></p>
<ul>
<li>类似标准模式，但会对某些特定的旧式表格布局提供支持。</li>
<li>例如：HTML4 的宽松（Transitional）模式可能会触发。</li>
</ul>
</li>
</ol>
<hr>
<h3 id="_4-常见的-doctype-示例" tabindex="-1"><a class="header-anchor" href="#_4-常见的-doctype-示例"><span><strong>4. 常见的 DOCTYPE 示例</strong></span></a></h3>
<table>
<thead>
<tr>
<th>文档类型</th>
<th><code v-pre>DOCTYPE</code> 声明</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>HTML5</strong></td>
<td><code v-pre>&lt;!DOCTYPE html&gt;</code></td>
<td>使用 HTML5 标准，简洁，推荐。</td>
</tr>
<tr>
<td><strong>HTML4 严格模式</strong></td>
<td><code v-pre>&lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.01 Strict//EN&quot;&gt;</code></td>
<td>强调语法正确性，限制较多。</td>
</tr>
<tr>
<td><strong>HTML4 宽松模式</strong></td>
<td><code v-pre>&lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.01 Transitional//EN&quot;&gt;</code></td>
<td>宽松模式，允许部分过时标签和属性。</td>
</tr>
<tr>
<td><strong>XHTML1 严格模式</strong></td>
<td><code v-pre>&lt;!DOCTYPE html PUBLIC &quot;-//W3C//DTD XHTML 1.0 Strict//EN&quot; &quot;http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd&quot;&gt;</code></td>
<td>支持 XML 语法，强调语法一致性。</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="_5-总结" tabindex="-1"><a class="header-anchor" href="#_5-总结"><span><strong>5. 总结</strong></span></a></h3>
<ul>
<li><code v-pre>DOCTYPE</code> 的主要作用是<strong>声明文档类型</strong>，以便浏览器正确解析和渲染页面。</li>
<li>在现代开发中，推荐使用简洁的 HTML5 <code v-pre>DOCTYPE</code>：<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>正确的 <code v-pre>DOCTYPE</code> 声明可以避免怪异模式，保证页面兼容性与一致性。</li>
</ul>
<p><strong>注意</strong>：虽然现代浏览器对 <code v-pre>DOCTYPE</code> 的要求比过去宽松，但为了最佳实践和兼容性，仍然需要正确声明。</p>
<h2 id="_4、html-的-script-标签中-defer-和-async-有什么区别" tabindex="-1"><a class="header-anchor" href="#_4、html-的-script-标签中-defer-和-async-有什么区别"><span>4、HTML 的 script 标签中 defer 和 async 有什么区别？</span></a></h2>
<p>在 HTML 中，<code v-pre>&lt;script&gt;</code> 标签的 <code v-pre>defer</code> 和 <code v-pre>async</code> 属性用来控制脚本的加载和执行方式，它们的区别体现在脚本加载的<strong>顺序</strong>和<strong>执行时机</strong>上。</p>
<hr>
<table>
<thead>
<tr>
<th><strong>属性</strong></th>
<th><strong>加载过程</strong></th>
<th><strong>执行时机</strong></th>
<th><strong>执行顺序</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>defer</strong></td>
<td>脚本与 HTML 同时加载（异步加载）</td>
<td>HTML 完全解析后才执行</td>
<td>按脚本在 HTML 中的<strong>顺序</strong>执行</td>
</tr>
<tr>
<td><strong>async</strong></td>
<td>脚本与 HTML 同时加载（异步加载）</td>
<td>脚本加载完成后立即执行</td>
<td><strong>加载完成的顺序</strong>（不保证按照 HTML 顺序）</td>
</tr>
</tbody>
</table>
<hr>
</div></template>


