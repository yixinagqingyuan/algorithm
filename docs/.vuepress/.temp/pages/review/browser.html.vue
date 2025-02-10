<template><div><!-- @format -->
<h1 id="浏览器热门考题" tabindex="-1"><a class="header-anchor" href="#浏览器热门考题"><span>浏览器热门考题</span></a></h1>
<h2 id="_1、说说你对-fetch-的理解-它有哪些优点和不足" tabindex="-1"><a class="header-anchor" href="#_1、说说你对-fetch-的理解-它有哪些优点和不足"><span>1、说说你对 fetch 的理解，它有哪些优点和不足？</span></a></h2>
<h3 id="fetch-的理解" tabindex="-1"><a class="header-anchor" href="#fetch-的理解"><span><strong><code v-pre>fetch</code> 的理解</strong></span></a></h3>
<p><code v-pre>fetch</code> 是现代浏览器提供的一种用于进行 HTTP 请求的原生 JavaScript API，它比 <code v-pre>XMLHttpRequest</code>（XHR）更加简洁、灵活、支持 Promise，并且可以更方便地进行异步编程。<code v-pre>fetch</code> 提供了一种更为现代的方式来处理网络请求，它基于 Promise，能更好地与 <code v-pre>async</code>/<code v-pre>await</code> 配合使用。</p>
<h4 id="基本用法" tabindex="-1"><a class="header-anchor" href="#基本用法"><span><strong>基本用法</strong></span></a></h4>
<p><code v-pre>fetch</code> 方法接受一个请求的 URL 和一个配置对象，返回一个 Promise，解析为 <code v-pre>Response</code> 对象，该对象包含了服务器返回的响应信息。</p>
<p><strong>基本语法：</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token function">fetch</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> options<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token operator">=></span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 处理响应数据</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">'Error:'</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中：</p>
<ul>
<li><code v-pre>url</code> 是要请求的资源的 URL 地址。</li>
<li><code v-pre>options</code> 是一个可选的配置对象，用于指定请求方法、请求头、请求体等信息。</li>
</ul>
<h4 id="常见的配置选项" tabindex="-1"><a class="header-anchor" href="#常见的配置选项"><span><strong>常见的配置选项：</strong></span></a></h4>
<ul>
<li><strong>method</strong>: 请求的方法，如 <code v-pre>GET</code>、<code v-pre>POST</code>、<code v-pre>PUT</code> 等。</li>
<li><strong>headers</strong>: 请求头信息，通常用于设置请求的内容类型（如 <code v-pre>Content-Type: application/json</code>）。</li>
<li><strong>body</strong>: 请求体，通常用于 <code v-pre>POST</code> 或 <code v-pre>PUT</code> 请求，发送数据给服务器。</li>
</ul>
<h3 id="优点" tabindex="-1"><a class="header-anchor" href="#优点"><span><strong>优点</strong></span></a></h3>
<ol>
<li>
<p><strong>基于 Promise，支持异步编程</strong>：</p>
<ul>
<li><code v-pre>fetch</code> 返回的是一个 Promise，使得它能与 <code v-pre>async</code>/<code v-pre>await</code> 搭配使用，代码更加简洁、易读，且易于链式调用。</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">fetchData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">'https://api.example.com/data'</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token keyword">await</span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">'Error:'</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>比 <code v-pre>XMLHttpRequest</code> 更简洁</strong>：</p>
<ul>
<li><code v-pre>fetch</code> API 的语法简洁易用，去除了 <code v-pre>XMLHttpRequest</code> 中的复杂回调和状态管理，使得网络请求的代码更加清晰。</li>
</ul>
</li>
<li>
<p><strong>返回的是 <code v-pre>Response</code> 对象，支持流（Stream）处理</strong>：</p>
<ul>
<li><code v-pre>Response</code> 对象不仅包含响应数据，还包含了其他元数据（如响应状态码、响应头等）。它支持流式读取数据（如使用 <code v-pre>.text()</code> 或 <code v-pre>.json()</code> 等方法），使得处理大数据文件（如视频、音频、图片）更加高效。</li>
</ul>
</li>
<li>
<p><strong>支持跨域请求（CORS）</strong>：</p>
<ul>
<li><code v-pre>fetch</code> 内建了对跨域资源共享（CORS，Cross-Origin Resource Sharing）的支持，这使得它在处理跨域请求时更为方便，尤其是在需要向不同源发送请求时。</li>
</ul>
</li>
<li>
<p><strong>自定义请求</strong>：</p>
<ul>
<li><code v-pre>fetch</code> 提供了更多灵活的自定义请求配置，如设置请求头、缓存策略等，这些都可以通过 <code v-pre>options</code> 参数进行配置。</li>
</ul>
</li>
<li>
<p><strong>流式响应支持</strong>：</p>
<ul>
<li><code v-pre>fetch</code> 支持流式响应（Streams），可以按块（chunk）处理大文件或大数据流，这对于大数据传输时具有明显的性能优势。</li>
</ul>
</li>
</ol>
<hr>
<h3 id="不足" tabindex="-1"><a class="header-anchor" href="#不足"><span><strong>不足</strong></span></a></h3>
<ol>
<li>
<p><strong>没有自动处理 HTTP 错误状态</strong>：</p>
<ul>
<li><code v-pre>fetch</code> 默认只会在请求失败（如网络问题）时返回拒绝的 Promise，但它不会自动处理 HTTP 错误状态（如 404 或 500）。即使响应状态码为 4xx 或 5xx，<code v-pre>fetch</code> 仍然会将其视为正常响应，开发者需要手动检查响应的状态码。</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">'https://api.example.com/data'</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>response<span class="token punctuation">.</span>ok<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// 需要手动检查 HTTP 状态码</span></span>
<span class="line">      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">'Network response was not ok'</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">return</span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">'Error:'</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>不支持老旧浏览器</strong>：</p>
<ul>
<li><code v-pre>fetch</code> 是现代浏览器的原生 API，但它在旧版浏览器（如 Internet Explorer）中不被支持。如果需要兼容旧浏览器，必须使用 polyfill（如 <code v-pre>whatwg-fetch</code>）或者使用 <code v-pre>XMLHttpRequest</code>。</li>
</ul>
</li>
<li>
<p><strong>无法中断请求</strong>：</p>
<ul>
<li><code v-pre>fetch</code> 本身不支持请求取消（即中断请求）。如果需要取消请求，必须借助 <code v-pre>AbortController</code> 来实现取消功能，增加了代码复杂度。</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> controller <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AbortController</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">const</span> signal <span class="token operator">=</span> controller<span class="token punctuation">.</span>signal</span>
<span class="line"></span>
<span class="line"><span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">'https://api.example.com/data'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> signal <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token operator">=></span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>error<span class="token punctuation">.</span>name <span class="token operator">===</span> <span class="token string">'AbortError'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Request was aborted'</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">      console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">'Error:'</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 在适当时机调用</span></span>
<span class="line">controller<span class="token punctuation">.</span><span class="token function">abort</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>默认不支持 <code v-pre>timeout</code></strong>：</p>
<ul>
<li><code v-pre>fetch</code> 并没有内建的 <code v-pre>timeout</code> 配置，如果请求超时，它会继续等待直到收到响应。为了支持超时控制，需要使用 <code v-pre>Promise.race()</code> 或者结合 <code v-pre>AbortController</code> 手动实现。</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> timeout <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">_<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=></span></span>
<span class="line">  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">reject</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">'Request timed out'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">5000</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">const</span> request <span class="token operator">=</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">'https://api.example.com/data'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">Promise<span class="token punctuation">.</span><span class="token function">race</span><span class="token punctuation">(</span><span class="token punctuation">[</span>request<span class="token punctuation">,</span> timeout<span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token operator">=></span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>处理大文件或数据流时可能存在内存问题</strong>：</p>
<ul>
<li>在处理非常大的数据文件时（如视频、图像等），如果不使用流（Stream），可能会导致内存溢出或性能下降。</li>
</ul>
</li>
</ol>
<hr>
<h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span><strong>总结</strong></span></a></h3>
<h4 id="优点-1" tabindex="-1"><a class="header-anchor" href="#优点-1"><span><strong>优点</strong>：</span></a></h4>
<ul>
<li>简洁的语法，支持 Promise，易于与 <code v-pre>async</code>/<code v-pre>await</code> 配合使用。</li>
<li>提供灵活的配置，支持跨域请求（CORS）和流式数据处理。</li>
<li>更加现代化，相比 <code v-pre>XMLHttpRequest</code>，代码更加简洁和易于理解。</li>
</ul>
<h4 id="不足-1" tabindex="-1"><a class="header-anchor" href="#不足-1"><span><strong>不足</strong>：</span></a></h4>
<ul>
<li>不自动处理 HTTP 错误状态，需要手动检查响应状态。</li>
<li>在一些老旧浏览器中不支持。</li>
<li>没有内建的请求取消和超时机制，需要使用额外的工具（如 <code v-pre>AbortController</code>）来实现。</li>
</ul>
<p>尽管存在一些不足，<code v-pre>fetch</code> 仍然是现代 JavaScript 中进行 HTTP 请求的首选工具，特别是在与 <code v-pre>async</code>/<code v-pre>await</code> 一起使用时。对于更复杂的需求，可能需要结合其他库（如 Axios）来处理跨浏览器兼容性和功能扩展。</p>
<h2 id="_2、cookie、session、token-之间有什么区别" tabindex="-1"><a class="header-anchor" href="#_2、cookie、session、token-之间有什么区别"><span>2、Cookie、Session、Token 之间有什么区别？</span></a></h2>
<p><strong>Cookie、Session 和 Token</strong> 都是用来在客户端和服务器之间传递和存储用户状态信息的技术。它们各自有不同的工作原理和使用场景，下面是它们之间的主要区别：</p>
<h3 id="_1-cookie" tabindex="-1"><a class="header-anchor" href="#_1-cookie"><span>1. <strong>Cookie</strong></span></a></h3>
<ul>
<li><strong>存储位置：</strong> 存储在用户的浏览器中。</li>
<li><strong>作用：</strong> 用于在客户端保存用户信息，如登录状态、偏好设置等。</li>
<li><strong>生命周期：</strong> Cookie 可以设置过期时间，也可以是会话级别的（浏览器关闭后失效）。</li>
<li><strong>传输方式：</strong> 每次向服务器发起请求时，浏览器会自动携带相应的 Cookie 信息。</li>
<li><strong>安全性：</strong> 因为 Cookie 存储在浏览器中，容易受到 XSS（跨站脚本）攻击。如果没有正确的设置 <code v-pre>HttpOnly</code> 和 <code v-pre>Secure</code> 标志，可能会暴露敏感信息。</li>
</ul>
<h3 id="_2-session" tabindex="-1"><a class="header-anchor" href="#_2-session"><span>2. <strong>Session</strong></span></a></h3>
<ul>
<li><strong>存储位置：</strong> 存储在服务器端，客户端只保存一个指向 Session 的标识（通常是一个 Session ID）。</li>
<li><strong>作用：</strong> 用于存储和跟踪用户的会话信息。通常用于登录后的状态管理，确保同一用户在多个请求之间的一致性。</li>
<li><strong>生命周期：</strong> Session 在服务器端存储，会话结束后会失效（如浏览器关闭或会话超时）。</li>
<li><strong>传输方式：</strong> 服务器通常通过 Cookie 将 Session ID 传递给客户端，或者通过 URL 中的查询参数（不推荐）传递。</li>
<li><strong>安全性：</strong> Session 信息存储在服务器端，相对安全，不容易被盗取。但是，如果 Session ID 泄露，攻击者仍然可以伪造会话。</li>
</ul>
<h3 id="_3-token" tabindex="-1"><a class="header-anchor" href="#_3-token"><span>3. <strong>Token</strong></span></a></h3>
<ul>
<li><strong>存储位置：</strong> 存储在客户端，通常保存在 LocalStorage 或 SessionStorage 中，或者通过 HTTP 请求头（如 <code v-pre>Authorization</code>）传递。</li>
<li><strong>作用：</strong> 用于在客户端和服务器之间传递验证信息。常用于无状态的认证机制，尤其在使用 RESTful API 和 OAuth2.0 时。</li>
<li><strong>生命周期：</strong> Token 一般是有时效性的，可能是几分钟到几小时。Token 的过期时间通常是服务器生成时设定的。</li>
<li><strong>传输方式：</strong> Token 通常通过 HTTP 请求头（<code v-pre>Authorization</code>）传递，也可以在 URL 中传递（不推荐）。Token 是无状态的，不依赖于服务器端存储。</li>
<li><strong>安全性：</strong> Token 通常采用加密算法（如 JWT）进行签名或加密，但也容易受到 CSRF 和 XSS 攻击。通常需要通过 HTTPS 传输，以避免在中间人攻击中被窃取。</li>
</ul>
<h3 id="关键区别" tabindex="-1"><a class="header-anchor" href="#关键区别"><span>关键区别：</span></a></h3>
<ul>
<li>
<p><strong>存储位置：</strong></p>
<ul>
<li><strong>Cookie</strong> 存储在客户端（浏览器）。</li>
<li><strong>Session</strong> 存储在服务器端，客户端只存储一个 Session ID。</li>
<li><strong>Token</strong> 存储在客户端，通常使用 LocalStorage 或 SessionStorage。</li>
</ul>
</li>
<li>
<p><strong>状态管理：</strong></p>
<ul>
<li><strong>Cookie 和 Session</strong> 是有状态的，服务器需要保存信息。</li>
<li><strong>Token</strong> 是无状态的，不需要服务器存储会话信息，便于分布式系统和负载均衡。</li>
</ul>
</li>
<li>
<p><strong>安全性：</strong></p>
<ul>
<li><strong>Cookie</strong> 可能容易受到 XSS 攻击，需使用 <code v-pre>HttpOnly</code> 和 <code v-pre>Secure</code> 属性来增强安全性。</li>
<li><strong>Session</strong> 安全性较高，但如果 Session ID 泄露，可能会被盗用。</li>
<li><strong>Token</strong> 可以采用加密和签名，但仍需要防止 XSS 和 CSRF 攻击。</li>
</ul>
</li>
</ul>
<h3 id="使用场景" tabindex="-1"><a class="header-anchor" href="#使用场景"><span>使用场景：</span></a></h3>
<ul>
<li><strong>Cookie</strong> 适用于需要在浏览器和服务器之间持久保存少量数据的场景，如用户的偏好设置、认证状态等。</li>
<li><strong>Session</strong> 适用于服务器端需要管理用户状态的场景，通常用于传统的 Web 应用中，需要跟踪用户登录状态。</li>
<li><strong>Token</strong> 适用于分布式应用和 API 认证，尤其是在微服务架构或移动应用中，Token 是常用的无状态认证机制。</li>
</ul>
<h2 id="_3、cookie-localstorage-sessionstorage-区别" tabindex="-1"><a class="header-anchor" href="#_3、cookie-localstorage-sessionstorage-区别"><span>3、cookie localstorage sessionstorage 区别</span></a></h2>
<p><strong>Cookie、LocalStorage 和 SessionStorage</strong> 都是浏览器用于存储客户端数据的技术，但它们在存储位置、生命周期、容量等方面有显著的区别。以下是它们之间的主要差异：</p>
<h3 id="_1-cookie-1" tabindex="-1"><a class="header-anchor" href="#_1-cookie-1"><span>1. <strong>Cookie</strong></span></a></h3>
<ul>
<li><strong>存储位置：</strong> 存储在浏览器中，随每个 HTTP 请求一起发送。</li>
<li><strong>容量：</strong> 每个 Cookie 的最大容量通常为 4KB。</li>
<li><strong>生命周期：</strong>
<ul>
<li>Cookie 可以设置 <code v-pre>expires</code> 或 <code v-pre>max-age</code> 属性来指定过期时间。若未设置，则会在会话结束时（即浏览器关闭）过期。</li>
</ul>
</li>
<li><strong>作用域：</strong>
<ul>
<li>Cookie 可以设置 <code v-pre>domain</code> 和 <code v-pre>path</code> 属性，指定哪些 URL 可以访问该 Cookie。</li>
<li>Cookie 会随每个 HTTP 请求自动发送到服务器，适用于服务器端与客户端之间的状态保持。</li>
</ul>
</li>
<li><strong>安全性：</strong>
<ul>
<li>可以设置 <code v-pre>Secure</code> 属性，使 Cookie 仅通过 HTTPS 发送，增加安全性。</li>
<li>可以设置 <code v-pre>HttpOnly</code> 属性，防止 JavaScript 访问 Cookie，增强防止 XSS 攻击的安全性。</li>
</ul>
</li>
<li><strong>缺点：</strong>
<ul>
<li>每个请求都会自动发送 Cookie，这可能会影响性能，尤其是在大量 Cookie 的情况下。</li>
</ul>
</li>
</ul>
<h3 id="_2-localstorage" tabindex="-1"><a class="header-anchor" href="#_2-localstorage"><span>2. <strong>LocalStorage</strong></span></a></h3>
<ul>
<li><strong>存储位置：</strong> 存储在浏览器中，属于本地存储，数据只在客户端存在。</li>
<li><strong>容量：</strong> 每个域名通常允许存储 5MB 或更多的数据（浏览器有所不同）。</li>
<li><strong>生命周期：</strong>
<ul>
<li>LocalStorage 中的数据在浏览器关闭后仍然存在，直到被手动删除或通过 JavaScript 删除。</li>
</ul>
</li>
<li><strong>作用域：</strong>
<ul>
<li>LocalStorage 只限于客户端，数据不会自动发送给服务器。</li>
<li>它适用于存储长期需要的数据，比如用户设置、缓存等。</li>
</ul>
</li>
<li><strong>安全性：</strong>
<ul>
<li>LocalStorage 通过 JavaScript 访问，可能受到 XSS 攻击的威胁。</li>
<li>不会像 Cookie 那样随每个 HTTP 请求一起发送，因此更适合存储不需要与服务器通信的数据。</li>
</ul>
</li>
</ul>
<h2 id="_4、说一下浏览器缓存机制" tabindex="-1"><a class="header-anchor" href="#_4、说一下浏览器缓存机制"><span>4、说一下浏览器缓存机制？</span></a></h2>
<p>浏览器缓存机制是指浏览器通过保存静态资源（如图片、CSS、JavaScript 文件等）来减少网络请求，提升页面加载速度。它通过利用不同的缓存策略来判断是否重新请求资源或使用本地缓存。浏览器缓存分为两种类型：<strong>强缓存</strong> 和 <strong>协商缓存</strong>。</p>
<h3 id="_1-强缓存-strong-cache" tabindex="-1"><a class="header-anchor" href="#_1-强缓存-strong-cache"><span>1. <strong>强缓存（Strong Cache）</strong></span></a></h3>
<p>强缓存指的是在缓存有效期内，浏览器直接使用缓存资源，不会发送请求到服务器。强缓存由 HTTP 响应头中的 <code v-pre>Cache-Control</code> 和 <code v-pre>Expires</code> 控制。</p>
<ul>
<li>
<p><strong>Cache-Control：</strong></p>
<ul>
<li><code v-pre>Cache-Control</code> 是强缓存的主要控制机制。它通过设置不同的指令来决定缓存的策略。
<ul>
<li><code v-pre>public</code>：表示响应可以被任何缓存缓存，不限于浏览器缓存。</li>
<li><code v-pre>private</code>：表示响应只能被单一用户的浏览器缓存，不能被共享缓存（如 CDN）缓存。</li>
<li><code v-pre>no-store</code>：禁止缓存，浏览器每次都必须请求服务器获取最新数据。</li>
<li><code v-pre>no-cache</code>：即使有缓存，也必须先向服务器验证缓存是否过期，才可以使用缓存。</li>
<li><code v-pre>max-age=&lt;seconds&gt;</code>：指定缓存的最大有效时间，单位为秒。超过这个时间，缓存会过期。</li>
<li><code v-pre>s-maxage=&lt;seconds&gt;</code>：与 <code v-pre>max-age</code> 相似，但仅影响共享缓存，如 CDN 缓存。</li>
</ul>
</li>
</ul>
</li>
<li>
<p><strong>Expires：</strong></p>
<ul>
<li><code v-pre>Expires</code> 头部指定缓存资源的过期时间，过期后缓存会被清除。如果 <code v-pre>Expires</code> 存在且有效，则缓存一直有效直到该时间点。</li>
<li>需要注意，<code v-pre>Expires</code> 使用的是绝对时间，而 <code v-pre>Cache-Control</code> 使用的是相对时间（<code v-pre>max-age</code>）。如果两者都存在，<code v-pre>Cache-Control</code> 的优先级更高。</li>
</ul>
</li>
</ul>
<h3 id="_2-协商缓存-conditional-cache" tabindex="-1"><a class="header-anchor" href="#_2-协商缓存-conditional-cache"><span>2. <strong>协商缓存（Conditional Cache）</strong></span></a></h3>
<p>协商缓存指的是浏览器会发送请求到服务器，通过与服务器协商，判断是否使用本地缓存。服务器根据缓存资源的状态返回是否使用缓存。</p>
<ul>
<li>
<p><strong>Last-Modified 和 If-Modified-Since：</strong></p>
<ul>
<li><strong>Last-Modified</strong>：服务器返回资源的最后修改时间。</li>
<li><strong>If-Modified-Since</strong>：当浏览器发起请求时，会在请求头中携带 <code v-pre>If-Modified-Since</code>，其值为上次缓存时服务器返回的 <code v-pre>Last-Modified</code> 时间。</li>
<li>如果服务器返回的资源没有变化，服务器会返回 <code v-pre>304 Not Modified</code>，表示客户端可以继续使用本地缓存；如果资源有变化，服务器会返回新的资源和 <code v-pre>200 OK</code> 响应。</li>
</ul>
</li>
<li>
<p><strong>ETag 和 If-None-Match：</strong></p>
<ul>
<li><strong>ETag</strong>：服务器为每个资源生成一个唯一的标识符（通常是文件内容的哈希值），并通过 <code v-pre>ETag</code> 响应头返回。</li>
<li><strong>If-None-Match</strong>：浏览器发送请求时，会在请求头中携带 <code v-pre>If-None-Match</code>，其值为上次缓存时服务器返回的 <code v-pre>ETag</code>。</li>
<li>如果资源没有改变，服务器会返回 <code v-pre>304 Not Modified</code>；如果资源已更改，服务器返回新的资源和 <code v-pre>200 OK</code> 响应。</li>
</ul>
</li>
</ul>
<h3 id="_3-缓存的工作流程" tabindex="-1"><a class="header-anchor" href="#_3-缓存的工作流程"><span>3. <strong>缓存的工作流程</strong></span></a></h3>
<ol>
<li><strong>浏览器请求资源</strong>：当浏览器第一次请求一个资源时，它会向服务器发送请求。</li>
<li><strong>强缓存判断</strong>：服务器响应时，会包含 <code v-pre>Cache-Control</code> 或 <code v-pre>Expires</code> 头。如果资源在缓存有效期内，浏览器直接使用缓存，不向服务器发送请求。</li>
<li><strong>协商缓存判断</strong>：
<ul>
<li>如果强缓存失效，浏览器会根据 <code v-pre>Last-Modified</code> 或 <code v-pre>ETag</code> 信息向服务器发送请求，验证资源是否被修改。</li>
<li>服务器根据条件判断资源是否有更新。如果没有变化，返回 <code v-pre>304 Not Modified</code>，浏览器则使用缓存资源；如果有变化，返回新的资源。</li>
</ul>
</li>
</ol>
<h3 id="_4-缓存的清理与失效" tabindex="-1"><a class="header-anchor" href="#_4-缓存的清理与失效"><span>4. <strong>缓存的清理与失效</strong></span></a></h3>
<ul>
<li>浏览器的缓存机制是有一定的失效时间的，超出有效期后，缓存会自动失效并从缓存中删除。</li>
<li>一些情况如手动清理缓存、强制刷新（Ctrl + F5）会导致缓存被清除。</li>
</ul>
<h3 id="总结-1" tabindex="-1"><a class="header-anchor" href="#总结-1"><span>总结</span></a></h3>
<ul>
<li><strong>强缓存</strong> 让浏览器直接使用缓存，不再请求服务器。</li>
<li><strong>协商缓存</strong> 则是通过与服务器的通信来验证缓存是否有效，只有在缓存失效时才重新加载资源。</li>
</ul>
<p>浏览器缓存机制能够有效减少资源加载时间，提高页面响应速度，但需要合理配置缓存策略，确保客户端和服务器之间的数据一致性和安全性。</p>
<h2 id="_5、promise有几种状态-可以重复改变吗" tabindex="-1"><a class="header-anchor" href="#_5、promise有几种状态-可以重复改变吗"><span>5、promise有几种状态，可以重复改变吗？</span></a></h2>
<p>在 JavaScript 中，Promise 有三种状态：</p>
<ol>
<li><strong>Pending（等待态）</strong>：这是 Promise 创建后初始的状态，表示异步操作尚未完成。</li>
<li><strong>Fulfilled（成功态）</strong>：表示异步操作成功完成，此时 Promise 会返回一个成功的结果。</li>
<li><strong>Rejected（失败态）</strong>：表示异步操作失败，此时 Promise 会返回一个失败的原因（错误信息）。</li>
</ol>
<p>一旦 Promise 从 <strong>Pending</strong> 状态转变为 <strong>Fulfilled</strong> 或 <strong>Rejected</strong>，它的状态就固定下来，无法再次改变。这意味着无论在后续代码中如何尝试，已经 settled（定型）的 Promise 都不会重复改变状态。这种设计确保了 Promise 的结果具有确定性，便于后续的链式调用和错误处理。</p>
<p>简单示例说明状态不可重复改变：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> promise <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">"Success"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 状态从 pending 转为 fulfilled</span></span>
<span class="line">  <span class="token function">reject</span><span class="token punctuation">(</span><span class="token string">"Error"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>     <span class="token comment">// 这行代码无效，因为状态已固定为 fulfilled</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">promise<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">result</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出 "Success"</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">error</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 不会执行</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中，即使调用了 <code v-pre>reject(&quot;Error&quot;)</code>，Promise 的状态已经由 <code v-pre>resolve(&quot;Success&quot;)</code> 固定为 <strong>Fulfilled</strong>，因此后续的 <code v-pre>reject</code> 调用不会对状态产生任何影响。</p>
<p>总结：</p>
<ul>
<li><strong>状态数量</strong>：三种（pending、fulfilled、rejected）。</li>
<li><strong>状态不可变</strong>：一旦 Promise 状态确定（不论是 fulfilled 还是 rejected），就不能再改变。</li>
</ul>
<h2 id="_6、说一说跨域请求" tabindex="-1"><a class="header-anchor" href="#_6、说一说跨域请求"><span>6、说一说跨域请求</span></a></h2>
<p><strong>跨域请求</strong>（Cross-Origin Request）是指在一个域名下的网页尝试请求另一个域名上的资源。由于浏览器的同源策略（Same-Origin Policy），默认情况下，网页只能向与其同一源（协议、域名和端口都相同）的服务器发送请求。这是为了防止恶意网站访问用户的敏感数据。</p>
<h3 id="什么是同源策略" tabindex="-1"><a class="header-anchor" href="#什么是同源策略"><span>什么是同源策略？</span></a></h3>
<p>同源策略是浏览器的一种安全机制，它要求：</p>
<ul>
<li><strong>协议相同</strong>（如 <code v-pre>http</code> 和 <code v-pre>https</code> 不同）</li>
<li><strong>域名相同</strong></li>
<li><strong>端口相同</strong>（如 <code v-pre>80</code> 和 <code v-pre>8080</code> 不同）</li>
</ul>
<p>只有在这三者都相同的情况下，浏览器才允许进行资源共享，否则会认为是“跨域”请求，默认会阻止。</p>
<h3 id="跨域请求的场景" tabindex="-1"><a class="header-anchor" href="#跨域请求的场景"><span>跨域请求的场景</span></a></h3>
<ol>
<li>
<p><strong>通过 <code v-pre>&lt;script&gt;</code> 标签加载资源</strong>：</p>
<ul>
<li>这种方式并不受同源策略的限制，因为 <code v-pre>&lt;script&gt;</code> 标签是允许跨域的，通常用于 JSONP（JSON with Padding）。</li>
</ul>
</li>
<li>
<p><strong>AJAX 请求</strong>：</p>
<ul>
<li>通过 XMLHttpRequest 或 Fetch API 发起的请求通常会被浏览器的同源策略所限制，导致跨域请求失败。</li>
</ul>
</li>
<li>
<p><strong>WebSocket</strong>：</p>
<ul>
<li>WebSocket 协议不受同源策略的限制，可以跨域连接。</li>
</ul>
</li>
</ol>
<h3 id="跨域请求的解决方式" tabindex="-1"><a class="header-anchor" href="#跨域请求的解决方式"><span>跨域请求的解决方式</span></a></h3>
<p>为了实现跨域请求，开发者可以使用以下几种方法：</p>
<h4 id="_1-cors-跨域资源共享" tabindex="-1"><a class="header-anchor" href="#_1-cors-跨域资源共享"><span>1. <strong>CORS（跨域资源共享）</strong></span></a></h4>
<p>CORS 是一种允许服务器明确指定允许哪些域进行访问的机制。它通过设置 HTTP 头来告知浏览器跨域请求是否被允许。</p>
<ul>
<li><strong>服务器端配置</strong>：通过在服务器端返回 <code v-pre>Access-Control-Allow-Origin</code> 头部来声明允许的跨域源。</li>
</ul>
<p>示例：</p>
<ul>
<li>
<p>服务器响应头：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">Access-Control-Allow-Origin: *</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>或者指定某个域：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">Access-Control-Allow-Origin: http://example.com</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p>其他常见 CORS 头：</p>
<ul>
<li><code v-pre>Access-Control-Allow-Methods</code>: 允许的 HTTP 方法（如 <code v-pre>GET</code>, <code v-pre>POST</code>, <code v-pre>PUT</code> 等）。</li>
<li><code v-pre>Access-Control-Allow-Headers</code>: 允许的请求头。</li>
<li><code v-pre>Access-Control-Allow-Credentials</code>: 是否允许发送 cookies 或认证信息。</li>
</ul>
</li>
</ul>
<p><strong>预检请求（Preflight Request）</strong>：</p>
<ul>
<li>对于某些跨域请求（如使用了自定义头或非简单方法的请求），浏览器会首先发送一个 OPTIONS 请求来检查目标服务器是否允许该跨域请求。这就是所谓的预检请求。</li>
</ul>
<p>例如：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">OPTIONS /some-resource HTTP/1.1</span>
<span class="line">Origin: http://example.com</span>
<span class="line">Access-Control-Request-Method: POST</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-jsonp-json-with-padding" tabindex="-1"><a class="header-anchor" href="#_2-jsonp-json-with-padding"><span>2. <strong>JSONP（JSON with Padding）</strong></span></a></h4>
<ul>
<li>JSONP 是一种通过 <code v-pre>&lt;script&gt;</code> 标签的跨域机制来解决跨域请求的技术。它通过动态创建 <code v-pre>&lt;script&gt;</code> 标签来绕过浏览器的同源策略，但只支持 <code v-pre>GET</code> 请求。</li>
</ul>
<p>示例：</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://example.com/data?callback=myFunction<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">myFunction</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-代理-proxy" tabindex="-1"><a class="header-anchor" href="#_3-代理-proxy"><span>3. <strong>代理（Proxy）</strong></span></a></h4>
<ul>
<li>
<p>通过设置代理服务器，使客户端的请求通过服务器转发。代理服务器与目标资源服务器进行通信，并将响应返回给客户端，从而避免了浏览器的同源策略限制。</p>
</li>
<li>
<p>常见的做法是，前端请求发送到与前端同域的代理服务器，再由代理服务器转发请求到目标服务器。</p>
</li>
</ul>
<p>示例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">// 前端请求通过代理服务器转发</span></span>
<span class="line"><span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">'/api/some-data'</span><span class="token punctuation">)</span>  <span class="token comment">// 代理请求</span></span>
<span class="line"><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">response</span> <span class="token operator">=></span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">data</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>代理服务器可以使用 Node.js（如 <code v-pre>http-proxy-middleware</code>）或者其他后端技术来实现。</p>
<h4 id="_4-websocket" tabindex="-1"><a class="header-anchor" href="#_4-websocket"><span>4. <strong>WebSocket</strong></span></a></h4>
<ul>
<li>WebSocket 是一种允许跨域的通信协议，可以用于双向通信。它不受同源策略的限制，可以用来解决实时应用（如聊天应用、实时数据更新）中的跨域问题。</li>
</ul>
<p>示例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> socket <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WebSocket</span><span class="token punctuation">(</span><span class="token string">'ws://example.com/socket'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">socket<span class="token punctuation">.</span><span class="token function-variable function">onopen</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    socket<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">'Hello, Server!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-iframe-postmessage" tabindex="-1"><a class="header-anchor" href="#_5-iframe-postmessage"><span>5. <strong>Iframe + postMessage</strong></span></a></h4>
<ul>
<li>使用 <code v-pre>&lt;iframe&gt;</code> 标签嵌套跨域的内容，借助 <code v-pre>window.postMessage</code> 方法实现父页面与 iframe 页面之间的安全通信。</li>
</ul>
<p>示例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">// 父页面发送消息给 iframe</span></span>
<span class="line">iframe<span class="token punctuation">.</span>contentWindow<span class="token punctuation">.</span><span class="token function">postMessage</span><span class="token punctuation">(</span><span class="token string">'Hello from parent'</span><span class="token punctuation">,</span> <span class="token string">'http://example.com'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// iframe 页面接收消息</span></span>
<span class="line">window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'message'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span>origin <span class="token operator">!==</span> <span class="token string">'http://example.com'</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="总结-2" tabindex="-1"><a class="header-anchor" href="#总结-2"><span>总结：</span></a></h3>
<p>跨域请求本质上是浏览器的一种安全机制，用来防止恶意网站获取用户信息。为了解决这个问题，可以使用 CORS、JSONP、代理服务器、WebSocket 或 <code v-pre>iframe + postMessage</code> 等方式来绕过跨域限制。在现代前端开发中，<strong>CORS</strong> 是最常用的解决方案，因为它是标准化的，并且支持多种 HTTP 方法。</p>
</div></template>


