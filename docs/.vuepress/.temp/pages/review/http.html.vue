<template><div><!-- @format -->
<h1 id="网络协议热门考题" tabindex="-1"><a class="header-anchor" href="#网络协议热门考题"><span>网络协议热门考题</span></a></h1>
<h2 id="_1、http-1-0-和-2-0-有什么区别" tabindex="-1"><a class="header-anchor" href="#_1、http-1-0-和-2-0-有什么区别"><span>1、HTTP 1.0 和 2.0 有什么区别？</span></a></h2>
<p>HTTP 1.0 和 HTTP 2.0 是两种不同的超文本传输协议版本，它们在性能、传输方式和功能上有显著的区别。以下是它们的主要差异：</p>
<hr>
<h3 id="_1-连接方式" tabindex="-1"><a class="header-anchor" href="#_1-连接方式"><span><strong>1. 连接方式</strong></span></a></h3>
<table>
<thead>
<tr>
<th><strong>版本</strong></th>
<th><strong>连接方式</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>HTTP 1.0</strong></td>
<td>每个请求/响应使用一个独立的 TCP 连接，即<strong>短连接</strong>。请求完成后连接关闭，需要频繁建立和断开连接。</td>
</tr>
<tr>
<td><strong>HTTP 2.0</strong></td>
<td>使用<strong>单个长连接</strong>，支持<strong>多路复用</strong>，即在一个 TCP 连接上并行传输多个请求和响应，减少连接开销和延迟。</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="_2-多路复用" tabindex="-1"><a class="header-anchor" href="#_2-多路复用"><span><strong>2. 多路复用</strong></span></a></h3>
<table>
<thead>
<tr>
<th><strong>版本</strong></th>
<th><strong>特点</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>HTTP 1.0</strong></td>
<td>同时只能发送一个请求，必须等待前一个请求完成后才能发送下一个（<strong>线性传输，队头阻塞</strong>）。</td>
</tr>
<tr>
<td><strong>HTTP 2.0</strong></td>
<td>支持<strong>多路复用</strong>，同一连接可以发送多个请求和响应，无需按顺序等待，消除了队头阻塞，提高传输效率。</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="_3-数据传输格式" tabindex="-1"><a class="header-anchor" href="#_3-数据传输格式"><span><strong>3. 数据传输格式</strong></span></a></h3>
<table>
<thead>
<tr>
<th><strong>版本</strong></th>
<th><strong>传输格式</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>HTTP 1.0</strong></td>
<td>传输纯文本（ASCII），没有优化数据传输的机制。</td>
</tr>
<tr>
<td><strong>HTTP 2.0</strong></td>
<td>使用<strong>二进制格式</strong>（Binary Framing），更加紧凑和高效，支持更快的解析和更低的错误率。</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="_4-压缩和传输效率" tabindex="-1"><a class="header-anchor" href="#_4-压缩和传输效率"><span><strong>4. 压缩和传输效率</strong></span></a></h3>
<table>
<thead>
<tr>
<th><strong>版本</strong></th>
<th><strong>特性</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>HTTP 1.0</strong></td>
<td>不支持对头部和数据的压缩，导致传输效率较低，尤其是对于冗长的 HTTP 头部信息。</td>
</tr>
<tr>
<td><strong>HTTP 2.0</strong></td>
<td>支持<strong>头部压缩</strong>（HPACK），大大减少头部大小；同时支持流量控制，提高传输效率。</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="_5-服务器推送" tabindex="-1"><a class="header-anchor" href="#_5-服务器推送"><span><strong>5. 服务器推送</strong></span></a></h3>
<table>
<thead>
<tr>
<th><strong>版本</strong></th>
<th><strong>特点</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>HTTP 1.0</strong></td>
<td>不支持服务器主动推送资源，客户端必须明确发起请求。</td>
</tr>
<tr>
<td><strong>HTTP 2.0</strong></td>
<td>支持<strong>服务器推送</strong>功能，可以主动向客户端发送可能需要的资源（如 CSS、JS 文件），减少后续请求延迟。</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="_6-加密支持" tabindex="-1"><a class="header-anchor" href="#_6-加密支持"><span><strong>6. 加密支持</strong></span></a></h3>
<table>
<thead>
<tr>
<th><strong>版本</strong></th>
<th><strong>特点</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>HTTP 1.0</strong></td>
<td>默认不支持加密，但可以结合 SSL/TLS 实现 HTTPS。</td>
</tr>
<tr>
<td><strong>HTTP 2.0</strong></td>
<td>默认需要加密连接（基于 TLS），提供更高的安全性。</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="_7-请求头优化" tabindex="-1"><a class="header-anchor" href="#_7-请求头优化"><span><strong>7. 请求头优化</strong></span></a></h3>
<table>
<thead>
<tr>
<th><strong>版本</strong></th>
<th><strong>特点</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>HTTP 1.0</strong></td>
<td>请求头信息会在每次请求中重复发送，带来额外的带宽开销。</td>
</tr>
<tr>
<td><strong>HTTP 2.0</strong></td>
<td>使用头部压缩（HPACK）和头部信息复用机制，减少重复头部的传输，提升带宽利用率。</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="_8-性能对比" tabindex="-1"><a class="header-anchor" href="#_8-性能对比"><span><strong>8. 性能对比</strong></span></a></h3>
<table>
<thead>
<tr>
<th><strong>性能方面</strong></th>
<th><strong>HTTP 1.0</strong></th>
<th><strong>HTTP 2.0</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>连接建立时间</strong></td>
<td>频繁的 TCP 连接建立与关闭增加延迟。</td>
<td>单个长连接减少握手开销，降低延迟。</td>
</tr>
<tr>
<td><strong>并发能力</strong></td>
<td>每次只能处理一个请求，存在队头阻塞问题。</td>
<td>支持并行传输多个请求和响应，性能显著提升。</td>
</tr>
<tr>
<td><strong>资源加载</strong></td>
<td>客户端必须逐个请求资源。</td>
<td>支持服务器主动推送资源，优化加载速度。</td>
</tr>
<tr>
<td><strong>带宽利用</strong></td>
<td>无压缩机制，浪费带宽。</td>
<td>头部压缩与二进制传输减少带宽占用。</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="_9-实际应用" tabindex="-1"><a class="header-anchor" href="#_9-实际应用"><span><strong>9. 实际应用</strong></span></a></h3>
<table>
<thead>
<tr>
<th><strong>特点</strong></th>
<th><strong>HTTP 1.0</strong></th>
<th><strong>HTTP 2.0</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>使用场景</strong></td>
<td>适用于早期的简单网页交互和少量资源加载。</td>
<td>适用于现代复杂应用和需要高效资源加载的网页，尤其是对性能要求较高的场景（如 SPA）。</td>
</tr>
<tr>
<td><strong>兼容性</strong></td>
<td>支持所有浏览器和旧版服务器。</td>
<td>需要现代浏览器支持，服务器也需要支持 HTTP/2 协议。</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="_10-总结" tabindex="-1"><a class="header-anchor" href="#_10-总结"><span><strong>10. 总结</strong></span></a></h3>
<table>
<thead>
<tr>
<th><strong>对比点</strong></th>
<th><strong>HTTP 1.0</strong></th>
<th><strong>HTTP 2.0</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>连接模式</strong></td>
<td>短连接</td>
<td>长连接，多路复用</td>
</tr>
<tr>
<td><strong>传输格式</strong></td>
<td>文本格式</td>
<td>二进制格式</td>
</tr>
<tr>
<td><strong>队头阻塞</strong></td>
<td>存在</td>
<td>多路复用消除了队头阻塞</td>
</tr>
<tr>
<td><strong>头部处理</strong></td>
<td>无压缩，头部重复</td>
<td>HPACK 压缩头部</td>
</tr>
<tr>
<td><strong>安全性</strong></td>
<td>可选支持 HTTPS</td>
<td>默认支持加密（基于 TLS）</td>
</tr>
<tr>
<td><strong>性能</strong></td>
<td>效率较低</td>
<td>高效，适用于复杂场景</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="推荐使用" tabindex="-1"><a class="header-anchor" href="#推荐使用"><span><strong>推荐使用</strong></span></a></h3>
<ul>
<li>如果服务器和客户端都支持 HTTP/2，优先使用 HTTP/2。</li>
<li>HTTP/1.0 更适用于简单或早期应用，但现代网站几乎都已经迁移到 HTTP/2 或 HTTP/3（基于 QUIC 协议）。</li>
</ul>
<h2 id="_2、到底什么是-tcp-连接" tabindex="-1"><a class="header-anchor" href="#_2、到底什么是-tcp-连接"><span>2、到底什么是 TCP 连接？</span></a></h2>
<h3 id="tcp-连接的定义" tabindex="-1"><a class="header-anchor" href="#tcp-连接的定义"><span><strong>TCP 连接的定义</strong></span></a></h3>
<p>TCP（<strong>Transmission Control Protocol</strong>，传输控制协议）是网络通信的核心协议之一，用于在两台计算机之间建立可靠的通信连接。它提供了一个<strong>面向连接</strong>、<strong>可靠的字节流传输服务</strong>，保证数据在不丢失、不重复、按顺序的情况下从一端传输到另一端。</p>
<p>一个 <strong>TCP 连接</strong> 就是通过 TCP 协议在两台计算机之间建立起来的数据传输通道。</p>
<hr>
<h3 id="tcp-连接的特性" tabindex="-1"><a class="header-anchor" href="#tcp-连接的特性"><span><strong>TCP 连接的特性</strong></span></a></h3>
<ol>
<li>
<p><strong>面向连接</strong></p>
<ul>
<li>在传输数据之前，必须通过 <strong>三次握手</strong> 建立连接，确保双方都准备好收发数据。</li>
</ul>
</li>
<li>
<p><strong>可靠性</strong></p>
<ul>
<li>TCP 确保数据包的传输是可靠的，发送的数据会被确认（ACK），丢失的数据会被重新发送。</li>
</ul>
</li>
<li>
<p><strong>按序传递</strong></p>
<ul>
<li>TCP 会为数据分配序号，接收方按照序号重组数据，确保数据包按照正确顺序到达。</li>
</ul>
</li>
<li>
<p><strong>流量控制</strong></p>
<ul>
<li>TCP 会根据网络情况调整发送数据的速度，防止发送方过快导致接收方处理不过来。</li>
</ul>
</li>
<li>
<p><strong>全双工通信</strong></p>
<ul>
<li>TCP 支持双向同时传输数据，发送方和接收方都可以同时进行数据传输。</li>
</ul>
</li>
</ol>
<hr>
<h3 id="tcp-连接的建立过程" tabindex="-1"><a class="header-anchor" href="#tcp-连接的建立过程"><span><strong>TCP 连接的建立过程</strong></span></a></h3>
<p>TCP 连接是通过 <strong>三次握手（Three-way Handshake）</strong> 建立的，这个过程确保通信双方都能正常发送和接收数据。</p>
<h4 id="三次握手的步骤" tabindex="-1"><a class="header-anchor" href="#三次握手的步骤"><span><strong>三次握手的步骤</strong>：</span></a></h4>
<ol>
<li>
<p><strong>第一步：客户端发送 SYN</strong></p>
<ul>
<li>客户端发送一个带有 <code v-pre>SYN</code>（synchronize，同步）标志的数据包，表示希望建立连接，同时发送一个初始序列号。</li>
<li>客户端状态：<code v-pre>SYN_SENT</code>。</li>
</ul>
</li>
<li>
<p><strong>第二步：服务器响应 SYN-ACK</strong></p>
<ul>
<li>服务器接收到客户端的 SYN 后，向客户端发送一个带有 <code v-pre>SYN</code> 和 <code v-pre>ACK</code>（acknowledge，确认）标志的数据包，表示接收到请求并同意建立连接。</li>
<li>服务器状态：<code v-pre>SYN_RCVD</code>。</li>
</ul>
</li>
<li>
<p><strong>第三步：客户端发送 ACK</strong></p>
<ul>
<li>客户端接收到服务器的 <code v-pre>SYN-ACK</code> 后，再发送一个带有 <code v-pre>ACK</code> 标志的数据包，确认收到服务器的响应，至此连接建立完成。</li>
<li>客户端和服务器状态：<code v-pre>ESTABLISHED</code>（连接已建立）。</li>
</ul>
</li>
</ol>
<hr>
<h3 id="tcp-连接的断开过程" tabindex="-1"><a class="header-anchor" href="#tcp-连接的断开过程"><span><strong>TCP 连接的断开过程</strong></span></a></h3>
<p>TCP 连接通过 <strong>四次挥手（Four-way Handshake）</strong> 断开，以保证双方都确认连接的关闭。</p>
<h4 id="四次挥手的步骤" tabindex="-1"><a class="header-anchor" href="#四次挥手的步骤"><span><strong>四次挥手的步骤</strong>：</span></a></h4>
<ol>
<li>
<p><strong>第一步：主动关闭方发送 FIN</strong></p>
<ul>
<li>主动方发送一个带有 <code v-pre>FIN</code>（finish，结束）标志的数据包，表示要关闭连接。</li>
<li>主动关闭方状态：<code v-pre>FIN_WAIT_1</code>。</li>
</ul>
</li>
<li>
<p><strong>第二步：被动关闭方回复 ACK</strong></p>
<ul>
<li>被动方接收到 <code v-pre>FIN</code> 后，返回一个 <code v-pre>ACK</code> 数据包，表示确认收到关闭请求。</li>
<li>被动关闭方状态：<code v-pre>CLOSE_WAIT</code>。</li>
</ul>
</li>
<li>
<p><strong>第三步：被动关闭方发送 FIN</strong></p>
<ul>
<li>被动方在处理完未完成的数据传输后，也发送一个 <code v-pre>FIN</code> 数据包，表示同意关闭连接。</li>
<li>主动关闭方状态：<code v-pre>FIN_WAIT_2</code>。</li>
</ul>
</li>
<li>
<p><strong>第四步：主动关闭方回复 ACK</strong></p>
<ul>
<li>主动方收到 <code v-pre>FIN</code> 后，发送 <code v-pre>ACK</code> 数据包，表示确认关闭连接。</li>
<li>双方状态：<code v-pre>CLOSED</code>（连接关闭）。</li>
</ul>
</li>
</ol>
<hr>
<h3 id="tcp-连接的作用" tabindex="-1"><a class="header-anchor" href="#tcp-连接的作用"><span><strong>TCP 连接的作用</strong></span></a></h3>
<ol>
<li>
<p><strong>确保数据完整性</strong></p>
<ul>
<li>数据在传输过程中可能丢失、重复或乱序，TCP 的确认机制、重传机制和序列号可以解决这些问题。</li>
</ul>
</li>
<li>
<p><strong>提供可靠通信</strong></p>
<ul>
<li>TCP 保证数据无差错且按照顺序到达，适用于需要可靠性较高的应用，如文件传输、网页加载、电子邮件等。</li>
</ul>
</li>
<li>
<p><strong>实现流量控制和拥塞控制</strong></p>
<ul>
<li>TCP 动态调整数据传输速度，避免网络拥塞，保护传输质量。</li>
</ul>
</li>
</ol>
<hr>
<h3 id="tcp-连接的典型应用" tabindex="-1"><a class="header-anchor" href="#tcp-连接的典型应用"><span><strong>TCP 连接的典型应用</strong></span></a></h3>
<ul>
<li><strong>HTTP/HTTPS</strong>：用于网页浏览和数据加载（例如 HTTP/2 协议依赖 TCP）。</li>
<li><strong>FTP</strong>：文件传输协议。</li>
<li><strong>SMTP/IMAP/POP3</strong>：用于电子邮件的收发。</li>
<li><strong>SSH</strong>：远程登录和数据传输。</li>
<li><strong>实时应用</strong>：一些实时通信应用（如聊天工具）使用 TCP 来保证消息的完整性。</li>
</ul>
<hr>
<h3 id="tcp-和-udp-的对比" tabindex="-1"><a class="header-anchor" href="#tcp-和-udp-的对比"><span><strong>TCP 和 UDP 的对比</strong></span></a></h3>
<table>
<thead>
<tr>
<th><strong>特点</strong></th>
<th><strong>TCP</strong>（传输控制协议）</th>
<th><strong>UDP</strong>（用户数据报协议）</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>连接</strong></td>
<td>面向连接（需建立连接，三次握手）</td>
<td>无连接（无需建立连接）</td>
</tr>
<tr>
<td><strong>可靠性</strong></td>
<td>提供可靠传输（确认机制、重传机制、排序）</td>
<td>不提供可靠传输（无确认、不保证顺序）</td>
</tr>
<tr>
<td><strong>速度</strong></td>
<td>较慢（因为有连接和可靠性机制的开销）</td>
<td>较快（无连接、轻量级）</td>
</tr>
<tr>
<td><strong>应用场景</strong></td>
<td>文件传输、网页浏览、邮件、聊天等</td>
<td>视频直播、在线游戏、语音通话等</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span><strong>总结</strong></span></a></h3>
<ul>
<li><strong>TCP 连接</strong>是基于传输控制协议在通信双方之间建立的一种可靠的网络连接。</li>
<li>它通过三次握手建立连接，通过四次挥手断开连接，确保数据传输的可靠性、完整性和有序性。</li>
<li>TCP 连接广泛应用于对数据完整性要求较高的场景，如文件传输、网页浏览和电子邮件通信。</li>
</ul>
<h2 id="_3、tcp-和-udp-有什么区别" tabindex="-1"><a class="header-anchor" href="#_3、tcp-和-udp-有什么区别"><span>3、TCP 和 UDP 有什么区别？</span></a></h2>
<p>TCP 和 UDP 是网络传输层的两种主要协议，它们各有特点，适用于不同的应用场景。以下是它们的主要区别：</p>
<hr>
<h3 id="_1-面向连接-vs-无连接" tabindex="-1"><a class="header-anchor" href="#_1-面向连接-vs-无连接"><span><strong>1. 面向连接 vs 无连接</strong></span></a></h3>
<table>
<thead>
<tr>
<th><strong>特性</strong></th>
<th><strong>TCP</strong></th>
<th><strong>UDP</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>连接模式</strong></td>
<td>面向连接（Connection-oriented）</td>
<td>无连接（Connectionless）</td>
</tr>
<tr>
<td><strong>描述</strong></td>
<td>在传输数据之前，需要通过三次握手建立连接，保证通信双方准备就绪。</td>
<td>无需建立连接，直接发送数据。</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="_2-可靠性" tabindex="-1"><a class="header-anchor" href="#_2-可靠性"><span><strong>2. 可靠性</strong></span></a></h3>
<table>
<thead>
<tr>
<th><strong>特性</strong></th>
<th><strong>TCP</strong></th>
<th><strong>UDP</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>可靠性</strong></td>
<td>提供可靠的数据传输。</td>
<td>不保证数据可靠传输。</td>
</tr>
<tr>
<td><strong>具体表现</strong></td>
<td>- 数据传输有确认机制（ACK）。</td>
<td>- 数据可能丢失、不按顺序到达。</td>
</tr>
<tr>
<td></td>
<td>- 有重传机制确保数据完整性。</td>
<td>- 无数据重传机制。</td>
</tr>
<tr>
<td></td>
<td>- 提供流量控制和拥塞控制。</td>
<td>- 不提供流量控制或拥塞控制。</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="_3-数据传输方式" tabindex="-1"><a class="header-anchor" href="#_3-数据传输方式"><span><strong>3. 数据传输方式</strong></span></a></h3>
<table>
<thead>
<tr>
<th><strong>特性</strong></th>
<th><strong>TCP</strong></th>
<th><strong>UDP</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>传输模式</strong></td>
<td>面向字节流（Stream-oriented）。</td>
<td>面向报文（Message-oriented）。</td>
</tr>
<tr>
<td><strong>描述</strong></td>
<td>数据被分成字节流传输，接收方需按顺序组装数据。</td>
<td>数据以独立的报文形式发送，每个报文是一个完整单元。</td>
</tr>
<tr>
<td><strong>传输顺序</strong></td>
<td>保证数据按顺序到达。</td>
<td>不保证数据顺序，可能乱序或丢失。</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="_4-速度" tabindex="-1"><a class="header-anchor" href="#_4-速度"><span><strong>4. 速度</strong></span></a></h3>
<table>
<thead>
<tr>
<th><strong>特性</strong></th>
<th><strong>TCP</strong></th>
<th><strong>UDP</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>速度</strong></td>
<td>较慢（因为有连接建立、确认、重传等机制）。</td>
<td>较快（无连接、无确认机制，传输轻量级）。</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="_5-开销" tabindex="-1"><a class="header-anchor" href="#_5-开销"><span><strong>5. 开销</strong></span></a></h3>
<table>
<thead>
<tr>
<th><strong>特性</strong></th>
<th><strong>TCP</strong></th>
<th><strong>UDP</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>开销</strong></td>
<td>较大：需维护连接状态和可靠性机制。</td>
<td>较小：无需维护连接状态，仅发送数据。</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="_6-应用场景" tabindex="-1"><a class="header-anchor" href="#_6-应用场景"><span><strong>6. 应用场景</strong></span></a></h3>
<table>
<thead>
<tr>
<th><strong>特性</strong></th>
<th><strong>TCP</strong></th>
<th><strong>UDP</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>适用场景</strong></td>
<td>- 对数据完整性要求高的场景，如文件传输、邮件、网页加载等。</td>
<td>- 对时效性要求高的场景，如视频直播、在线游戏、语音通话等。</td>
</tr>
<tr>
<td></td>
<td>- 适用于可靠性比速度更重要的场景。</td>
<td>- 适用于速度比可靠性更重要的场景。</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="_7-头部大小" tabindex="-1"><a class="header-anchor" href="#_7-头部大小"><span><strong>7. 头部大小</strong></span></a></h3>
<table>
<thead>
<tr>
<th><strong>特性</strong></th>
<th><strong>TCP</strong></th>
<th><strong>UDP</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>头部大小</strong></td>
<td>20 字节或更多（有额外选项字段）。</td>
<td>8 字节，固定大小。</td>
</tr>
<tr>
<td><strong>内容</strong></td>
<td>包括序列号、确认号、窗口大小等复杂信息。</td>
<td>仅包含最基本的信息：源端口、目标端口、数据长度、校验和。</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="_8-流量控制与拥塞控制" tabindex="-1"><a class="header-anchor" href="#_8-流量控制与拥塞控制"><span><strong>8. 流量控制与拥塞控制</strong></span></a></h3>
<table>
<thead>
<tr>
<th><strong>特性</strong></th>
<th><strong>TCP</strong></th>
<th><strong>UDP</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>流量控制</strong></td>
<td>有流量控制机制，防止发送方发送过快导致接收方处理不过来。</td>
<td>无流量控制机制。</td>
</tr>
<tr>
<td><strong>拥塞控制</strong></td>
<td>有拥塞控制机制，动态调整传输速率，避免网络拥塞。</td>
<td>无拥塞控制机制。</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="总结对比表" tabindex="-1"><a class="header-anchor" href="#总结对比表"><span><strong>总结对比表</strong></span></a></h3>
<table>
<thead>
<tr>
<th><strong>特性</strong></th>
<th><strong>TCP</strong></th>
<th><strong>UDP</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>连接</strong></td>
<td>面向连接，需要三次握手</td>
<td>无连接，直接发送数据</td>
</tr>
<tr>
<td><strong>可靠性</strong></td>
<td>提供可靠传输，确保数据完整性</td>
<td>不保证可靠传输，可能丢包</td>
</tr>
<tr>
<td><strong>传输顺序</strong></td>
<td>确保按序传输</td>
<td>不保证传输顺序</td>
</tr>
<tr>
<td><strong>速度</strong></td>
<td>较慢，适合高可靠性场景</td>
<td>较快，适合对时效性要求高的场景</td>
</tr>
<tr>
<td><strong>开销</strong></td>
<td>开销较大，头部信息复杂</td>
<td>开销较小，头部信息简单</td>
</tr>
<tr>
<td><strong>应用场景</strong></td>
<td>文件传输、网页加载、电子邮件等</td>
<td>视频直播、在线游戏、语音通话等</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="适用场景" tabindex="-1"><a class="header-anchor" href="#适用场景"><span><strong>适用场景</strong></span></a></h3>
<ol>
<li>
<p><strong>TCP：需要高可靠性的数据传输</strong></p>
<ul>
<li>文件传输协议（FTP）</li>
<li>超文本传输协议（HTTP/HTTPS）</li>
<li>电子邮件（SMTP、POP3、IMAP）</li>
<li>远程登录（SSH、Telnet）</li>
</ul>
</li>
<li>
<p><strong>UDP：需要快速传输的数据传输</strong></p>
<ul>
<li>视频直播（如 YouTube、Twitch）</li>
<li>实时通信（如语音聊天、视频通话）</li>
<li>在线游戏</li>
<li>网络广播（如 DNS 查询、DHCP）</li>
</ul>
</li>
</ol>
<hr>
<h3 id="简单比喻" tabindex="-1"><a class="header-anchor" href="#简单比喻"><span><strong>简单比喻</strong></span></a></h3>
<ul>
<li>
<p><strong>TCP 就像打电话</strong>：</p>
<ul>
<li>双方先建立连接（拨号和接通）。</li>
<li>确认对方是否听到了每一句话。</li>
<li>如果没听清，会要求重复。</li>
</ul>
</li>
<li>
<p><strong>UDP 就像发短信</strong>：</p>
<ul>
<li>直接发送，不确认对方是否收到或收到的顺序。</li>
<li>更快，但可能出现消息丢失或乱序。</li>
</ul>
</li>
</ul>
<h2 id="_4、http-和-https-有什么区别" tabindex="-1"><a class="header-anchor" href="#_4、http-和-https-有什么区别"><span>4、HTTP 和 HTTPS 有什么区别？</span></a></h2>
<p>HTTP（HyperText Transfer Protocol）和 HTTPS（HyperText Transfer Protocol Secure）是两种用于网络通信的协议，HTTPS 是 HTTP 的安全版本。它们的主要区别在于安全性、加密方式和数据传输的保护机制。以下是具体的差异：</p>
<hr>
<h3 id="_1-数据传输安全性" tabindex="-1"><a class="header-anchor" href="#_1-数据传输安全性"><span><strong>1. 数据传输安全性</strong></span></a></h3>
<table>
<thead>
<tr>
<th><strong>特性</strong></th>
<th><strong>HTTP</strong></th>
<th><strong>HTTPS</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>安全性</strong></td>
<td>不安全，数据以明文传输，容易被拦截或篡改。</td>
<td>安全，数据经过加密传输，不容易被窃取或篡改。</td>
</tr>
<tr>
<td><strong>数据加密</strong></td>
<td>不加密，直接传输明文数据。</td>
<td>使用 SSL/TLS 协议对数据进行加密。</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="_2-使用的协议" tabindex="-1"><a class="header-anchor" href="#_2-使用的协议"><span><strong>2. 使用的协议</strong></span></a></h3>
<table>
<thead>
<tr>
<th><strong>特性</strong></th>
<th><strong>HTTP</strong></th>
<th><strong>HTTPS</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>协议</strong></td>
<td>直接基于 TCP/IP 传输。</td>
<td>基于 TCP/IP，并通过 SSL/TLS 加密层传输。</td>
</tr>
<tr>
<td><strong>安全层</strong></td>
<td>无安全层，直接使用应用层协议通信。</td>
<td>在 HTTP 和 TCP 之间增加了 SSL/TLS 层。</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="_3-默认端口号" tabindex="-1"><a class="header-anchor" href="#_3-默认端口号"><span><strong>3. 默认端口号</strong></span></a></h3>
<table>
<thead>
<tr>
<th><strong>特性</strong></th>
<th><strong>HTTP</strong></th>
<th><strong>HTTPS</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>默认端口</strong></td>
<td>使用端口号 <strong>80</strong>。</td>
<td>使用端口号 <strong>443</strong>。</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="_4-ssl-tls-的使用" tabindex="-1"><a class="header-anchor" href="#_4-ssl-tls-的使用"><span><strong>4. SSL/TLS 的使用</strong></span></a></h3>
<table>
<thead>
<tr>
<th><strong>特性</strong></th>
<th><strong>HTTP</strong></th>
<th><strong>HTTPS</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>证书支持</strong></td>
<td>不需要任何证书。</td>
<td>需要数字证书（SSL/TLS 证书）来验证身份。</td>
</tr>
<tr>
<td><strong>身份验证</strong></td>
<td>无法验证通信双方的身份。</td>
<td>通过证书验证服务器身份，增强信任。</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="_5-性能" tabindex="-1"><a class="header-anchor" href="#_5-性能"><span><strong>5. 性能</strong></span></a></h3>
<table>
<thead>
<tr>
<th><strong>特性</strong></th>
<th><strong>HTTP</strong></th>
<th><strong>HTTPS</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>性能</strong></td>
<td>更快，没有加密和解密的开销。</td>
<td>略慢，存在加密和解密的开销，但现代硬件性能足以支持高速加密。</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="_6-url-形式" tabindex="-1"><a class="header-anchor" href="#_6-url-形式"><span><strong>6. URL 形式</strong></span></a></h3>
<table>
<thead>
<tr>
<th><strong>特性</strong></th>
<th><strong>HTTP</strong></th>
<th><strong>HTTPS</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>URL 前缀</strong></td>
<td><code v-pre>http://</code></td>
<td><code v-pre>https://</code></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="_7-数据完整性" tabindex="-1"><a class="header-anchor" href="#_7-数据完整性"><span><strong>7. 数据完整性</strong></span></a></h3>
<table>
<thead>
<tr>
<th><strong>特性</strong></th>
<th><strong>HTTP</strong></th>
<th><strong>HTTPS</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>数据完整性</strong></td>
<td>数据容易被篡改。</td>
<td>使用加密和校验，保证数据在传输过程中不被篡改。</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="_8-seo-优势" tabindex="-1"><a class="header-anchor" href="#_8-seo-优势"><span><strong>8. SEO 优势</strong></span></a></h3>
<table>
<thead>
<tr>
<th><strong>特性</strong></th>
<th><strong>HTTP</strong></th>
<th><strong>HTTPS</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>搜索引擎友好</strong></td>
<td>搜索引擎对 HTTP 网站的优待较少。</td>
<td>HTTPS 是搜索引擎（如 Google）推荐使用的标准，对排名更友好。</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="_9-应用场景" tabindex="-1"><a class="header-anchor" href="#_9-应用场景"><span><strong>9. 应用场景</strong></span></a></h3>
<table>
<thead>
<tr>
<th><strong>特性</strong></th>
<th><strong>HTTP</strong></th>
<th><strong>HTTPS</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>适用场景</strong></td>
<td>适用于对安全性要求较低的场景，如静态网页。</td>
<td>适用于需要传输敏感信息的场景，如登录、支付、用户数据传输等。</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="_10-主要功能的对比" tabindex="-1"><a class="header-anchor" href="#_10-主要功能的对比"><span><strong>10. 主要功能的对比</strong></span></a></h3>
<table>
<thead>
<tr>
<th><strong>特性</strong></th>
<th><strong>HTTP</strong></th>
<th><strong>HTTPS</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>身份验证</strong></td>
<td>无身份验证，无法确定服务器真实性。</td>
<td>支持身份验证，确保服务器可信赖。</td>
</tr>
<tr>
<td><strong>数据加密</strong></td>
<td>无数据加密，数据以明文传输。</td>
<td>数据加密，保护隐私和安全。</td>
</tr>
<tr>
<td><strong>数据完整性</strong></td>
<td>数据可能被拦截或篡改。</td>
<td>数据完整性得到保证，防止篡改。</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="总结对比表-1" tabindex="-1"><a class="header-anchor" href="#总结对比表-1"><span><strong>总结对比表</strong></span></a></h3>
<table>
<thead>
<tr>
<th><strong>特性</strong></th>
<th><strong>HTTP</strong></th>
<th><strong>HTTPS</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>安全性</strong></td>
<td>无加密，数据易被窃取或篡改。</td>
<td>加密传输，保证数据安全。</td>
</tr>
<tr>
<td><strong>默认端口</strong></td>
<td>80</td>
<td>443</td>
</tr>
<tr>
<td><strong>传输协议</strong></td>
<td>无加密，仅基于 TCP 传输。</td>
<td>使用 SSL/TLS 保护数据传输。</td>
</tr>
<tr>
<td><strong>性能</strong></td>
<td>无加密开销，速度快。</td>
<td>有加密开销，但硬件支持下速度差异小。</td>
</tr>
<tr>
<td><strong>应用场景</strong></td>
<td>静态网页、无敏感数据的通信。</td>
<td>需要传输敏感数据的场景，如支付、登录。</td>
</tr>
<tr>
<td><strong>SEO 优势</strong></td>
<td>对 SEO 无帮助。</td>
<td>对 SEO 有帮助，增强网站信任度。</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="选择-https-的原因" tabindex="-1"><a class="header-anchor" href="#选择-https-的原因"><span><strong>选择 HTTPS 的原因</strong></span></a></h3>
<ol>
<li><strong>提高安全性</strong>：防止数据被窃取或篡改。</li>
<li><strong>增强用户信任</strong>：浏览器会对 HTTPS 网站显示安全锁图标，提高用户信任。</li>
<li><strong>符合行业标准</strong>：现代网站几乎都要求使用 HTTPS，尤其是处理敏感数据时。</li>
<li><strong>SEO 优化</strong>：搜索引擎更倾向于优先索引和推荐 HTTPS 网站。</li>
</ol>
<h3 id="总结-1" tabindex="-1"><a class="header-anchor" href="#总结-1"><span><strong>总结</strong></span></a></h3>
<ul>
<li>HTTP 是明文传输，适用于对安全性要求较低的场景。</li>
<li>HTTPS 是加密传输，提供更高的安全性和数据完整性，是现代互联网的标准选择。</li>
</ul>
<h2 id="_5、-简述-https-加密协议过程" tabindex="-1"><a class="header-anchor" href="#_5、-简述-https-加密协议过程"><span>5、 简述 https 加密协议过程</span></a></h2>
<h3 id="https-加密过程" tabindex="-1"><a class="header-anchor" href="#https-加密过程"><span><strong>HTTPS 加密过程</strong></span></a></h3>
<p>HTTPS（HyperText Transfer Protocol Secure）通过 SSL/TLS（安全套接字层/传输层安全协议）来实现加密，确保数据在传输过程中安全。以下是 HTTPS 加密过程的详细说明：</p>
<hr>
<h3 id="_1-总体流程概述" tabindex="-1"><a class="header-anchor" href="#_1-总体流程概述"><span><strong>1. 总体流程概述</strong></span></a></h3>
<p>HTTPS 加密过程可分为以下几个步骤：</p>
<ol>
<li>客户端与服务器通过 <strong>TCP 三次握手</strong> 建立连接。</li>
<li>开始 <strong>SSL/TLS 握手过程</strong>：
<ul>
<li>确定加密算法和密钥。</li>
<li>验证服务器身份（通过 SSL/TLS 证书）。</li>
</ul>
</li>
<li>建立加密通道：
<ul>
<li>客户端和服务器协商生成会话密钥。</li>
</ul>
</li>
<li>数据传输：
<ul>
<li>使用对称加密算法对数据进行加密后传输。</li>
</ul>
</li>
</ol>
<hr>
<h3 id="_2-https-加密的详细过程" tabindex="-1"><a class="header-anchor" href="#_2-https-加密的详细过程"><span><strong>2. HTTPS 加密的详细过程</strong></span></a></h3>
<h4 id="第一步-tcp-三次握手" tabindex="-1"><a class="header-anchor" href="#第一步-tcp-三次握手"><span><strong>第一步：TCP 三次握手</strong></span></a></h4>
<ul>
<li>HTTPS 首先通过 TCP 协议建立连接（与 HTTP 相同）。</li>
<li>客户端与服务器通过三次握手确认彼此可以正常通信。</li>
</ul>
<hr>
<h4 id="第二步-ssl-tls-握手" tabindex="-1"><a class="header-anchor" href="#第二步-ssl-tls-握手"><span><strong>第二步：SSL/TLS 握手</strong></span></a></h4>
<p>这是 HTTPS 与 HTTP 的主要区别所在。SSL/TLS 握手是为了建立一个安全的加密通道，包含以下步骤：</p>
<ol>
<li>
<p><strong>客户端发起请求（Client Hello）</strong></p>
<ul>
<li>客户端向服务器发送一个 <code v-pre>Client Hello</code> 消息，内容包括：
<ul>
<li>支持的加密算法（如 AES、RSA 等）。</li>
<li>支持的 SSL/TLS 版本（如 TLS 1.2、TLS 1.3）。</li>
<li>一个随机数（<code v-pre>Client Random</code>），用于后续生成会话密钥。</li>
</ul>
</li>
</ul>
</li>
<li>
<p><strong>服务器响应（Server Hello）</strong></p>
<ul>
<li>服务器收到 <code v-pre>Client Hello</code> 后，返回一个 <code v-pre>Server Hello</code> 消息，内容包括：
<ul>
<li>确定的加密算法和 SSL/TLS 版本。</li>
<li>另一个随机数（<code v-pre>Server Random</code>）。</li>
<li>服务器的数字证书（SSL/TLS 证书），用于验证服务器身份。</li>
</ul>
</li>
</ul>
</li>
<li>
<p><strong>验证服务器身份</strong></p>
<ul>
<li>客户端通过以下方式验证服务器身份：
<ul>
<li>检查证书是否由可信的证书颁发机构（CA）签发。</li>
<li>检查证书是否过期。</li>
<li>检查证书的域名是否匹配当前访问的域名。</li>
</ul>
</li>
<li>验证通过后，继续握手；如果失败，握手终止。</li>
</ul>
</li>
<li>
<p><strong>生成会话密钥</strong>
根据使用的加密算法，生成会话密钥的过程可能有所不同：</p>
<ul>
<li>
<p><strong>基于 RSA 的密钥交换：</strong></p>
<ol>
<li>服务器证书中包含公钥。</li>
<li>客户端生成一个随机的预主密钥（<code v-pre>Pre-Master Secret</code>）。</li>
<li>客户端用服务器的公钥加密该预主密钥并发送给服务器。</li>
<li>服务器使用自己的私钥解密，得到预主密钥。</li>
</ol>
</li>
<li>
<p><strong>基于 Diffie-Hellman（DH/ECDH）的密钥交换：</strong></p>
<ol>
<li>双方协商交换公钥（不涉及私钥）。</li>
<li>使用各自的私钥和对方的公钥，计算出相同的会话密钥。</li>
</ol>
</li>
</ul>
</li>
<li>
<p><strong>生成最终会话密钥</strong></p>
<ul>
<li>客户端和服务器分别使用预主密钥、<code v-pre>Client Random</code> 和 <code v-pre>Server Random</code>，通过伪随机函数（PRF）生成最终的对称加密密钥。</li>
</ul>
</li>
<li>
<p><strong>完成握手</strong></p>
<ul>
<li>客户端发送一条 <code v-pre>Finished</code> 消息，表明握手完成。</li>
<li>服务器也发送一条 <code v-pre>Finished</code> 消息。</li>
<li>握手完成后，安全通道建立。</li>
</ul>
</li>
</ol>
<hr>
<h4 id="第三步-数据加密传输" tabindex="-1"><a class="header-anchor" href="#第三步-数据加密传输"><span><strong>第三步：数据加密传输</strong></span></a></h4>
<ol>
<li>
<p><strong>对称加密传输数据</strong></p>
<ul>
<li>握手阶段生成的会话密钥是对称加密密钥，用于加密通信过程中的数据。</li>
<li>客户端和服务器使用相同的密钥和加密算法（如 AES）加密和解密数据。</li>
</ul>
</li>
<li>
<p><strong>数据完整性校验</strong></p>
<ul>
<li>在数据传输过程中，使用消息认证码（MAC，Message Authentication Code）来校验数据是否被篡改。</li>
</ul>
</li>
</ol>
<hr>
<h3 id="_3-加密技术中的关键点" tabindex="-1"><a class="header-anchor" href="#_3-加密技术中的关键点"><span><strong>3. 加密技术中的关键点</strong></span></a></h3>
<ol>
<li>
<p><strong>对称加密</strong></p>
<ul>
<li>用于加密实际传输的数据。</li>
<li>常见算法：AES（高级加密标准）。</li>
</ul>
</li>
<li>
<p><strong>非对称加密</strong></p>
<ul>
<li>用于在握手阶段保护会话密钥的安全传输。</li>
<li>常见算法：RSA、ECDSA。</li>
</ul>
</li>
<li>
<p><strong>数字证书</strong></p>
<ul>
<li>验证服务器身份的凭证，由可信的证书颁发机构（CA）签发。</li>
<li>包含服务器的公钥、颁发者信息、有效期等。</li>
</ul>
</li>
<li>
<p><strong>伪随机函数（PRF）</strong></p>
<ul>
<li>用于生成会话密钥，结合随机数和预主密钥，确保密钥的唯一性和安全性。</li>
</ul>
</li>
</ol>
<hr>
<h3 id="_4-数据传输的安全性" tabindex="-1"><a class="header-anchor" href="#_4-数据传输的安全性"><span><strong>4. 数据传输的安全性</strong></span></a></h3>
<p>HTTPS 的安全性体现在以下几个方面：</p>
<ol>
<li><strong>加密传输</strong>：数据经过加密，防止被窃听。</li>
<li><strong>身份验证</strong>：通过数字证书验证服务器身份，防止中间人攻击。</li>
<li><strong>数据完整性</strong>：通过消息认证码（MAC）确保数据未被篡改。</li>
</ol>
<hr>
<h3 id="_5-整体流程示意图" tabindex="-1"><a class="header-anchor" href="#_5-整体流程示意图"><span><strong>5. 整体流程示意图</strong></span></a></h3>
<div class="language-plaintext line-numbers-mode" data-highlighter="prismjs" data-ext="plaintext" data-title="plaintext"><pre v-pre><code><span class="line">客户端                          服务器</span>
<span class="line">  |                                |</span>
<span class="line">  | ------- TCP 三次握手 -------->  |</span>
<span class="line">  | &lt;------ TCP 三次握手 ---------  |</span>
<span class="line">  |                                |</span>
<span class="line">  | ------- Client Hello --------> |</span>
<span class="line">  |                                |</span>
<span class="line">  | &lt;------- Server Hello -------- |</span>
<span class="line">  | &lt;---- 服务器证书（包含公钥）---- |</span>
<span class="line">  |                                |</span>
<span class="line">  | -- 客户端生成预主密钥，用公钥加密 --> |</span>
<span class="line">  |                                |</span>
<span class="line">  | &lt;- 服务器解密预主密钥，生成会话密钥 - |</span>
<span class="line">  |                                |</span>
<span class="line">  | ------ 握手完成，传输数据 ------> |</span>
<span class="line">  | &lt;----- 加密传输的数据 ---------- |</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h3 id="总结-2" tabindex="-1"><a class="header-anchor" href="#总结-2"><span><strong>总结</strong></span></a></h3>
<p>HTTPS 加密的过程通过 SSL/TLS 协议，结合对称加密、非对称加密和数字证书技术，提供了：</p>
<ul>
<li><strong>加密传输</strong>：防止数据被窃听。</li>
<li><strong>身份验证</strong>：确保通信双方的真实性。</li>
<li><strong>数据完整性</strong>：防止数据被篡改。</li>
</ul>
<p>这种安全机制广泛用于网站登录、支付交易和敏感信息传输等场景，成为现代互联网的标准。</p>
<h2 id="_6、说说-tcp-的三次握手和四次挥手" tabindex="-1"><a class="header-anchor" href="#_6、说说-tcp-的三次握手和四次挥手"><span>6、说说 TCP 的三次握手和四次挥手？</span></a></h2>
<h3 id="tcp-三次握手" tabindex="-1"><a class="header-anchor" href="#tcp-三次握手"><span><strong>TCP 三次握手</strong></span></a></h3>
<p>TCP（三次握手）是用来建立可靠的连接的过程，确保通信双方的状态是同步的。通过三次握手，客户端和服务器可以确认彼此的接收和发送能力。</p>
<h4 id="三次握手详细步骤" tabindex="-1"><a class="header-anchor" href="#三次握手详细步骤"><span><strong>三次握手详细步骤</strong></span></a></h4>
<ol>
<li>
<p><strong>第一次握手（SYN）</strong></p>
<ul>
<li><strong>客户端</strong>：发送一个带有 <code v-pre>SYN</code> 标志的数据包给服务器。</li>
<li><strong>目的</strong>：请求建立连接，并告知自己的初始序列号 <code v-pre>Seq = x</code>（假设为 x）。</li>
<li><strong>状态变化</strong>：
<ul>
<li>客户端进入 <strong>SYN_SENT</strong> 状态。</li>
</ul>
</li>
</ul>
<div class="language-plaintext line-numbers-mode" data-highlighter="prismjs" data-ext="plaintext" data-title="plaintext"><pre v-pre><code><span class="line">客户端：SYN=1，Seq=x</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p><strong>第二次握手（SYN-ACK）</strong></p>
<ul>
<li><strong>服务器</strong>：收到客户端的 <code v-pre>SYN</code> 数据包后，返回一个带有 <code v-pre>SYN</code> 和 <code v-pre>ACK</code> 标志的数据包。
<ul>
<li><code v-pre>ACK</code> 用于确认客户端的 <code v-pre>SYN</code>，确认号 <code v-pre>Ack = x + 1</code>。</li>
<li><code v-pre>SYN</code> 用于同步自己的初始序列号 <code v-pre>Seq = y</code>（假设为 y）。</li>
</ul>
</li>
<li><strong>状态变化</strong>：
<ul>
<li>服务器进入 <strong>SYN_RECEIVED</strong> 状态。</li>
</ul>
</li>
</ul>
<div class="language-plaintext line-numbers-mode" data-highlighter="prismjs" data-ext="plaintext" data-title="plaintext"><pre v-pre><code><span class="line">服务器：SYN=1，ACK=1，Seq=y，Ack=x+1</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p><strong>第三次握手（ACK）</strong></p>
<ul>
<li><strong>客户端</strong>：收到服务器的 <code v-pre>SYN-ACK</code> 数据包后，发送一个带有 <code v-pre>ACK</code> 标志的数据包。
<ul>
<li>确认号 <code v-pre>Ack = y + 1</code>，表明已收到服务器的 <code v-pre>SYN</code>。</li>
<li>客户端的序列号可以是 <code v-pre>Seq = x + 1</code>。</li>
</ul>
</li>
<li><strong>状态变化</strong>：
<ul>
<li>客户端进入 <strong>ESTABLISHED</strong> 状态。</li>
<li>服务器收到该 <code v-pre>ACK</code> 后也进入 <strong>ESTABLISHED</strong> 状态。</li>
</ul>
</li>
</ul>
<div class="language-plaintext line-numbers-mode" data-highlighter="prismjs" data-ext="plaintext" data-title="plaintext"><pre v-pre><code><span class="line">客户端：ACK=1，Seq=x+1，Ack=y+1</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
</ol>
<h4 id="三次握手示意图" tabindex="-1"><a class="header-anchor" href="#三次握手示意图"><span><strong>三次握手示意图</strong></span></a></h4>
<div class="language-plaintext line-numbers-mode" data-highlighter="prismjs" data-ext="plaintext" data-title="plaintext"><pre v-pre><code><span class="line">客户端                            服务器</span>
<span class="line">  | -------- SYN (Seq=x) -------> |</span>
<span class="line">  | &lt;--- SYN-ACK (Seq=y, Ack=x+1) |</span>
<span class="line">  | --------- ACK (Ack=y+1) ----> |</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h3 id="tcp-四次挥手" tabindex="-1"><a class="header-anchor" href="#tcp-四次挥手"><span><strong>TCP 四次挥手</strong></span></a></h3>
<p>四次挥手是 TCP 连接断开时的过程，用来保证双方都能优雅地释放资源。</p>
<h4 id="四次挥手详细步骤" tabindex="-1"><a class="header-anchor" href="#四次挥手详细步骤"><span><strong>四次挥手详细步骤</strong></span></a></h4>
<ol>
<li>
<p><strong>第一次挥手（FIN）</strong></p>
<ul>
<li><strong>客户端</strong>：发送一个带有 <code v-pre>FIN</code> 标志的数据包，表示不再发送数据，但仍能接收数据。</li>
<li><strong>目的</strong>：告知服务器 &quot;我要关闭连接了&quot;。</li>
<li><strong>状态变化</strong>：
<ul>
<li>客户端进入 <strong>FIN_WAIT_1</strong> 状态。</li>
</ul>
</li>
</ul>
<div class="language-plaintext line-numbers-mode" data-highlighter="prismjs" data-ext="plaintext" data-title="plaintext"><pre v-pre><code><span class="line">客户端：FIN=1，Seq=u</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p><strong>第二次挥手（ACK）</strong></p>
<ul>
<li><strong>服务器</strong>：收到 <code v-pre>FIN</code> 后，返回一个带有 <code v-pre>ACK</code> 标志的数据包，确认号 <code v-pre>Ack = u + 1</code>。</li>
<li><strong>目的</strong>：确认客户端的关闭请求，但服务器可能还有未发送完的数据。</li>
<li><strong>状态变化</strong>：
<ul>
<li>服务器进入 <strong>CLOSE_WAIT</strong> 状态。</li>
<li>客户端进入 <strong>FIN_WAIT_2</strong> 状态。</li>
</ul>
</li>
</ul>
<div class="language-plaintext line-numbers-mode" data-highlighter="prismjs" data-ext="plaintext" data-title="plaintext"><pre v-pre><code><span class="line">服务器：ACK=1，Ack=u+1</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p><strong>第三次挥手（FIN）</strong></p>
<ul>
<li><strong>服务器</strong>：完成剩余数据传输后，发送一个带有 <code v-pre>FIN</code> 标志的数据包，表示服务器也要关闭连接。</li>
<li><strong>目的</strong>：告知客户端 &quot;我也要关闭连接了&quot;。</li>
<li><strong>状态变化</strong>：
<ul>
<li>服务器进入 <strong>LAST_ACK</strong> 状态。</li>
</ul>
</li>
</ul>
<div class="language-plaintext line-numbers-mode" data-highlighter="prismjs" data-ext="plaintext" data-title="plaintext"><pre v-pre><code><span class="line">服务器：FIN=1，Seq=v</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
<li>
<p><strong>第四次挥手（ACK）</strong></p>
<ul>
<li><strong>客户端</strong>：收到服务器的 <code v-pre>FIN</code> 后，发送一个带有 <code v-pre>ACK</code> 标志的数据包，确认号 <code v-pre>Ack = v + 1</code>。</li>
<li><strong>目的</strong>：确认服务器的关闭请求。</li>
<li><strong>状态变化</strong>：
<ul>
<li>客户端进入 <strong>TIME_WAIT</strong> 状态，等待一段时间（通常为 2 倍的最大报文段生存时间）以确保服务器收到 ACK 后关闭连接。</li>
<li>服务器收到 ACK 后立即进入 <strong>CLOSED</strong> 状态。</li>
</ul>
</li>
</ul>
<div class="language-plaintext line-numbers-mode" data-highlighter="prismjs" data-ext="plaintext" data-title="plaintext"><pre v-pre><code><span class="line">客户端：ACK=1，Ack=v+1</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
</ol>
<h4 id="四次挥手示意图" tabindex="-1"><a class="header-anchor" href="#四次挥手示意图"><span><strong>四次挥手示意图</strong></span></a></h4>
<div class="language-plaintext line-numbers-mode" data-highlighter="prismjs" data-ext="plaintext" data-title="plaintext"><pre v-pre><code><span class="line">客户端                            服务器</span>
<span class="line">  | -------- FIN (Seq=u) -------> |</span>
<span class="line">  | &lt;--------- ACK (Ack=u+1) ---- |</span>
<span class="line">  | &lt;-------- FIN (Seq=v) ------- |</span>
<span class="line">  | --------- ACK (Ack=v+1) ----> |</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h3 id="为什么是三次握手和四次挥手" tabindex="-1"><a class="header-anchor" href="#为什么是三次握手和四次挥手"><span><strong>为什么是三次握手和四次挥手？</strong></span></a></h3>
<ol>
<li>
<p><strong>三次握手原因</strong>：</p>
<ul>
<li>确保双方都能同步发送和接收能力：
<ul>
<li>第一次握手：客户端确认服务器存在。</li>
<li>第二次握手：服务器确认客户端发送能力，并告知自己接收能力。</li>
<li>第三次握手：客户端确认服务器接收能力，通信正式建立。</li>
</ul>
</li>
</ul>
</li>
<li>
<p><strong>四次挥手原因</strong>：</p>
<ul>
<li>TCP 是全双工协议，连接断开需要双方各自关闭自己的传输通道：
<ul>
<li>两次挥手关闭客户端发送通道。</li>
<li>再两次挥手关闭服务器发送通道。</li>
</ul>
</li>
</ul>
</li>
</ol>
<hr>
<h3 id="状态变化总结" tabindex="-1"><a class="header-anchor" href="#状态变化总结"><span><strong>状态变化总结</strong></span></a></h3>
<h4 id="三次握手状态变化" tabindex="-1"><a class="header-anchor" href="#三次握手状态变化"><span><strong>三次握手状态变化</strong></span></a></h4>
<table>
<thead>
<tr>
<th>客户端状态</th>
<th>服务端状态</th>
</tr>
</thead>
<tbody>
<tr>
<td>CLOSED → SYN_SENT</td>
<td>CLOSED → SYN_RECEIVED</td>
</tr>
<tr>
<td>SYN_SENT → ESTABLISHED</td>
<td>SYN_RECEIVED → ESTABLISHED</td>
</tr>
</tbody>
</table>
<hr>
<h4 id="四次挥手状态变化" tabindex="-1"><a class="header-anchor" href="#四次挥手状态变化"><span><strong>四次挥手状态变化</strong></span></a></h4>
<table>
<thead>
<tr>
<th>客户端状态</th>
<th>服务端状态</th>
</tr>
</thead>
<tbody>
<tr>
<td>ESTABLISHED → FIN_WAIT_1</td>
<td>ESTABLISHED → CLOSE_WAIT</td>
</tr>
<tr>
<td>FIN_WAIT_1 → FIN_WAIT_2</td>
<td>CLOSE_WAIT → LAST_ACK</td>
</tr>
<tr>
<td>FIN_WAIT_2 → TIME_WAIT</td>
<td>LAST_ACK → CLOSED</td>
</tr>
<tr>
<td>TIME_WAIT → CLOSED</td>
<td></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="总结-3" tabindex="-1"><a class="header-anchor" href="#总结-3"><span><strong>总结</strong></span></a></h3>
<ul>
<li><strong>三次握手</strong> 用于建立可靠连接，确保双方通信能力同步。</li>
<li><strong>四次挥手</strong> 用于优雅断开连接，保证双方数据传输完成。</li>
<li>三次握手和四次挥手都是 TCP 协议保证可靠传输的核心机制，体现了其面向连接和可靠性的特点。</li>
</ul>
<h2 id="_7、osi-七层模型是什么" tabindex="-1"><a class="header-anchor" href="#_7、osi-七层模型是什么"><span>7、OSI 七层模型是什么？</span></a></h2>
<p>OSI（开放式系统互联）模型是由国际标准化组织（ISO）提出的网络通信参考模型，将网络通信过程分为七个层次。每一层都定义了特定的功能，以确保不同系统之间的互联互通。以下是对 OSI 七层模型的详细介绍：</p>
<ol>
<li>
<p><strong>物理层（Physical Layer）</strong>：负责在物理媒体上传输原始的比特流，定义硬件设备的标准，如电缆、插头、电压等。</p>
</li>
<li>
<p><strong>数据链路层（Data Link Layer）</strong>：提供节点间的数据传输，负责帧的同步、差错检测与纠正，以及介质访问控制。</p>
</li>
<li>
<p><strong>网络层（Network Layer）</strong>：负责路径选择和逻辑地址寻址，实现数据包从源到目的地的传输。</p>
</li>
<li>
<p><strong>传输层（Transport Layer）</strong>：提供端到端的通信服务，确保数据的完整性和可靠传输，常见协议包括 TCP 和 UDP。</p>
</li>
<li>
<p><strong>会话层（Session Layer）</strong>：管理会话控制，负责建立、维护和终止通信会话。</p>
</li>
<li>
<p><strong>表示层（Presentation Layer）</strong>：处理数据的表示形式，确保不同系统之间的数据格式一致，包括数据加密、解密和压缩等功能。</p>
</li>
<li>
<p><strong>应用层（Application Layer）</strong>：直接面向用户，提供网络服务，如电子邮件、文件传输和远程登录等。</p>
</li>
</ol>
<p>需要注意的是，OSI 模型是一种理论模型，用于指导网络协议的设计和理解。在实际应用中，互联网主要采用 TCP/IP 协议栈，其分层与 OSI 模型有所不同。TCP/IP 模型通常分为四层：网络接口层、互联网层、传输层和应用层。尽管如此，OSI 模型仍然是理解网络通信原理的重要工具。</p>
<p>通过将网络通信过程分层，OSI 模型有助于标准化网络协议的设计，促进不同厂商设备之间的互操作性，并简化网络故障的诊断和排除。</p>
<p>以下是 OSI 七层模型的图示及每一层的功能说明：</p>
<div class="language-plaintext line-numbers-mode" data-highlighter="prismjs" data-ext="plaintext" data-title="plaintext"><pre v-pre><code><span class="line">+-------------------+</span>
<span class="line">| 应用层（第七层）  |</span>
<span class="line">| - 提供网络服务    |</span>
<span class="line">|   给应用程序      |</span>
<span class="line">| - 协议示例：HTTP  |</span>
<span class="line">|   、FTP、SMTP     |</span>
<span class="line">+-------------------+</span>
<span class="line">| 表示层（第六层）  |</span>
<span class="line">| - 数据格式转换    |</span>
<span class="line">| - 加密与解密      |</span>
<span class="line">| - 数据压缩        |</span>
<span class="line">+-------------------+</span>
<span class="line">| 会话层（第五层）  |</span>
<span class="line">| - 管理会话控制    |</span>
<span class="line">| - 负责建立、维持  |</span>
<span class="line">|   和终止会话      |</span>
<span class="line">+-------------------+</span>
<span class="line">| 传输层（第四层）  |</span>
<span class="line">| - 提供端到端的    |</span>
<span class="line">|   传输服务        |</span>
<span class="line">| - 确保数据完整性  |</span>
<span class="line">| - 协议示例：TCP   |</span>
<span class="line">|   、UDP           |</span>
<span class="line">+-------------------+</span>
<span class="line">| 网络层（第三层）  |</span>
<span class="line">| - 路由选择        |</span>
<span class="line">| - 逻辑地址寻址    |</span>
<span class="line">| - 协议示例：IP    |</span>
<span class="line">+-------------------+</span>
<span class="line">| 数据链路层（第二层）|</span>
<span class="line">| - 节点间数据传输  |</span>
<span class="line">| - 帧同步          |</span>
<span class="line">| - 差错检测与纠正  |</span>
<span class="line">+-------------------+</span>
<span class="line">| 物理层（第一层）  |</span>
<span class="line">| - 传输原始比特流  |</span>
<span class="line">| - 定义硬件标准    |</span>
<span class="line">| - 如电缆、插头    |</span>
<span class="line">|   、电压等        |</span>
<span class="line">+-------------------+</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>每一层都有其特定的功能，确保网络通信的顺利进行。需要注意的是，实际应用中，互联网主要采用 TCP/IP 协议栈，其分层与 OSI 模型有所不同。TCP/IP 模型通常分为四层：网络接口层、互联网层、传输层和应用层。尽管如此，OSI 模型仍然是理解网络通信原理的重要工具。</p>
<h2 id="_8、tcp-超时重传机制是为了解决什么问题" tabindex="-1"><a class="header-anchor" href="#_8、tcp-超时重传机制是为了解决什么问题"><span>8、TCP 超时重传机制是为了解决什么问题？</span></a></h2>
<p>TCP（传输控制协议）的超时重传机制旨在解决数据包在网络传输过程中可能丢失的问题。在 TCP/IP 网络中，数据被分割成小的数据包进行传输，这些数据包可能会因为网络拥堵、硬件故障、软件错误等原因在到达目的地之前丢失。为了确保数据的可靠传输，TCP 采用了超时重传机制。</p>
<p><strong>超时重传机制的工作原理：</strong></p>
<ol>
<li>
<p><strong>发送数据包：</strong> 当 TCP 发送一个数据包时，它会启动一个定时器，等待接收方确认（ACK）该数据包的到达。</p>
</li>
<li>
<p><strong>确认机制：</strong> 接收方在收到数据包后，会发送一个确认消息回给发送方。</p>
</li>
<li>
<p><strong>超时检测：</strong> 如果发送方在预定的时间内没有收到确认消息，它会认为数据包丢失，并重新发送该数据包。</p>
</li>
<li>
<p><strong>重传：</strong> 发送方重新发送数据包，并重新启动定时器。</p>
</li>
<li>
<p><strong>调整超时时间：</strong> TCP 会根据网络状况动态调整超时时间（通常称为 RTO，Retransmission Timeout）。这个时间是基于往返时间（RTT，Round-Trip Time）的估计。</p>
</li>
<li>
<p><strong>避免无限重传：</strong> TCP 通常有一个限制，防止数据包无限重传。如果重传次数超过一定阈值，TCP 可能会报告错误并关闭连接。</p>
</li>
</ol>
<p>通过上述机制，TCP 能够在网络出现丢包的情况下，确保数据的可靠传输。</p>
<h2 id="_9、tcp-ip-四层模型是什么" tabindex="-1"><a class="header-anchor" href="#_9、tcp-ip-四层模型是什么"><span>9、TCP/IP 四层模型是什么？</span></a></h2>
<p>TCP/IP 四层模型是用于描述计算机网络通信协议的框架，主要包括以下四层：</p>
<ol>
<li>
<p><strong>应用层（Application Layer）：</strong> 直接面向用户，提供网络服务，如 HTTP、FTP、SMTP 等。</p>
</li>
<li>
<p><strong>传输层（Transport Layer）：</strong> 负责端到端的数据传输，确保数据的可靠性和完整性，主要协议有 TCP 和 UDP。</p>
</li>
<li>
<p><strong>网络层（Internet Layer）：</strong> 负责数据包的路由和转发，主要协议是 IP（Internet Protocol）。</p>
</li>
<li>
<p><strong>网络接口层（Network Interface Layer）：</strong> 负责在物理网络上发送和接收数据帧，处理硬件地址和物理传输介质的细节。</p>
</li>
</ol>
<p>需要注意的是，TCP/IP 模型与 OSI 七层模型有所不同，后者更为详细地划分了网络通信的各个层次。</p>
<h2 id="_10、从网络角度来看-用户从输入网址到网页显示-期间发生了什么" tabindex="-1"><a class="header-anchor" href="#_10、从网络角度来看-用户从输入网址到网页显示-期间发生了什么"><span>10、从网络角度来看，用户从输入网址到网页显示，期间发生了什么？</span></a></h2>
<p>当用户在浏览器中输入网址并按下回车时，浏览器会经历以下步骤，从网络角度获取并显示网页内容：</p>
<ol>
<li>
<p><strong>DNS 解析：</strong></p>
<ul>
<li>浏览器需要将用户输入的网址（如 www.example.com）转换为服务器的 IP 地址。浏览器会首先查找本地 DNS 缓存，如果缓存中没有该域名的 IP 地址，浏览器会向 DNS 服务器发送请求来解析该域名。</li>
</ul>
</li>
<li>
<p><strong>建立 TCP 连接：</strong></p>
<ul>
<li>获取到 IP 地址后，浏览器会与目标服务器建立一个 TCP 连接。为了保证连接的可靠性，TCP 会进行三次握手过程：
<ul>
<li>第一次：客户端发送一个 SYN 请求包。</li>
<li>第二次：服务器返回一个 SYN-ACK 响应包。</li>
<li>第三次：客户端再发送一个 ACK 确认包，连接建立完成。</li>
</ul>
</li>
</ul>
</li>
<li>
<p><strong>发送 HTTP 请求：</strong></p>
<ul>
<li>TCP 连接建立后，浏览器向服务器发送一个 HTTP 请求，请求网页的资源（如 HTML 文件、图片、CSS 文件等）。如果是 HTTPS 请求，还会进行 TLS/SSL 握手，保证数据加密传输。</li>
</ul>
</li>
<li>
<p><strong>服务器处理请求：</strong></p>
<ul>
<li>服务器接收到请求后，会处理并生成响应内容，通常是网页的 HTML、CSS、JavaScript 代码，以及相关的图片和其他资源。服务器将这些内容作为 HTTP 响应返回给浏览器。</li>
</ul>
</li>
<li>
<p><strong>接收 HTTP 响应：</strong></p>
<ul>
<li>浏览器接收到服务器的 HTTP 响应后，开始解析 HTML 内容。浏览器会根据 HTML 中的标签、链接和嵌入的资源来决定后续操作。</li>
</ul>
</li>
<li>
<p><strong>解析和渲染页面：</strong></p>
<ul>
<li>浏览器解析 HTML 文档，构建 DOM（文档对象模型）树。同时，解析 CSS，生成 CSSOM 树，最后将这两者合并成渲染树（Render Tree）。</li>
<li>如果页面中有 JavaScript，浏览器会执行 JavaScript 代码，可能会改变 DOM 或 CSSOM 树，进而影响页面的显示。</li>
</ul>
</li>
<li>
<p><strong>资源加载：</strong></p>
<ul>
<li>如果页面包含外部资源（如图片、JavaScript 文件、CSS 文件等），浏览器会进一步向服务器发送请求加载这些资源。</li>
</ul>
</li>
<li>
<p><strong>关闭 TCP 连接：</strong></p>
<ul>
<li>当所有资源加载完成，浏览器和服务器通过 TCP 协议的四次挥手关闭连接，确保数据传输完毕。</li>
</ul>
</li>
<li>
<p><strong>页面显示：</strong></p>
<ul>
<li>最终，浏览器将渲染的页面显示给用户，用户可以看到网页的完整内容。</li>
</ul>
</li>
</ol>
<p>这个过程包括 DNS 解析、建立 TCP 连接、发送 HTTP 请求和响应、加载资源以及页面渲染等多个步骤，其中的每一步都涉及网络协议和数据传输的详细操作。</p>
</div></template>


