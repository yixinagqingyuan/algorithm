<template><div><!-- @format -->
<h1 id="基础题目" tabindex="-1"><a class="header-anchor" href="#基础题目"><span>基础题目</span></a></h1>
<h2 id="如何解决⻚面请求接口大规模并发问题" tabindex="-1"><a class="header-anchor" href="#如何解决⻚面请求接口大规模并发问题"><span>如何解决⻚⾯请求接⼝⼤规模并发问题？</span></a></h2>
<p>页面请求接口大规模并发问题是指在前端应用中同时发起大量网络请求时，可能会导致性能问题（如浏览器或服务器崩溃）、请求失败、服务器资源紧张等问题。以下是几种常见的解决方案：</p>
<hr>
<h3 id="_1-问题的原因分析" tabindex="-1"><a class="header-anchor" href="#_1-问题的原因分析"><span><strong>1. 问题的原因分析</strong></span></a></h3>
<ol>
<li><strong>浏览器限制并发连接数</strong>：大部分浏览器对同一个域名的并发请求数量有限制（通常是 6~8 个）。</li>
<li><strong>服务器压力</strong>：过多的并发请求可能导致服务器负载过高，出现响应延迟或失败。</li>
<li><strong>接口依赖关系</strong>：某些请求可能依赖于其他请求的结果，增加了复杂性。</li>
<li><strong>网络带宽问题</strong>：过多请求同时进行可能会占用客户端的网络资源，导致拥塞。</li>
</ol>
<hr>
<h3 id="_2-解决方案" tabindex="-1"><a class="header-anchor" href="#_2-解决方案"><span><strong>2. 解决方案</strong></span></a></h3>
<h4 id="_2-1-请求合并-batching" tabindex="-1"><a class="header-anchor" href="#_2-1-请求合并-batching"><span><strong>2.1 请求合并（Batching）</strong></span></a></h4>
<ul>
<li><strong>原理</strong>：将多个请求合并成一个批量请求，通过服务器端解析后处理，减少请求数量。</li>
<li><strong>适用场景</strong>：多个相似的小请求（如获取多条数据详情）。</li>
<li><strong>示例</strong>：</li>
</ul>
<p>前端代码：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> ids <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token function">fetch</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">/api/batch?ids=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>ids<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">','</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token operator">=></span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>后端解析：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">// 假设收到的请求为 GET /api/batch?ids=1,2,3,4,5</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/api/batch'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> ids <span class="token operator">=</span> req<span class="token punctuation">.</span>query<span class="token punctuation">.</span>ids<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">','</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token keyword">const</span> data <span class="token operator">=</span> ids<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">id</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span> id<span class="token punctuation">,</span> <span class="token literal-property property">detail</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Detail for </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">  res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h4 id="_2-2-请求节流-throttling" tabindex="-1"><a class="header-anchor" href="#_2-2-请求节流-throttling"><span><strong>2.2 请求节流（Throttling）</strong></span></a></h4>
<ul>
<li><strong>原理</strong>：限制同时进行的请求数量，待某些请求完成后再发送新的请求。</li>
<li><strong>适用场景</strong>：页面中发起了大量非关键请求。</li>
<li><strong>实现方法</strong>：
使用 <code v-pre>Promise</code> 队列控制请求并发数：</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">throttleRequests</span><span class="token punctuation">(</span><span class="token parameter">requests<span class="token punctuation">,</span> maxConcurrent</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> results <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line">  <span class="token keyword">let</span> index <span class="token operator">=</span> <span class="token number">0</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">const</span> <span class="token function-variable function">execute</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">while</span> <span class="token punctuation">(</span>index <span class="token operator">&lt;</span> requests<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">const</span> currentIndex <span class="token operator">=</span> index<span class="token operator">++</span></span>
<span class="line">      results<span class="token punctuation">[</span>currentIndex<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">await</span> requests<span class="token punctuation">[</span>currentIndex<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">const</span> workers <span class="token operator">=</span> <span class="token function">Array</span><span class="token punctuation">(</span>maxConcurrent<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>execute<span class="token punctuation">)</span></span>
<span class="line">  <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span>workers<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> results<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 示例</span></span>
<span class="line"><span class="token keyword">const</span> requests <span class="token operator">=</span> <span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">'/api/data1'</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">'/api/data2'</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">'/api/data3'</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">]</span></span>
<span class="line"><span class="token function">throttleRequests</span><span class="token punctuation">(</span>requests<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>console<span class="token punctuation">.</span>log<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h4 id="_2-3-请求去重" tabindex="-1"><a class="header-anchor" href="#_2-3-请求去重"><span><strong>2.3 请求去重</strong></span></a></h4>
<ul>
<li><strong>原理</strong>：在短时间内对同一资源的重复请求只保留一个，避免浪费资源。</li>
<li><strong>适用场景</strong>：多个组件或功能可能触发相同的请求。</li>
<li><strong>实现方法</strong>：使用缓存记录正在进行的请求，完成后移除。</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> requestCache <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">fetchWithDeduplication</span><span class="token punctuation">(</span><span class="token parameter">url</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>requestCache<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> requestCache<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">const</span> promise <span class="token operator">=</span> <span class="token function">fetch</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">finally</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> requestCache<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">  requestCache<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> promise<span class="token punctuation">)</span></span>
<span class="line">  <span class="token keyword">return</span> promise</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 示例</span></span>
<span class="line"><span class="token function">fetchWithDeduplication</span><span class="token punctuation">(</span><span class="token string">'/api/data'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token function">fetchWithDeduplication</span><span class="token punctuation">(</span><span class="token string">'/api/data'</span><span class="token punctuation">)</span> <span class="token comment">// 第二次请求将复用第一次的结果</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h4 id="_2-4-分批请求-请求队列" tabindex="-1"><a class="header-anchor" href="#_2-4-分批请求-请求队列"><span><strong>2.4 分批请求（请求队列）</strong></span></a></h4>
<ul>
<li><strong>原理</strong>：将大量请求拆分为多批次发送，每一批完成后再发送下一批。</li>
<li><strong>适用场景</strong>：需要处理大量请求且对时间敏感性不高。</li>
<li><strong>示例</strong>：</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">batchRequests</span><span class="token punctuation">(</span><span class="token parameter">requests<span class="token punctuation">,</span> batchSize</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> requests<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">+=</span> batchSize<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> batch <span class="token operator">=</span> requests<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> i <span class="token operator">+</span> batchSize<span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">await</span> Promise<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span>batch<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">req</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">req</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 示例</span></span>
<span class="line"><span class="token keyword">const</span> requests <span class="token operator">=</span> <span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">'/api/data1'</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">'/api/data2'</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">'/api/data3'</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">]</span></span>
<span class="line"><span class="token function">batchRequests</span><span class="token punctuation">(</span>requests<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token comment">// 每次发送 2 个请求</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h4 id="_2-5-服务端分页" tabindex="-1"><a class="header-anchor" href="#_2-5-服务端分页"><span><strong>2.5 服务端分页</strong></span></a></h4>
<ul>
<li><strong>原理</strong>：让后端支持分页查询，减少前端一次性获取大量数据。</li>
<li><strong>适用场景</strong>：列表类数据加载。</li>
<li><strong>示例</strong>：</li>
</ul>
<p>前端：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> currentPage <span class="token operator">=</span> <span class="token number">1</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">loadPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">/api/data?page=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>currentPage<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token keyword">await</span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span></span>
<span class="line">  currentPage<span class="token operator">++</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>后端（Node.js 示例）：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/api/data'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> page <span class="token operator">=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>query<span class="token punctuation">.</span>page<span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token number">1</span></span>
<span class="line">  <span class="token keyword">const</span> pageSize <span class="token operator">=</span> <span class="token number">10</span></span>
<span class="line">  <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token function">getDataFromDB</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token punctuation">(</span>page <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">*</span> pageSize<span class="token punctuation">,</span> page <span class="token operator">*</span> pageSize<span class="token punctuation">)</span></span>
<span class="line">  res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h4 id="_2-6-web-workers-前端多线程" tabindex="-1"><a class="header-anchor" href="#_2-6-web-workers-前端多线程"><span><strong>2.6 Web Workers（前端多线程）</strong></span></a></h4>
<ul>
<li><strong>原理</strong>：利用 Web Workers 处理部分复杂的逻辑或非关键请求，减少主线程负担。</li>
<li><strong>适用场景</strong>：需要处理大量数据计算或非关键的异步请求。</li>
</ul>
<hr>
<h4 id="_2-7-使用-cdn-缓存" tabindex="-1"><a class="header-anchor" href="#_2-7-使用-cdn-缓存"><span><strong>2.7 使用 CDN 缓存</strong></span></a></h4>
<ul>
<li><strong>原理</strong>：通过 CDN 缓存静态资源或接口响应，减少重复请求和服务器压力。</li>
<li><strong>适用场景</strong>：静态资源请求（如图片、文件）。</li>
</ul>
<hr>
<h4 id="_2-8-http-2-多路复用" tabindex="-1"><a class="header-anchor" href="#_2-8-http-2-多路复用"><span><strong>2.8 HTTP/2 多路复用</strong></span></a></h4>
<ul>
<li><strong>原理</strong>：通过 HTTP/2 协议在同一连接中发送多个请求，减少连接开销。</li>
<li><strong>适用场景</strong>：请求数较多的场景（需要服务端支持 HTTP/2）。</li>
</ul>
<hr>
<h4 id="_2-9-提前请求-prefetching" tabindex="-1"><a class="header-anchor" href="#_2-9-提前请求-prefetching"><span><strong>2.9 提前请求（Prefetching）</strong></span></a></h4>
<ul>
<li><strong>原理</strong>：提前加载用户可能需要的资源或接口数据，避免瞬时并发。</li>
<li><strong>适用场景</strong>：用户操作可以预测（如分页列表的下一页）。</li>
</ul>
<hr>
<h3 id="_3-实际应用策略" tabindex="-1"><a class="header-anchor" href="#_3-实际应用策略"><span><strong>3. 实际应用策略</strong></span></a></h3>
<p>根据场景选择合适的优化方案：</p>
<ol>
<li><strong>少量重复请求</strong>：用去重策略避免重复发送。</li>
<li><strong>大量无序请求</strong>：使用节流或分批请求限制并发数量。</li>
<li><strong>性能关键场景</strong>：采用请求合并或服务端分页。</li>
<li><strong>长远优化</strong>：考虑 CDN 缓存、HTTP/2、Web Workers 等。</li>
</ol>
<p>通过以上优化方案，可以有效解决页面请求接口的大规模并发问题，从而提升前端性能和用户体验。</p>
</div></template>


