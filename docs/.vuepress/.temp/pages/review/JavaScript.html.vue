<template><div><!-- @format -->
<h1 id="javascript-热门考题" tabindex="-1"><a class="header-anchor" href="#javascript-热门考题"><span>javascript 热门考题</span></a></h1>
<h2 id="_1、为什么-javascript-中-0-1-0-2-0-3-如何让其相等" tabindex="-1"><a class="header-anchor" href="#_1、为什么-javascript-中-0-1-0-2-0-3-如何让其相等"><span>1、为什么 JavaScript 中 0.1 + 0.2 !== 0.3，如何让其相等？</span></a></h2>
<h3 id="为什么-0-1-0-2-0-3" tabindex="-1"><a class="header-anchor" href="#为什么-0-1-0-2-0-3"><span><strong>为什么 <code v-pre>0.1 + 0.2 !== 0.3</code>？</strong></span></a></h3>
<h4 id="_1-原因-浮点数精度问题" tabindex="-1"><a class="header-anchor" href="#_1-原因-浮点数精度问题"><span><strong>1. 原因：浮点数精度问题</strong></span></a></h4>
<p>在 JavaScript 中，数字是以 <strong>64 位双精度浮点数</strong>（遵循 IEEE 754 标准）表示的。这种表示方法导致某些十进制小数在二进制中无法精确表示。</p>
<ul>
<li>
<p><strong>浮点数表示：</strong></p>
<ul>
<li>在十进制中，<code v-pre>0.1</code> 和 <code v-pre>0.2</code> 是有限的小数。</li>
<li>在二进制中，<code v-pre>0.1</code> 和 <code v-pre>0.2</code> 是无限循环小数，存储时会被截断为有限位数。</li>
</ul>
<p>例如：</p>
<ul>
<li><code v-pre>0.1</code> 的二进制近似值为：<code v-pre>0.0001100110011001100110011001100110011001100110011</code>...</li>
<li><code v-pre>0.2</code> 的二进制近似值为：<code v-pre>0.001100110011001100110011001100110011001100110011</code>...</li>
</ul>
</li>
<li>
<p><strong>加法时的精度丢失：</strong></p>
<ul>
<li>当 <code v-pre>0.1</code> 和 <code v-pre>0.2</code> 的近似值相加时，结果不是精确的 <code v-pre>0.3</code>，而是一个非常接近 <code v-pre>0.3</code> 的值：<code v-pre>0.30000000000000004</code>。</li>
</ul>
</li>
</ul>
<p>因此，<code v-pre>0.1 + 0.2 !== 0.3</code>。</p>
<hr>
<h4 id="_2-如何验证这一问题" tabindex="-1"><a class="header-anchor" href="#_2-如何验证这一问题"><span><strong>2. 如何验证这一问题？</strong></span></a></h4>
<p>你可以用以下代码查看结果：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">0.1</span> <span class="token operator">+</span> <span class="token number">0.2</span><span class="token punctuation">)</span> <span class="token comment">// 0.30000000000000004</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">0.1</span> <span class="token operator">+</span> <span class="token number">0.2</span> <span class="token operator">===</span> <span class="token number">0.3</span><span class="token punctuation">)</span> <span class="token comment">// false</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h3 id="如何让-0-1-0-2-0-3" tabindex="-1"><a class="header-anchor" href="#如何让-0-1-0-2-0-3"><span><strong>如何让 <code v-pre>0.1 + 0.2 === 0.3</code>？</strong></span></a></h3>
<h4 id="_1-解决方法-通过误差范围判断" tabindex="-1"><a class="header-anchor" href="#_1-解决方法-通过误差范围判断"><span><strong>1. 解决方法：通过误差范围判断</strong></span></a></h4>
<p>由于浮点数运算有精度问题，可以引入一个误差范围（epsilon，通常为非常小的值）来判断两个数字是否“足够接近”。</p>
<p>示例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> epsilon <span class="token operator">=</span> Number<span class="token punctuation">.</span><span class="token constant">EPSILON</span> <span class="token comment">// 2.220446049250313e-16</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span><span class="token number">0.1</span> <span class="token operator">+</span> <span class="token number">0.2</span> <span class="token operator">-</span> <span class="token number">0.3</span><span class="token punctuation">)</span> <span class="token operator">&lt;</span> epsilon<span class="token punctuation">)</span> <span class="token comment">// true</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p><strong><code v-pre>Number.EPSILON</code>：</strong><br>
这是 JavaScript 中表示两个浮点数之间最小差异的常量。</p>
</blockquote>
<hr>
<h4 id="_2-解决方法-使用-tofixed-或-toprecision-修正精度" tabindex="-1"><a class="header-anchor" href="#_2-解决方法-使用-tofixed-或-toprecision-修正精度"><span><strong>2. 解决方法：使用 <code v-pre>toFixed</code> 或 <code v-pre>toPrecision</code> 修正精度</strong></span></a></h4>
<p>通过限制小数位数，可以避免浮点误差。但这是一种近似解决方案，因为舍入可能导致意外结果。</p>
<p>示例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> sum <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">0.1</span> <span class="token operator">+</span> <span class="token number">0.2</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// 保留 1 位小数</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>sum<span class="token punctuation">)</span> <span class="token comment">// "0.3"</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>sum <span class="token operator">==</span> <span class="token number">0.3</span><span class="token punctuation">)</span> <span class="token comment">// true</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：<code v-pre>toFixed</code> 返回的是字符串，需要用 <code v-pre>parseFloat</code> 转回数字。</p>
<hr>
<h4 id="_3-解决方法-将浮点数转换为整数处理" tabindex="-1"><a class="header-anchor" href="#_3-解决方法-将浮点数转换为整数处理"><span><strong>3. 解决方法：将浮点数转换为整数处理</strong></span></a></h4>
<p>通过放大小数（例如乘以 10 或 100），将其转为整数进行运算，避免小数的二进制表示误差。</p>
<p>示例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> sum <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">0.1</span> <span class="token operator">*</span> <span class="token number">10</span> <span class="token operator">+</span> <span class="token number">0.2</span> <span class="token operator">*</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">10</span> <span class="token comment">// 放大为整数计算</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>sum<span class="token punctuation">)</span> <span class="token comment">// 0.3</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>sum <span class="token operator">===</span> <span class="token number">0.3</span><span class="token punctuation">)</span> <span class="token comment">// true</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h4 id="_4-使用第三方库" tabindex="-1"><a class="header-anchor" href="#_4-使用第三方库"><span><strong>4. 使用第三方库</strong></span></a></h4>
<p>在一些对精度要求较高的场景中（如金融计算），可以使用第三方库，如 <a href="https://github.com/MikeMcl/decimal.js" target="_blank" rel="noopener noreferrer">Decimal.js</a> 或 <a href="https://github.com/MikeMcl/big.js" target="_blank" rel="noopener noreferrer">Big.js</a>。</p>
<p>示例（使用 Decimal.js）：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">// 安装：npm install decimal.js</span></span>
<span class="line"><span class="token keyword">const</span> Decimal <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'decimal.js'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> sum <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Decimal</span><span class="token punctuation">(</span><span class="token number">0.1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">plus</span><span class="token punctuation">(</span><span class="token number">0.2</span><span class="token punctuation">)</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>sum<span class="token punctuation">.</span><span class="token function">toNumber</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 0.3</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>sum<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token number">0.3</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// true</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span><strong>总结</strong></span></a></h3>
<ul>
<li><code v-pre>0.1 + 0.2 !== 0.3</code> 是因为浮点数的二进制表示精度问题。</li>
<li>常见解决方案：
<ol>
<li>使用误差范围（<code v-pre>Number.EPSILON</code>）。</li>
<li>使用 <code v-pre>toFixed</code> 或 <code v-pre>toPrecision</code> 修正精度。</li>
<li>转换为整数运算。</li>
<li>使用专门的高精度计算库（如 Decimal.js）。</li>
</ol>
</li>
</ul>
<p>根据场景选择合适的方法来解决浮点数精度问题！</p>
<h2 id="_2、typeof-和-instanceof-有什么区别" tabindex="-1"><a class="header-anchor" href="#_2、typeof-和-instanceof-有什么区别"><span>2、typeof 和 instanceof 有什么区别？</span></a></h2>
<h3 id="typeof-和-instanceof-的区别" tabindex="-1"><a class="header-anchor" href="#typeof-和-instanceof-的区别"><span><strong><code v-pre>typeof</code> 和 <code v-pre>instanceof</code> 的区别</strong></span></a></h3>
<p><code v-pre>typeof</code> 和 <code v-pre>instanceof</code> 是 JavaScript 中常用的两种类型判断方式，但它们的作用、用途和适用场景有所不同。以下是详细的对比和区别：</p>
<hr>
<h3 id="_1-typeof-的特点" tabindex="-1"><a class="header-anchor" href="#_1-typeof-的特点"><span><strong>1. <code v-pre>typeof</code> 的特点</strong></span></a></h3>
<h4 id="_1-1-用途" tabindex="-1"><a class="header-anchor" href="#_1-1-用途"><span><strong>1.1 用途</strong></span></a></h4>
<ul>
<li>用于判断变量的数据类型。</li>
<li>返回一个字符串，表示变量的基本类型或特殊对象类型。</li>
</ul>
<h4 id="_1-2-返回值" tabindex="-1"><a class="header-anchor" href="#_1-2-返回值"><span><strong>1.2 返回值</strong></span></a></h4>
<p><code v-pre>typeof</code> 的返回值是以下几种字符串：</p>
<table>
<thead>
<tr>
<th>类型</th>
<th>返回值</th>
<th>示例</th>
</tr>
</thead>
<tbody>
<tr>
<td>Undefined</td>
<td><code v-pre>'undefined'</code></td>
<td><code v-pre>typeof undefined</code></td>
</tr>
<tr>
<td>Null</td>
<td><code v-pre>'object'</code> (特殊)</td>
<td><code v-pre>typeof null</code></td>
</tr>
<tr>
<td>Boolean</td>
<td><code v-pre>'boolean'</code></td>
<td><code v-pre>typeof true</code>, <code v-pre>typeof false</code></td>
</tr>
<tr>
<td>Number</td>
<td><code v-pre>'number'</code></td>
<td><code v-pre>typeof 42</code>, <code v-pre>typeof NaN</code></td>
</tr>
<tr>
<td>BigInt</td>
<td><code v-pre>'bigint'</code></td>
<td><code v-pre>typeof 123n</code></td>
</tr>
<tr>
<td>String</td>
<td><code v-pre>'string'</code></td>
<td><code v-pre>typeof 'hello'</code></td>
</tr>
<tr>
<td>Symbol</td>
<td><code v-pre>'symbol'</code></td>
<td><code v-pre>typeof Symbol('id')</code></td>
</tr>
<tr>
<td>Function</td>
<td><code v-pre>'function'</code></td>
<td><code v-pre>typeof function() {}</code></td>
</tr>
<tr>
<td>Object</td>
<td><code v-pre>'object'</code></td>
<td><code v-pre>typeof {}</code>, <code v-pre>typeof [1, 2, 3]</code></td>
</tr>
</tbody>
</table>
<h4 id="_1-3-注意事项" tabindex="-1"><a class="header-anchor" href="#_1-3-注意事项"><span><strong>1.3 注意事项</strong></span></a></h4>
<ol>
<li>
<p><strong>对 <code v-pre>null</code> 的判断不准确：</strong></p>
<ul>
<li><code v-pre>typeof null</code> 返回 <code v-pre>'object'</code>，这是 JavaScript 的历史遗留问题，并不是严格意义上的正确类型。</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token comment">// 'object'</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p><strong>区分对象和数组：</strong></p>
<ul>
<li>对于普通对象和数组，<code v-pre>typeof</code> 都返回 <code v-pre>'object'</code>，无法进一步区分。</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// 'object'</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// 'object'</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>无法识别具体对象类型：</strong></p>
<ul>
<li>无法区分具体的对象类型（如日期、正则表达式等）。</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 'object'</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> <span class="token operator">/</span>regex<span class="token operator">/</span><span class="token punctuation">)</span> <span class="token comment">// 'object'</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>准确判断函数：</strong></p>
<ul>
<li>函数是唯一会被 <code v-pre>typeof</code> 识别为 <code v-pre>'function'</code> 的值。</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// 'function'</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
</ol>
<hr>
<h3 id="_2-instanceof-的特点" tabindex="-1"><a class="header-anchor" href="#_2-instanceof-的特点"><span><strong>2. <code v-pre>instanceof</code> 的特点</strong></span></a></h3>
<h4 id="_2-1-用途" tabindex="-1"><a class="header-anchor" href="#_2-1-用途"><span><strong>2.1 用途</strong></span></a></h4>
<ul>
<li>用于判断一个对象是否是某个构造函数的实例。</li>
<li>检测的是对象与构造函数的原型链关系。</li>
</ul>
<h4 id="_2-2-语法" tabindex="-1"><a class="header-anchor" href="#_2-2-语法"><span><strong>2.2 语法</strong></span></a></h4>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">object <span class="token keyword">instanceof</span> <span class="token class-name">Constructor</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li><strong><code v-pre>object</code></strong>：需要检查的对象。</li>
<li><strong><code v-pre>Constructor</code></strong>：构造函数。</li>
</ul>
<h4 id="_2-3-返回值" tabindex="-1"><a class="header-anchor" href="#_2-3-返回值"><span><strong>2.3 返回值</strong></span></a></h4>
<ul>
<li>返回布尔值：<code v-pre>true</code> 或 <code v-pre>false</code>。</li>
</ul>
<h4 id="_2-4-判断原理" tabindex="-1"><a class="header-anchor" href="#_2-4-判断原理"><span><strong>2.4 判断原理</strong></span></a></h4>
<p><code v-pre>instanceof</code> 检查的是 <strong>对象的原型链</strong>，即：</p>
<ul>
<li><code v-pre>object.__proto__</code> 是否指向 <code v-pre>Constructor.prototype</code>，或原型链上是否存在该构造函数的 <code v-pre>prototype</code>。</li>
</ul>
<p>示例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">const</span> person <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person <span class="token keyword">instanceof</span> <span class="token class-name">Person</span><span class="token punctuation">)</span> <span class="token comment">// true</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person <span class="token keyword">instanceof</span> <span class="token class-name">Object</span><span class="token punctuation">)</span> <span class="token comment">// true (因为所有对象最终继承自 Object)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-5-注意事项" tabindex="-1"><a class="header-anchor" href="#_2-5-注意事项"><span><strong>2.5 注意事项</strong></span></a></h4>
<ol>
<li>
<p><strong>只适用于对象：</strong></p>
<ul>
<li><code v-pre>instanceof</code> 检查的是原型链，因此对于基本数据类型（如 <code v-pre>string</code>、<code v-pre>number</code>）会直接返回 <code v-pre>false</code>。</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">42</span> <span class="token keyword">instanceof</span> <span class="token class-name">Number</span><span class="token punctuation">)</span> <span class="token comment">// false</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Number</span><span class="token punctuation">(</span><span class="token number">42</span><span class="token punctuation">)</span> <span class="token keyword">instanceof</span> <span class="token class-name">Number</span><span class="token punctuation">)</span> <span class="token comment">// true</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>无法判断基本类型：</strong></p>
<ul>
<li>对于基本类型（如 <code v-pre>null</code>、<code v-pre>undefined</code>），<code v-pre>instanceof</code> 无法使用，直接报错或返回 <code v-pre>false</code>。</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">null</span> <span class="token keyword">instanceof</span> <span class="token class-name">Object</span><span class="token punctuation">)</span> <span class="token comment">// false</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">undefined</span> <span class="token keyword">instanceof</span> <span class="token class-name">Object</span><span class="token punctuation">)</span> <span class="token comment">// false</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>原型链改变的影响：</strong></p>
<ul>
<li>如果对象的原型链被修改，<code v-pre>instanceof</code> 的判断结果也会发生变化。</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">function</span> <span class="token constant">A</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">A</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj <span class="token keyword">instanceof</span> <span class="token class-name">A</span><span class="token punctuation">)</span> <span class="token comment">// true</span></span>
<span class="line"></span>
<span class="line"><span class="token class-name">A</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">// 修改原型</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj <span class="token keyword">instanceof</span> <span class="token class-name">A</span><span class="token punctuation">)</span> <span class="token comment">// false</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>跨 iframe 或跨作用域问题：</strong></p>
<ul>
<li>不同 iframe 或作用域中的对象有不同的构造函数，<code v-pre>instanceof</code> 判断可能失效。</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> iframe <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'iframe'</span><span class="token punctuation">)</span></span>
<span class="line">document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>iframe<span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">const</span> iframeArray <span class="token operator">=</span> iframe<span class="token punctuation">.</span>contentWindow<span class="token punctuation">.</span>Array</span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">iframeArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr <span class="token keyword">instanceof</span> <span class="token class-name">Array</span><span class="token punctuation">)</span> <span class="token comment">// false (因为 Array 不同)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<hr>
<h3 id="_3-typeof-和-instanceof-的对比" tabindex="-1"><a class="header-anchor" href="#_3-typeof-和-instanceof-的对比"><span><strong>3. <code v-pre>typeof</code> 和 <code v-pre>instanceof</code> 的对比</strong></span></a></h3>
<table>
<thead>
<tr>
<th>特性</th>
<th><code v-pre>typeof</code></th>
<th><code v-pre>instanceof</code></th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>用途</strong></td>
<td>判断变量的基本数据类型</td>
<td>判断对象是否是某个构造函数的实例</td>
</tr>
<tr>
<td><strong>适用于</strong></td>
<td>基本类型和对象</td>
<td>对象（不适用于基本类型）</td>
</tr>
<tr>
<td><strong>返回值</strong></td>
<td>类型字符串</td>
<td>布尔值</td>
</tr>
<tr>
<td><strong>能否判断基本类型</strong></td>
<td>可以（但 <code v-pre>null</code> 有误差）</td>
<td>不适用</td>
</tr>
<tr>
<td><strong>能否区分具体对象类型</strong></td>
<td>不能区分具体对象（如数组、日期等）</td>
<td>可以检测特定构造函数</td>
</tr>
<tr>
<td><strong>跨作用域的影响</strong></td>
<td>不受影响</td>
<td>可能因构造函数不同而失效</td>
</tr>
<tr>
<td><strong>依赖原型链</strong></td>
<td>不依赖</td>
<td>依赖原型链</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="_4-结合使用的示例" tabindex="-1"><a class="header-anchor" href="#_4-结合使用的示例"><span><strong>4. 结合使用的示例</strong></span></a></h3>
<p>在实际开发中，可以结合 <code v-pre>typeof</code> 和 <code v-pre>instanceof</code> 使用，满足更多判断场景的需求。</p>
<h4 id="示例-1-判断变量类型" tabindex="-1"><a class="header-anchor" href="#示例-1-判断变量类型"><span>示例 1：判断变量类型</span></a></h4>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">checkType</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>value <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token string">'null'</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> value <span class="token operator">===</span> <span class="token string">'object'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>value <span class="token keyword">instanceof</span> <span class="token class-name">Array</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token string">'array'</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>value <span class="token keyword">instanceof</span> <span class="token class-name">Date</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token string">'date'</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token string">'object'</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token keyword">typeof</span> value</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">checkType</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 'null'</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">checkType</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 'array'</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">checkType</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 'date'</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">checkType</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 'object'</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">checkType</span><span class="token punctuation">(</span><span class="token number">42</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 'number'</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="示例-2-判断实例关系" tabindex="-1"><a class="header-anchor" href="#示例-2-判断实例关系"><span>示例 2：判断实例关系</span></a></h4>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">isPerson</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> obj <span class="token keyword">instanceof</span> <span class="token class-name">Person</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> john <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">'John'</span><span class="token punctuation">)</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">isPerson</span><span class="token punctuation">(</span>john<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// true</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">isPerson</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// false</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h3 id="总结-1" tabindex="-1"><a class="header-anchor" href="#总结-1"><span><strong>总结</strong></span></a></h3>
<ol>
<li><strong><code v-pre>typeof</code></strong> 用于检查基本数据类型（如 <code v-pre>number</code>、<code v-pre>string</code> 等），但无法区分对象类型，且对 <code v-pre>null</code> 的判断存在误差。</li>
<li><strong><code v-pre>instanceof</code></strong> 用于检查对象的原型链关系，适合判断是否是某个构造函数的实例，但无法判断基本数据类型。</li>
<li>在实际开发中，可以根据需求灵活选择，或者结合两者一起使用以提高准确性。</li>
</ol>
<h2 id="_3、typeof-null-的结果是什么-为什么" tabindex="-1"><a class="header-anchor" href="#_3、typeof-null-的结果是什么-为什么"><span>3、typeof null 的结果是什么？为什么？</span></a></h2>
<h3 id="typeof-null-的结果是什么" tabindex="-1"><a class="header-anchor" href="#typeof-null-的结果是什么"><span><strong><code v-pre>typeof null</code> 的结果是什么？</strong></span></a></h3>
<p>在 JavaScript 中，<code v-pre>typeof null</code> 的结果是：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token comment">// 'object'</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><hr>
<h3 id="为什么-typeof-null-返回-object" tabindex="-1"><a class="header-anchor" href="#为什么-typeof-null-返回-object"><span><strong>为什么 <code v-pre>typeof null</code> 返回 <code v-pre>'object'</code>？</strong></span></a></h3>
<h4 id="_1-javascript-的设计历史遗留问题" tabindex="-1"><a class="header-anchor" href="#_1-javascript-的设计历史遗留问题"><span><strong>1. JavaScript 的设计历史遗留问题</strong></span></a></h4>
<ul>
<li>
<p>JavaScript 在最初的实现中，使用低位存储变量的类型信息。</p>
</li>
<li>
<p>在这种设计下，变量类型由其内部的二进制表示的低几位决定：</p>
<ul>
<li>对象的类型标识是二进制的前几位是 <code v-pre>000</code>。</li>
<li><code v-pre>null</code> 的内部表示是全零（<code v-pre>00000000</code>），因此被错误地识别为对象。</li>
</ul>
<blockquote>
<p><strong>具体原因：</strong> <code v-pre>null</code> 的值在底层被存储为一个 32 位的空指针，其低位也为 <code v-pre>000</code>，因此 <code v-pre>typeof null</code> 返回了 <code v-pre>'object'</code>。</p>
</blockquote>
</li>
</ul>
<h4 id="_2-标准未修复" tabindex="-1"><a class="header-anchor" href="#_2-标准未修复"><span><strong>2. 标准未修复</strong></span></a></h4>
<ul>
<li>尽管这个问题被发现了，但由于修复会导致大量已有代码出现兼容性问题，JavaScript 一直保留了这一行为。</li>
<li>因此，<code v-pre>typeof null</code> 返回 <code v-pre>'object'</code> 被视为一个“历史遗留的 Bug”，但已成为标准的一部分。</li>
</ul>
<hr>
<h3 id="如何准确判断-null" tabindex="-1"><a class="header-anchor" href="#如何准确判断-null"><span><strong>如何准确判断 <code v-pre>null</code>？</strong></span></a></h3>
<p>由于 <code v-pre>typeof null</code> 的结果不准确，可以使用以下方法判断 <code v-pre>null</code>：</p>
<h4 id="_1-严格等于-推荐" tabindex="-1"><a class="header-anchor" href="#_1-严格等于-推荐"><span><strong>1. 严格等于（推荐）</strong></span></a></h4>
<p>使用 <code v-pre>===</code> 判断是否为 <code v-pre>null</code>：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> value <span class="token operator">=</span> <span class="token keyword">null</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token comment">// true</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-object-prototype-tostring" tabindex="-1"><a class="header-anchor" href="#_2-object-prototype-tostring"><span><strong>2. Object.prototype.toString</strong></span></a></h4>
<p>利用 <code v-pre>Object.prototype.toString.call</code> 判断数据类型：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> value <span class="token operator">=</span> <span class="token keyword">null</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// "[object Null]"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h3 id="总结-2" tabindex="-1"><a class="header-anchor" href="#总结-2"><span><strong>总结</strong></span></a></h3>
<ul>
<li><strong><code v-pre>typeof null</code> 返回 <code v-pre>'object'</code></strong> 是 JavaScript 的历史遗留问题，因为 <code v-pre>null</code> 在底层被当作一个空对象指针表示。</li>
<li>这种行为虽然不符合直觉，但已成为语言规范的一部分。</li>
<li>为了准确判断 <code v-pre>null</code>，建议使用严格等于 <code v-pre>=== null</code> 或 <code v-pre>Object.prototype.toString</code> 方法。</li>
</ul>
<h2 id="_4、javascript-中-null-和-undefined-的区别是什么" tabindex="-1"><a class="header-anchor" href="#_4、javascript-中-null-和-undefined-的区别是什么"><span>4、JavaScript 中 null 和 undefined 的区别是什么？</span></a></h2>
<h3 id="null-和-undefined-的区别" tabindex="-1"><a class="header-anchor" href="#null-和-undefined-的区别"><span><strong><code v-pre>null</code> 和 <code v-pre>undefined</code> 的区别</strong></span></a></h3>
<p>在 JavaScript 中，<code v-pre>null</code> 和 <code v-pre>undefined</code> 都表示“空”或“无”的状态，但它们有明显的区别，适用场景和语义也不同。</p>
<hr>
<h3 id="_1-定义" tabindex="-1"><a class="header-anchor" href="#_1-定义"><span><strong>1. 定义</strong></span></a></h3>
<h4 id="undefined" tabindex="-1"><a class="header-anchor" href="#undefined"><span><strong><code v-pre>undefined</code></strong></span></a></h4>
<ul>
<li>表示“未定义”。</li>
<li>一个变量声明了但没有赋值时，它的值是 <code v-pre>undefined</code>。</li>
<li>JavaScript 内置的一些函数或对象属性没有返回值时，会默认返回 <code v-pre>undefined</code>。</li>
</ul>
<h4 id="null" tabindex="-1"><a class="header-anchor" href="#null"><span><strong><code v-pre>null</code></strong></span></a></h4>
<ul>
<li>表示“空”或“无对象”。</li>
<li>通常用于显式地表示一个变量没有值、或者指向的对象是空的。</li>
<li>开发者在代码中可以主动设置变量为 <code v-pre>null</code>，表示这是一个空值或无效值。</li>
</ul>
<hr>
<h3 id="_2-语法上的区别" tabindex="-1"><a class="header-anchor" href="#_2-语法上的区别"><span><strong>2. 语法上的区别</strong></span></a></h3>
<table>
<thead>
<tr>
<th><strong>对比点</strong></th>
<th><code v-pre>undefined</code></th>
<th><code v-pre>null</code></th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>类型</strong></td>
<td><code v-pre>undefined</code></td>
<td><code v-pre>object</code>（历史遗留问题）</td>
</tr>
<tr>
<td><strong>是否可赋值</strong></td>
<td>一般不需要手动赋值，但可以赋值</td>
<td>可赋值，表示“无值”或“空对象”</td>
</tr>
<tr>
<td><strong>默认值</strong></td>
<td>是变量未赋值时的默认值</td>
<td>需要手动赋值，不是默认值</td>
</tr>
<tr>
<td><strong>使用场景</strong></td>
<td>表示“尚未初始化”或“未定义”状态</td>
<td>表示“空值”或“空对象引用”</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="_3-使用场景" tabindex="-1"><a class="header-anchor" href="#_3-使用场景"><span><strong>3. 使用场景</strong></span></a></h3>
<h4 id="undefined-的使用场景" tabindex="-1"><a class="header-anchor" href="#undefined-的使用场景"><span><strong><code v-pre>undefined</code> 的使用场景</strong></span></a></h4>
<ol>
<li>
<p><strong>变量未赋值：</strong>
如果声明了一个变量但没有初始化，默认值是 <code v-pre>undefined</code>。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> a</span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token comment">// undefined</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>函数没有返回值：</strong>
如果一个函数没有显式返回值，会返回 <code v-pre>undefined</code>。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">noReturn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">noReturn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// undefined</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>对象属性不存在：</strong>
如果尝试访问一个对象中不存在的属性，会得到 <code v-pre>undefined</code>。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>someProperty<span class="token punctuation">)</span> <span class="token comment">// undefined</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<hr>
<h4 id="null-的使用场景" tabindex="-1"><a class="header-anchor" href="#null-的使用场景"><span><strong><code v-pre>null</code> 的使用场景</strong></span></a></h4>
<ol>
<li>
<p><strong>初始化变量为“空值”：</strong>
当你明确知道某个变量将来会被赋值为对象，但当前为空时，可以将其初始化为 <code v-pre>null</code>。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> person <span class="token operator">=</span> <span class="token keyword">null</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span> <span class="token comment">// null</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>指代“空对象引用”：</strong>
<code v-pre>null</code> 常被用来表示一个变量现在没有任何对象引用。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> car <span class="token operator">=</span> <span class="token keyword">null</span> <span class="token comment">// 表示没有车的信息</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
</ol>
<hr>
<h3 id="_4-比较" tabindex="-1"><a class="header-anchor" href="#_4-比较"><span><strong>4. 比较</strong></span></a></h3>
<h4 id="相等性比较" tabindex="-1"><a class="header-anchor" href="#相等性比较"><span><strong>相等性比较</strong></span></a></h4>
<ul>
<li>使用 <code v-pre>==</code> 时，<code v-pre>null</code> 和 <code v-pre>undefined</code> 被认为是相等的。</li>
<li>使用 <code v-pre>===</code> 时，<code v-pre>null</code> 和 <code v-pre>undefined</code> 被认为是不同的。</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">null</span> <span class="token operator">==</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token comment">// true</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">null</span> <span class="token operator">===</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token comment">// false</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="注意-typeof-的区别" tabindex="-1"><a class="header-anchor" href="#注意-typeof-的区别"><span><strong>注意：<code v-pre>typeof</code> 的区别</strong></span></a></h4>
<ul>
<li><code v-pre>typeof undefined</code> 的结果是 <code v-pre>'undefined'</code>。</li>
<li><code v-pre>typeof null</code> 的结果是 <code v-pre>'object'</code>（这是一个历史遗留的设计缺陷）。</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token comment">// 'undefined'</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token comment">// 'object'</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h3 id="_5-常见误区与注意事项" tabindex="-1"><a class="header-anchor" href="#_5-常见误区与注意事项"><span><strong>5. 常见误区与注意事项</strong></span></a></h3>
<ol>
<li>
<p><strong>不要将 <code v-pre>undefined</code> 当作赋值使用：</strong></p>
<ul>
<li><code v-pre>undefined</code> 通常表示变量未初始化，手动赋值 <code v-pre>undefined</code> 会导致混淆，建议用 <code v-pre>null</code> 表示“无值”。</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> value <span class="token operator">=</span> <span class="token keyword">undefined</span> <span class="token comment">// 不推荐</span></span>
<span class="line"><span class="token keyword">let</span> value <span class="token operator">=</span> <span class="token keyword">null</span> <span class="token comment">// 推荐</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong><code v-pre>null</code> 不等于空字符串或 <code v-pre>0</code>：</strong></p>
<ul>
<li><code v-pre>null</code> 是一种空值，但它与其他空值（如空字符串 <code v-pre>''</code> 或 <code v-pre>0</code>）不同。</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">null</span> <span class="token operator">==</span> <span class="token string">''</span><span class="token punctuation">)</span> <span class="token comment">// false</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">null</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token comment">// false</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong><code v-pre>null</code> 和 <code v-pre>undefined</code> 不会被 JSON 序列化：</strong></p>
<ul>
<li><code v-pre>undefined</code> 在 JSON 中会被忽略，<code v-pre>null</code> 会作为值序列化。</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token keyword">undefined</span> <span class="token punctuation">}</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// '{"a":null}'</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<hr>
<h3 id="_6-总结" tabindex="-1"><a class="header-anchor" href="#_6-总结"><span><strong>6. 总结</strong></span></a></h3>
<table>
<thead>
<tr>
<th><strong>对比点</strong></th>
<th><strong><code v-pre>undefined</code></strong></th>
<th><strong><code v-pre>null</code></strong></th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>定义</strong></td>
<td>表示“未定义”</td>
<td>表示“空值”或“无对象”</td>
</tr>
<tr>
<td><strong>默认行为</strong></td>
<td>变量声明但未赋值时自动为 <code v-pre>undefined</code></td>
<td>需要手动赋值</td>
</tr>
<tr>
<td><strong>类型</strong></td>
<td><code v-pre>undefined</code></td>
<td><code v-pre>object</code>（历史遗留问题）</td>
</tr>
<tr>
<td><strong>比较</strong></td>
<td><code v-pre>undefined == null</code> 为 <code v-pre>true</code></td>
<td><code v-pre>undefined === null</code> 为 <code v-pre>false</code></td>
</tr>
<tr>
<td><strong>适用场景</strong></td>
<td>表示“变量未赋值”或“属性不存在”</td>
<td>表示“空值”或“没有对象引用”</td>
</tr>
</tbody>
</table>
<p><strong>结论：</strong></p>
<ul>
<li><strong>用 <code v-pre>undefined</code> 表示变量未初始化或未定义。</strong></li>
<li><strong>用 <code v-pre>null</code> 显式表示空值或无效值。</strong></li>
</ul>
<h2 id="_5、说说你对-js-作用域的理解" tabindex="-1"><a class="header-anchor" href="#_5、说说你对-js-作用域的理解"><span>5、说说你对 JS 作用域的理解？</span></a></h2>
<h3 id="javascript-作用域的理解" tabindex="-1"><a class="header-anchor" href="#javascript-作用域的理解"><span><strong>JavaScript 作用域的理解</strong></span></a></h3>
<p>在 JavaScript 中，<strong>作用域（Scope）</strong> 是指变量、函数、对象等可以被访问和操作的范围。作用域决定了一个变量、函数或对象在代码中是否可用。理解作用域对于编写高效和无错误的代码至关重要。</p>
<h4 id="_1-作用域的分类" tabindex="-1"><a class="header-anchor" href="#_1-作用域的分类"><span><strong>1. 作用域的分类</strong></span></a></h4>
<p>JavaScript 中的作用域可以分为以下几种：</p>
<ul>
<li><strong>全局作用域（Global Scope）</strong></li>
<li><strong>函数作用域（Function Scope）</strong></li>
<li><strong>块级作用域（Block Scope）</strong></li>
</ul>
<hr>
<h3 id="_2-全局作用域-global-scope" tabindex="-1"><a class="header-anchor" href="#_2-全局作用域-global-scope"><span><strong>2. 全局作用域（Global Scope）</strong></span></a></h3>
<ul>
<li>全局作用域是指在代码中的任何地方都可以访问的作用域。</li>
<li>如果一个变量在函数外部声明，它就是一个全局变量，存在于全局作用域中。可以通过 <code v-pre>window</code> 或 <code v-pre>globalThis</code> 对象访问（浏览器中是 <code v-pre>window</code>，Node.js 中是 <code v-pre>global</code>）。</li>
</ul>
<h4 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例：</span></a></h4>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> globalVar <span class="token operator">=</span> <span class="token string">"I'm a global variable"</span> <span class="token comment">// 全局变量</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">accessGlobal</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>globalVar<span class="token punctuation">)</span> <span class="token comment">// 可以访问全局变量</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token function">accessGlobal</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 输出: I'm a global variable</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>注意：</strong> 全局变量在代码中到处可见，容易被修改，可能导致意料之外的错误，因此使用全局变量时要谨慎。</li>
</ul>
<hr>
<h3 id="_3-函数作用域-function-scope" tabindex="-1"><a class="header-anchor" href="#_3-函数作用域-function-scope"><span><strong>3. 函数作用域（Function Scope）</strong></span></a></h3>
<ul>
<li>在 JavaScript 中，函数作用域是指在函数内部声明的变量只能在该函数内部访问。</li>
<li>使用 <code v-pre>var</code> 声明的变量具有函数作用域，即使在函数内部的不同代码块中，它们也处于相同的作用域内。</li>
<li>使用 <code v-pre>let</code> 和 <code v-pre>const</code> 声明的变量会有块级作用域，后面会进一步说明。</li>
</ul>
<h4 id="示例-1" tabindex="-1"><a class="header-anchor" href="#示例-1"><span>示例：</span></a></h4>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">testFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">var</span> functionVar <span class="token operator">=</span> <span class="token string">"I'm in function scope"</span> <span class="token comment">// 函数作用域内的变量</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>functionVar<span class="token punctuation">)</span> <span class="token comment">// 可以访问函数内部变量</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token function">testFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>functionVar<span class="token punctuation">)</span> <span class="token comment">// 报错: Uncaught ReferenceError: functionVar is not defined</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>注意：</strong> 函数作用域内的变量无法在函数外部访问，除非通过返回值或其他方式传递。</li>
</ul>
<hr>
<h3 id="_4-块级作用域-block-scope" tabindex="-1"><a class="header-anchor" href="#_4-块级作用域-block-scope"><span><strong>4. 块级作用域（Block Scope）</strong></span></a></h3>
<ul>
<li>块级作用域是指在代码块 <code v-pre>{}</code> 中声明的变量，仅在该代码块内有效。<code v-pre>let</code> 和 <code v-pre>const</code> 都具有块级作用域。</li>
<li><code v-pre>var</code> 声明的变量没有块级作用域，而是函数作用域，因此在 <code v-pre>if</code> 或 <code v-pre>for</code> 等代码块中声明的 <code v-pre>var</code> 变量，其作用域是函数级的，而不是块级的。</li>
</ul>
<h4 id="示例-2" tabindex="-1"><a class="header-anchor" href="#示例-2"><span>示例：</span></a></h4>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">let</span> blockVar <span class="token operator">=</span> <span class="token string">"I'm in block scope"</span> <span class="token comment">// 块级作用域内的变量</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>blockVar<span class="token punctuation">)</span> <span class="token comment">// 可以访问</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>blockVar<span class="token punctuation">)</span> <span class="token comment">// 报错: Uncaught ReferenceError: blockVar is not defined</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>注意：</strong> 使用 <code v-pre>let</code> 或 <code v-pre>const</code> 声明的变量，仅在所在的代码块中可见，超出该块就不可访问。</li>
</ul>
<hr>
<h3 id="_5-作用域链-scope-chain" tabindex="-1"><a class="header-anchor" href="#_5-作用域链-scope-chain"><span><strong>5. 作用域链（Scope Chain）</strong></span></a></h3>
<ul>
<li>JavaScript 作用域链是由多个作用域按嵌套关系组成的链式结构。在执行代码时，JavaScript 会根据作用域链来查找变量。</li>
<li>当在某个作用域内访问一个变量时，JavaScript 会从当前作用域开始查找，如果没有找到，就会查找外部作用域，直到全局作用域。</li>
</ul>
<h4 id="示例-3" tabindex="-1"><a class="header-anchor" href="#示例-3"><span>示例：</span></a></h4>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> outerVar <span class="token operator">=</span> <span class="token string">"I'm in the outer scope"</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">outerFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> innerVar <span class="token operator">=</span> <span class="token string">"I'm in the inner scope"</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">function</span> <span class="token function">innerFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>outerVar<span class="token punctuation">)</span> <span class="token comment">// 可以访问外部作用域的变量</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>innerVar<span class="token punctuation">)</span> <span class="token comment">// 可以访问当前作用域的变量</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token function">innerFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token function">outerFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>注意：</strong> JavaScript 会按照作用域链的顺序查找变量，直到找到为止。</li>
</ul>
<hr>
<h3 id="_6-闭包-closure-与作用域" tabindex="-1"><a class="header-anchor" href="#_6-闭包-closure-与作用域"><span><strong>6. 闭包（Closure）与作用域</strong></span></a></h3>
<p>闭包是 JavaScript 中非常重要的概念，指的是一个函数在其外部函数的作用域中“记住”了外部函数的变量，即使外部函数已经执行完毕，内部函数仍然可以访问外部函数的变量。</p>
<h4 id="示例-4" tabindex="-1"><a class="header-anchor" href="#示例-4"><span>示例：</span></a></h4>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">outerFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> outerVar <span class="token operator">=</span> <span class="token string">"I'm an outer variable"</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token function">innerFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>outerVar<span class="token punctuation">)</span> <span class="token comment">// 内部函数可以访问外部函数的变量</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> closure <span class="token operator">=</span> <span class="token function">outerFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token function">closure</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 输出: I'm an outer variable</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>注意：</strong> 即使 <code v-pre>outerFunction</code> 执行完毕，<code v-pre>innerFunction</code> 仍然能够访问 <code v-pre>outerVar</code>，这就是闭包的特性。</li>
</ul>
<hr>
<h3 id="_7-var-let-和-const-的作用域区别" tabindex="-1"><a class="header-anchor" href="#_7-var-let-和-const-的作用域区别"><span><strong>7. <code v-pre>var</code>, <code v-pre>let</code> 和 <code v-pre>const</code> 的作用域区别</strong></span></a></h3>
<ul>
<li>
<p><code v-pre>var</code>：具有函数作用域或全局作用域。它在声明时不会产生暂时性死区（hoisting），会被提升到作用域顶部，因此在声明之前就可以访问。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token comment">// undefined</span></span>
<span class="line"><span class="token keyword">var</span> x <span class="token operator">=</span> <span class="token number">10</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><code v-pre>let</code> 和 <code v-pre>const</code>：具有块级作用域，且在声明之前无法访问（暂时性死区），它们会在块级作用域内创建。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span> <span class="token comment">// ReferenceError: Cannot access 'y' before initialization</span></span>
<span class="line"><span class="token keyword">let</span> y <span class="token operator">=</span> <span class="token number">20</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>区别总结：</strong></p>
<ul>
<li><code v-pre>var</code> 具有函数作用域，没有暂时性死区，变量提升。</li>
<li><code v-pre>let</code> 和 <code v-pre>const</code> 具有块级作用域，并且在使用前会报错。</li>
</ul>
</li>
</ul>
<hr>
<h3 id="_8-垃圾回收与作用域" tabindex="-1"><a class="header-anchor" href="#_8-垃圾回收与作用域"><span><strong>8. 垃圾回收与作用域</strong></span></a></h3>
<p>作用域在 JavaScript 中与垃圾回收紧密相关。当一个变量超出作用域时，它会被标记为“不可达”，从而使垃圾回收机制能够回收这些不再使用的内存。</p>
<h4 id="示例-5" tabindex="-1"><a class="header-anchor" href="#示例-5"><span>示例：</span></a></h4>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">createClosure</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> bigData <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token string">'data'</span><span class="token punctuation">)</span> <span class="token comment">// 创建大量数据</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Closure function'</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> closure <span class="token operator">=</span> <span class="token function">createClosure</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// bigData 会被保留在闭包内</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>注意：</strong> <code v-pre>bigData</code> 会被保留在闭包内，直到闭包不再被引用，垃圾回收才能回收内存。</li>
</ul>
<hr>
<h3 id="总结-3" tabindex="-1"><a class="header-anchor" href="#总结-3"><span><strong>总结</strong></span></a></h3>
<p>JavaScript 的作用域是一个决定变量访问权限的机制。它影响着变量的可见性和生命周期，主要有以下几点需要理解：</p>
<ul>
<li><strong>全局作用域</strong>：在整个代码中都能访问的变量作用域。</li>
<li><strong>函数作用域</strong>：在函数内部声明的变量只能在函数内部访问。</li>
<li><strong>块级作用域</strong>：<code v-pre>let</code> 和 <code v-pre>const</code> 创建的变量只在代码块内有效。</li>
<li><strong>作用域链</strong>：多层嵌套的作用域，决定了查找变量的顺序。</li>
<li><strong>闭包</strong>：允许内部函数访问外部函数作用域中的变量。</li>
</ul>
<p>理解 JavaScript 的作用域对于避免变量污染、内存泄漏和其他错误非常重要。</p>
<h2 id="_6、let、const-和-var-的区别" tabindex="-1"><a class="header-anchor" href="#_6、let、const-和-var-的区别"><span>6、let、const 和 var 的区别</span></a></h2>
<h3 id="let、const-和-var-的区别" tabindex="-1"><a class="header-anchor" href="#let、const-和-var-的区别"><span><strong><code v-pre>let</code>、<code v-pre>const</code> 和 <code v-pre>var</code> 的区别</strong></span></a></h3>
<p>在 JavaScript 中，<code v-pre>let</code>、<code v-pre>const</code> 和 <code v-pre>var</code> 都用于声明变量，但它们的行为和作用范围有显著的区别。以下是它们的详细比较：</p>
<hr>
<h3 id="_1-作用域-scope" tabindex="-1"><a class="header-anchor" href="#_1-作用域-scope"><span><strong>1. 作用域（Scope）</strong></span></a></h3>
<ul>
<li>
<p><strong><code v-pre>var</code>：</strong></p>
<ul>
<li>具有<strong>函数作用域</strong>（function scope），即它在声明它的函数内有效。如果在函数外部声明，它会成为一个全局变量。</li>
<li>不能在块级作用域（如 <code v-pre>if</code>、<code v-pre>for</code> 等代码块）中创建新的作用域。</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">10</span></span>
<span class="line"><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">20</span> <span class="token comment">// 会影响外部的 a</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token comment">// 输出 20</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong><code v-pre>let</code> 和 <code v-pre>const</code>：</strong></p>
<ul>
<li>都具有<strong>块级作用域</strong>（block scope），即它们只在声明所在的代码块中有效。</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token number">10</span></span>
<span class="line"><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token number">20</span> <span class="token comment">// 只在块级作用域内有效</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span> <span class="token comment">// 输出 20</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span> <span class="token comment">// 输出 10</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<hr>
<h3 id="_2-变量提升-hoisting" tabindex="-1"><a class="header-anchor" href="#_2-变量提升-hoisting"><span><strong>2. 变量提升（Hoisting）</strong></span></a></h3>
<ul>
<li>
<p><strong><code v-pre>var</code>：</strong></p>
<ul>
<li>变量会被提升到其所在作用域的顶部，但不会初始化。即使在声明之前使用 <code v-pre>var</code> 声明的变量，它的值也会是 <code v-pre>undefined</code>。</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span> <span class="token comment">// undefined</span></span>
<span class="line"><span class="token keyword">var</span> c <span class="token operator">=</span> <span class="token number">30</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong><code v-pre>let</code> 和 <code v-pre>const</code>：</strong></p>
<ul>
<li>变量会被提升，但它们在声明之前不能访问，会造成<strong>暂时性死区</strong>（Temporal Dead Zone，TDZ）。在 TDZ 内访问这些变量会抛出错误。</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span> <span class="token comment">// ReferenceError: Cannot access 'd' before initialization</span></span>
<span class="line"><span class="token keyword">let</span> d <span class="token operator">=</span> <span class="token number">40</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><code v-pre>const</code></strong> 也有类似的行为，但它不仅具有暂时性死区，还要求在声明时必须赋值。</p>
</li>
</ul>
<hr>
<h3 id="_3-重新赋值-reassignment" tabindex="-1"><a class="header-anchor" href="#_3-重新赋值-reassignment"><span><strong>3. 重新赋值（Reassignment）</strong></span></a></h3>
<ul>
<li>
<p><strong><code v-pre>var</code>：</strong></p>
<ul>
<li>变量可以重新赋值。没有限制。</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> e <span class="token operator">=</span> <span class="token number">50</span></span>
<span class="line">e <span class="token operator">=</span> <span class="token number">60</span> <span class="token comment">// 重新赋值是允许的</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token comment">// 输出 60</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong><code v-pre>let</code>：</strong></p>
<ul>
<li>变量可以重新赋值。与 <code v-pre>var</code> 类似，但具有块级作用域。</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> f <span class="token operator">=</span> <span class="token number">70</span></span>
<span class="line">f <span class="token operator">=</span> <span class="token number">80</span> <span class="token comment">// 重新赋值是允许的</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span> <span class="token comment">// 输出 80</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong><code v-pre>const</code>：</strong></p>
<ul>
<li>变量一旦声明并初始化后，其值不能重新赋值。它是<strong>常量</strong>。</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> g <span class="token operator">=</span> <span class="token number">90</span></span>
<span class="line">g <span class="token operator">=</span> <span class="token number">100</span> <span class="token comment">// TypeError: Assignment to constant variable</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意：</strong> <code v-pre>const</code> 对象或数组的引用不能改变，但可以修改其内部的内容（例如对象属性或数组元素）。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span></span>
<span class="line">arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span> <span class="token comment">// 允许修改数组的内容</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span> <span class="token comment">// 输出 [1, 2, 3, 4]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<hr>
<h3 id="_4-全局对象属性" tabindex="-1"><a class="header-anchor" href="#_4-全局对象属性"><span><strong>4. 全局对象属性</strong></span></a></h3>
<ul>
<li>
<p><strong><code v-pre>var</code>：</strong></p>
<ul>
<li>如果在全局作用域中使用 <code v-pre>var</code> 声明变量，这个变量会成为全局对象的属性。在浏览器中，它会成为 <code v-pre>window</code> 对象的属性；在 Node.js 中，它会成为 <code v-pre>global</code> 对象的属性。</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> h <span class="token operator">=</span> <span class="token number">110</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>h<span class="token punctuation">)</span> <span class="token comment">// 输出 110 (浏览器中)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong><code v-pre>let</code> 和 <code v-pre>const</code>：</strong></p>
<ul>
<li>变量声明在全局作用域时，不会成为全局对象的属性。</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">120</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>i<span class="token punctuation">)</span> <span class="token comment">// undefined (浏览器中)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<hr>
<h3 id="_5-使用场景" tabindex="-1"><a class="header-anchor" href="#_5-使用场景"><span><strong>5. 使用场景</strong></span></a></h3>
<ul>
<li>
<p><strong><code v-pre>var</code>：</strong></p>
<ul>
<li>适用于旧代码中，现代 JavaScript 中尽量避免使用 <code v-pre>var</code>，因为它的作用域规则较为宽松，容易导致意外的行为。</li>
</ul>
</li>
<li>
<p><strong><code v-pre>let</code>：</strong></p>
<ul>
<li>用于声明可变的变量，尤其适用于块级作用域中的变量。</li>
</ul>
</li>
<li>
<p><strong><code v-pre>const</code>：</strong></p>
<ul>
<li>用于声明常量或不可重新赋值的变量，通常推荐用于声明不会改变的值。</li>
</ul>
</li>
</ul>
<hr>
<h3 id="_6-总结对比表" tabindex="-1"><a class="header-anchor" href="#_6-总结对比表"><span><strong>6. 总结对比表</strong></span></a></h3>
<table>
<thead>
<tr>
<th><strong>特性</strong></th>
<th><strong><code v-pre>var</code></strong></th>
<th><strong><code v-pre>let</code></strong></th>
<th><strong><code v-pre>const</code></strong></th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>作用域</strong></td>
<td>函数作用域 / 全局作用域</td>
<td>块级作用域</td>
<td>块级作用域</td>
</tr>
<tr>
<td><strong>变量提升</strong></td>
<td>提升至作用域顶部，但初始化为 <code v-pre>undefined</code></td>
<td>提升，但不能访问（TDZ）</td>
<td>提升，但不能访问（TDZ）</td>
</tr>
<tr>
<td><strong>是否可重新赋值</strong></td>
<td>是</td>
<td>是</td>
<td>否</td>
</tr>
<tr>
<td><strong>是否可以声明未初始化的变量</strong></td>
<td>可以</td>
<td>不可以</td>
<td>不可以</td>
</tr>
<tr>
<td><strong>全局对象属性</strong></td>
<td>是</td>
<td>否</td>
<td>否</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="_7-推荐使用" tabindex="-1"><a class="header-anchor" href="#_7-推荐使用"><span><strong>7. 推荐使用</strong></span></a></h3>
<ul>
<li><strong>现代 JavaScript 中推荐使用 <code v-pre>let</code> 和 <code v-pre>const</code>，尤其是 <code v-pre>const</code>，因为它能帮助你避免不必要的修改，提高代码的可维护性和可读性。</strong></li>
<li><strong><code v-pre>var</code> 已经不推荐使用，尤其是它的函数作用域和变量提升的特性容易导致代码出错。</strong></li>
</ul>
<h2 id="️7、es6-箭头函数能当构造函数吗" tabindex="-1"><a class="header-anchor" href="#️7、es6-箭头函数能当构造函数吗"><span>️7、ES6 箭头函数能当构造函数吗？</span></a></h2>
<h3 id="es6-箭头函数能当构造函数吗" tabindex="-1"><a class="header-anchor" href="#es6-箭头函数能当构造函数吗"><span><strong>ES6 箭头函数能当构造函数吗？</strong></span></a></h3>
<p>ES6 引入的箭头函数（Arrow Function）是一个简洁的函数表达式，语法上比传统的函数表达式更为简洁。它通常用于简化函数的定义，特别是在没有 <code v-pre>this</code> 绑定的情况下。然而，<strong>箭头函数不能当构造函数</strong>，也不能使用 <code v-pre>new</code> 来实例化对象。下面是对这一问题的详细解释：</p>
<h3 id="_1-为什么箭头函数不能作为构造函数" tabindex="-1"><a class="header-anchor" href="#_1-为什么箭头函数不能作为构造函数"><span><strong>1. 为什么箭头函数不能作为构造函数？</strong></span></a></h3>
<p>箭头函数有一个非常特殊的行为，它与传统的函数表达式不同：</p>
<ul>
<li><strong>没有自己的 <code v-pre>this</code></strong>：箭头函数不绑定自己的 <code v-pre>this</code>，它会继承外部（词法）作用域中的 <code v-pre>this</code>。换句话说，箭头函数的 <code v-pre>this</code> 是由它外部的上下文决定的，而不是在函数调用时动态绑定的。</li>
<li><strong>不能使用 <code v-pre>new</code> 调用</strong>：由于箭头函数没有自己的 <code v-pre>this</code>，它也不能被用作构造函数。传统的构造函数在使用 <code v-pre>new</code> 时，会自动创建一个新的实例并将 <code v-pre>this</code> 绑定到该实例上。而箭头函数由于没有自己的 <code v-pre>this</code>，无法正确执行此操作。</li>
</ul>
<h3 id="_2-示例-箭头函数不能作为构造函数" tabindex="-1"><a class="header-anchor" href="#_2-示例-箭头函数不能作为构造函数"><span><strong>2. 示例：箭头函数不能作为构造函数</strong></span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">// 定义一个箭头函数</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">Person</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name</span>
<span class="line">  <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 尝试使用 new 调用箭头函数</span></span>
<span class="line"><span class="token keyword">const</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">'Alice'</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">)</span> <span class="token comment">// TypeError: Person is not a constructor</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>错误提示：</strong></p>
<ul>
<li>当你尝试使用 <code v-pre>new</code> 来实例化箭头函数时，会抛出一个 <code v-pre>TypeError</code>，提示箭头函数不能作为构造函数。</li>
</ul>
<h3 id="_3-如何定义可以作为构造函数的函数" tabindex="-1"><a class="header-anchor" href="#_3-如何定义可以作为构造函数的函数"><span><strong>3. 如何定义可以作为构造函数的函数？</strong></span></a></h3>
<p>如果你希望定义一个构造函数，应该使用传统的函数表达式或 ES6 的 <code v-pre>class</code> 语法。例如：</p>
<h4 id="使用传统的函数表达式" tabindex="-1"><a class="header-anchor" href="#使用传统的函数表达式"><span>使用传统的函数表达式：</span></a></h4>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name</span>
<span class="line">  <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">'Alice'</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">)</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>name<span class="token punctuation">)</span> <span class="token comment">// 输出: Alice</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="使用-es6-class-语法" tabindex="-1"><a class="header-anchor" href="#使用-es6-class-语法"><span>使用 ES6 <code v-pre>class</code> 语法：</span></a></h4>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name</span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age</span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">'Alice'</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">)</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>name<span class="token punctuation">)</span> <span class="token comment">// 输出: Alice</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这两种情况下，<code v-pre>Person</code> 函数或类都可以作为构造函数使用，且会正确地创建实例并绑定 <code v-pre>this</code>。</p>
<h3 id="_4-总结" tabindex="-1"><a class="header-anchor" href="#_4-总结"><span><strong>4. 总结</strong></span></a></h3>
<ul>
<li><strong>箭头函数</strong>：没有自己的 <code v-pre>this</code>，无法作为构造函数，不能使用 <code v-pre>new</code> 关键字。</li>
<li><strong>传统函数表达式</strong> 和 <strong><code v-pre>class</code> 语法</strong>：可以作为构造函数，支持 <code v-pre>new</code> 关键字来实例化对象。</li>
</ul>
<p>因此，<strong>箭头函数不能作为构造函数</strong>，并且如果你希望使用构造函数创建实例，应该使用普通的函数声明或 ES6 的 <code v-pre>class</code> 语法。</p>
<h2 id="_8、es6-箭头函数和普通函数有什么区别" tabindex="-1"><a class="header-anchor" href="#_8、es6-箭头函数和普通函数有什么区别"><span>8、ES6 箭头函数和普通函数有什么区别？</span></a></h2>
<h3 id="总结表格" tabindex="-1"><a class="header-anchor" href="#总结表格"><span><strong>总结表格</strong></span></a></h3>
<table>
<thead>
<tr>
<th><strong>特性</strong></th>
<th><strong>箭头函数</strong></th>
<th><strong>普通函数</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td><strong><code v-pre>this</code> 绑定</strong></td>
<td>继承自外部作用域的 <code v-pre>this</code>，没有自己的 <code v-pre>this</code></td>
<td>根据函数调用时的上下文动态绑定 <code v-pre>this</code></td>
</tr>
<tr>
<td><strong><code v-pre>arguments</code> 对象</strong></td>
<td>没有 <code v-pre>arguments</code> 对象</td>
<td>有 <code v-pre>arguments</code> 对象</td>
</tr>
<tr>
<td><strong>是否能作为构造函数</strong></td>
<td>不能作为构造函数，无法使用 <code v-pre>new</code></td>
<td>可以作为构造函数，使用 <code v-pre>new</code> 创建实例</td>
</tr>
<tr>
<td><strong><code v-pre>super</code> 关键字</strong></td>
<td>继承自外部作用域的 <code v-pre>super</code></td>
<td>有自己的 <code v-pre>super</code>，可以调用父类的方法</td>
</tr>
<tr>
<td><strong>语法简洁性</strong></td>
<td>语法简洁，省略 <code v-pre>function</code> 和 <code v-pre>return</code>（单行）</td>
<td>语法较长，需要 <code v-pre>function</code> 关键字</td>
</tr>
<tr>
<td><strong>是否可以是生成器函数</strong></td>
<td>不能是生成器函数</td>
<td>可以是生成器函数（使用 <code v-pre>*</code>）</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="总结-4" tabindex="-1"><a class="header-anchor" href="#总结-4"><span><strong>总结</strong></span></a></h3>
<ul>
<li><strong>箭头函数</strong>：主要优点是简洁、没有自己的 <code v-pre>this</code>、没有 <code v-pre>arguments</code> 和 <code v-pre>super</code>，适用于回调函数、简短的函数。它不适合需要动态 <code v-pre>this</code> 绑定、生成器函数等场景。</li>
<li><strong>普通函数</strong>：适用于构造函数、需要动态绑定 <code v-pre>this</code> 或需要使用 <code v-pre>arguments</code> 的情况。</li>
</ul>
<h2 id="_9、var-a-a-push-、a-pop-请说明在js中的意义" tabindex="-1"><a class="header-anchor" href="#_9、var-a-a-push-、a-pop-请说明在js中的意义"><span>9、var a = []; a.push()、a.pop() 请说明在js中的意义</span></a></h2>
<p>在 JavaScript 中，<code v-pre>push()</code> 和 <code v-pre>pop()</code> 是数组（<code v-pre>Array</code>）对象的两个常用方法，它们分别用于向数组添加元素和从数组移除元素。</p>
<ol>
<li>
<p><strong><code v-pre>a.push()</code></strong>:</p>
<ul>
<li><code v-pre>push()</code> 方法用于将一个或多个元素添加到数组的末尾，并返回新的数组长度。</li>
<li>如果调用 <code v-pre>a.push()</code> 时不传入任何参数，则该方法会将 <code v-pre>undefined</code> 添加到数组中，数组长度会增加 1。</li>
<li>例如：<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">a<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// a = [1]</span></span>
<span class="line">a<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// a = [1, 2, 3]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p><strong><code v-pre>a.pop()</code></strong>:</p>
<ul>
<li><code v-pre>pop()</code> 方法用于从数组的末尾移除并返回该元素。调用 <code v-pre>pop()</code> 会改变原始数组，即数组的长度会减少 1。</li>
<li>如果数组为空，调用 <code v-pre>pop()</code> 不会做任何操作，且返回 <code v-pre>undefined</code>。</li>
<li>例如：<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">var</span> lastElement <span class="token operator">=</span> a<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// a = [1, 2], lastElement = 3</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
</ol>
<h3 id="总结-5" tabindex="-1"><a class="header-anchor" href="#总结-5"><span>总结：</span></a></h3>
<ul>
<li><code v-pre>push()</code> 用于向数组的末尾添加元素，并返回新的数组长度。</li>
<li><code v-pre>pop()</code> 用于从数组的末尾移除元素，并返回被移除的元素。</li>
</ul>
<p>这两个方法通常用于动态操作数组，适合处理栈（LIFO, 后进先出）数据结构。你可以将数组看作是一个栈，<code v-pre>push()</code> 就是压栈，<code v-pre>pop()</code> 就是弹栈。</p>
<h2 id="_10、输出结果-为什么" tabindex="-1"><a class="header-anchor" href="#_10、输出结果-为什么"><span>10、输出结果，为什么？</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> obj3 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">;</span> </span>
<span class="line"><span class="token keyword">const</span> obj4 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">;</span> </span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj3 <span class="token operator">==</span> obj4<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false </span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj3 <span class="token operator">===</span> obj4<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 JavaScript 中，<code v-pre>==</code> 和 <code v-pre>===</code> 都用于比较两个值，但它们的比较规则有所不同。对于对象的比较，它们的行为更有特点。</p>
<h3 id="_1-obj3-obj4-的结果" tabindex="-1"><a class="header-anchor" href="#_1-obj3-obj4-的结果"><span>1. <strong><code v-pre>obj3 == obj4</code> 的结果：</strong></span></a></h3>
<ul>
<li>输出：<code v-pre>false</code></li>
</ul>
<p><strong>原因：</strong></p>
<ul>
<li>在 JavaScript 中，<code v-pre>==</code> 比较的是 <strong>引用</strong>，而不是对象的内容。也就是说，两个对象即使它们的属性和值完全相同，它们仍然是不同的引用，指向内存中的不同位置。</li>
<li><code v-pre>obj3</code> 和 <code v-pre>obj4</code> 是两个不同的对象，虽然它们的内容（<code v-pre>a: 1</code> 和 <code v-pre>b: 2</code>）不同，但这两个对象在内存中是两个独立的实体。因此，<code v-pre>obj3 == obj4</code> 返回 <code v-pre>false</code>。</li>
</ul>
<h3 id="_2-obj3-obj4-的结果" tabindex="-1"><a class="header-anchor" href="#_2-obj3-obj4-的结果"><span>2. <strong><code v-pre>obj3 === obj4</code> 的结果：</strong></span></a></h3>
<ul>
<li>输出：<code v-pre>false</code></li>
</ul>
<p><strong>原因：</strong></p>
<ul>
<li><code v-pre>===</code> 是严格相等比较（也称为 <strong>全等比较</strong>），它不仅比较值，还比较类型以及引用是否相同。</li>
<li>因为 <code v-pre>obj3</code> 和 <code v-pre>obj4</code> 是两个不同的对象，即使它们的属性和值不同，它们的引用也是不同的。因此，<code v-pre>obj3 === obj4</code> 返回 <code v-pre>false</code>。</li>
</ul>
<h3 id="总结-6" tabindex="-1"><a class="header-anchor" href="#总结-6"><span>总结：</span></a></h3>
<ul>
<li><code v-pre>==</code> 和 <code v-pre>===</code> 对象的比较都比较的是 <strong>引用</strong>，而不是对象的内容。所以两个对象即使内容相同，只要它们是不同的实例（在内存中有不同的引用），比较结果都会是 <code v-pre>false</code>。</li>
<li>在 JavaScript 中，<strong>对象比较</strong> 永远是比较引用，而非对象的具体值或结构。</li>
</ul>
</div></template>


