<template><div><!-- @format -->
<h1 id="这是浏览器" tabindex="-1"><a class="header-anchor" href="#这是浏览器"><span>这是浏览器</span></a></h1>
<h2 id="说说你对-fetch-的理解-它有哪些优点和不足" tabindex="-1"><a class="header-anchor" href="#说说你对-fetch-的理解-它有哪些优点和不足"><span>说说你对 fetch 的理解，它有哪些优点和不足？</span></a></h2>
<h3 id="fetch-的理解" tabindex="-1"><a class="header-anchor" href="#fetch-的理解"><span><strong><code v-pre>fetch</code> 的理解</strong></span></a></h3>
<p><code v-pre>fetch</code> 是现代浏览器提供的一种用于进行 HTTP 请求的原生 JavaScript API，它比 <code v-pre>XMLHttpRequest</code>（XHR）更加简洁、灵活、支持 Promise，并且可以更方便地进行异步编程。<code v-pre>fetch</code> 提供了一种更为现代的方式来处理网络请求，它基于 Promise，能更好地与 <code v-pre>async</code>/<code v-pre>await</code> 配合使用。</p>
<h4 id="基本用法" tabindex="-1"><a class="header-anchor" href="#基本用法"><span><strong>基本用法</strong></span></a></h4>
<p><code v-pre>fetch</code> 方法接受一个请求的 URL 和一个配置对象，返回一个 Promise，解析为 <code v-pre>Response</code> 对象，该对象包含了服务器返回的响应信息。</p>
<p><strong>基本语法：</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token function">fetch</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> options<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">response</span> <span class="token operator">=></span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment">// 处理响应数据</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">data</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">error</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">'Error:'</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
<span class="line">    <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">'https://api.example.com/data'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token keyword">await</span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">'Error:'</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
<span class="line">  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">response</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>response<span class="token punctuation">.</span>ok<span class="token punctuation">)</span> <span class="token punctuation">{</span>  <span class="token comment">// 需要手动检查 HTTP 状态码</span></span>
<span class="line">      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">'Network response was not ok'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">return</span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">data</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">error</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">'Error:'</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
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
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> controller <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AbortController</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> signal <span class="token operator">=</span> controller<span class="token punctuation">.</span>signal<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">'https://api.example.com/data'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> signal <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">response</span> <span class="token operator">=></span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">data</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">error</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>error<span class="token punctuation">.</span>name <span class="token operator">===</span> <span class="token string">'AbortError'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Request was aborted'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">      console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">'Error:'</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 在适当时机调用</span></span>
<span class="line">controller<span class="token punctuation">.</span><span class="token function">abort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>默认不支持 <code v-pre>timeout</code></strong>：</p>
<ul>
<li><code v-pre>fetch</code> 并没有内建的 <code v-pre>timeout</code> 配置，如果请求超时，它会继续等待直到收到响应。为了支持超时控制，需要使用 <code v-pre>Promise.race()</code> 或者结合 <code v-pre>AbortController</code> 手动实现。</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> timeout <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">_<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=></span></span>
<span class="line">  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">reject</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">'Request timed out'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">5000</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> request <span class="token operator">=</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">'https://api.example.com/data'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">Promise<span class="token punctuation">.</span><span class="token function">race</span><span class="token punctuation">(</span><span class="token punctuation">[</span>request<span class="token punctuation">,</span> timeout<span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">response</span> <span class="token operator">=></span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">data</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">error</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
</div></template>


