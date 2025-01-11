<template><div><h1 id="typescript" tabindex="-1"><a class="header-anchor" href="#typescript"><span>Typescript</span></a></h1>
<h2 id="什么是-typescript-的对象类型-怎么定义对象类型" tabindex="-1"><a class="header-anchor" href="#什么是-typescript-的对象类型-怎么定义对象类型"><span>什么是 TypeScript 的对象类型？怎么定义对象类型？</span></a></h2>
<h3 id="typescript-的对象类型" tabindex="-1"><a class="header-anchor" href="#typescript-的对象类型"><span><strong>TypeScript 的对象类型</strong></span></a></h3>
<p>在 TypeScript 中，对象类型是指一种包含多个属性（键值对）的数据类型。每个属性都有自己的类型，TypeScript 通过静态类型检查确保对象的属性符合预期的类型。</p>
<h4 id="对象类型定义的作用" tabindex="-1"><a class="header-anchor" href="#对象类型定义的作用"><span><strong>对象类型定义的作用</strong></span></a></h4>
<p>通过定义对象类型，可以明确指定对象的结构，确保每个属性都具有正确的类型，并提供类型推断和代码提示，使得开发过程中更易于发现错误。</p>
<hr>
<h3 id="如何定义对象类型" tabindex="-1"><a class="header-anchor" href="#如何定义对象类型"><span><strong>如何定义对象类型</strong></span></a></h3>
<ol>
<li>
<p><strong>使用对象字面量类型（Inline Object Type）</strong>：
可以直接在类型声明时使用 <code v-pre>{}</code> 来定义对象类型。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">const</span> person<span class="token operator">:</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  name<span class="token operator">:</span> <span class="token string">'Alice'</span><span class="token punctuation">,</span></span>
<span class="line">  age<span class="token operator">:</span> <span class="token number">30</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里，<code v-pre>{ name: string, age: number }</code> 表示 <code v-pre>person</code> 对象必须具有 <code v-pre>name</code> 属性（类型为 <code v-pre>string</code>）和 <code v-pre>age</code> 属性（类型为 <code v-pre>number</code>）。</p>
</li>
<li>
<p><strong>使用接口（Interface）</strong>：
接口是一种声明对象结构的方式，可以重用并扩展多个对象类型。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span></span>
<span class="line">  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span></span>
<span class="line">  age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> person<span class="token operator">:</span> Person <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  name<span class="token operator">:</span> <span class="token string">'Bob'</span><span class="token punctuation">,</span></span>
<span class="line">  age<span class="token operator">:</span> <span class="token number">25</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用接口时，我们可以更方便地在多个地方复用 <code v-pre>Person</code> 类型。</p>
</li>
<li>
<p><strong>使用类型别名（Type Alias）</strong>：
类型别名通过 <code v-pre>type</code> 关键字创建，可以为对象类型、联合类型、交叉类型等定义新的名称。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">type</span> <span class="token class-name">Person</span> <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span></span>
<span class="line">  age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> person<span class="token operator">:</span> Person <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  name<span class="token operator">:</span> <span class="token string">'Charlie'</span><span class="token punctuation">,</span></span>
<span class="line">  age<span class="token operator">:</span> <span class="token number">40</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>类型别名类似于接口，但与接口不同的是，类型别名不支持扩展（继承）。</p>
</li>
<li>
<p><strong>可选属性</strong>：
对象的某些属性可以是可选的，使用 <code v-pre>?</code> 来标识该属性是可选的。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span></span>
<span class="line">  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span></span>
<span class="line">  age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span></span>
<span class="line">  address<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>  <span class="token comment">// 可选属性</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> person1<span class="token operator">:</span> Person <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  name<span class="token operator">:</span> <span class="token string">'David'</span><span class="token punctuation">,</span></span>
<span class="line">  age<span class="token operator">:</span> <span class="token number">28</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> person2<span class="token operator">:</span> Person <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  name<span class="token operator">:</span> <span class="token string">'Eva'</span><span class="token punctuation">,</span></span>
<span class="line">  age<span class="token operator">:</span> <span class="token number">22</span><span class="token punctuation">,</span></span>
<span class="line">  address<span class="token operator">:</span> <span class="token string">'123 Main St'</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>只读属性</strong>：
如果对象的某些属性不允许被修改，可以使用 <code v-pre>readonly</code> 修饰符来标识这些属性为只读。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">readonly</span> name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span></span>
<span class="line">  age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> person<span class="token operator">:</span> Person <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  name<span class="token operator">:</span> <span class="token string">'Frank'</span><span class="token punctuation">,</span></span>
<span class="line">  age<span class="token operator">:</span> <span class="token number">35</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">person<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">'George'</span><span class="token punctuation">;</span>  <span class="token comment">// 错误：不能修改只读属性</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>动态属性</strong>：
TypeScript 允许定义具有动态键名的对象，通常用索引签名（<code v-pre>[key: string]: type</code>）来描述。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">interface</span> <span class="token class-name">Dictionary</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token punctuation">[</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> dictionary<span class="token operator">:</span> Dictionary <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  hello<span class="token operator">:</span> <span class="token string">'world'</span><span class="token punctuation">,</span></span>
<span class="line">  goodbye<span class="token operator">:</span> <span class="token string">'everyone'</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里，<code v-pre>[key: string]: string</code> 表示 <code v-pre>dictionary</code> 对象的属性名是字符串类型，且属性值也是字符串类型。</p>
</li>
</ol>
<hr>
<h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span><strong>总结</strong></span></a></h3>
<p>在 TypeScript 中，定义对象类型有几种方式，主要通过对象字面量、接口、类型别名来实现：</p>
<ol>
<li><strong>对象字面量类型</strong>：在声明时直接定义属性及其类型。</li>
<li><strong>接口（Interface）</strong>：通过接口声明对象类型，支持继承和扩展。</li>
<li><strong>类型别名（Type Alias）</strong>：通过 <code v-pre>type</code> 定义对象类型，适合对象、联合类型等。</li>
<li><strong>可选属性</strong>：使用 <code v-pre>?</code> 来标识可选属性。</li>
<li><strong>只读属性</strong>：使用 <code v-pre>readonly</code> 修饰符来标识不可修改的属性。</li>
<li><strong>动态属性（索引签名）</strong>：使用索引签名来定义具有动态键名的属性。</li>
</ol>
<p>使用这些方式可以帮助你更好地描述对象的结构，并在编写 TypeScript 代码时提供更强的类型安全性和提示。</p>
<h2 id="typescript-有哪些常用类型" tabindex="-1"><a class="header-anchor" href="#typescript-有哪些常用类型"><span>TypeScript 有哪些常用类型？</span></a></h2>
<p>在 <strong>TypeScript</strong> 中，有许多内建的基础类型用于表示不同的数据结构。TypeScript 的类型系统是基于 JavaScript 的，并通过类型系统来增强代码的可读性、可靠性和可维护性。以下是一些常用的 TypeScript 类型：</p>
<hr>
<h3 id="_1-基本类型" tabindex="-1"><a class="header-anchor" href="#_1-基本类型"><span><strong>1. 基本类型</strong></span></a></h3>
<ul>
<li>
<p><strong><code v-pre>number</code></strong>：表示数值类型，可以是整数或浮点数。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">let</span> age<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">25</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> price<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">19.99</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong><code v-pre>string</code></strong>：表示字符串类型。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">let</span> name<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">'Alice'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> greeting<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">'Hello, world!'</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong><code v-pre>boolean</code></strong>：表示布尔值（<code v-pre>true</code> 或 <code v-pre>false</code>）。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">let</span> isActive<span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> isCompleted<span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong><code v-pre>void</code></strong>：表示没有返回值的类型，通常用于函数没有返回值的情况。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">logMessage</span><span class="token punctuation">(</span>message<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong><code v-pre>null</code> 和 <code v-pre>undefined</code></strong>：分别表示空值和未定义的值。默认情况下，<code v-pre>null</code> 和 <code v-pre>undefined</code> 是不同的类型，但可以通过 <code v-pre>--strictNullChecks</code> 配置来使它们的使用更加严格。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">let</span> nothing<span class="token operator">:</span> <span class="token keyword">null</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> notDefined<span class="token operator">:</span> <span class="token keyword">undefined</span> <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<hr>
<h3 id="_2-数组类型" tabindex="-1"><a class="header-anchor" href="#_2-数组类型"><span><strong>2. 数组类型</strong></span></a></h3>
<ul>
<li>
<p><strong><code v-pre>Array</code></strong>：表示数组类型。可以使用 <code v-pre>Array&lt;类型&gt;</code> 或 <code v-pre>类型[]</code> 来定义数组。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">let</span> numbers<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> fruits<span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'apple'</span><span class="token punctuation">,</span> <span class="token string">'banana'</span><span class="token punctuation">,</span> <span class="token string">'orange'</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<hr>
<h3 id="_3-元组类型" tabindex="-1"><a class="header-anchor" href="#_3-元组类型"><span><strong>3. 元组类型</strong></span></a></h3>
<ul>
<li>
<p><strong><code v-pre>tuple</code></strong>：表示一个固定长度和类型的数组。不同于普通数组，元组可以包含不同类型的元素。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">let</span> person<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">number</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'Alice'</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">]</span><span class="token punctuation">;</span>  <span class="token comment">// 第一项是字符串，第二项是数字</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
</ul>
<hr>
<h3 id="_4-枚举类型" tabindex="-1"><a class="header-anchor" href="#_4-枚举类型"><span><strong>4. 枚举类型</strong></span></a></h3>
<ul>
<li>
<p><strong><code v-pre>enum</code></strong>：表示一个枚举类型，可以定义一组命名的常量。枚举值是数字类型或字符串类型。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">enum</span> Direction <span class="token punctuation">{</span></span>
<span class="line">  Up <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">  Down<span class="token punctuation">,</span></span>
<span class="line">  Left<span class="token punctuation">,</span></span>
<span class="line">  Right</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> move<span class="token operator">:</span> Direction <span class="token operator">=</span> Direction<span class="token punctuation">.</span>Up<span class="token punctuation">;</span>  <span class="token comment">// move 的值是 1</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也可以使用字符串枚举：</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">enum</span> Color <span class="token punctuation">{</span></span>
<span class="line">  Red <span class="token operator">=</span> <span class="token string">'RED'</span><span class="token punctuation">,</span></span>
<span class="line">  Green <span class="token operator">=</span> <span class="token string">'GREEN'</span><span class="token punctuation">,</span></span>
<span class="line">  Blue <span class="token operator">=</span> <span class="token string">'BLUE'</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<hr>
<h3 id="_5-任意类型-any" tabindex="-1"><a class="header-anchor" href="#_5-任意类型-any"><span><strong>5. 任意类型 (<code v-pre>any</code>)</strong></span></a></h3>
<ul>
<li>
<p><strong><code v-pre>any</code></strong>：表示任何类型的值，适用于不确定类型的情况。使用 <code v-pre>any</code> 时，TypeScript 会禁用对该变量的类型检查。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">let</span> variable<span class="token operator">:</span> <span class="token builtin">any</span> <span class="token operator">=</span> <span class="token number">42</span><span class="token punctuation">;</span></span>
<span class="line">variable <span class="token operator">=</span> <span class="token string">'Hello, world!'</span><span class="token punctuation">;</span></span>
<span class="line">variable <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意</strong>：使用 <code v-pre>any</code> 会丧失 TypeScript 类型检查的优势，应尽量避免过多使用。</p>
</li>
</ul>
<hr>
<h3 id="_6-类型推断-unknown" tabindex="-1"><a class="header-anchor" href="#_6-类型推断-unknown"><span><strong>6. 类型推断 (<code v-pre>unknown</code>)</strong></span></a></h3>
<ul>
<li>
<p><strong><code v-pre>unknown</code></strong>：表示未知类型。与 <code v-pre>any</code> 类似，但使用 <code v-pre>unknown</code> 时，必须先进行类型检查或类型断言，才能对其进行操作。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">let</span> result<span class="token operator">:</span> <span class="token builtin">unknown</span> <span class="token operator">=</span> <span class="token number">30</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> result <span class="token operator">===</span> <span class="token string">'number'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 需要类型检查</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>区别</strong>：<code v-pre>unknown</code> 更安全，因为它强制要求在使用前进行类型检查。</p>
</li>
</ul>
<hr>
<h3 id="_7-对象类型" tabindex="-1"><a class="header-anchor" href="#_7-对象类型"><span><strong>7. 对象类型</strong></span></a></h3>
<ul>
<li>
<p><strong><code v-pre>object</code></strong>：表示非原始类型的值（即非 <code v-pre>number</code>、<code v-pre>string</code>、<code v-pre>boolean</code>、<code v-pre>symbol</code>、<code v-pre>null</code>、<code v-pre>undefined</code>）。可以用来定义对象类型。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">let</span> person<span class="token operator">:</span> object <span class="token operator">=</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">'Alice'</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token number">30</span> <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong>注意</strong>：<code v-pre>object</code> 类型不能直接访问对象的属性，需要通过类型断言或者进一步的类型定义。</p>
</li>
</ul>
<hr>
<h3 id="_8-自定义类型-类型别名-type" tabindex="-1"><a class="header-anchor" href="#_8-自定义类型-类型别名-type"><span><strong>8. 自定义类型（类型别名 <code v-pre>type</code>）</strong></span></a></h3>
<ul>
<li>
<p><strong><code v-pre>type</code></strong>：可以使用 <code v-pre>type</code> 创建复杂的类型别名，结合联合类型、交叉类型、映射类型等实现更复杂的类型。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">type</span> <span class="token class-name">StringOrNumber</span> <span class="token operator">=</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> value<span class="token operator">:</span> StringOrNumber <span class="token operator">=</span> <span class="token number">42</span><span class="token punctuation">;</span></span>
<span class="line">value <span class="token operator">=</span> <span class="token string">'Hello'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">type</span> <span class="token class-name">Person</span> <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span></span>
<span class="line">  age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> person<span class="token operator">:</span> Person <span class="token operator">=</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">'Alice'</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token number">30</span> <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<hr>
<h3 id="_9-联合类型" tabindex="-1"><a class="header-anchor" href="#_9-联合类型"><span><strong>9. 联合类型 (<code v-pre>|</code>)</strong></span></a></h3>
<ul>
<li>
<p><strong>联合类型</strong>：通过 <code v-pre>|</code> 表示一个变量可以是多种类型中的任意一种。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">let</span> id<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">123</span><span class="token punctuation">;</span></span>
<span class="line">id <span class="token operator">=</span> <span class="token string">'ABC'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">greet</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> name <span class="token operator">===</span> <span class="token string">'string'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Hello, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Hello, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>name<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">', '</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<hr>
<h3 id="_10-交叉类型" tabindex="-1"><a class="header-anchor" href="#_10-交叉类型"><span><strong>10. 交叉类型 (<code v-pre>&amp;</code>)</strong></span></a></h3>
<ul>
<li>
<p><strong>交叉类型</strong>：通过 <code v-pre>&amp;</code> 将多个类型合并为一个类型，表示一个变量必须同时满足多个类型的要求。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">type</span> <span class="token class-name">Employee</span> <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span></span>
<span class="line">  salary<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">type</span> <span class="token class-name">Manager</span> <span class="token operator">=</span> Employee <span class="token operator">&amp;</span> <span class="token punctuation">{</span></span>
<span class="line">  department<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> manager<span class="token operator">:</span> Manager <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  name<span class="token operator">:</span> <span class="token string">'Alice'</span><span class="token punctuation">,</span></span>
<span class="line">  salary<span class="token operator">:</span> <span class="token number">80000</span><span class="token punctuation">,</span></span>
<span class="line">  department<span class="token operator">:</span> <span class="token string">'HR'</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<hr>
<h3 id="_11-类型断言" tabindex="-1"><a class="header-anchor" href="#_11-类型断言"><span><strong>11. 类型断言</strong></span></a></h3>
<ul>
<li>
<p><strong><code v-pre>as</code></strong>：类型断言用于告诉 TypeScript 我们知道某个变量的类型是什么。类型断言类似于强制类型转换。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">let</span> value<span class="token operator">:</span> <span class="token builtin">unknown</span> <span class="token operator">=</span> <span class="token string">'Hello, TypeScript!'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> str<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> value <span class="token keyword">as</span> <span class="token builtin">string</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>或者：</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">let</span> value<span class="token operator">:</span> <span class="token builtin">unknown</span> <span class="token operator">=</span> <span class="token string">'Hello, TypeScript!'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">></span>value<span class="token punctuation">;</span>  <span class="token comment">// 另一种语法</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<hr>
<h3 id="_12-泛型-generics" tabindex="-1"><a class="header-anchor" href="#_12-泛型-generics"><span><strong>12. 泛型（Generics）</strong></span></a></h3>
<ul>
<li>
<p><strong><code v-pre>Generics</code></strong>：通过泛型可以定义能够适应多种类型的函数、类和接口。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">function</span> <span class="token generic-function"><span class="token function">identity</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span></span></span><span class="token punctuation">(</span>arg<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> arg<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token generic-function"><span class="token function">identity</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token string">'Hello, world!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>泛型不仅限于函数，也可以应用于接口和类：</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">interface</span> <span class="token class-name">Box<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span></span> <span class="token punctuation">{</span></span>
<span class="line">  value<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> box<span class="token operator">:</span> Box<span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">></span> <span class="token operator">=</span> <span class="token punctuation">{</span> value<span class="token operator">:</span> <span class="token number">42</span> <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<hr>
<h3 id="总结-1" tabindex="-1"><a class="header-anchor" href="#总结-1"><span><strong>总结</strong></span></a></h3>
<p>TypeScript 提供了丰富的内建类型，用于描述 JavaScript 中的各种数据结构。常用的基本类型包括：</p>
<ul>
<li><strong>基本类型</strong>：<code v-pre>number</code>、<code v-pre>string</code>、<code v-pre>boolean</code>、<code v-pre>void</code>、<code v-pre>null</code>、<code v-pre>undefined</code>。</li>
<li><strong>集合类型</strong>：<code v-pre>Array</code>、<code v-pre>tuple</code>、<code v-pre>enum</code>。</li>
<li><strong>类型系统</strong>：<code v-pre>any</code>、<code v-pre>unknown</code>、<code v-pre>object</code>、<code v-pre>type</code>（类型别名）、<code v-pre>union</code>（联合类型）、<code v-pre>intersection</code>（交叉类型）。</li>
<li><strong>其他特性</strong>：<code v-pre>interface</code>、<code v-pre>class</code>、<code v-pre>Generics</code>。</li>
</ul>
<p>通过合理使用这些类型，可以大大提升代码的类型安全性和可维护性。</p>
</div></template>


