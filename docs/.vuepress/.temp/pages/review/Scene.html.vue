<template><div><!-- @format -->
<h1 id="场景热门考题" tabindex="-1"><a class="header-anchor" href="#场景热门考题"><span>场景热门考题</span></a></h1>
<h2 id="_1、前端如何实现扫码登录功能" tabindex="-1"><a class="header-anchor" href="#_1、前端如何实现扫码登录功能"><span>1、前端如何实现扫码登录功能？</span></a></h2>
<h3 id="前端实现扫码登录功能的基本流程" tabindex="-1"><a class="header-anchor" href="#前端实现扫码登录功能的基本流程"><span><strong>前端实现扫码登录功能的基本流程</strong></span></a></h3>
<p>扫码登录是现代应用中常见的功能，尤其在 Web 和移动端结合的场景下，比如微信、支付宝等。前端在扫码登录的实现中主要负责<strong>二维码生成</strong>、<strong>轮询状态</strong>以及<strong>交互界面</strong>。以下是详细步骤：</p>
<hr>
<h3 id="_1-基本原理" tabindex="-1"><a class="header-anchor" href="#_1-基本原理"><span><strong>1. 基本原理</strong></span></a></h3>
<p>扫码登录的基本工作原理是：</p>
<ol>
<li><strong>用户访问网页</strong>：
<ul>
<li>后端生成一个唯一的登录凭证（如临时会话 ID 或 Token）。</li>
<li>前端根据后端返回的数据生成二维码。</li>
</ul>
</li>
<li><strong>移动设备扫码</strong>：
<ul>
<li>用户在移动端（如微信、App）扫描二维码，二维码中包含了临时会话信息或登录链接。</li>
</ul>
</li>
<li><strong>验证身份</strong>：
<ul>
<li>移动端将验证信息（如用户授权信息）发送给后端。</li>
</ul>
</li>
<li><strong>通知前端状态</strong>：
<ul>
<li>前端通过轮询或 WebSocket 等方式检查登录状态。</li>
</ul>
</li>
<li><strong>完成登录</strong>：
<ul>
<li>如果后端验证成功，前端跳转到登录后的页面。</li>
</ul>
</li>
</ol>
<hr>
<h3 id="_2-前端详细实现步骤" tabindex="-1"><a class="header-anchor" href="#_2-前端详细实现步骤"><span><strong>2. 前端详细实现步骤</strong></span></a></h3>
<h4 id="_1-向后端请求临时会话-id-或-token" tabindex="-1"><a class="header-anchor" href="#_1-向后端请求临时会话-id-或-token"><span><strong>(1) 向后端请求临时会话 ID 或 Token</strong></span></a></h4>
<p>在用户打开扫码登录页面时，前端向后端发送请求，获取一个唯一的登录凭证（如 <code v-pre>session_id</code> 或 <code v-pre>login_token</code>）。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">// 示例请求登录凭证</span></span>
<span class="line"><span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">'/api/getLoginToken'</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token operator">=></span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> <span class="token punctuation">{</span> loginToken <span class="token punctuation">}</span> <span class="token operator">=</span> data</span>
<span class="line">    <span class="token function">generateQRCode</span><span class="token punctuation">(</span>loginToken<span class="token punctuation">)</span> <span class="token comment">// 生成二维码</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-生成二维码" tabindex="-1"><a class="header-anchor" href="#_2-生成二维码"><span><strong>(2) 生成二维码</strong></span></a></h4>
<p>使用二维码生成工具（如 <code v-pre>qrcode.js</code>）将后端返回的临时登录凭证生成二维码。</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>qrcode<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">// 使用 qrcode.js 生成二维码</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">generateQRCode</span><span class="token punctuation">(</span><span class="token parameter">loginToken</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> qrContent <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">https://yourdomain.com/login?token=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>loginToken<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span> <span class="token comment">// 二维码内容</span></span>
<span class="line">  <span class="token keyword">const</span> qrCodeContainer <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'qrcode'</span><span class="token punctuation">)</span></span>
<span class="line">  QRCode<span class="token punctuation">.</span><span class="token function">toCanvas</span><span class="token punctuation">(</span>qrCodeContainer<span class="token punctuation">,</span> qrContent<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'二维码生成成功！'</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-定时轮询登录状态" tabindex="-1"><a class="header-anchor" href="#_3-定时轮询登录状态"><span><strong>(3) 定时轮询登录状态</strong></span></a></h4>
<p>前端通过轮询或 WebSocket 与后端通信，检查用户是否已在移动端完成登录。</p>
<ul>
<li><strong>轮询实现</strong>：</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">pollLoginStatus</span><span class="token punctuation">(</span><span class="token parameter">loginToken</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> intervalId <span class="token operator">=</span> <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">/api/checkLoginStatus?token=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>loginToken<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span></span>
<span class="line">      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token operator">=></span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>data<span class="token punctuation">.</span>status <span class="token operator">===</span> <span class="token string">'success'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token function">clearInterval</span><span class="token punctuation">(</span>intervalId<span class="token punctuation">)</span></span>
<span class="line">          <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'登录成功！'</span><span class="token punctuation">)</span></span>
<span class="line">          window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>href <span class="token operator">=</span> <span class="token string">'/dashboard'</span> <span class="token comment">// 跳转到登录后的页面</span></span>
<span class="line">        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>data<span class="token punctuation">.</span>status <span class="token operator">===</span> <span class="token string">'expired'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token function">clearInterval</span><span class="token punctuation">(</span>intervalId<span class="token punctuation">)</span></span>
<span class="line">          <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'二维码已过期，请刷新页面重试。'</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span> <span class="token comment">// 每 2 秒检查一次</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>WebSocket 实现</strong>：</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> socket <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WebSocket</span><span class="token punctuation">(</span><span class="token string">'wss://yourdomain.com/socket'</span><span class="token punctuation">)</span></span>
<span class="line">socket<span class="token punctuation">.</span><span class="token function-variable function">onopen</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  socket<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">action</span><span class="token operator">:</span> <span class="token string">'checkLoginStatus'</span><span class="token punctuation">,</span> <span class="token literal-property property">token</span><span class="token operator">:</span> loginToken <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">socket<span class="token punctuation">.</span><span class="token function-variable function">onmessage</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>data<span class="token punctuation">)</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>data<span class="token punctuation">.</span>status <span class="token operator">===</span> <span class="token string">'success'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'登录成功！'</span><span class="token punctuation">)</span></span>
<span class="line">    window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>href <span class="token operator">=</span> <span class="token string">'/dashboard'</span></span>
<span class="line">  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>data<span class="token punctuation">.</span>status <span class="token operator">===</span> <span class="token string">'expired'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'二维码已过期，请刷新页面重试。'</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-用户扫码" tabindex="-1"><a class="header-anchor" href="#_4-用户扫码"><span><strong>(4) 用户扫码</strong></span></a></h4>
<ul>
<li>用户使用移动端扫描二维码，二维码的内容会引导用户到一个后端 URL。</li>
<li>移动端的请求会携带登录凭证（如 <code v-pre>loginToken</code>），并提示用户确认登录。</li>
</ul>
<hr>
<h3 id="_3-后端的职责" tabindex="-1"><a class="header-anchor" href="#_3-后端的职责"><span><strong>3. 后端的职责</strong></span></a></h3>
<p>前端的扫码登录功能需要后端配合，后端的职责主要包括：</p>
<ol>
<li>
<p><strong>生成登录凭证</strong>：</p>
<ul>
<li>生成一个唯一的 <code v-pre>loginToken</code>，并在数据库中存储其状态（如未登录、已登录、已过期）。</li>
</ul>
</li>
<li>
<p><strong>处理移动端登录</strong>：</p>
<ul>
<li>移动端用户扫码后，携带 <code v-pre>loginToken</code> 和用户凭证（如用户的登录信息）发送到后端，后端验证用户身份后，更新 <code v-pre>loginToken</code> 的状态为已登录。</li>
</ul>
</li>
<li>
<p><strong>通知前端状态</strong>：</p>
<ul>
<li>前端轮询或通过 WebSocket 检查 <code v-pre>loginToken</code> 的状态，后端根据状态返回对应结果。</li>
</ul>
</li>
</ol>
<hr>
<h3 id="_4-前端的注意事项" tabindex="-1"><a class="header-anchor" href="#_4-前端的注意事项"><span><strong>4. 前端的注意事项</strong></span></a></h3>
<ul>
<li><strong>二维码过期处理</strong>：
<ul>
<li>二维码通常有有效期，前端可以根据后端返回的状态更新二维码或提示用户刷新页面。</li>
</ul>
</li>
<li><strong>安全性</strong>：
<ul>
<li>使用 HTTPS 确保通信加密，防止中间人攻击。</li>
<li>确保 <code v-pre>loginToken</code> 是临时的，使用一次后立即失效。</li>
</ul>
</li>
<li><strong>体验优化</strong>：
<ul>
<li>在二维码未失效的情况下，实时显示轮询的状态提示（如“请扫描二维码”或“登录成功”）。</li>
</ul>
</li>
</ul>
<hr>
<h3 id="示例流程图" tabindex="-1"><a class="header-anchor" href="#示例流程图"><span><strong>示例流程图</strong></span></a></h3>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">用户访问页面 -> 请求生成登录凭证 -> 前端生成二维码</span>
<span class="line">                  ↓                     ↑</span>
<span class="line">           用户扫码 -> 后端验证身份 -> 通知前端状态</span>
<span class="line">                                          ↓</span>
<span class="line">                                   用户登录成功</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span><strong>总结</strong></span></a></h3>
<p>前端实现扫码登录功能的核心在于生成二维码、轮询状态并与后端交互。后端负责生成和管理登录凭证的状态，而前端负责用户交互和实时状态反馈。通过合理的架构设计和安全加密机制，可以实现稳定、高效的扫码登录功能。</p>
<h2 id="_2、什么是单点登录-前端如何实现单点登录" tabindex="-1"><a class="header-anchor" href="#_2、什么是单点登录-前端如何实现单点登录"><span>2、什么是单点登录，前端如何实现单点登录？</span></a></h2>
<h3 id="什么是单点登录-sso-single-sign-on" tabindex="-1"><a class="header-anchor" href="#什么是单点登录-sso-single-sign-on"><span><strong>什么是单点登录（SSO - Single Sign-On）？</strong></span></a></h3>
<p>单点登录（Single Sign-On，简称 SSO）是一种认证机制，允许用户使用一个账号登录多个相互独立的系统，而不需要在每个系统中重复登录。用户只需登录一次，之后的访问过程由系统自动完成身份验证。</p>
<hr>
<h3 id="单点登录的核心原理" tabindex="-1"><a class="header-anchor" href="#单点登录的核心原理"><span><strong>单点登录的核心原理</strong></span></a></h3>
<p>单点登录的实现基于以下核心原理：</p>
<ol>
<li><strong>统一身份认证中心</strong>：所有的系统共享一个独立的认证中心（Authentication Server）。</li>
<li><strong>共享登录状态</strong>：认证中心通过 Token 或 Cookie 等方式，在多个系统间共享用户的登录状态。</li>
<li><strong>跳转认证</strong>：当用户访问系统 A 而未登录时，系统 A 会将用户引导到认证中心登录，登录后再跳转回系统 A。</li>
</ol>
<hr>
<h3 id="单点登录的主要流程" tabindex="-1"><a class="header-anchor" href="#单点登录的主要流程"><span><strong>单点登录的主要流程</strong></span></a></h3>
<ol>
<li>
<p><strong>用户请求系统 A</strong>：</p>
<ul>
<li>用户访问系统 A，但未登录。</li>
<li>系统 A 检查用户是否有有效的登录凭证，如果没有，重定向用户到认证中心。</li>
</ul>
</li>
<li>
<p><strong>认证中心验证用户身份</strong>：</p>
<ul>
<li>用户在认证中心输入账号和密码完成登录。</li>
<li>登录成功后，认证中心生成一个登录凭证（如 Token 或 SSO Cookie），并将其存储或返回。</li>
</ul>
</li>
<li>
<p><strong>跳转回系统 A</strong>：</p>
<ul>
<li>认证中心通过跳转将用户重定向回系统 A，同时携带登录凭证（如 Token）。</li>
</ul>
</li>
<li>
<p><strong>系统 A 校验登录凭证</strong>：</p>
<ul>
<li>系统 A 通过后端接口与认证中心验证登录凭证的有效性。</li>
<li>验证通过后，用户成功登录系统 A。</li>
</ul>
</li>
<li>
<p><strong>访问其他系统 B</strong>：</p>
<ul>
<li>当用户访问系统 B 时，系统 B 会检查登录状态。</li>
<li>系统 B 检查到认证中心已经登录（如通过共享的 Cookie 或 Token），无需再次登录，直接授予访问权限。</li>
</ul>
</li>
</ol>
<hr>
<h3 id="单点登录的优点" tabindex="-1"><a class="header-anchor" href="#单点登录的优点"><span><strong>单点登录的优点</strong></span></a></h3>
<ol>
<li>
<p><strong>用户体验提升</strong>：</p>
<ul>
<li>用户只需登录一次即可访问多个系统，无需反复输入账号密码。</li>
</ul>
</li>
<li>
<p><strong>安全性增强</strong>：</p>
<ul>
<li>统一认证中心集中管理用户信息，提高登录安全性，便于实现统一的加密和保护机制。</li>
</ul>
</li>
<li>
<p><strong>维护成本降低</strong>：</p>
<ul>
<li>账号管理、密码重置等功能集中到认证中心，简化开发和维护。</li>
</ul>
</li>
</ol>
<hr>
<h3 id="前端如何实现单点登录-sso" tabindex="-1"><a class="header-anchor" href="#前端如何实现单点登录-sso"><span><strong>前端如何实现单点登录（SSO）</strong></span></a></h3>
<p>前端的主要职责是配合认证中心完成单点登录的跳转、凭证传递和状态验证。</p>
<h4 id="_1-检查登录状态" tabindex="-1"><a class="header-anchor" href="#_1-检查登录状态"><span><strong>1. 检查登录状态</strong></span></a></h4>
<p>每个系统在用户访问时，首先检查本地是否存在有效的登录凭证（如 Token 或 Cookie）。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">// 示例：检查登录状态</span></span>
<span class="line"><span class="token keyword">const</span> token <span class="token operator">=</span> localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'sso_token'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>token<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 无 Token，重定向到认证中心</span></span>
<span class="line">  window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>href <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">https://auth.example.com/login?redirect=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token function">encodeURIComponent</span><span class="token punctuation">(</span></span>
<span class="line">    window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>href<span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 存在 Token，验证其有效性</span></span>
<span class="line">  <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">'/api/verifyToken'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">Authorization</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Bearer </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>token<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span>response<span class="token punctuation">.</span>status <span class="token operator">===</span> <span class="token number">401</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// Token 无效，跳转到认证中心</span></span>
<span class="line">        window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>href <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">https://auth.example.com/login?redirect=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token function">encodeURIComponent</span><span class="token punctuation">(</span></span>
<span class="line">          window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>href<span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span>console<span class="token punctuation">.</span>error<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h4 id="_2-登录跳转处理" tabindex="-1"><a class="header-anchor" href="#_2-登录跳转处理"><span><strong>2. 登录跳转处理</strong></span></a></h4>
<p>认证中心登录后会将凭证（Token）返回到系统，通过 URL 参数或浏览器存储传递。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">// 获取认证中心返回的 Token</span></span>
<span class="line"><span class="token keyword">const</span> urlParams <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">URLSearchParams</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>search<span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">const</span> token <span class="token operator">=</span> urlParams<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'token'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">if</span> <span class="token punctuation">(</span>token<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 保存 Token 到本地</span></span>
<span class="line">  localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">'sso_token'</span><span class="token punctuation">,</span> token<span class="token punctuation">)</span></span>
<span class="line">  <span class="token comment">// 清除 URL 参数，防止泄露</span></span>
<span class="line">  history<span class="token punctuation">.</span><span class="token function">replaceState</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token string">''</span><span class="token punctuation">,</span> window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>pathname<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h4 id="_3-跨系统共享登录状态" tabindex="-1"><a class="header-anchor" href="#_3-跨系统共享登录状态"><span><strong>3. 跨系统共享登录状态</strong></span></a></h4>
<p>单点登录通常需要在多个系统之间共享登录状态，常见方法有：</p>
<ol>
<li>
<p><strong>基于 Cookie 的共享</strong>：</p>
<ul>
<li>使用顶级域名（如 <code v-pre>example.com</code>）的 Cookie，各子域名（如 <code v-pre>a.example.com</code>、<code v-pre>b.example.com</code>）共享 Cookie 信息。</li>
<li>需要保证所有系统在同一个顶级域名下。</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">document<span class="token punctuation">.</span>cookie <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">sso_token=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>token<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">; domain=.example.com; path=/; secure; httponly</span><span class="token template-punctuation string">`</span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p><strong>基于 Token 的共享</strong>：</p>
<ul>
<li>各系统通过认证中心获取 Token，后续请求携带 Token 与后端验证。</li>
<li>前端存储 Token 的位置可以是 <code v-pre>localStorage</code> 或 <code v-pre>sessionStorage</code>。</li>
</ul>
</li>
<li>
<p><strong>基于第三方 OAuth 协议</strong>：</p>
<ul>
<li>通过标准化的第三方授权协议（如 OAuth 2.0）实现单点登录。</li>
</ul>
</li>
</ol>
<hr>
<h4 id="_4-登录状态轮询-可选" tabindex="-1"><a class="header-anchor" href="#_4-登录状态轮询-可选"><span><strong>4. 登录状态轮询（可选）</strong></span></a></h4>
<p>前端可以通过轮询或 WebSocket 检查用户的登录状态，确保在用户登出后同步更新。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">// 定时轮询检查登录状态</span></span>
<span class="line"><span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">'/api/checkLoginStatus'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">Authorization</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Bearer </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">'sso_token'</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span>response<span class="token punctuation">.</span>status <span class="token operator">===</span> <span class="token number">401</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'登录已过期，请重新登录！'</span><span class="token punctuation">)</span></span>
<span class="line">        window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>href <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">https://auth.example.com/login?redirect=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token function">encodeURIComponent</span><span class="token punctuation">(</span></span>
<span class="line">          window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>href<span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span>console<span class="token punctuation">.</span>error<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">60000</span><span class="token punctuation">)</span> <span class="token comment">// 每分钟检查一次</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h3 id="单点登录的安全性考虑" tabindex="-1"><a class="header-anchor" href="#单点登录的安全性考虑"><span><strong>单点登录的安全性考虑</strong></span></a></h3>
<ol>
<li>
<p><strong>Token 有效期和刷新机制</strong>：</p>
<ul>
<li>确保 Token 设置合理的过期时间，并提供刷新机制，防止用户长时间不操作导致状态失效。</li>
</ul>
</li>
<li>
<p><strong>HTTPS 加密</strong>：</p>
<ul>
<li>确保所有通信过程使用 HTTPS，防止凭证被窃取。</li>
</ul>
</li>
<li>
<p><strong>防止 CSRF 攻击</strong>：</p>
<ul>
<li>使用 CSRF Token 验证请求来源，确保操作合法。</li>
</ul>
</li>
<li>
<p><strong>登出同步</strong>：</p>
<ul>
<li>当用户主动登出时，确保所有系统同步登出。</li>
</ul>
</li>
</ol>
<hr>
<h3 id="总结-1" tabindex="-1"><a class="header-anchor" href="#总结-1"><span><strong>总结</strong></span></a></h3>
<ul>
<li><strong>单点登录的核心</strong>是通过认证中心统一管理用户登录状态，并在多个系统间共享登录信息。</li>
<li><strong>前端实现关键点</strong>：
<ol>
<li>检查登录状态，未登录时跳转到认证中心。</li>
<li>登录后保存凭证（如 Token），并在每次请求中携带凭证。</li>
<li>配合认证中心完成状态验证和跨系统共享。</li>
</ol>
</li>
<li><strong>技术选型</strong>：实现单点登录时，可以基于 Cookie、Token 或 OAuth 等机制，具体选择取决于系统需求和安全要求。</li>
</ul>
<h2 id="_3、如何解决前端-spa-应用首屏加载速度慢的问题" tabindex="-1"><a class="header-anchor" href="#_3、如何解决前端-spa-应用首屏加载速度慢的问题"><span>3、如何解决前端 SPA 应用首屏加载速度慢的问题？</span></a></h2>
<p>单页应用（SPA）因其首屏需要加载较多的 JavaScript、CSS 和其他资源，可能导致加载速度较慢，影响用户体验。以下是解决 SPA 首屏加载速度慢问题的常见优化方法：</p>
<hr>
<h3 id="_1-开启代码分割-code-splitting" tabindex="-1"><a class="header-anchor" href="#_1-开启代码分割-code-splitting"><span><strong>1. 开启代码分割（Code Splitting）</strong></span></a></h3>
<ul>
<li>使用工具（如 Webpack、Vite 等）将应用的代码分割成多个小模块，按需加载。</li>
<li>只加载用户访问的首屏所需代码，避免一次加载整个应用。</li>
</ul>
<p><strong>实现方式：</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">// 示例：动态加载组件（Vue / React）</span></span>
<span class="line"><span class="token keyword">const</span> LazyComponent <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">lazy</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'./MyComponent'</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>工具支持：</strong></p>
<ul>
<li>Webpack 的 <code v-pre>dynamic imports</code></li>
<li>Vite 的按需加载</li>
</ul>
<hr>
<h3 id="_2-服务端渲染-ssr-或静态站点生成-ssg" tabindex="-1"><a class="header-anchor" href="#_2-服务端渲染-ssr-或静态站点生成-ssg"><span><strong>2. 服务端渲染（SSR）或静态站点生成（SSG）</strong></span></a></h3>
<ul>
<li><strong>SSR</strong>（Server-Side Rendering）：在服务器端渲染首屏 HTML，再发送到浏览器。用户能更快看到页面内容。
<ul>
<li>框架支持：Next.js（React）、Nuxt.js（Vue）</li>
</ul>
</li>
<li><strong>SSG</strong>（Static Site Generation）：预生成 HTML 文件，在访问时直接返回静态页面。
<ul>
<li>适合静态内容较多的场景。</li>
</ul>
</li>
</ul>
<hr>
<h3 id="_3-利用骨架屏" tabindex="-1"><a class="header-anchor" href="#_3-利用骨架屏"><span><strong>3. 利用骨架屏</strong></span></a></h3>
<ul>
<li>在页面加载时，显示简化的页面框架（骨架屏）代替完整内容，提升用户感知速度。</li>
<li>骨架屏可以用简单的 CSS 和 HTML 模拟页面布局。</li>
</ul>
<p><strong>示例：CSS 骨架屏</strong></p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>skeleton<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>skeleton-header<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>skeleton-content<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre v-pre><code><span class="line"><span class="token selector">.skeleton</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">background</span><span class="token punctuation">:</span> #f0f0f0<span class="token punctuation">;</span></span>
<span class="line">  <span class="token property">animation</span><span class="token punctuation">:</span> skeleton-loading 1.5s infinite<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token atrule"><span class="token rule">@keyframes</span> skeleton-loading</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token selector">0%</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">background-color</span><span class="token punctuation">:</span> #f0f0f0<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token selector">50%</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">background-color</span><span class="token punctuation">:</span> #e0e0e0<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token selector">100%</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">background-color</span><span class="token punctuation">:</span> #f0f0f0<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h3 id="_4-使用懒加载-lazy-loading" tabindex="-1"><a class="header-anchor" href="#_4-使用懒加载-lazy-loading"><span><strong>4. 使用懒加载（Lazy Loading）</strong></span></a></h3>
<ul>
<li><strong>图片懒加载</strong>：延迟加载页面中的非首屏图片。
<ul>
<li>原生支持：<code v-pre>&lt;img loading=&quot;lazy&quot; /&gt;</code></li>
<li>使用第三方库：<code v-pre>lazysizes</code></li>
</ul>
</li>
<li><strong>组件懒加载</strong>：对于不需要首屏加载的组件，动态导入。</li>
</ul>
<hr>
<h3 id="_5-减少资源体积" tabindex="-1"><a class="header-anchor" href="#_5-减少资源体积"><span><strong>5. 减少资源体积</strong></span></a></h3>
<ul>
<li><strong>压缩 JS 和 CSS 文件</strong>：
<ul>
<li>使用工具（如 Webpack、Terser）压缩代码。</li>
<li>启用 Gzip、Brotli 等压缩方式。</li>
</ul>
</li>
<li><strong>Tree Shaking</strong>：
<ul>
<li>移除未使用的代码。</li>
</ul>
</li>
<li><strong>CSS 优化</strong>：
<ul>
<li>使用 CSS Purge 工具移除未使用的样式。</li>
</ul>
</li>
</ul>
<hr>
<h3 id="_6-使用-cdn-加速资源加载" tabindex="-1"><a class="header-anchor" href="#_6-使用-cdn-加速资源加载"><span><strong>6. 使用 CDN 加速资源加载</strong></span></a></h3>
<ul>
<li>将静态资源（如 JS、CSS、图片）存储在 CDN（内容分发网络）中，通过 CDN 的边缘节点加快访问速度。</li>
</ul>
<hr>
<h3 id="_7-优化依赖库" tabindex="-1"><a class="header-anchor" href="#_7-优化依赖库"><span><strong>7. 优化依赖库</strong></span></a></h3>
<ul>
<li>移除未使用的依赖，避免加载过大的库。</li>
<li>替换为体积更小的库：
<ul>
<li>例如，用 <code v-pre>day.js</code> 替换 <code v-pre>moment.js</code>。</li>
</ul>
</li>
<li>按需引入库：
<ul>
<li>使用工具如 <code v-pre>babel-plugin-import</code> 只加载需要的模块。</li>
</ul>
</li>
</ul>
<hr>
<h3 id="_8-缓存优化" tabindex="-1"><a class="header-anchor" href="#_8-缓存优化"><span><strong>8. 缓存优化</strong></span></a></h3>
<ul>
<li><strong>HTTP 缓存</strong>：
<ul>
<li>设置长效缓存，避免重复下载未变更的文件。</li>
<li>为静态资源设置 Cache-Control 或 ETag。</li>
</ul>
</li>
<li><strong>本地存储</strong>：
<ul>
<li>将部分数据（如用户设置、缓存页面）存储在浏览器的 LocalStorage 或 IndexedDB 中。</li>
</ul>
</li>
</ul>
<hr>
<h3 id="_9-开启预加载和预渲染" tabindex="-1"><a class="header-anchor" href="#_9-开启预加载和预渲染"><span><strong>9. 开启预加载和预渲染</strong></span></a></h3>
<ul>
<li><strong>Preload</strong>：优先加载首屏关键资源（JS、CSS）。<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>preload<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>styles.css<span class="token punctuation">"</span></span> <span class="token attr-name">as</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>style<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li><strong>Prefetch</strong>：提前加载用户可能访问的资源。<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>prefetch<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>next-page.js<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
</ul>
<hr>
<h3 id="_10-减少首屏依赖的-http-请求" tabindex="-1"><a class="header-anchor" href="#_10-减少首屏依赖的-http-请求"><span><strong>10. 减少首屏依赖的 HTTP 请求</strong></span></a></h3>
<ul>
<li>合并 CSS 和 JS 文件，减少请求数量。</li>
<li>使用图片精灵（Sprite）和 Base64 编码减少小图片的 HTTP 请求。</li>
</ul>
<hr>
<h3 id="_11-图片优化" tabindex="-1"><a class="header-anchor" href="#_11-图片优化"><span><strong>11. 图片优化</strong></span></a></h3>
<ul>
<li><strong>图片格式优化</strong>：
<ul>
<li>使用现代图片格式（如 WebP）。</li>
</ul>
</li>
<li><strong>响应式图片</strong>：
<ul>
<li>根据屏幕尺寸加载适配大小的图片。</li>
</ul>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>small.jpg<span class="token punctuation">"</span></span> <span class="token attr-name">srcset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>large.jpg 2x<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>example<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
</ul>
<hr>
<h3 id="_12-使用-http-2-或-http-3" tabindex="-1"><a class="header-anchor" href="#_12-使用-http-2-或-http-3"><span><strong>12. 使用 HTTP/2 或 HTTP/3</strong></span></a></h3>
<ul>
<li>HTTP/2 多路复用可显著提升资源加载效率。</li>
<li>结合服务器支持提升性能。</li>
</ul>
<hr>
<h3 id="_13-减少主线程阻塞-javascript-优化" tabindex="-1"><a class="header-anchor" href="#_13-减少主线程阻塞-javascript-优化"><span><strong>13. 减少主线程阻塞（JavaScript 优化）</strong></span></a></h3>
<ul>
<li>拆分长任务，减少 JavaScript 阻塞主线程。</li>
<li>使用 Web Worker 处理复杂计算，避免阻塞渲染。</li>
</ul>
<hr>
<h3 id="_14-分析性能瓶颈" tabindex="-1"><a class="header-anchor" href="#_14-分析性能瓶颈"><span><strong>14. 分析性能瓶颈</strong></span></a></h3>
<ul>
<li>使用浏览器开发工具（如 Chrome DevTools）分析性能。
<ul>
<li>找到影响首屏加载的慢资源、长任务等。</li>
</ul>
</li>
<li>工具推荐：
<ul>
<li>Lighthouse</li>
<li>WebPageTest</li>
<li>Bundle Analyzer</li>
</ul>
</li>
</ul>
<hr>
<h3 id="综合优化方案" tabindex="-1"><a class="header-anchor" href="#综合优化方案"><span><strong>综合优化方案</strong></span></a></h3>
<p>对于 SPA 的首屏加载慢问题，推荐组合使用：</p>
<ul>
<li><strong>服务端渲染（SSR）+ 骨架屏 + 代码分割</strong>，快速渲染首屏内容。</li>
<li><strong>懒加载 + CDN + 缓存优化</strong>，提升资源加载速度。</li>
<li><strong>图片优化 + HTTP/2</strong>，减少资源体积和加载时间。</li>
</ul>
<p>这些方法能显著提升用户的首屏加载体验。</p>
<h2 id="_4、如何设计一款能够统计前端页面请求耗时的工具" tabindex="-1"><a class="header-anchor" href="#_4、如何设计一款能够统计前端页面请求耗时的工具"><span>4、如何设计一款能够统计前端页面请求耗时的工具？</span></a></h2>
<p>设计一款能够统计前端页面请求耗时的工具，可以分为以下几个步骤：</p>
<hr>
<h3 id="功能需求" tabindex="-1"><a class="header-anchor" href="#功能需求"><span><strong>功能需求</strong></span></a></h3>
<ol>
<li>
<p><strong>基础功能</strong>：</p>
<ul>
<li>统计页面中所有 HTTP 请求的耗时（包括 DNS、TCP、请求时间、响应时间）。</li>
<li>提供接口显示请求数据（如耗时统计表）。</li>
</ul>
</li>
<li>
<p><strong>高级功能</strong>：</p>
<ul>
<li>可视化：绘制耗时的图表（如柱状图、折线图）。</li>
<li>统计特定接口的平均耗时、成功率、错误率。</li>
<li>支持在本地存储或发送到服务器以便后续分析。</li>
</ul>
</li>
<li>
<p><strong>兼容性</strong>：</p>
<ul>
<li>支持常用浏览器（Chrome、Firefox、Safari）。</li>
<li>能兼容 Fetch 和 XMLHttpRequest。</li>
</ul>
</li>
</ol>
<hr>
<h3 id="实现步骤" tabindex="-1"><a class="header-anchor" href="#实现步骤"><span><strong>实现步骤</strong></span></a></h3>
<h3 id="_1-拦截请求" tabindex="-1"><a class="header-anchor" href="#_1-拦截请求"><span><strong>1. 拦截请求</strong></span></a></h3>
<p>拦截页面中的 HTTP 请求，获取其耗时。</p>
<h4 id="_1-1-拦截-fetch" tabindex="-1"><a class="header-anchor" href="#_1-1-拦截-fetch"><span><strong>1.1 拦截 Fetch</strong></span></a></h4>
<p>使用 <code v-pre>window.fetch</code> 的代理模式。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> originalFetch <span class="token operator">=</span> window<span class="token punctuation">.</span>fetch</span>
<span class="line"></span>
<span class="line">window<span class="token punctuation">.</span><span class="token function-variable function">fetch</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> start <span class="token operator">=</span> performance<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">originalFetch</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span></span>
<span class="line">  <span class="token keyword">const</span> end <span class="token operator">=</span> performance<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// 记录请求信息</span></span>
<span class="line">  <span class="token function">logRequest</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">url</span><span class="token operator">:</span> args<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">method</span><span class="token operator">:</span> args<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">?.</span>method <span class="token operator">||</span> <span class="token string">'GET'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">status</span><span class="token operator">:</span> response<span class="token punctuation">.</span>status<span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">duration</span><span class="token operator">:</span> end <span class="token operator">-</span> start<span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">return</span> response</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-2-拦截-xmlhttprequest" tabindex="-1"><a class="header-anchor" href="#_1-2-拦截-xmlhttprequest"><span><strong>1.2 拦截 XMLHttpRequest</strong></span></a></h4>
<p>重写 <code v-pre>XMLHttpRequest</code> 的原生方法。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> originalXHR <span class="token operator">=</span> XMLHttpRequest</span>
<span class="line"></span>
<span class="line"><span class="token class-name">XMLHttpRequest</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">open</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">method<span class="token punctuation">,</span> url<span class="token punctuation">,</span> <span class="token operator">...</span>rest</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">this</span><span class="token punctuation">.</span>_method <span class="token operator">=</span> method</span>
<span class="line">  <span class="token keyword">this</span><span class="token punctuation">.</span>_url <span class="token operator">=</span> url</span>
<span class="line">  originalXHR<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> method<span class="token punctuation">,</span> url<span class="token punctuation">,</span> <span class="token operator">...</span>rest<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token class-name">XMLHttpRequest</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">send</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> start <span class="token operator">=</span> performance<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'loadend'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> end <span class="token operator">=</span> performance<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token function">logRequest</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_url<span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_method<span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>status<span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">duration</span><span class="token operator">:</span> end <span class="token operator">-</span> start<span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">  originalXHR<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h3 id="_2-记录请求数据" tabindex="-1"><a class="header-anchor" href="#_2-记录请求数据"><span><strong>2. 记录请求数据</strong></span></a></h3>
<p>定义一个 <code v-pre>logRequest</code> 方法，用于存储请求信息。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> requestLogs <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">logRequest</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> url<span class="token punctuation">,</span> method<span class="token punctuation">,</span> status<span class="token punctuation">,</span> duration <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  requestLogs<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span> url<span class="token punctuation">,</span> method<span class="token punctuation">,</span> status<span class="token punctuation">,</span> duration<span class="token punctuation">,</span> <span class="token literal-property property">timestamp</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h3 id="_3-显示统计数据" tabindex="-1"><a class="header-anchor" href="#_3-显示统计数据"><span><strong>3. 显示统计数据</strong></span></a></h3>
<p>提供一个简单的界面（例如弹窗或控制台）展示统计结果。</p>
<h4 id="_3-1-控制台输出" tabindex="-1"><a class="header-anchor" href="#_3-1-控制台输出"><span><strong>3.1 控制台输出</strong></span></a></h4>
<p>可以直接在控制台输出统计数据。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">showStats</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> grouped <span class="token operator">=</span> requestLogs<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">acc<span class="token punctuation">,</span> log</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    acc<span class="token punctuation">[</span>log<span class="token punctuation">.</span>url<span class="token punctuation">]</span> <span class="token operator">=</span> acc<span class="token punctuation">[</span>log<span class="token punctuation">.</span>url<span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line">    acc<span class="token punctuation">[</span>log<span class="token punctuation">.</span>url<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>log<span class="token punctuation">.</span>duration<span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">return</span> acc</span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">table</span><span class="token punctuation">(</span></span>
<span class="line">    Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>grouped<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">url</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">const</span> durations <span class="token operator">=</span> grouped<span class="token punctuation">[</span>url<span class="token punctuation">]</span></span>
<span class="line">      <span class="token keyword">const</span> avg <span class="token operator">=</span> <span class="token punctuation">(</span></span>
<span class="line">        durations<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">sum<span class="token punctuation">,</span> d</span><span class="token punctuation">)</span> <span class="token operator">=></span> sum <span class="token operator">+</span> d<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">/</span> durations<span class="token punctuation">.</span>length</span>
<span class="line">      <span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span></span>
<span class="line">      <span class="token keyword">return</span> <span class="token punctuation">{</span> url<span class="token punctuation">,</span> <span class="token literal-property property">count</span><span class="token operator">:</span> durations<span class="token punctuation">.</span>length<span class="token punctuation">,</span> avg <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-2-界面展示" tabindex="-1"><a class="header-anchor" href="#_3-2-界面展示"><span><strong>3.2 界面展示</strong></span></a></h4>
<p>用 HTML 绘制一个简易表格。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">createUI</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> container <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span></span>
<span class="line">  container<span class="token punctuation">.</span>style <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string"></span>
<span class="line">    position: fixed;</span>
<span class="line">    top: 0;</span>
<span class="line">    left: 0;</span>
<span class="line">    right: 0;</span>
<span class="line">    background: white;</span>
<span class="line">    z-index: 9999;</span>
<span class="line">    padding: 10px;</span>
<span class="line">    border-bottom: 1px solid #ccc;</span>
<span class="line">  </span><span class="token template-punctuation string">`</span></span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">const</span> table <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'table'</span><span class="token punctuation">)</span></span>
<span class="line">  table<span class="token punctuation">.</span>style<span class="token punctuation">.</span>width <span class="token operator">=</span> <span class="token string">'100%'</span></span>
<span class="line">  table<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string"></span>
<span class="line">    &lt;thead></span>
<span class="line">      &lt;tr></span>
<span class="line">        &lt;th>URL&lt;/th></span>
<span class="line">        &lt;th>Method&lt;/th></span>
<span class="line">        &lt;th>Status&lt;/th></span>
<span class="line">        &lt;th>Duration (ms)&lt;/th></span>
<span class="line">      &lt;/tr></span>
<span class="line">    &lt;/thead></span>
<span class="line">    &lt;tbody>&lt;/tbody></span>
<span class="line">  </span><span class="token template-punctuation string">`</span></span></span>
<span class="line"></span>
<span class="line">  container<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>table<span class="token punctuation">)</span></span>
<span class="line">  document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>container<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">return</span> table<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'tbody'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> uiTable <span class="token operator">=</span> <span class="token function">createUI</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">updateUI</span><span class="token punctuation">(</span><span class="token parameter">log</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> row <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'tr'</span><span class="token punctuation">)</span></span>
<span class="line">  row<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string"></span>
<span class="line">    &lt;td></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>log<span class="token punctuation">.</span>url<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/td></span>
<span class="line">    &lt;td></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>log<span class="token punctuation">.</span>method<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/td></span>
<span class="line">    &lt;td></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>log<span class="token punctuation">.</span>status<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/td></span>
<span class="line">    &lt;td></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>log<span class="token punctuation">.</span>duration<span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&lt;/td></span>
<span class="line">  </span><span class="token template-punctuation string">`</span></span></span>
<span class="line">  uiTable<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>row<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 <code v-pre>logRequest</code> 中调用 <code v-pre>updateUI</code> 更新界面。</p>
<hr>
<h3 id="_4-上传数据到服务器-可选" tabindex="-1"><a class="header-anchor" href="#_4-上传数据到服务器-可选"><span><strong>4. 上传数据到服务器（可选）</strong></span></a></h3>
<p>将统计结果发送到后台以便存储和分析。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">uploadStats</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">'/api/logs'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">'POST'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token string-property property">'Content-Type'</span><span class="token operator">:</span> <span class="token string">'application/json'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>requestLogs<span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h3 id="_5-优化功能" tabindex="-1"><a class="header-anchor" href="#_5-优化功能"><span><strong>5. 优化功能</strong></span></a></h3>
<h4 id="_5-1-统计首屏请求耗时" tabindex="-1"><a class="header-anchor" href="#_5-1-统计首屏请求耗时"><span><strong>5.1 统计首屏请求耗时</strong></span></a></h4>
<p>结合 <code v-pre>Performance API</code> 获取资源加载时间：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> resources <span class="token operator">=</span> performance<span class="token punctuation">.</span><span class="token function">getEntriesByType</span><span class="token punctuation">(</span><span class="token string">'resource'</span><span class="token punctuation">)</span></span>
<span class="line">resources<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resource</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span></span>
<span class="line">    resource<span class="token punctuation">.</span>initiatorType <span class="token operator">===</span> <span class="token string">'fetch'</span> <span class="token operator">||</span></span>
<span class="line">    resource<span class="token punctuation">.</span>initiatorType <span class="token operator">===</span> <span class="token string">'xmlhttprequest'</span></span>
<span class="line">  <span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">logRequest</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">url</span><span class="token operator">:</span> resource<span class="token punctuation">.</span>name<span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">'GET'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token comment">// 仅示例，实际需要处理</span></span>
<span class="line">      <span class="token literal-property property">duration</span><span class="token operator">:</span> resource<span class="token punctuation">.</span>responseEnd <span class="token operator">-</span> resource<span class="token punctuation">.</span>startTime<span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-2-可视化工具" tabindex="-1"><a class="header-anchor" href="#_5-2-可视化工具"><span><strong>5.2 可视化工具</strong></span></a></h4>
<p>结合 Chart.js 等工具，将请求耗时绘制为柱状图或折线图。</p>
<hr>
<h3 id="完整示例-代码结构" tabindex="-1"><a class="header-anchor" href="#完整示例-代码结构"><span><strong>完整示例：代码结构</strong></span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">// 1. 拦截 HTTP 请求</span></span>
<span class="line"><span class="token function">interceptFetch</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token function">interceptXHR</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 2. 存储日志</span></span>
<span class="line"><span class="token keyword">const</span> requestLogs <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">logRequest</span><span class="token punctuation">(</span><span class="token parameter">log</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  requestLogs<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>log<span class="token punctuation">)</span></span>
<span class="line">  <span class="token function">updateUI</span><span class="token punctuation">(</span>log<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 3. 绘制界面</span></span>
<span class="line"><span class="token keyword">const</span> uiTable <span class="token operator">=</span> <span class="token function">createUI</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 4. 定时上传统计数据</span></span>
<span class="line"><span class="token function">setInterval</span><span class="token punctuation">(</span>uploadStats<span class="token punctuation">,</span> <span class="token number">60000</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="扩展思路" tabindex="-1"><a class="header-anchor" href="#扩展思路"><span><strong>扩展思路</strong></span></a></h2>
<ol>
<li><strong>统计详细时序信息</strong>：
<ul>
<li>借助 <code v-pre>Performance API</code> 统计 DNS、TCP、SSL 等阶段的耗时。</li>
</ul>
</li>
<li><strong>错误请求统计</strong>：
<ul>
<li>记录失败的请求数量和原因（如超时、404 等）。</li>
</ul>
</li>
<li><strong>性能预警</strong>：
<ul>
<li>对于耗时超过一定阈值的请求，触发性能报警。</li>
</ul>
</li>
<li><strong>跨域问题</strong>：
<ul>
<li>确保浏览器允许获取跨域资源的详细信息（需后端支持 CORS）。</li>
</ul>
</li>
</ol>
<hr>
<p>通过上述设计，这款工具可以统计前端页面请求的耗时，为性能优化提供重要数据支持。</p>
<h2 id="_5、如何设计和优化秒杀系统的前端" tabindex="-1"><a class="header-anchor" href="#_5、如何设计和优化秒杀系统的前端"><span>5、如何设计和优化秒杀系统的前端？</span></a></h2>
<p>设计和优化秒杀系统的前端需要考虑高并发、低延迟、良好的用户体验等方面。以下是设计和优化的完整方案：</p>
<hr>
<h3 id="一、需求分析" tabindex="-1"><a class="header-anchor" href="#一、需求分析"><span><strong>一、需求分析</strong></span></a></h3>
<ol>
<li>
<p><strong>秒杀特点</strong>：</p>
<ul>
<li>高并发：大量用户会同时涌入系统。</li>
<li>时间敏感：活动开始和结束时间明确。</li>
<li>库存有限：商品库存往往很少。</li>
</ul>
</li>
<li>
<p><strong>核心需求</strong>：</p>
<ul>
<li>提升秒杀成功率，减少延迟。</li>
<li>提供实时反馈，优化用户体验。</li>
<li>避免恶意用户频繁请求（如刷接口）。</li>
</ul>
</li>
</ol>
<hr>
<h3 id="二、前端设计架构" tabindex="-1"><a class="header-anchor" href="#二、前端设计架构"><span><strong>二、前端设计架构</strong></span></a></h3>
<ol>
<li>
<p><strong>核心流程</strong>：</p>
<ul>
<li>用户进入秒杀页面。</li>
<li>服务器返回秒杀活动的时间和状态。</li>
<li>用户在秒杀时间点击“抢购”按钮。</li>
<li>前端将请求发送到服务器，服务器返回秒杀结果。</li>
</ul>
</li>
<li>
<p><strong>整体架构设计</strong>：</p>
<ul>
<li><strong>静态资源分离</strong>：将秒杀页面的 HTML、CSS、JavaScript 等资源托管到 CDN。</li>
<li><strong>轻量化页面</strong>：减少页面体积，降低首次加载时间。</li>
<li><strong>降级策略</strong>：设置占位页面或活动预热页面，减少高峰期服务器压力。</li>
</ul>
</li>
</ol>
<hr>
<h3 id="三、优化策略" tabindex="-1"><a class="header-anchor" href="#三、优化策略"><span><strong>三、优化策略</strong></span></a></h3>
<h3 id="_1-减少首屏加载时间" tabindex="-1"><a class="header-anchor" href="#_1-减少首屏加载时间"><span><strong>1. 减少首屏加载时间</strong></span></a></h3>
<ul>
<li>
<p><strong>静态资源优化</strong>：</p>
<ul>
<li>使用 CDN 加速静态资源加载。</li>
<li>开启 Gzip 或 Brotli 压缩。</li>
<li>合理分割代码，首屏只加载必要的资源（Code Splitting）。</li>
</ul>
</li>
<li>
<p><strong>页面骨架屏</strong>：</p>
<ul>
<li>在秒杀页面加载前，展示骨架屏或加载动画，提升用户感知体验。</li>
</ul>
</li>
<li>
<p><strong>异步加载资源</strong>：</p>
<ul>
<li>非关键资源使用 <code v-pre>async</code> 或 <code v-pre>defer</code> 加载。</li>
</ul>
</li>
</ul>
<hr>
<h3 id="_2-提高秒杀按钮的响应速度" tabindex="-1"><a class="header-anchor" href="#_2-提高秒杀按钮的响应速度"><span><strong>2. 提高秒杀按钮的响应速度</strong></span></a></h3>
<ul>
<li>
<p><strong>本地倒计时</strong>：</p>
<ul>
<li>将服务器时间与本地时间同步，使用本地倒计时减少用户感知延迟。</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> serverTime <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 服务器时间</span></span>
<span class="line"><span class="token keyword">const</span> localTimeOffset <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> serverTime</span>
<span class="line"></span>
<span class="line"><span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> localTime <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> localTimeOffset</span>
<span class="line">  <span class="token keyword">const</span> countdown <span class="token operator">=</span> targetTime <span class="token operator">-</span> localTime</span>
<span class="line">  <span class="token function">updateCountdownUI</span><span class="token punctuation">(</span>countdown<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>防止提前点击</strong>：</p>
<ul>
<li>控制“抢购”按钮的状态，根据倒计时动态更新。</li>
<li>倒计时未结束时，按钮为灰色不可点状态。</li>
</ul>
</li>
</ul>
<hr>
<h3 id="_3-防止恶意请求" tabindex="-1"><a class="header-anchor" href="#_3-防止恶意请求"><span><strong>3. 防止恶意请求</strong></span></a></h3>
<ul>
<li>
<p><strong>接口限流</strong>：</p>
<ul>
<li>控制同一用户的请求频率，避免频繁提交。</li>
<li>前端添加点击防抖，限制重复点击。</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> isSubmitting <span class="token operator">=</span> <span class="token boolean">false</span></span>
<span class="line"><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">handleSubmit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>isSubmitting<span class="token punctuation">)</span> <span class="token keyword">return</span></span>
<span class="line">  isSubmitting <span class="token operator">=</span> <span class="token boolean">true</span></span>
<span class="line">  <span class="token keyword">await</span> <span class="token function">sendRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">  isSubmitting <span class="token operator">=</span> <span class="token boolean">false</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>验证码验证</strong>：</p>
<ul>
<li>在秒杀请求前增加人机验证（如滑块验证）。</li>
</ul>
</li>
<li>
<p><strong>签名校验</strong>：</p>
<ul>
<li>请求加签机制，前端通过动态生成签名验证请求合法性。</li>
</ul>
</li>
</ul>
<hr>
<h3 id="_4-减轻后端压力" tabindex="-1"><a class="header-anchor" href="#_4-减轻后端压力"><span><strong>4. 减轻后端压力</strong></span></a></h3>
<ul>
<li>
<p><strong>静态化商品详情</strong>：</p>
<ul>
<li>商品信息（如图片、名称、价格等）通过 CDN 静态化。</li>
<li>秒杀状态通过 AJAX 异步查询接口获取。</li>
</ul>
</li>
<li>
<p><strong>分流机制</strong>：</p>
<ul>
<li>实现活动预热页面，将部分非核心流量分流到预热或占位页面。</li>
</ul>
</li>
</ul>
<hr>
<h3 id="_5-提供良好的用户体验" tabindex="-1"><a class="header-anchor" href="#_5-提供良好的用户体验"><span><strong>5. 提供良好的用户体验</strong></span></a></h3>
<ul>
<li>
<p><strong>实时秒杀结果反馈</strong>：</p>
<ul>
<li>成功：显示下单页面或跳转支付。</li>
<li>失败：显示明确失败原因（如库存不足、请求超时）。</li>
</ul>
</li>
<li>
<p><strong>排队机制</strong>：</p>
<ul>
<li>用户进入排队页面，减少点击无响应的情况。</li>
<li>排队人数实时更新，提供更好的用户感知。</li>
</ul>
</li>
<li>
<p><strong>友好的错误提示</strong>：</p>
<ul>
<li>请求超时或失败时，提示用户刷新页面或稍后重试。</li>
</ul>
</li>
</ul>
<hr>
<h3 id="_6-优化接口交互" tabindex="-1"><a class="header-anchor" href="#_6-优化接口交互"><span><strong>6. 优化接口交互</strong></span></a></h3>
<ul>
<li>
<p><strong>前端请求优化</strong>：</p>
<ul>
<li>合并多个请求为一个请求（如秒杀状态和商品信息一起返回）。</li>
<li>使用 HTTP/2 加速多资源加载。</li>
</ul>
</li>
<li>
<p><strong>秒杀接口设计</strong>：</p>
<ul>
<li>前端请求只提交用户唯一标识和商品 ID。</li>
<li>不传递敏感数据（如价格）以防止篡改。</li>
</ul>
</li>
</ul>
<hr>
<h3 id="_7-测试和监控" tabindex="-1"><a class="header-anchor" href="#_7-测试和监控"><span><strong>7. 测试和监控</strong></span></a></h3>
<ul>
<li>
<p><strong>性能测试</strong>：</p>
<ul>
<li>模拟高并发场景，测试秒杀页面在极端情况下的表现。</li>
<li>使用工具如 Apache Benchmark 或 JMeter 测试接口性能。</li>
</ul>
</li>
<li>
<p><strong>错误监控</strong>：</p>
<ul>
<li>集成 Sentry 或类似工具，捕获前端异常。</li>
</ul>
</li>
<li>
<p><strong>用户行为分析</strong>：</p>
<ul>
<li>统计用户点击行为、秒杀转化率，分析优化点。</li>
</ul>
</li>
</ul>
<hr>
<h3 id="四、技术实现案例" tabindex="-1"><a class="header-anchor" href="#四、技术实现案例"><span><strong>四、技术实现案例</strong></span></a></h3>
<h3 id="秒杀页面代码逻辑" tabindex="-1"><a class="header-anchor" href="#秒杀页面代码逻辑"><span><strong>秒杀页面代码逻辑</strong></span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> serverTime <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 从服务器获取时间</span></span>
<span class="line"><span class="token keyword">const</span> targetTime <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token string">'2025-01-20T12:00:00'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 秒杀开始时间</span></span>
<span class="line"><span class="token keyword">const</span> localOffset <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> serverTime</span>
<span class="line"></span>
<span class="line"><span class="token comment">// 倒计时显示</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">updateCountdown</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> now <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> localOffset</span>
<span class="line">  <span class="token keyword">const</span> diff <span class="token operator">=</span> targetTime <span class="token operator">-</span> now</span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>diff <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'countdown'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerText <span class="token operator">=</span></span>
<span class="line">      Math<span class="token punctuation">.</span><span class="token function">ceil</span><span class="token punctuation">(</span>diff <span class="token operator">/</span> <span class="token number">1000</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">'秒'</span></span>
<span class="line">  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">    document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'button'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>disabled <span class="token operator">=</span> <span class="token boolean">false</span></span>
<span class="line">    document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'countdown'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerText <span class="token operator">=</span> <span class="token string">'开始抢购！'</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token function">setInterval</span><span class="token punctuation">(</span>updateCountdown<span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 点击抢购按钮</span></span>
<span class="line"><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">handleSeckill</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">'/seckill'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">'POST'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">itemId</span><span class="token operator">:</span> <span class="token string">'12345'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token keyword">await</span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>result<span class="token punctuation">.</span>success<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'抢购成功！'</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'抢购失败：'</span> <span class="token operator">+</span> result<span class="token punctuation">.</span>message<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">'请求失败，请稍后重试！'</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'button'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span> handleSeckill<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h3 id="五、总结" tabindex="-1"><a class="header-anchor" href="#五、总结"><span><strong>五、总结</strong></span></a></h3>
<ol>
<li><strong>性能优先</strong>：优化页面加载速度和请求效率。</li>
<li><strong>防刷安全</strong>：通过防抖、验证码、签名校验等方式减少恶意请求。</li>
<li><strong>用户体验</strong>：提供清晰的倒计时、排队提示和秒杀结果反馈。</li>
<li><strong>测试与监控</strong>：持续优化性能和监控异常，保障系统稳定性。</li>
</ol>
<p>通过以上优化，秒杀系统前端可以在高并发场景下提供流畅的用户体验，同时减轻后端压力。</p>
<h2 id="_6、如何在前端页面无限滚动加载内容时自动回收上面的内容" tabindex="-1"><a class="header-anchor" href="#_6、如何在前端页面无限滚动加载内容时自动回收上面的内容"><span>6、如何在前端页面无限滚动加载内容时自动回收上面的内容？</span></a></h2>
<p>在前端页面实现无限滚动加载内容并自动回收顶部内容，通常需要通过<strong>虚拟列表</strong>（Virtual List）或<strong>可见区域渲染</strong>的技术来实现。这种优化方案在保证页面流畅性的同时，能够有效降低内存消耗。</p>
<p>以下是详细的设计与实现方案：</p>
<hr>
<h3 id="一、基本原理" tabindex="-1"><a class="header-anchor" href="#一、基本原理"><span><strong>一、基本原理</strong></span></a></h3>
<ol>
<li>
<p><strong>无限滚动</strong>：</p>
<ul>
<li>当用户滚动到底部时，加载下一页内容并追加到当前列表中。</li>
</ul>
</li>
<li>
<p><strong>自动回收顶部内容</strong>：</p>
<ul>
<li>通过移除滚动区域中不可见的内容，降低 DOM 节点数量，减少渲染压力。</li>
</ul>
</li>
<li>
<p><strong>虚拟列表技术</strong>：</p>
<ul>
<li>只渲染可视区域内的内容，根据用户滚动动态更新渲染的列表项。</li>
</ul>
</li>
</ol>
<hr>
<h3 id="二、实现步骤" tabindex="-1"><a class="header-anchor" href="#二、实现步骤"><span><strong>二、实现步骤</strong></span></a></h3>
<h3 id="_1-html-和-css-基础结构" tabindex="-1"><a class="header-anchor" href="#_1-html-和-css-基础结构"><span><strong>1. HTML 和 CSS 基础结构</strong></span></a></h3>
<p>确保有一个容器用于滚动，以及列表项能够按需渲染。</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>scroll-container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>content<span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css"></span>
<span class="line">  <span class="token selector">#scroll-container</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">height</span><span class="token punctuation">:</span> 600px<span class="token punctuation">;</span> <span class="token comment">/* 滚动容器的高度 */</span></span>
<span class="line">    <span class="token property">overflow-y</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #ccc<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token selector">.item</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">height</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span> <span class="token comment">/* 每个列表项的高度固定 */</span></span>
<span class="line">    <span class="token property">border-bottom</span><span class="token punctuation">:</span> 1px solid #ddd<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h3 id="_2-核心逻辑" tabindex="-1"><a class="header-anchor" href="#_2-核心逻辑"><span><strong>2. 核心逻辑</strong></span></a></h3>
<h4 id="_2-1-定义数据与变量" tabindex="-1"><a class="header-anchor" href="#_2-1-定义数据与变量"><span><strong>2.1 定义数据与变量</strong></span></a></h4>
<p>需要存储当前加载的数据和控制滚动范围的变量。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> totalItems <span class="token operator">=</span> <span class="token number">10000</span> <span class="token comment">// 总数据量（假设有1万条）</span></span>
<span class="line"><span class="token keyword">const</span> pageSize <span class="token operator">=</span> <span class="token number">20</span> <span class="token comment">// 每次加载的数量</span></span>
<span class="line"><span class="token keyword">const</span> bufferCount <span class="token operator">=</span> <span class="token number">5</span> <span class="token comment">// 额外缓冲渲染的数量</span></span>
<span class="line"><span class="token keyword">const</span> itemHeight <span class="token operator">=</span> <span class="token number">50</span> <span class="token comment">// 每个列表项高度</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> items <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">// 当前渲染的列表数据</span></span>
<span class="line"><span class="token keyword">let</span> startIndex <span class="token operator">=</span> <span class="token number">0</span> <span class="token comment">// 当前可见区域的起始索引</span></span>
<span class="line"><span class="token keyword">let</span> endIndex <span class="token operator">=</span> pageSize <span class="token comment">// 当前可见区域的结束索引</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-2-初始化虚拟列表" tabindex="-1"><a class="header-anchor" href="#_2-2-初始化虚拟列表"><span><strong>2.2 初始化虚拟列表</strong></span></a></h4>
<p>计算初始状态，并渲染可视区域。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> container <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'scroll-container'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">const</span> content <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'content'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 初始化内容区域高度</span></span>
<span class="line">content<span class="token punctuation">.</span>style<span class="token punctuation">.</span>height <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>totalItems <span class="token operator">*</span> itemHeight<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">px</span><span class="token template-punctuation string">`</span></span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 渲染可见区域</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> fragment <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createDocumentFragment</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token keyword">const</span> visibleItems <span class="token operator">=</span> items<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>startIndex<span class="token punctuation">,</span> endIndex<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// 清空内容区域</span></span>
<span class="line">  content<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token string">''</span></span>
<span class="line"></span>
<span class="line">  visibleItems<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> div <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span></span>
<span class="line">    div<span class="token punctuation">.</span>className <span class="token operator">=</span> <span class="token string">'item'</span></span>
<span class="line">    div<span class="token punctuation">.</span>style<span class="token punctuation">.</span>top <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token punctuation">(</span>startIndex <span class="token operator">+</span> index<span class="token punctuation">)</span> <span class="token operator">*</span> itemHeight<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">px</span><span class="token template-punctuation string">`</span></span></span>
<span class="line">    div<span class="token punctuation">.</span>style<span class="token punctuation">.</span>position <span class="token operator">=</span> <span class="token string">'absolute'</span></span>
<span class="line">    div<span class="token punctuation">.</span>innerText <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Item </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>startIndex <span class="token operator">+</span> index <span class="token operator">+</span> <span class="token number">1</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span></span>
<span class="line">    fragment<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>div<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">  content<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>fragment<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-3-监听滚动事件" tabindex="-1"><a class="header-anchor" href="#_2-3-监听滚动事件"><span><strong>2.3 监听滚动事件</strong></span></a></h4>
<p>动态调整渲染的起始和结束索引，并移除不可见内容。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">container<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'scroll'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> scrollTop <span class="token operator">=</span> container<span class="token punctuation">.</span>scrollTop</span>
<span class="line">  <span class="token keyword">const</span> visibleStartIndex <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>scrollTop <span class="token operator">/</span> itemHeight<span class="token punctuation">)</span></span>
<span class="line">  <span class="token keyword">const</span> visibleEndIndex <span class="token operator">=</span> visibleStartIndex <span class="token operator">+</span> pageSize</span>
<span class="line"></span>
<span class="line">  <span class="token comment">// 增加缓冲区，防止频繁计算</span></span>
<span class="line">  startIndex <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> visibleStartIndex <span class="token operator">-</span> bufferCount<span class="token punctuation">)</span></span>
<span class="line">  endIndex <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>totalItems<span class="token punctuation">,</span> visibleEndIndex <span class="token operator">+</span> bufferCount<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// 渲染更新后的列表</span></span>
<span class="line">  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-4-模拟数据加载" tabindex="-1"><a class="header-anchor" href="#_2-4-模拟数据加载"><span><strong>2.4 模拟数据加载</strong></span></a></h4>
<p>当用户滚动到底部时，动态加载数据。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">loadMore</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> newItems <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span></span>
<span class="line">    <span class="token punctuation">{</span> <span class="token literal-property property">length</span><span class="token operator">:</span> pageSize <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">(</span><span class="token parameter">_<span class="token punctuation">,</span> i</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Item </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>items<span class="token punctuation">.</span>length <span class="token operator">+</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">)</span></span>
<span class="line">  items <span class="token operator">=</span> items<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>newItems<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 初次加载数据</span></span>
<span class="line"><span class="token function">loadMore</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h3 id="_3-优化点" tabindex="-1"><a class="header-anchor" href="#_3-优化点"><span><strong>3. 优化点</strong></span></a></h3>
<ol>
<li>
<p><strong>使用 Intersection Observer 代替滚动监听</strong>：</p>
<ul>
<li>使用浏览器原生的 <code v-pre>IntersectionObserver</code> API 观察滚动区域内的元素，减少滚动事件的触发次数。</li>
</ul>
</li>
<li>
<p><strong>虚拟滚动优化（大数据量）</strong>：</p>
<ul>
<li>动态设置容器高度，并仅渲染当前可视区域内的内容。</li>
<li>更新 <code v-pre>content.style.transform</code> 或 <code v-pre>content.style.top</code> 来保持滚动位置的平滑性。</li>
</ul>
</li>
<li>
<p><strong>节流或防抖</strong>：</p>
<ul>
<li>对滚动事件进行节流，避免频繁触发影响性能。</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> throttleTimer</span>
<span class="line">container<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'scroll'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>throttleTimer<span class="token punctuation">)</span> <span class="token keyword">return</span></span>
<span class="line">  throttleTimer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 滚动事件逻辑</span></span>
<span class="line">    throttleTimer <span class="token operator">=</span> <span class="token keyword">null</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>缓冲区调整</strong>：</p>
<ul>
<li>根据设备性能动态调整 <code v-pre>bufferCount</code> 的大小，减少频繁的 DOM 操作。</li>
</ul>
</li>
<li>
<p><strong>Lazy Loading 图片或重资源</strong>：</p>
<ul>
<li>对列表中可能包含的图片等资源进行懒加载，进一步优化性能。</li>
</ul>
</li>
</ol>
<hr>
<h3 id="三、完整示例代码" tabindex="-1"><a class="header-anchor" href="#三、完整示例代码"><span><strong>三、完整示例代码</strong></span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> totalItems <span class="token operator">=</span> <span class="token number">10000</span></span>
<span class="line"><span class="token keyword">const</span> pageSize <span class="token operator">=</span> <span class="token number">20</span></span>
<span class="line"><span class="token keyword">const</span> bufferCount <span class="token operator">=</span> <span class="token number">5</span></span>
<span class="line"><span class="token keyword">const</span> itemHeight <span class="token operator">=</span> <span class="token number">50</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> items <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token keyword">let</span> startIndex <span class="token operator">=</span> <span class="token number">0</span></span>
<span class="line"><span class="token keyword">let</span> endIndex <span class="token operator">=</span> pageSize</span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> container <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'scroll-container'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">const</span> content <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'content'</span><span class="token punctuation">)</span></span>
<span class="line">content<span class="token punctuation">.</span>style<span class="token punctuation">.</span>height <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>totalItems <span class="token operator">*</span> itemHeight<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">px</span><span class="token template-punctuation string">`</span></span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> fragment <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createDocumentFragment</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token keyword">const</span> visibleItems <span class="token operator">=</span> items<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>startIndex<span class="token punctuation">,</span> endIndex<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">  content<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token string">''</span></span>
<span class="line">  visibleItems<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> div <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span></span>
<span class="line">    div<span class="token punctuation">.</span>className <span class="token operator">=</span> <span class="token string">'item'</span></span>
<span class="line">    div<span class="token punctuation">.</span>style<span class="token punctuation">.</span>top <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token punctuation">(</span>startIndex <span class="token operator">+</span> index<span class="token punctuation">)</span> <span class="token operator">*</span> itemHeight<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">px</span><span class="token template-punctuation string">`</span></span></span>
<span class="line">    div<span class="token punctuation">.</span>style<span class="token punctuation">.</span>position <span class="token operator">=</span> <span class="token string">'absolute'</span></span>
<span class="line">    div<span class="token punctuation">.</span>innerText <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Item </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>startIndex <span class="token operator">+</span> index <span class="token operator">+</span> <span class="token number">1</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span></span>
<span class="line">    fragment<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>div<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">  content<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>fragment<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">loadMore</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> newItems <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">length</span><span class="token operator">:</span> totalItems <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">_<span class="token punctuation">,</span> i</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Item </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span></span>
<span class="line">  items <span class="token operator">=</span> items<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>newItems<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">container<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'scroll'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> scrollTop <span class="token operator">=</span> container<span class="token punctuation">.</span>scrollTop</span>
<span class="line">  <span class="token keyword">const</span> visibleStartIndex <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>scrollTop <span class="token operator">/</span> itemHeight<span class="token punctuation">)</span></span>
<span class="line">  <span class="token keyword">const</span> visibleEndIndex <span class="token operator">=</span> visibleStartIndex <span class="token operator">+</span> pageSize</span>
<span class="line"></span>
<span class="line">  startIndex <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> visibleStartIndex <span class="token operator">-</span> bufferCount<span class="token punctuation">)</span></span>
<span class="line">  endIndex <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>totalItems<span class="token punctuation">,</span> visibleEndIndex <span class="token operator">+</span> bufferCount<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token function">loadMore</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h3 id="四、总结" tabindex="-1"><a class="header-anchor" href="#四、总结"><span><strong>四、总结</strong></span></a></h3>
<p>通过虚拟列表技术，结合动态渲染、节流优化以及懒加载，可以高效实现无限滚动加载内容，同时自动回收不可见的 DOM 节点，提升性能和用户体验。</p>
<h2 id="_7、如何在前端实现文件的断点续传-并确保大文件安全可靠上传" tabindex="-1"><a class="header-anchor" href="#_7、如何在前端实现文件的断点续传-并确保大文件安全可靠上传"><span>7、如何在前端实现文件的断点续传，并确保大文件安全可靠上传？</span></a></h2>
<p>实现前端的文件断点续传和大文件安全可靠上传需要从以下几个方面进行设计和实现：</p>
<hr>
<h3 id="一、核心思路" tabindex="-1"><a class="header-anchor" href="#一、核心思路"><span><strong>一、核心思路</strong></span></a></h3>
<ol>
<li><strong>分片上传</strong>：将大文件分割成多个小片（chunk）分别上传，避免一次性上传过大的文件。</li>
<li><strong>断点续传</strong>：记录已上传的分片进度，上传失败时可从中断处继续。</li>
<li><strong>完整性校验</strong>：通过文件哈希值或分片校验保证文件的完整性。</li>
<li><strong>并发上传</strong>：使用多个分片并行上传，提高效率。</li>
<li><strong>安全性</strong>：使用签名验证或令牌机制，确保文件上传的合法性。</li>
</ol>
<hr>
<h3 id="二、实现步骤-1" tabindex="-1"><a class="header-anchor" href="#二、实现步骤-1"><span><strong>二、实现步骤</strong></span></a></h3>
<h3 id="_1-文件分片" tabindex="-1"><a class="header-anchor" href="#_1-文件分片"><span><strong>1. 文件分片</strong></span></a></h3>
<p>将文件按固定大小（如 1MB）分割成多个分片。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">createFileChunks</span><span class="token punctuation">(</span><span class="token parameter">file<span class="token punctuation">,</span> chunkSize <span class="token operator">=</span> <span class="token number">1024</span> <span class="token operator">*</span> <span class="token number">1024</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> chunks <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line">  <span class="token keyword">let</span> start <span class="token operator">=</span> <span class="token number">0</span></span>
<span class="line">  <span class="token keyword">while</span> <span class="token punctuation">(</span>start <span class="token operator">&lt;</span> file<span class="token punctuation">.</span>size<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> end <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>start <span class="token operator">+</span> chunkSize<span class="token punctuation">,</span> file<span class="token punctuation">.</span>size<span class="token punctuation">)</span></span>
<span class="line">    chunks<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>file<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>start<span class="token punctuation">,</span> end<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">    start <span class="token operator">=</span> end</span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token keyword">return</span> chunks</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h3 id="_2-生成文件唯一标识" tabindex="-1"><a class="header-anchor" href="#_2-生成文件唯一标识"><span><strong>2. 生成文件唯一标识</strong></span></a></h3>
<p>使用文件的 <strong>Hash</strong>（如 MD5、SHA256）或文件名+大小来生成唯一标识。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">calculateHash</span><span class="token punctuation">(</span><span class="token parameter">file</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> spark <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SparkMD5<span class="token punctuation">.</span>ArrayBuffer</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token keyword">const</span> reader <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileReader</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    reader<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">      spark<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>result<span class="token punctuation">)</span></span>
<span class="line">      <span class="token function">resolve</span><span class="token punctuation">(</span>spark<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    reader<span class="token punctuation">.</span><span class="token function-variable function">onerror</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">reject</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span></span>
<span class="line">    reader<span class="token punctuation">.</span><span class="token function">readAsArrayBuffer</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h3 id="_3-上传接口设计" tabindex="-1"><a class="header-anchor" href="#_3-上传接口设计"><span><strong>3. 上传接口设计</strong></span></a></h3>
<p>需要后端提供以下接口：</p>
<ol>
<li><strong>查询已上传分片</strong>：返回已上传的分片索引，用于断点续传。</li>
<li><strong>上传分片</strong>：接受分片及其元数据（如文件标识、分片序号）。</li>
<li><strong>合并分片</strong>：通知后端将所有分片合并为完整文件。</li>
</ol>
<hr>
<h3 id="_4-实现断点续传逻辑" tabindex="-1"><a class="header-anchor" href="#_4-实现断点续传逻辑"><span><strong>4. 实现断点续传逻辑</strong></span></a></h3>
<h4 id="_4-1-查询已上传分片" tabindex="-1"><a class="header-anchor" href="#_4-1-查询已上传分片"><span><strong>4.1 查询已上传分片</strong></span></a></h4>
<p>向后端请求已上传的分片列表。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">getUploadedChunks</span><span class="token punctuation">(</span><span class="token parameter">fileHash</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">/upload/status?fileHash=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>fileHash<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token keyword">return</span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 返回已上传分片的索引数组</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-2-上传单个分片" tabindex="-1"><a class="header-anchor" href="#_4-2-上传单个分片"><span><strong>4.2 上传单个分片</strong></span></a></h4>
<p>封装上传逻辑，支持失败重试。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">uploadChunk</span><span class="token punctuation">(</span><span class="token parameter">chunk<span class="token punctuation">,</span> fileHash<span class="token punctuation">,</span> index<span class="token punctuation">,</span> retries <span class="token operator">=</span> <span class="token number">3</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> formData <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FormData</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">  formData<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">'chunk'</span><span class="token punctuation">,</span> chunk<span class="token punctuation">)</span></span>
<span class="line">  formData<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">'fileHash'</span><span class="token punctuation">,</span> fileHash<span class="token punctuation">)</span></span>
<span class="line">  formData<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">'index'</span><span class="token punctuation">,</span> index<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> attempt <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> attempt <span class="token operator">&lt;=</span> retries<span class="token punctuation">;</span> attempt<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">'/upload/chunk'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">'POST'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">body</span><span class="token operator">:</span> formData<span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span>response<span class="token punctuation">.</span>ok<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">await</span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span>attempt <span class="token operator">===</span> retries<span class="token punctuation">)</span> <span class="token keyword">throw</span> error</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-3-并发上传所有分片" tabindex="-1"><a class="header-anchor" href="#_4-3-并发上传所有分片"><span><strong>4.3 并发上传所有分片</strong></span></a></h4>
<p>根据查询的已上传分片列表，只上传未上传的分片。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">uploadFile</span><span class="token punctuation">(</span><span class="token parameter">file</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> chunkSize <span class="token operator">=</span> <span class="token number">1024</span> <span class="token operator">*</span> <span class="token number">1024</span> <span class="token comment">// 每个分片大小 1MB</span></span>
<span class="line">  <span class="token keyword">const</span> chunks <span class="token operator">=</span> <span class="token function">createFileChunks</span><span class="token punctuation">(</span>file<span class="token punctuation">,</span> chunkSize<span class="token punctuation">)</span></span>
<span class="line">  <span class="token keyword">const</span> fileHash <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">calculateHash</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// 获取已上传分片索引</span></span>
<span class="line">  <span class="token keyword">const</span> uploadedChunks <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getUploadedChunks</span><span class="token punctuation">(</span>fileHash<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">const</span> uploadPromises <span class="token operator">=</span> chunks<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">chunk<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>uploadedChunks<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 已上传跳过</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token function">uploadChunk</span><span class="token punctuation">(</span>chunk<span class="token punctuation">,</span> fileHash<span class="token punctuation">,</span> index<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// 并发上传所有分片</span></span>
<span class="line">  <span class="token keyword">await</span> Promise<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span>uploadPromises<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// 通知后端合并分片</span></span>
<span class="line">  <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">'/upload/merge'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">'POST'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">{</span> fileHash<span class="token punctuation">,</span> <span class="token literal-property property">totalChunks</span><span class="token operator">:</span> chunks<span class="token punctuation">.</span>length <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token string-property property">'Content-Type'</span><span class="token operator">:</span> <span class="token string">'application/json'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'文件上传完成！'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h3 id="_5-实现完整性校验" tabindex="-1"><a class="header-anchor" href="#_5-实现完整性校验"><span><strong>5. 实现完整性校验</strong></span></a></h3>
<p>通过前端和后端计算的文件 Hash 校验文件完整性。</p>
<ol>
<li><strong>前端计算文件 Hash</strong>（如上文 <code v-pre>calculateHash</code> 方法）。</li>
<li><strong>后端计算已合并文件的 Hash</strong>。</li>
<li><strong>前后端 Hash 比较</strong>：
<ul>
<li>一致：上传成功。</li>
<li>不一致：提示上传失败或重新上传。</li>
</ul>
</li>
</ol>
<hr>
<h3 id="_6-提升性能的优化点" tabindex="-1"><a class="header-anchor" href="#_6-提升性能的优化点"><span><strong>6. 提升性能的优化点</strong></span></a></h3>
<h4 id="_6-1-分片并发控制" tabindex="-1"><a class="header-anchor" href="#_6-1-分片并发控制"><span><strong>6.1 分片并发控制</strong></span></a></h4>
<p>避免并发过高导致浏览器或服务器压力过大。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">parallelLimit</span><span class="token punctuation">(</span><span class="token parameter">tasks<span class="token punctuation">,</span> limit</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> results <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line">  <span class="token keyword">const</span> executing <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line">  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> task <span class="token keyword">of</span> tasks<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> p <span class="token operator">=</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">task</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">    results<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>limit <span class="token operator">&lt;=</span> tasks<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">const</span> e <span class="token operator">=</span> p<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> executing<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>executing<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">      executing<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span></span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span>executing<span class="token punctuation">.</span>length <span class="token operator">>=</span> limit<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">await</span> Promise<span class="token punctuation">.</span><span class="token function">race</span><span class="token punctuation">(</span>executing<span class="token punctuation">)</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span>results<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 使用方式：限制并发数量为 5</span></span>
<span class="line"><span class="token keyword">await</span> <span class="token function">parallelLimit</span><span class="token punctuation">(</span>uploadPromises<span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_6-2-秒传功能" tabindex="-1"><a class="header-anchor" href="#_6-2-秒传功能"><span><strong>6.2 秒传功能</strong></span></a></h4>
<p>若文件已存在服务器，直接返回成功结果。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">checkFileExists</span><span class="token punctuation">(</span><span class="token parameter">fileHash</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">/upload/exists?fileHash=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>fileHash<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token keyword">return</span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// { exists: true/false }</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 使用秒传逻辑</span></span>
<span class="line"><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">await</span> <span class="token function">checkFileExists</span><span class="token punctuation">(</span>fileHash<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'文件已存在，无需上传'</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token keyword">return</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_6-3-web-worker" tabindex="-1"><a class="header-anchor" href="#_6-3-web-worker"><span><strong>6.3 Web Worker</strong></span></a></h4>
<p>使用 Web Worker 在后台计算文件 Hash，避免主线程阻塞。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">// Web Worker 示例</span></span>
<span class="line">self<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'message'</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> file <span class="token operator">=</span> e<span class="token punctuation">.</span>data</span>
<span class="line">  <span class="token keyword">const</span> spark <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SparkMD5<span class="token punctuation">.</span>ArrayBuffer</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token keyword">const</span> reader <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileReader</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">  reader<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    spark<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>target<span class="token punctuation">.</span>result<span class="token punctuation">)</span></span>
<span class="line">    self<span class="token punctuation">.</span><span class="token function">postMessage</span><span class="token punctuation">(</span>spark<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  reader<span class="token punctuation">.</span><span class="token function">readAsArrayBuffer</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h3 id="_7-前后端交互示例接口设计" tabindex="-1"><a class="header-anchor" href="#_7-前后端交互示例接口设计"><span><strong>7. 前后端交互示例接口设计</strong></span></a></h3>
<ol>
<li>
<p><strong>查询已上传分片接口</strong>：</p>
<ul>
<li><strong>请求</strong>：<code v-pre>GET /upload/status?fileHash=xxx</code></li>
<li><strong>响应</strong>：<code v-pre>{ uploadedChunks: [0, 1, 3] }</code></li>
</ul>
</li>
<li>
<p><strong>上传分片接口</strong>：</p>
<ul>
<li><strong>请求</strong>：<code v-pre>POST /upload/chunk</code></li>
<li><strong>参数</strong>：分片文件、文件 Hash、分片索引。</li>
</ul>
</li>
<li>
<p><strong>合并分片接口</strong>：</p>
<ul>
<li><strong>请求</strong>：<code v-pre>POST /upload/merge</code></li>
<li><strong>参数</strong>：<code v-pre>{ fileHash: xxx, totalChunks: 10 }</code></li>
</ul>
</li>
<li>
<p><strong>校验文件 Hash</strong>：</p>
<ul>
<li><strong>请求</strong>：<code v-pre>GET /upload/validate?fileHash=xxx</code></li>
<li><strong>响应</strong>：<code v-pre>{ isValid: true }</code></li>
</ul>
</li>
</ol>
<hr>
<h3 id="三、总结" tabindex="-1"><a class="header-anchor" href="#三、总结"><span><strong>三、总结</strong></span></a></h3>
<ol>
<li><strong>分片上传</strong>解决了大文件上传问题，减少了浏览器和服务器的内存压力。</li>
<li><strong>断点续传</strong>提高了上传的可靠性，避免网络波动影响整体进度。</li>
<li><strong>优化性能</strong>通过并发控制、秒传功能和 Web Worker 提升上传效率。</li>
<li><strong>安全性</strong>可通过文件校验和签名验证机制，确保上传的文件完整可靠。</li>
</ol>
<h2 id="_8、前端如何实现基于-websocket-的实时聊天功能-支持多用户在线聊天并展示消息通知" tabindex="-1"><a class="header-anchor" href="#_8、前端如何实现基于-websocket-的实时聊天功能-支持多用户在线聊天并展示消息通知"><span>8、前端如何实现基于 WebSocket 的实时聊天功能，支持多用户在线聊天并展示消息通知？</span></a></h2>
<p>实现基于 WebSocket 的实时聊天功能，并支持多用户在线聊天和消息通知，通常需要前后端配合。以下是详细实现步骤和关键点：</p>
<hr>
<h3 id="一、功能设计" tabindex="-1"><a class="header-anchor" href="#一、功能设计"><span><strong>一、功能设计</strong></span></a></h3>
<ol>
<li>
<p><strong>实时聊天</strong>：</p>
<ul>
<li>用户加入后可发送和接收实时消息。</li>
<li>消息需同步给其他在线用户。</li>
</ul>
</li>
<li>
<p><strong>多用户支持</strong>：</p>
<ul>
<li>显示当前在线用户列表。</li>
<li>区分消息的发送者和接收者。</li>
</ul>
</li>
<li>
<p><strong>消息通知</strong>：</p>
<ul>
<li>在用户未读消息时显示提示。</li>
<li>支持浏览器通知和 UI 内的未读消息标记。</li>
</ul>
</li>
<li>
<p><strong>消息持久化</strong>（可选）：</p>
<ul>
<li>后端保存历史聊天记录。</li>
<li>新用户加入后可加载聊天记录。</li>
</ul>
</li>
</ol>
<hr>
<h3 id="二、基本实现步骤" tabindex="-1"><a class="header-anchor" href="#二、基本实现步骤"><span><strong>二、基本实现步骤</strong></span></a></h3>
<h3 id="_1-前端-websocket-客户端" tabindex="-1"><a class="header-anchor" href="#_1-前端-websocket-客户端"><span><strong>1. 前端：WebSocket 客户端</strong></span></a></h3>
<h4 id="_1-1-初始化-websocket-连接" tabindex="-1"><a class="header-anchor" href="#_1-1-初始化-websocket-连接"><span><strong>1.1 初始化 WebSocket 连接</strong></span></a></h4>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> socket <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WebSocket</span><span class="token punctuation">(</span><span class="token string">'ws://your-server-address'</span><span class="token punctuation">)</span> <span class="token comment">// 替换为 WebSocket 服务器地址</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 连接成功事件</span></span>
<span class="line">socket<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'open'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'WebSocket connection established'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 接收消息事件</span></span>
<span class="line">socket<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'message'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> message <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>data<span class="token punctuation">)</span></span>
<span class="line">  <span class="token function">handleIncomingMessage</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span> <span class="token comment">// 处理接收到的消息</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 连接关闭事件</span></span>
<span class="line">socket<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'close'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'WebSocket connection closed'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h4 id="_1-2-发送消息" tabindex="-1"><a class="header-anchor" href="#_1-2-发送消息"><span><strong>1.2 发送消息</strong></span></a></h4>
<p>发送消息时需包含发送者、接收者（或群聊标识）及消息内容。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">sendMessage</span><span class="token punctuation">(</span><span class="token parameter">sender<span class="token punctuation">,</span> receiver<span class="token punctuation">,</span> content</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> message <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'chat'</span><span class="token punctuation">,</span> <span class="token comment">// 消息类型，可扩展如系统通知等</span></span>
<span class="line">    sender<span class="token punctuation">,</span></span>
<span class="line">    receiver<span class="token punctuation">,</span></span>
<span class="line">    content<span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">timestamp</span><span class="token operator">:</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  socket<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h4 id="_1-3-消息展示" tabindex="-1"><a class="header-anchor" href="#_1-3-消息展示"><span><strong>1.3 消息展示</strong></span></a></h4>
<p>使用简单的 DOM 操作将消息展示在聊天窗口中：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">displayMessage</span><span class="token punctuation">(</span><span class="token parameter">message</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> chatWindow <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'chat-window'</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token keyword">const</span> messageElement <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span></span>
<span class="line">  messageElement<span class="token punctuation">.</span>className <span class="token operator">=</span></span>
<span class="line">    message<span class="token punctuation">.</span>sender <span class="token operator">===</span> <span class="token string">'self'</span> <span class="token operator">?</span> <span class="token string">'message self'</span> <span class="token operator">:</span> <span class="token string">'message'</span></span>
<span class="line">  messageElement<span class="token punctuation">.</span>innerText <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">[</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>message<span class="token punctuation">.</span>sender<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">] </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>message<span class="token punctuation">.</span>content<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span></span>
<span class="line">  chatWindow<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>messageElement<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h3 id="_2-后端-websocket-服务端" tabindex="-1"><a class="header-anchor" href="#_2-后端-websocket-服务端"><span><strong>2. 后端：WebSocket 服务端</strong></span></a></h3>
<p>后端使用 WebSocket 库（如 Node.js 的 <code v-pre>ws</code>）管理连接和消息广播。</p>
<h4 id="_2-1-创建-websocket-服务器" tabindex="-1"><a class="header-anchor" href="#_2-1-创建-websocket-服务器"><span><strong>2.1 创建 WebSocket 服务器</strong></span></a></h4>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> WebSocket <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'ws'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">const</span> wss <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WebSocket<span class="token punctuation">.</span>Server</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">8080</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// 启动 WebSocket 服务</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> clients <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 存储客户端连接</span></span>
<span class="line"></span>
<span class="line">wss<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'connection'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">ws</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'New client connected'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// 注册客户端</span></span>
<span class="line">  ws<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'message'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> message <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span></span>
<span class="line">    <span class="token function">handleClientMessage</span><span class="token punctuation">(</span>ws<span class="token punctuation">,</span> message<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// 客户端断开</span></span>
<span class="line">  ws<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'close'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Client disconnected'</span><span class="token punctuation">)</span></span>
<span class="line">    clients<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span>ws<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h4 id="_2-2-处理消息" tabindex="-1"><a class="header-anchor" href="#_2-2-处理消息"><span><strong>2.2 处理消息</strong></span></a></h4>
<p>将消息发送给指定接收者或广播给所有客户端。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">handleClientMessage</span><span class="token punctuation">(</span><span class="token parameter">ws<span class="token punctuation">,</span> message</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">switch</span> <span class="token punctuation">(</span>message<span class="token punctuation">.</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">case</span> <span class="token string">'chat'</span><span class="token operator">:</span></span>
<span class="line">      <span class="token function">broadcastMessage</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span></span>
<span class="line">      <span class="token keyword">break</span></span>
<span class="line">    <span class="token keyword">case</span> <span class="token string">'join'</span><span class="token operator">:</span></span>
<span class="line">      clients<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>ws<span class="token punctuation">,</span> message<span class="token punctuation">.</span>sender<span class="token punctuation">)</span> <span class="token comment">// 注册用户</span></span>
<span class="line">      <span class="token function">notifyUserListUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">      <span class="token keyword">break</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">broadcastMessage</span><span class="token punctuation">(</span><span class="token parameter">message</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  clients<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">_<span class="token punctuation">,</span> client</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>client<span class="token punctuation">.</span>readyState <span class="token operator">===</span> WebSocket<span class="token punctuation">.</span><span class="token constant">OPEN</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      client<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">notifyUserListUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> userList <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>clients<span class="token punctuation">.</span><span class="token function">values</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token keyword">const</span> notification <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'userListUpdate'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">users</span><span class="token operator">:</span> userList<span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token function">broadcastMessage</span><span class="token punctuation">(</span>notification<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h3 id="_3-支持多用户在线" tabindex="-1"><a class="header-anchor" href="#_3-支持多用户在线"><span><strong>3. 支持多用户在线</strong></span></a></h3>
<h4 id="_3-1-用户上线" tabindex="-1"><a class="header-anchor" href="#_3-1-用户上线"><span><strong>3.1 用户上线</strong></span></a></h4>
<p>用户连接时发送 <code v-pre>join</code> 消息：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">socket<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'open'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> userName <span class="token operator">=</span> <span class="token function">prompt</span><span class="token punctuation">(</span><span class="token string">'Enter your name:'</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token keyword">const</span> joinMessage <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'join'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">sender</span><span class="token operator">:</span> userName<span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  socket<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>joinMessage<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>后端维护一个用户列表，并通过 <code v-pre>notifyUserListUpdate()</code> 通知所有客户端更新在线用户。</p>
<h4 id="_3-2-显示在线用户" tabindex="-1"><a class="header-anchor" href="#_3-2-显示在线用户"><span><strong>3.2 显示在线用户</strong></span></a></h4>
<p>客户端接收到 <code v-pre>userListUpdate</code> 消息时更新 UI：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">handleIncomingMessage</span><span class="token punctuation">(</span><span class="token parameter">message</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>message<span class="token punctuation">.</span>type <span class="token operator">===</span> <span class="token string">'userListUpdate'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> userListElement <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'user-list'</span><span class="token punctuation">)</span></span>
<span class="line">    userListElement<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token string">''</span></span>
<span class="line">    message<span class="token punctuation">.</span>users<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">user</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">const</span> userElement <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'div'</span><span class="token punctuation">)</span></span>
<span class="line">      userElement<span class="token punctuation">.</span>innerText <span class="token operator">=</span> user</span>
<span class="line">      userListElement<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>userElement<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">displayMessage</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h3 id="_4-消息通知" tabindex="-1"><a class="header-anchor" href="#_4-消息通知"><span><strong>4. 消息通知</strong></span></a></h3>
<h4 id="_4-1-未读消息标记" tabindex="-1"><a class="header-anchor" href="#_4-1-未读消息标记"><span><strong>4.1 未读消息标记</strong></span></a></h4>
<p>维护一个未读消息计数器，在用户未查看时更新计数。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> unreadMessages <span class="token operator">=</span> <span class="token number">0</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">incrementUnreadMessages</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  unreadMessages <span class="token operator">+=</span> <span class="token number">1</span></span>
<span class="line">  <span class="token keyword">const</span> notificationBadge <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'notification-badge'</span><span class="token punctuation">)</span></span>
<span class="line">  notificationBadge<span class="token punctuation">.</span>innerText <span class="token operator">=</span> unreadMessages</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当用户打开聊天窗口时清空计数器。</p>
<hr>
<h4 id="_4-2-浏览器通知" tabindex="-1"><a class="header-anchor" href="#_4-2-浏览器通知"><span><strong>4.2 浏览器通知</strong></span></a></h4>
<p>使用浏览器的 Notification API 实现系统级消息通知。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">if</span> <span class="token punctuation">(</span>Notification<span class="token punctuation">.</span>permission <span class="token operator">===</span> <span class="token string">'default'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  Notification<span class="token punctuation">.</span><span class="token function">requestPermission</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">showBrowserNotification</span><span class="token punctuation">(</span><span class="token parameter">message</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>Notification<span class="token punctuation">.</span>permission <span class="token operator">===</span> <span class="token string">'granted'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">new</span> <span class="token class-name">Notification</span><span class="token punctuation">(</span><span class="token string">'New message'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>message<span class="token punctuation">.</span>sender<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>message<span class="token punctuation">.</span>content<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 在接收消息时调用</span></span>
<span class="line">socket<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'message'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> message <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token function">showBrowserNotification</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 展示通知</span></span>
<span class="line">  <span class="token function">displayMessage</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 显示消息</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h3 id="_5-聊天记录持久化" tabindex="-1"><a class="header-anchor" href="#_5-聊天记录持久化"><span><strong>5. 聊天记录持久化</strong></span></a></h3>
<ol>
<li>
<p><strong>后端存储</strong>：</p>
<ul>
<li>将聊天记录存入数据库（如 MongoDB）。</li>
<li>在用户连接时返回最新的聊天记录。</li>
</ul>
</li>
<li>
<p><strong>加载历史记录</strong>：</p>
</li>
</ol>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">loadChatHistory</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">'/chat/history'</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token keyword">const</span> history <span class="token operator">=</span> <span class="token keyword">await</span> response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">  history<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>displayMessage<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h3 id="三、优化点" tabindex="-1"><a class="header-anchor" href="#三、优化点"><span><strong>三、优化点</strong></span></a></h3>
<ol>
<li>
<p><strong>心跳检测</strong>：</p>
<ul>
<li>定期发送心跳包，检测 WebSocket 连接是否正常。</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  socket<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'heartbeat'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">30000</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>分房间聊天</strong>：</p>
<ul>
<li>增加房间管理，支持群聊和私聊。</li>
<li>使用房间 ID 区分消息广播范围。</li>
</ul>
</li>
<li>
<p><strong>消息加密</strong>：</p>
<ul>
<li>在消息传输前使用加密算法（如 AES），保护聊天内容。</li>
</ul>
</li>
<li>
<p><strong>前端并发控制</strong>：</p>
<ul>
<li>如果消息数量较多，可使用虚拟列表技术优化聊天窗口。</li>
</ul>
</li>
</ol>
<hr>
<h3 id="四、总结-1" tabindex="-1"><a class="header-anchor" href="#四、总结-1"><span><strong>四、总结</strong></span></a></h3>
<p>通过 WebSocket 可以高效实现实时聊天功能。前端负责建立连接、发送消息、渲染 UI，后端负责管理连接、消息广播和用户状态。结合消息通知、未读消息标记、聊天记录持久化等功能，可以实现一个完整的多用户实时聊天系统。</p>
</div></template>


