<template><div><!-- @format -->
<h1 id="前端监控" tabindex="-1"><a class="header-anchor" href="#前端监控"><span>前端监控</span></a></h1>
<h2 id="什么是前端监控" tabindex="-1"><a class="header-anchor" href="#什么是前端监控"><span>什么是前端监控</span></a></h2>
<p>前端监控用一句话来描述 <strong>利用一切手段监听上线项目的运行情况</strong></p>
<p>所谓前端监控体系，只是我们发明的一个时髦的词而已，本质上来讲他不过是我们为了了解项目的运行情况的一个手段，只是这个手段涉及前后端，所以我们称之为前端监控体系</p>
<p>当我们理解了这个内核，我们就能很清晰知道我们应该从哪些方向着手去做前端监控，因为我们想要了解的指标就那么多，相应的要达到目的的手段也就那么多</p>
<h2 id="前端监控的目的" tabindex="-1"><a class="header-anchor" href="#前端监控的目的"><span>前端监控的目的</span></a></h2>
<p>说起前端监控的目的</p>
<p>很多人只知道做前端监控， 却不知道他的目的是什么，我做他到底有什么用？</p>
<p>因为在大多数人的职业生涯中，只知道埋头干活，却不知道抬头看路，任何事情的产生，都有他产生的理由，前端监控同样如是</p>
<p>之所以大多数人不了解前端监控的目的，是因为他们项目的体量还没有达到需要监控的地步，他们去研究监控的目的，只是因为他比写业务高端</p>
<p>所以，我们在开始研究之前，要弄清楚前端监控到底到底高不高端</p>
<p>答案显而易见： 一点也不高端</p>
<p>我们要清晰的知道，所有的技术都是为业务服务的， 前端监控的诞生，也只是为了更了解我们的业务，所以本质上来说，他跟你写业务没有任何区别</p>
<p>只是前我们的业务是前台，注重用户体验，我们的监控是后勤，注重数据收集，分工不同，仅此而已</p>
<p>完善的监控体系可以从事前预警、事后分析、和性能分析中得到数据</p>
<p>然后再把搜集到的数据，给产品提供决策，作为给产品的需求，在改善前台的用户体验</p>
<p>他是一个循环的过程</p>
<p><img src="@source/assets/loop.jpg" alt=""></p>
<h2 id="监控的指标" tabindex="-1"><a class="header-anchor" href="#监控的指标"><span>监控的指标</span></a></h2>
<p>前端监控可以分为三类：数据监控（埋点）、性能监控和异常监控。</p>
<h3 id="数据监控-埋点" tabindex="-1"><a class="header-anchor" href="#数据监控-埋点"><span>数据监控（埋点）</span></a></h3>
<p>所谓数据，就是监听用户的行为，常见的监控项有：</p>
<p>PV/UV:PV(page view)：即页面浏览量或点击量；UV：指访问某个站点或点击某条新闻的不同 IP 地址的人数</p>
<p>用户通过什么入口来访问该网页</p>
<p>用户在相应的页面中触发的行为</p>
<p>用户在每一个页面的停留时间</p>
<p>通过以上数据分析用户行为链路</p>
<h4 id="监控方式" tabindex="-1"><a class="header-anchor" href="#监控方式"><span>监控方式</span></a></h4>
<p>数据监控主要通过埋点的方式来实现，目前常见的前端埋点方法有三种：手动埋点、可视化埋点和无埋点。</p>
<p>1、手动埋点
手动埋点，也叫代码埋点，即纯手动写代码，调用埋点 SDK 的函数，在需要埋点的业务逻辑功能位置调用接口，上报埋点数据，像友盟、百度统计等第三方数据统计服务商大都采用这种方案。</p>
<p>手动埋点让使用者可以方便地设置自定义属性、自定义事件；所以当你需要深入下钻，并精细化自定义分析时，比较适合使用手动埋点。</p>
<p>手动埋点的缺陷就是，项目工程量大，需要埋点的位置太多，而且需要产品开发运营之间相互反复沟通，容易出现手动差错，如果错误，重新埋点的成本也很高。这会导致整个数据收集周期变的很长，收集成本变的很高，而且效率很低。因为手动埋点需要开发人员完成，所以每次有埋点更新，或者漏埋点，都需要重新走上线发布流程，更新成本也高，对线上系统稳定性也有一定危害。</p>
<p>2、可视化埋点
通过可视化交互的手段，代替上述的代码埋点。将业务代码和埋点代码分离，提供一个可视化交互的页面，输入为业务代码，通过这个可视化系统，可以在业务代码中自定义的增加埋点事件等等，最后输出的代码耦合了业务代码和埋点代码。缺点就是可以埋点的控件有限，不能手动定制。</p>
<p>可视化埋点听起来比较高大上，实际上跟代码埋点还是区别不大。也就是用一个系统来实现手动插入代码埋点的过程。比如国外比较早做可视化的是 Mixpanel，国内较早支持可视化埋点的有 TalkingData、诸葛 IO，2017 年腾讯的 MTA 也宣布支持可视化埋点；相比于手动埋点更新困难，埋点成本高的问题，可视化埋点优化了移动运营中数据采集的流程，能够支持产品运营随时调整埋点，无需再走发版流程，直接把配置结果推入到前端，数据采集流程更简化，也更方便产品的迭代。</p>
<p>可视化埋点中多数基于 Xpath 的方案，XPath 是一门在 XML 文档中查找信息的语言，XPath 可用来在 XML 文档中对元素和属性进行遍历。</p>
<p>3、无埋点
无埋点则是前端自动采集全部事件，上报埋点数据，由后端来过滤和计算出有用的数据。优点是前端只要一次加载埋点脚本，缺点是流量和采集的数据过于庞大，服务器性能压力山大。</p>
<p>采用无埋点技术的有主流的 GrowingIO、神策。</p>
<p>总结
在不同场景下我们需要选择不同的埋点方案。例如对于简单的用户行为类事件，可以使用全埋点解决；而对于需要携带大量运行时才可获知的业务字段的埋点需求，就需要声明式埋点来解决。</p>
<p>在大多数情况下，我们的数据监控都是通过手动埋点的方式来解决问题，因为业务每个业务的特殊性，我们必须监控用户每一个行为，提供产品决策的依据。</p>
<h3 id="性能监控" tabindex="-1"><a class="header-anchor" href="#性能监控"><span>性能监控</span></a></h3>
<p>性能监控指的是监听前端的性能，主要包括监听网页或者说产品在用户端的体验。常见的性能监控项包括：</p>
<p>不同用户，不同机型和不同系统下的首屏加载时间
白屏时间
http 等请求的响应时间
静态资源整体下载时间
页面渲染时间
页面交互动画完成时间</p>
<h4 id="监控方式-1" tabindex="-1"><a class="header-anchor" href="#监控方式-1"><span>监控方式</span></a></h4>
<p>性能监控主要是通过浏览器相关的性能 api 来实现</p>
<p>在我们了解之前，我们还需要了解浏览器浏览器是监控页面性能的，因为只有知道了这些概念，你才能跟面试官去吹，并且吹的时间长一些</p>
<p>在前端的史前时代，为了帮助开发者更好地衡量和改进前端页面性能，W3C性能小组引入了 Navigation Timing API ，实现了自动、精准的页面性能打点；开发者可以通过 window.performance 属性获取。</p>
<p>可时代在进步，人们的生活水平不断提高，浏览器自然也得与时俱进，于是他们有推出了性能监控的新接口，也就是performance升级版</p>
<p>主要重新划分了性能监控的时间节点，新增了一些新的属性，扩充了 performance 的定义，并增加了 PerformanceObserver 的支持。</p>
<p>如下图，PerformanceNavigationTiming 这个新实例的图例，它横跨了页面的整个初始化周期</p>
<p><img src="@source/assets/PerformanceNavigationTiming.png" alt=""></p>
<p>我们来一个个解析下</p>
<p>PerformanceNavigationTiming 实例的属性解析
现在，我们就上面的流程，来一个个解析 PerformanceNavigationTiming 实例中所涉及到的各个属性的含义。</p>
<ul>
<li>
<p>startTime: 开始导航的时间。加载新页面、当前页面卸载时会触发 unload 事件。如果当前页面有未提交的表单数据等情况，会弹出一个确认关闭框。点击确认后，导航流程开始。startTime 值几乎总为 0。</p>
</li>
<li>
<p>unloaStart、unloadEnd：对应页面 unload 事件，标记该事件的开始和结束时间。</p>
</li>
<li>
<p>redirectStart、redirectEnd：如果页面发生了重定向，redirectStart 表示重定向开始时间，redirectEnd 表示重定向结束时间。如果没有重定向，redirectStart、redirectEnd 值都为 0。</p>
</li>
<li>
<p>fetchStart：下一步，取浏览器本地缓存（强缓存，如果本地缓存过期，还有一个走协商缓存的过程）。fetchStart 表示开始取缓存时间。</p>
</li>
<li>
<p>domainLookupStart、domainLookupEnd：从域名到 IP 地址有一个 DNS 解析过程。</p>
</li>
<li>
<p>domainLookupStart、domainLookupStart 分别标记解析开始和结束时间。</p>
</li>
<li>
<p>connnectStart、connectEnd、secureConnectEnd：得到 IP 地址，正式开始请求之前，进行 TCP 连接。</p>
</li>
<li>
<p>connnectStart 记录连接的开始时间，如果使用的 https 协议，还有一个建立 STL 连接，得到会话密钥的过程，使用 secureConnectStart 字段记录。</p>
</li>
<li>
<p>requestStart：接下来发起真正的 HTTP 请求，构建请求头信息，携带 cookie 字段信息等。</p>
</li>
<li>
<p>responseStart、responseEnd：响应开始和结束时间（先接收响应头，再接收响应体）。</p>
</li>
<li>
<p>以上对应的是从发出请求到接收响应的整个过程，如果响应头 Content-Type 字段值为 text/html，那么从下一步开始就是页面渲染阶段了。
domInteractive、domContentLoadedEventStart、domContentLoadedEventEnd、domComplete：domInteractive、domComplete 可以对应到 document readystatechange 事件 上的 interactive、complete 值（document.readyState 属性的两个可用取值）。domContentLoadedEventStart、domContentLoadedEventEnd 则对应 document DOMContentLoaded  事件，标记事件的开始和结束时间。</p>
</li>
<li>
<p>loadStart、loadEnd：这里对应的是 load 事件（当页面资源（脚本、样式、图片、音视频、iframe 等）全部加载完成后），标记事件的开始和结束时间</p>
</li>
</ul>
<p>有了以上这些参数，我们就能随意组合我们想要的数据，来监控我们的页面性能</p>
<p>等等等等，开始之前，我们还要拿到数据，怎么拿呢？</p>
<p>当然是使用最新的PerformanceNavigationTiming接口了，毕竟人家官方都说了，这时候就出现了个问题，这是一个新的浏览器标准，是一个标准，就意味着要有浏览器厂商去支持这个标准，既然是支持，就会有一个问题，有的厂商，财大气粗，傲慢无比，都不搭理你，有的厂商拥抱新技术，热情洋溢，就立马支持，但用的人少。即使所有人都支持了，不能热更新的东西，用户到死都不更新咋办，难道这部分用户就要舍弃掉？</p>
<p>舍弃？那是不行的，都是衣食父母，所以只能我们开发者来兼容，怎么兼容呢？</p>
<p>很简单，有就用，没有就降级用之前的那个标准（高端的技术都是朴素的招数）
而获取PerformanceNavigationTiming 也有一个我理解的很奇怪的方式 通过<code v-pre>getEntriesByType</code> 来获取
就会形成如下兼容代码：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> timing <span class="token operator">=</span></span>
<span class="line">    <span class="token comment">// W3C Level2  PerformanceNavigationTiming</span></span>
<span class="line">    <span class="token comment">// 使用了High-Resolution Time，时间精度可以达毫秒的小数点好几位。</span></span>
<span class="line">    performance<span class="token punctuation">.</span><span class="token function">getEntriesByType</span><span class="token punctuation">(</span><span class="token string">'navigation'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">0</span></span>
<span class="line">      <span class="token operator">?</span> performance<span class="token punctuation">.</span><span class="token function">getEntriesByType</span><span class="token punctuation">(</span><span class="token string">'navigation'</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span></span>
<span class="line">      <span class="token operator">:</span> performance<span class="token punctuation">.</span>timing<span class="token punctuation">;</span> <span class="token comment">// W3C Level1  (目前兼容性高，仍然可使用，未来可能被废弃)。</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>好了，有了以上数据，我们就能顺利的对当前的页面性能进行监控了
代码如下：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> start <span class="token operator">=</span> timing<span class="token punctuation">.</span>navigationStart<span class="token punctuation">,</span></span>
<span class="line">    dnsTime <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line">    tcpTime <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line">    firstPaintTime <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line">    domRenderTime <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line">    loadTime <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">dnsTime <span class="token operator">=</span> timing<span class="token punctuation">.</span>domainLookupEnd <span class="token operator">-</span> timing<span class="token punctuation">.</span>domainLookupStart<span class="token punctuation">;</span></span>
<span class="line">tcpTime <span class="token operator">=</span> timing<span class="token punctuation">.</span>connectEnd <span class="token operator">-</span> timing<span class="token punctuation">.</span>connectStart<span class="token punctuation">;</span></span>
<span class="line">firstPaintTime <span class="token operator">=</span> timing<span class="token punctuation">.</span>responseStart <span class="token operator">-</span> start<span class="token punctuation">;</span></span>
<span class="line">domRenderTime <span class="token operator">=</span> timing<span class="token punctuation">.</span>domContentLoadedEventEnd <span class="token operator">-</span> start<span class="token punctuation">;</span></span>
<span class="line">loadTime <span class="token operator">=</span> timing<span class="token punctuation">.</span>loadEventEnd <span class="token operator">-</span> start<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'DNS解析时间:'</span><span class="token punctuation">,</span> dnsTime<span class="token punctuation">,</span></span>
<span class="line">            <span class="token string">'\nTCP建立时间:'</span><span class="token punctuation">,</span> tcpTime<span class="token punctuation">,</span></span>
<span class="line">            <span class="token string">'\n首屏时间:'</span><span class="token punctuation">,</span> firstPaintTime<span class="token punctuation">,</span></span>
<span class="line">            <span class="token string">'\ndom渲染完成时间:'</span><span class="token punctuation">,</span> domRenderTime<span class="token punctuation">,</span></span>
<span class="line">            <span class="token string">'\n页面onload时间:'</span><span class="token punctuation">,</span> loadTime<span class="token punctuation">,</span></span>
<span class="line">            <span class="token string">'\n域名:'</span><span class="token punctuation">,</span>  document<span class="token punctuation">.</span>domain<span class="token punctuation">,</span></span>
<span class="line">            <span class="token string">'\n当前 URL 地址:'</span><span class="token punctuation">,</span>  document<span class="token punctuation">.</span><span class="token constant">URL</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string">'\n当前页面标题:'</span><span class="token punctuation">,</span>  document<span class="token punctuation">.</span>title<span class="token punctuation">,</span></span>
<span class="line">            <span class="token string">'\n上一个访问页面 URL 地址:'</span><span class="token punctuation">,</span>  document<span class="token punctuation">.</span>referrer<span class="token punctuation">,</span></span>
<span class="line">            <span class="token string">'\n屏幕高度:'</span><span class="token punctuation">,</span>  window<span class="token punctuation">.</span>screen<span class="token punctuation">.</span>height<span class="token punctuation">,</span></span>
<span class="line">            <span class="token string">'\n屏幕宽度:'</span><span class="token punctuation">,</span>  window<span class="token punctuation">.</span>screen<span class="token punctuation">.</span>width<span class="token punctuation">,</span></span>
<span class="line">            <span class="token string">'\n屏幕颜色深度:'</span><span class="token punctuation">,</span>  window<span class="token punctuation">.</span>screen<span class="token punctuation">.</span>colorDepth<span class="token punctuation">,</span></span>
<span class="line">            <span class="token string">'\n设备型号:'</span><span class="token punctuation">,</span>  window<span class="token punctuation">.</span>userAgent<span class="token punctuation">,</span></span>
<span class="line">            <span class="token string">'\n设备语言:'</span><span class="token punctuation">,</span>  window<span class="token punctuation">.</span>language<span class="token punctuation">,</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上代码中我们就很简单的获取了页面整体性能数据，根据这些数据，就能形成指标</p>
<ul>
<li>加载时间：页面运行时各个阶段的加载时间；</li>
<li>TTFB(Time To First Byte)(首字节时间)：浏览器发起第一个请求到数据返回第一个字节所消耗的时间，这个时间包含了网络请求时间、后端处理时间；</li>
<li>FP(First Paint)(首次绘制)：首次绘制包括了任何用户自定义的背景绘制，它是将第一个像素点绘制到屏幕的时刻；</li>
<li>FCP(First Content Paint)(首次内容绘制)：首次内容绘制是浏览器将第一个 DOM 渲染到屏幕的时间,可以是任何文本、图像、SVG 等的时间；</li>
<li>FMP(First Meaningful paint)(首次有意义绘制)：首次有意义绘制是页面可用性的量度标准；</li>
<li>LCP(Largest Contentful Paint)：视窗内最大的图片或者文本渲染的时间，当最大的内容块渲染完的时候，基本上主内容都加载完了，与现有的页面加载指标相比，与用户体验的相关性更好；</li>
<li>FID(First Input Delay)(首次输入延迟)：用户首次和页面交互到页面响应交互的时间；</li>
<li>卡顿：指超过 50ms 的长任务，具体的指标可以根据页面的内容进行调节，一般 50ms 人眼就能感觉到卡顿。</li>
<li>PV：Page View 即页面浏览量或点击量；
首屏加载时间
首屏加载时间和首页加载时间不一样，首屏指的是屏幕内的 dom 渲染完成的时间</li>
</ul>
<p>比如首页很长需要好几屏展示，这种情况下屏幕以外的元素不考虑在内</p>
<ul>
<li>计算首屏加载时间流程</li>
</ul>
<p>1）利用MutationObserver监听document对象，每当 dom 变化时触发该事件</p>
<p>2）判断监听的 dom 是否在首屏内，如果在首屏内，将该 dom 放到指定的数组中，记录下当前 dom 变化的时间点</p>
<p>3）在 MutationObserver 的 callback 函数中，通过防抖函数，监听document.readyState状态的变化</p>
<p>4）当document.readyState === 'complete'，停止定时器和 取消对 document 的监听</p>
<p>5）遍历存放 dom 的数组，找出最后变化节点的时间，用该时间点减去performance.timing.navigationStart 得出首屏的加载时间</p>
<p>当数据形成这些指标的时候就能针对性的对页面进行优化</p>
<h3 id="异常监控" tabindex="-1"><a class="header-anchor" href="#异常监控"><span>异常监控</span></a></h3>
<p>顾名思义，就是页面的所有异常采集</p>
<p>Javascript 的异常监控
资源加载异常监控
接口请求异常监控</p>
<p>当然，这个也很简单，同样利用，浏览器的 api 来实现错误捕获</p>
<h4 id="错误捕获方式" tabindex="-1"><a class="header-anchor" href="#错误捕获方式"><span>错误捕获方式</span></a></h4>
<h5 id="try-catch" tabindex="-1"><a class="header-anchor" href="#try-catch"><span>try/catch</span></a></h5>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">// 示例1：常规运行时错误，可以捕获 ✅</span></span>
<span class="line"> <span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">   <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span></span>
<span class="line">   <span class="token keyword">if</span> <span class="token punctuation">(</span>a<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">     console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'111'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">   <span class="token punctuation">}</span></span>
<span class="line"> <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">   console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'捕获到异常：'</span><span class="token punctuation">,</span> e<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 示例2：语法错误，不能捕获 ❌</span></span>
<span class="line"><span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> notdefined<span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">catch</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'捕获不到异常：'</span><span class="token punctuation">,</span> <span class="token string">'Uncaught SyntaxError'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 示例3：异步错误，不能捕获 ❌</span></span>
<span class="line"><span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>notdefined<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">catch</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'捕获不到异常：'</span><span class="token punctuation">,</span> <span class="token string">'Uncaught ReferenceError'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="window-onerror" tabindex="-1"><a class="header-anchor" href="#window-onerror"><span>window.onerror</span></a></h5>
<p>window.onerror 可以捕获常规错误、异步错误，但不能捕获资源错误</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">window<span class="token punctuation">.</span><span class="token function-variable function">onerror</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">message<span class="token punctuation">,</span> source<span class="token punctuation">,</span> lineno<span class="token punctuation">,</span> colno<span class="token punctuation">,</span> error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"捕获到的错误信息是："</span><span class="token punctuation">,</span> message<span class="token punctuation">,</span> source<span class="token punctuation">,</span> lineno<span class="token punctuation">,</span> colno<span class="token punctuation">,</span> error<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 示例1：常规运行时错误，可以捕获 ✅</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>notdefined<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 示例2：语法错误，不能捕获 ❌</span></span>
<span class="line"><span class="token keyword">const</span> notdefined<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 示例3：异步错误，可以捕获 ✅</span></span>
<span class="line"><span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>notdefined<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 示例4：资源错误，不能捕获 ❌</span></span>
<span class="line"><span class="token keyword">let</span> script <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">"script"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">script<span class="token punctuation">.</span>type <span class="token operator">=</span> <span class="token string">"text/javascript"</span><span class="token punctuation">;</span></span>
<span class="line">script<span class="token punctuation">.</span>src <span class="token operator">=</span> <span class="token string">"https://www.test.com/index.js"</span><span class="token punctuation">;</span></span>
<span class="line">document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>script<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="window-addeventlistener" tabindex="-1"><a class="header-anchor" href="#window-addeventlistener"><span>window.addEventListener</span></a></h6>
<p>当静态资源加载失败时，会触发 error 事件， 此时 window.onerror 不能捕获到</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token constant">DOCTYPE</span> html<span class="token operator">></span></span>
<span class="line"><span class="token operator">&lt;</span>html lang<span class="token operator">=</span><span class="token string">"en"</span><span class="token operator">></span></span>
<span class="line"><span class="token operator">&lt;</span>head<span class="token operator">></span></span>
<span class="line">  <span class="token operator">&lt;</span>meta charset<span class="token operator">=</span><span class="token string">"UTF-8"</span><span class="token operator">></span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">></span></span>
<span class="line"><span class="token operator">&lt;</span>script<span class="token operator">></span></span>
<span class="line">  window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'error'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'捕获到异常：'</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span></span>
<span class="line"></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> 图片、script、css加载错误，都能被捕获 ✅ <span class="token operator">--</span><span class="token operator">></span></span>
<span class="line"><span class="token operator">&lt;</span>img src<span class="token operator">=</span><span class="token string">"https://test.cn/×××.png"</span><span class="token operator">></span></span>
<span class="line"><span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">"https://test.cn/×××.js"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span></span>
<span class="line"><span class="token operator">&lt;</span>link href<span class="token operator">=</span><span class="token string">"https://test.cn/×××.css"</span> rel<span class="token operator">=</span><span class="token string">"stylesheet"</span> <span class="token operator">/</span><span class="token operator">></span></span>
<span class="line"></span>
<span class="line"><span class="token operator">&lt;</span>script<span class="token operator">></span></span>
<span class="line">  <span class="token comment">// new Image错误，不能捕获 ❌</span></span>
<span class="line">  <span class="token comment">// new Image运用的比较少，可以自己单独处理</span></span>
<span class="line">  <span class="token keyword">new</span> <span class="token class-name">Image</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>src <span class="token operator">=</span> <span class="token string">'https://test.cn/×××.png'</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">></span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="promise-错误" tabindex="-1"><a class="header-anchor" href="#promise-错误"><span>Promise 错误</span></a></h5>
<p>Promise 中抛出的错误，无法被 window.onerror、try/catch、 error 事件捕获到，可通过 unhandledrejection 事件来处理</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// try/catch 不能捕获Promise中错误 ❌</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">'in try catch'</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// error事件 不能捕获Promise中错误 ❌</span></span>
<span class="line">window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span></span>
<span class="line">  <span class="token string">'error'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'捕获到异常：'</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token boolean">true</span></span>
<span class="line"><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// window.onerror 不能捕获Promise中错误 ❌</span></span>
<span class="line">window<span class="token punctuation">.</span><span class="token function-variable function">onerror</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">message<span class="token punctuation">,</span> source<span class="token punctuation">,</span> lineno<span class="token punctuation">,</span> colno<span class="token punctuation">,</span> error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'捕获到异常：'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> message<span class="token punctuation">,</span> source<span class="token punctuation">,</span> lineno<span class="token punctuation">,</span> colno<span class="token punctuation">,</span> error <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// unhandledrejection 可以捕获Promise中的错误 ✅</span></span>
<span class="line">window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'unhandledrejection'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'捕获到异常'</span><span class="token punctuation">,</span> e<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token comment">// preventDefault阻止传播，不会在控制台打印</span></span>
<span class="line">  e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="vue-错误捕获" tabindex="-1"><a class="header-anchor" href="#vue-错误捕获"><span>Vue 错误捕获</span></a></h5>
<p>Vue 项目中，window.onerror 和 error 事件不能捕获到常规的代码错误，需要使用 vue 的 api</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">Vue<span class="token punctuation">.</span>config<span class="token punctuation">.</span><span class="token function-variable function">errorHandler</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> vm<span class="token punctuation">,</span> info</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'进来啦~'</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="react-错误" tabindex="-1"><a class="header-anchor" href="#react-错误"><span>React 错误</span></a></h5>
<p>从 react16 开始，官方提供了 ErrorBoundary 错误边界的功能，被该组件包裹的子组件，render 函数报错时会触发离当前组件最近父组件的 ErrorBoundary</p>
<p>生产环境，一旦被 ErrorBoundary 捕获的错误，也不会触发全局的 window.onerror 和 error 事件</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">'react'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> Child <span class="token keyword">from</span> <span class="token string">'./Child.js'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// window.onerror 不能捕获render函数的错误 ❌</span></span>
<span class="line">window<span class="token punctuation">.</span><span class="token function-variable function">onerror</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> msg<span class="token punctuation">,</span> c<span class="token punctuation">,</span> l</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'err'</span><span class="token punctuation">,</span> err<span class="token punctuation">,</span> msg<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// error 不能render函数的错误 ❌</span></span>
<span class="line">window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span></span>
<span class="line">  <span class="token string">'error'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'捕获到异常：'</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token boolean">true</span></span>
<span class="line"><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">ErrorBoundary</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">hasError</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">static</span> <span class="token function">getDerivedStateFromError</span><span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 更新 state 使下一次渲染能够显示降级后的 UI</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">hasError</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token function">componentDidCatch</span><span class="token punctuation">(</span><span class="token parameter">error<span class="token punctuation">,</span> errorInfo</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// componentDidCatch 可以捕获render函数的错误</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>error<span class="token punctuation">,</span> errorInfo<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 同样可以将错误日志上报给服务器</span></span>
<span class="line">    <span class="token function">reportError</span><span class="token punctuation">(</span>error<span class="token punctuation">,</span> errorInfo<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>hasError<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// 自定义降级后的 UI 并渲染</span></span>
<span class="line">      <span class="token keyword">return</span> <span class="token operator">&lt;</span>h1<span class="token operator">></span>Something went wrong<span class="token punctuation">.</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>children<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">Parent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">(</span></span>
<span class="line">    <span class="token operator">&lt;</span>div<span class="token operator">></span></span>
<span class="line">      父组件</span>
<span class="line">      <span class="token operator">&lt;</span>ErrorBoundary<span class="token operator">></span></span>
<span class="line">        <span class="token operator">&lt;</span>Child <span class="token operator">/</span><span class="token operator">></span></span>
<span class="line">      <span class="token operator">&lt;</span><span class="token operator">/</span>ErrorBoundary<span class="token operator">></span></span>
<span class="line">    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span></span>
<span class="line">  <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> Parent<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>同 vue 项目的处理类似，react 项目中，可以在 componentDidCatch 中将捕获的错误上报</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token function">componentDidCatch</span><span class="token punctuation">(</span><span class="token parameter">error<span class="token punctuation">,</span> errorInfo</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// handleError方法用来处理错误并上报</span></span>
<span class="line">  <span class="token function">handleError</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="跨域问题捕获" tabindex="-1"><a class="header-anchor" href="#跨域问题捕获"><span>跨域问题捕获</span></a></h5>
<p>如果当前页面中，引入了其他域名的 JS 资源，如果资源出现错误，error 事件只会监测到一个  script error 的异常。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span></span>
<span class="line">  <span class="token string">'error'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'捕获到异常：'</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token boolean">true</span></span>
<span class="line"><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 当前页面加载其他域的资源，如https://www.test.com/index.js</span></span>
<span class="line"><span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">"https://www.test.com/index.js"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 加载的https://www.test.com/index.js的代码</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>只能捕获到 script error 的原因：</p>
<p>是由于浏览器基于安全考虑，故意隐藏了其它域 JS 文件抛出的具体错误信息，这样可以有效避免敏感信息无意中被第三方(不受控制的)脚本捕获到，因此，浏览器只允许同域下的脚本捕获具体的错误信息</p>
<p>解决方法：</p>
<p>前端 script 加 crossorigin，后端配置 Access-Control-Allow-Origin, 添加 crossorigin 后可以捕获到完整的报错信息</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">"https://www.test.com/index.js"</span> crossorigin<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>如果不能修改服务端的请求头，可以考虑通过使用 try/catch 绕过，将错误抛出</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token operator">&lt;</span><span class="token operator">!</span>doctype html<span class="token operator">></span></span>
<span class="line"><span class="token operator">&lt;</span>html<span class="token operator">></span></span>
<span class="line"><span class="token operator">&lt;</span>body<span class="token operator">></span></span>
<span class="line">  <span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">"https://www.test.com/index.js"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span></span>
<span class="line">  <span class="token operator">&lt;</span>script<span class="token operator">></span></span>
<span class="line">  window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"error"</span><span class="token punctuation">,</span> <span class="token parameter">error</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"捕获到异常："</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">true</span> <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 调用https://www.test.com/index.js中定义的fn方法</span></span>
<span class="line">    <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">throw</span> e<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">></span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="接口错误" tabindex="-1"><a class="header-anchor" href="#接口错误"><span>接口错误</span></a></h5>
<p>接口监控的实现原理：针对浏览器内置的 XMLHttpRequest、fetch 对象，利用 AOP 切片编程重写该方法，实现对请求的接口拦截，从而获取接口报错的情况并上报
拦截 XMLHttpRequest 请求示例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">xhrReplace</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token punctuation">(</span><span class="token string">'XMLHttpRequest'</span> <span class="token keyword">in</span> window<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token keyword">const</span> originalXhrProto <span class="token operator">=</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">.</span>prototype<span class="token punctuation">;</span></span>
<span class="line">  <span class="token comment">// 重写XMLHttpRequest 原型上的open方法</span></span>
<span class="line">  <span class="token function">replaceAop</span><span class="token punctuation">(</span>originalXhrProto<span class="token punctuation">,</span> <span class="token string">'open'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">originalOpen</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// 获取请求的信息</span></span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span>_xhr <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token keyword">typeof</span> args<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">'string'</span> <span class="token operator">?</span> args<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">:</span> args<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">url</span><span class="token operator">:</span> args<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">startTime</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'xhr'</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token comment">// 执行原始的open方法</span></span>
<span class="line">      <span class="token function">originalOpen</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token comment">// 重写XMLHttpRequest 原型上的send方法</span></span>
<span class="line">  <span class="token function">replaceAop</span><span class="token punctuation">(</span>originalXhrProto<span class="token punctuation">,</span> <span class="token string">'send'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">originalSend</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// 当请求结束时触发，无论请求成功还是失败都会触发</span></span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'loadend'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">const</span> <span class="token punctuation">{</span> responseType<span class="token punctuation">,</span> response<span class="token punctuation">,</span> status <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">const</span> endTime <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>_xhr<span class="token punctuation">.</span>reqData <span class="token operator">=</span> args<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>_xhr<span class="token punctuation">.</span>status <span class="token operator">=</span> status<span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">''</span><span class="token punctuation">,</span> <span class="token string">'json'</span><span class="token punctuation">,</span> <span class="token string">'text'</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>responseType<span class="token punctuation">)</span> <span class="token operator">!==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token keyword">this</span><span class="token punctuation">.</span>_xhr<span class="token punctuation">.</span>responseText <span class="token operator">=</span></span>
<span class="line">            <span class="token keyword">typeof</span> response <span class="token operator">===</span> <span class="token string">'object'</span> <span class="token operator">?</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span> <span class="token operator">:</span> response<span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token comment">// 获取接口的请求时长</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>_xhr<span class="token punctuation">.</span>elapsedTime <span class="token operator">=</span> endTime <span class="token operator">-</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_xhr<span class="token punctuation">.</span>startTime<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">// 上报xhr接口数据</span></span>
<span class="line">        <span class="token function">reportData</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>_xhr<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token comment">// 执行原始的send方法</span></span>
<span class="line">      <span class="token function">originalSend</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * 重写指定的方法</span>
<span class="line"> * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span> object <span class="token punctuation">}</span></span> <span class="token parameter">source</span> 重写的对象</span>
<span class="line"> * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span> string <span class="token punctuation">}</span></span> <span class="token parameter">name</span> 重写的属性</span>
<span class="line"> * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span> <span class="token keyword">function</span> <span class="token punctuation">}</span></span> <span class="token parameter">fn</span> 拦截的函数</span>
<span class="line"> */</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">replaceAop</span><span class="token punctuation">(</span><span class="token parameter">source<span class="token punctuation">,</span> name<span class="token punctuation">,</span> fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>source <span class="token operator">===</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>name <span class="token keyword">in</span> source<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">var</span> original <span class="token operator">=</span> source<span class="token punctuation">[</span>name<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">var</span> wrapped <span class="token operator">=</span> <span class="token function">fn</span><span class="token punctuation">(</span>original<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> wrapped <span class="token operator">===</span> <span class="token string">'function'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      source<span class="token punctuation">[</span>name<span class="token punctuation">]</span> <span class="token operator">=</span> wrapped<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>拦截 fetch 请求示例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">fetchReplace</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token punctuation">(</span><span class="token string">'fetch'</span> <span class="token keyword">in</span> window<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token comment">// 重写fetch方法</span></span>
<span class="line">  <span class="token function">replaceAop</span><span class="token punctuation">(</span>window<span class="token punctuation">,</span> <span class="token string">'fetch'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">originalFetch</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">url<span class="token punctuation">,</span> config</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">const</span> sTime <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">const</span> method <span class="token operator">=</span> <span class="token punctuation">(</span>config <span class="token operator">&amp;&amp;</span> config<span class="token punctuation">.</span>method<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token string">'GET'</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">let</span> handlerData <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'fetch'</span><span class="token punctuation">,</span></span>
<span class="line">        method<span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">reqData</span><span class="token operator">:</span> config <span class="token operator">&amp;&amp;</span> config<span class="token punctuation">.</span>body<span class="token punctuation">,</span></span>
<span class="line">        url</span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">      <span class="token keyword">return</span> <span class="token function">originalFetch</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>window<span class="token punctuation">,</span> <span class="token punctuation">[</span>url<span class="token punctuation">,</span> config<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span></span>
<span class="line">        <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token comment">// res.clone克隆，防止被标记已消费</span></span>
<span class="line">          <span class="token keyword">const</span> tempRes <span class="token operator">=</span> res<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">          <span class="token keyword">const</span> eTime <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">          handlerData <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token operator">...</span>handlerData<span class="token punctuation">,</span></span>
<span class="line">            <span class="token literal-property property">elapsedTime</span><span class="token operator">:</span> eTime <span class="token operator">-</span> sTime<span class="token punctuation">,</span></span>
<span class="line">            <span class="token literal-property property">status</span><span class="token operator">:</span> tempRes<span class="token punctuation">.</span>status</span>
<span class="line">          <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">          tempRes<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">            handlerData<span class="token punctuation">.</span>responseText <span class="token operator">=</span> data<span class="token punctuation">;</span></span>
<span class="line">            <span class="token comment">// 上报fetch接口数据</span></span>
<span class="line">            <span class="token function">reportData</span><span class="token punctuation">(</span>handlerData<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">          <span class="token comment">// 返回原始的结果，外部继续使用then接收</span></span>
<span class="line">          <span class="token keyword">return</span> res<span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token keyword">const</span> eTime <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">          handlerData <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token operator">...</span>handlerData<span class="token punctuation">,</span></span>
<span class="line">            <span class="token literal-property property">elapsedTime</span><span class="token operator">:</span> eTime <span class="token operator">-</span> sTime<span class="token punctuation">,</span></span>
<span class="line">            <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token number">0</span></span>
<span class="line">          <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">          <span class="token comment">// 上报fetch接口数据</span></span>
<span class="line">          <span class="token function">reportData</span><span class="token punctuation">(</span>handlerData<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">          <span class="token keyword">throw</span> err<span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="监控白屏异常" tabindex="-1"><a class="header-anchor" href="#监控白屏异常"><span>监控白屏异常</span></a></h5>
<p>白屏就是页面上什么东西也没有，在页面加载完成之后，如果页面上的空白点很多，就说明页面是白屏的，需要上报，这个上报的时机是：document.readyState === 'complete' 表示文档和所有的子资源已完成加载，表示load（window.addEventListener('load'）状态事件即将被触发。</p>
<p>document.readyState 有三个值：loading（document正在加载），interactive（可交互，表示正在加载的状态结束，但是图像，样式和框架之类的子资源仍在加载），complete 就是完成，所以监控白屏需要在文档都加载完成的情况下触发。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">onload</span><span class="token punctuation">(</span><span class="token parameter">callback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>document<span class="token punctuation">.</span>readyState <span class="token operator">===</span> <span class="token string">'complete'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">callback</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">    window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'onload'</span><span class="token punctuation">,</span> callback<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>监控白屏的思路主要是：可以将可视区域中心点作为坐标轴的中心，在X、Y轴上各分 10 个点，找出这个 20 个坐标点上最上层的 DOM 元素，如过这些元素是包裹元素，空白点数就加一，包裹元素可以自定义比如 Html Body App Root Container Content 等，空白点数大于 0 就上报白屏日志。他的主要核心就是<code v-pre>elementFromPoint</code> api</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">computedBlankScreen</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 包裹玉元素列表</span></span>
<span class="line">  <span class="token keyword">const</span> wrapperSelectors <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'body'</span><span class="token punctuation">,</span> <span class="token string">'html'</span><span class="token punctuation">,</span> <span class="token string">'#root'</span><span class="token punctuation">,</span> <span class="token string">'#App'</span><span class="token punctuation">]</span></span>
<span class="line">  <span class="token comment">// 空白节点的个数</span></span>
<span class="line">  <span class="token keyword">let</span> emptyPoints <span class="token operator">=</span> <span class="token number">0</span></span>
<span class="line">  <span class="token comment">// 判断20个点处的元素是否是包裹元素</span></span>
<span class="line">  <span class="token keyword">function</span> <span class="token function">isWrapper</span><span class="token punctuation">(</span><span class="token parameter">element</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> selector <span class="token operator">=</span> <span class="token function">getSelector</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>selector<span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>wrapperSelectors<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>selector<span class="token punctuation">)</span> <span class="token operator">>=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 表示是在包裹元素里面，空白点就要加一</span></span>
<span class="line">      emptyPoints<span class="token operator">++</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token function">onload</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> xElements<span class="token punctuation">,</span> yElements</span>
<span class="line">    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span><span class="token number">9</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      xElements <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">elementFromPoint</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>innerWidth <span class="token operator">*</span> i <span class="token operator">/</span> <span class="token number">10</span><span class="token punctuation">,</span> window<span class="token punctuation">.</span>innerHeight <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span></span>
<span class="line">      yElements <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">elementFromPoint</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>innerHeight <span class="token operator">*</span> i <span class="token operator">/</span> <span class="token number">10</span><span class="token punctuation">,</span> window<span class="token punctuation">.</span>innerWidth <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span></span>
<span class="line">      <span class="token comment">// document.elementFromPoint 返回的是某一个坐标点的由到外的html元素的集合</span></span>
<span class="line">      <span class="token function">isWrapper</span><span class="token punctuation">(</span>xElements<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line">      <span class="token function">isWrapper</span><span class="token punctuation">(</span>yElements<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>emptyPoints <span class="token operator">>=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">let</span> centerPoint <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">elementFromPoint</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>innerWidth <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">,</span> window<span class="token punctuation">.</span>innerHeight <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span></span>
<span class="line">      tracker<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="内容上报" tabindex="-1"><a class="header-anchor" href="#内容上报"><span>内容上报</span></a></h3>
<p>内容上报支持图片打点上报和 fetch 请求上报两种方式</p>
<p>一般情况下，都是伪装图片上报偷偷携带内容为主</p>
<p>图片打点上报的优势：
1）支持跨域，一般而言，上报域名都不是当前域名，上报的接口请求会构成跨域
2）体积小且不需要插入 dom 中
3）不需要等待服务器返回数据</p>
<p>图片打点缺点是：url 受浏览器长度限制，但你可以在上报的时候限制，可谓瑕不掩瑜</p>
<p>上报方式非常简单</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> img <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Image</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">img<span class="token punctuation">.</span>width <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line">img<span class="token punctuation">.</span>height <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line">img<span class="token punctuation">.</span>src <span class="token operator">=</span> <span class="token string">'/sa.gif?project=default&amp;data=xxx'</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="上报数据清洗" tabindex="-1"><a class="header-anchor" href="#上报数据清洗"><span>上报数据清洗</span></a></h3>
<p>这其实就很简单了入库分类，然后展示，不再赘述</p>
<p>以上内容整个监控体系的整体搭建流程，涉及性能分析，错误分析，错误展示，等等</p>
<h2 id="sentry-javascript-分析" tabindex="-1"><a class="header-anchor" href="#sentry-javascript-分析"><span>sentry-javascript 分析</span></a></h2>
<p>sentry是一个开源的监控平台，可为监控界的老大哥，我们科普了整体监控体系之后，就可以琢磨下源码解读了</p>
<p>其实大家可以发现，整体的监控平台的核心就是 sdk 只要 sdk 的数据上报能搞搞定，其他的数据清洗都是展示和分类而已</p>
<p>所以我们要来琢磨一下如果引导大家看 sentry-sdk</p>
<p>Sentry 支持 React、Vue、Angular 等框架，支持 nodejs、浏览器端 javascript，可以说支持非常全面。</p>
<p>接下来就以 sentry-javascript（sdk） 为例，自顶向下的分析其结构。</p>
<p><strong>仓库地址：https://github.com/getsentry/sentry-javascript</strong></p>
<h3 id="准备工作" tabindex="-1"><a class="header-anchor" href="#准备工作"><span>准备工作</span></a></h3>
<p>首先对整体结构进行分析，观察其调用链、各个模块的作用和相互之间的依赖关系，构建一个全局的视野。</p>
<p>其次会综合使用动态分析和静态分析两种方法，对源码进行分析总结，围绕两大线索进行分析总结：</p>
<ul>
<li>监控脚本是如何初始化的</li>
<li>出现错误时是如何捕获、处理、上报的</li>
<li>理清楚这两条线，就能够对 sentry-javascript 的源码执行的来龙去脉有比较好的把握。</li>
</ul>
<p>最后查看 sentry 使用的一些辅助工具，对本次分析绘制出完整的总结图，分析 Sentry 在质量保障上是如何实践的。完成这些后在 Sentry 源码分析之旅上就向前了一小步。</p>
<h4 id="了解使用方式" tabindex="-1"><a class="header-anchor" href="#了解使用方式"><span>了解使用方式</span></a></h4>
<p>刚开始时我们拥有的信息非常少，不足以支撑进行下一步，可以先了解使用方式入手。我主要使用 React 技术栈，这就先看看 vue 和 JavaScript 两种情况的接入方式。</p>
<p>从使用文档中我们找到了一段示例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">npm install <span class="token operator">--</span>save @sentry<span class="token operator">/</span>vue</span>
<span class="line"><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> Sentry <span class="token keyword">from</span> <span class="token string">'@sentry/vue'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// ...</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">Sentry<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  app<span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">dsn</span><span class="token operator">:</span> <span class="token string">'__PUBLIC_DSN__'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">integrations</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token comment">// Or omit `router` if you're not using vue-router</span></span>
<span class="line">    Sentry<span class="token punctuation">.</span><span class="token function">browserTracingIntegration</span><span class="token punctuation">(</span><span class="token punctuation">{</span> router <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="依赖结构" tabindex="-1"><a class="header-anchor" href="#依赖结构"><span>依赖结构</span></a></h3>
<p>了解使用方式之后我们就可以分析他的依赖结构</p>
<p>也就是依赖关系，能帮助我们更透彻的理解整体的脉络</p>
<p>我们可以借助一个工具</p>
<p><strong>https://npmgraph.js.org/ 可视化 npm 包的依赖</strong></p>
<p><img src="@source/assets/relyOn.png" alt=""></p>
<p>如图所示，我们就能通过依赖图谱，看到整体的依赖关系</p>
<p>然后在依据整体的监控上报流程，就可以打断点分析源码了</p>
<p>当然源码其实已经有人帮忙分析过了，我们可以参考一下
具体参考如下：</p>
<ul>
<li>https://www.yuque.com/lizhiyao/sentry-miniapp/sentry-javascript-src</li>
</ul>
<h2 id="考点" tabindex="-1"><a class="header-anchor" href="#考点"><span>考点</span></a></h2>
<ul>
<li>表述整体监控体系的整体搭建流程？</li>
<li>你在做这个项目中遇到了什么难点，你是怎么解决的？</li>
<li>你跟开源的项目对比有什么区别？</li>
<li>前端监控有哪些常用的方式？</li>
</ul>
<h3 id="表述整体监控体系的整体搭建流程" tabindex="-1"><a class="header-anchor" href="#表述整体监控体系的整体搭建流程"><span>表述整体监控体系的整体搭建流程？</span></a></h3>
<p>这个其实就是考察，你对于整体监控体系的搭建有什么理解，知不知道行业最新的通用方案是什么？</p>
<p>数据监控（埋点）、性能监控和异常监控</p>
<p>数据监控就是单位内部的埋点，C 端埋点会较多，b端一般较少无外乎统计（pv,uv 等），主要是为了统计用户行为，分析用户行为，优化产品</p>
<p>性能监控其实就是监听不同用户，不同机型和不同系统下的首屏加载时间、白屏时间、http 等请求的响应时间、静态资源整体下载时间、页面渲染时间、页面交互动画完成时间 主要就是利用浏览器的 navigator、document、performance  api 来拿到这些数据</p>
<p>然后通过 sdk上报 后端对数据分类存储，然后还会有一个管理后台，对数据进行可视化展示利用（echart 等）</p>
<p>然后这时候，一般情况下，可能追问的点就是白屏检测等功能，体面的面试官都会问这个，如果他问你别的实现方式，那就说明这个面试官没水平 ，不去也罢，因为别的问题都是利用 performance 的时间点算出来，一般人记不住，也不会记</p>
<p>当然这个 performance会有个模型，可能要记一下，也可以不记，被问到的概率从人性上来说很小</p>
<p>我们就来讲讲白屏检测，讲白屏检测，是要有核心点的，核心点就是浏览器 api</p>
<p>先声明，是利用<code v-pre>elementFromPoint</code>  这个能获取当前页面中的某个左边点的最外层元素，来判断这个元素是否是根节点，如果是根节点，当然表示没有内容，就是白屏了</p>
<p>其实就是白屏检测时机，我们要在页面加载完成之后，利用 load 事件来判断页面逻辑执行页面渲染完</p>
<p>如果执行完成，我们就可以利用<code v-pre>elementFromPoint</code> 来判断页面是否是白屏，判断白屏的时候需要打点，原理很简单，就是在页面横向和纵向 分别取几个点（正常情况下在拿到屏幕宽高之后会取一个十字）</p>
<p>然后利用之前的那个 api 来算当前的元素，如果是根节点，就表示白屏了</p>
<h1 id="你在做这个项目中遇到了什么难点-你是怎么解决的" tabindex="-1"><a class="header-anchor" href="#你在做这个项目中遇到了什么难点-你是怎么解决的"><span>你在做这个项目中遇到了什么难点，你是怎么解决的？</span></a></h1>
<p>这个其实就是考验项目的架构设计和解决问题的能力</p>
<p>但是大部分项目其实都没有啥架构设计，都是天下一大抄，用技术圈来说的，叫借鉴，包括大名鼎鼎的 vue 也是搞借鉴</p>
<p>那怎么办呢？答案很简单，也借鉴啊，我们可以借鉴开源项目啊</p>
<p>比如 你们要做监控平台，sentry 当然首屈一指，借鉴他的架构设计</p>
<p>那么他是怎么设计的呢？</p>
<p>后端咱就不说了，咱说说前端sdk-javascript</p>
<p>sdk-javascript 是个模块化设计的项目</p>
<p>首先给面试官说的得是 使用monorepo的设计，为了能有多包的能力而之所以要有多包的能力，是为了以后能拓展，比如，将来要出个 小程序监控，react 监控，vue 监控等等，
必须要将核心的能力开放出来，供别人使用</p>
<p>其次插件设计，因为现在但凡成熟的项目都有插件设计，通过外部传入插件，在内部初始化，来解决和实现和拓展新的功能</p>
<p>别人问你内部项目为啥要插件设计，其实也很简单，就是为了热插拔设计，比如白屏检测， 小程序和web页面的方案是不一样的，所以一个热插拔显得尤其重要</p>
<h2 id="其实就是项目架构了" tabindex="-1"><a class="header-anchor" href="#其实就是项目架构了"><span>其实就是项目架构了</span></a></h2>
<p>所谓的项目架构核心就是代码分层，一个方法只干一件事，一个模块只负责一个功能一些主要模块说明</p>
<p>主要模块说明：</p>
<ol>
<li>Sentry.init：初始化 SDK，并配置核心功能（如传输层、集成插件、全局上下文等）。</li>
<li>Hub：一个中心模块，管理 Scope 和 Client 的实例。每个事件的上下文（用户信息、标签等）都通过 Scope 设置并存储在 Hub 中。</li>
<li>Scope：提供用户信息、标签、附加数据等上下文，作用域信息会在错误和性能事件中自动包含。</li>
<li>Client：负责将捕获的事件（如异常和性能数据）发送到 Sentry 服务器。</li>
<li>Transport：传输层模块，负责和 Sentry 服务通信。通常使用 fetch 或 XHR，可以自定义传输方式（如支持不同的协议）。</li>
<li>Integrations：集成模块，用于框架的自动错误捕获（如 React、Vue、Express 等），并提供一些全局监听器（如 window.onerror）。</li>
<li>Sentry Server：接收并处理 SDK 发送的数据，将错误信息存储并展现到 Sentry 控制台上。</li>
</ol>
<p>数据流动：
初始化 Sentry.init 时，加载 SDK 配置、集成模块和传输层。
Hub 创建一个 Client 实例，并持有 Scope 信息以管理上下文。
错误发生时，Integrations 捕获错误并传递给 Hub，Hub 从 Scope 中获取相关信息。
Client 对错误数据进行格式化，传输层将其发送到 Sentry Server。
最终数据上传至 Sentry 服务器进行处理和展示。</p>
<p>其实这些模块的本质就是知识为了清晰的数据架构和流动，仅此而已，监控的本质是重写或者重新组织浏览器错误以及性能api</p>
<h2 id="遇到了什么难点" tabindex="-1"><a class="header-anchor" href="#遇到了什么难点"><span>遇到了什么难点</span></a></h2>
<p>这个方向就很有讲究了，必须要提前准备，也就是提前想一个，因为当你在即兴的时候往往不会注意你在开发中遇到的细节</p>
<p>看看我是怎么准备的</p>
<p>很简单，技术细节别人也听不懂，因为有的面试官也是很废物的，怎么办呢，给他说一些老项目都会遇到的难题</p>
<p>比如，我们既然重构了这个监控系统，我们就要做一个事情啊，就是怎么兼容老项目</p>
<p>老项目也有一个 sdk，现在要给老sdk 嫁接到新的 sdk 上来，怎么兼容呢？</p>
<p>方案 1、 让所有的老项目，都更改一遍 sdk 地址</p>
<p>这个指定是不行的，因为这样会造成很多人力浪费，并且上线就会出错，所以pass</p>
<p>方案 2、 老项目都不动，然后新项目接入，这样也会有一个问题，服务端就需要解决，因为服务端的数据格式不一样新功能不一样的兼容问题，所以也pass</p>
<p>那么就只剩第三种方案了，sentry 不动，继续导出npm 包，但是只保留核心内容</p>
<p>插件全部通过外挂的形式嵌入 ，并且插件等工程在当前的 sdk 项目开发，然后导入核心包中的，数据流转，上报，数据转换， 数据存储等能力</p>
<p>由于这些能力其实一旦开发完成基本是不变的，所以，可维护性，也有保障，可以解构，每次上线，不会改动其他模块内容，这样的设计是最好的，也是最合理的，然后在当前 sdk 中编写插件</p>
<p>插件，和 sdk 的其余内容，并导出 sdk 链接</p>
<p>这样改动插件这种频繁改动的内容，就不会被 sdk 维护，而不改动核心包的内容，还可以拓展多个 sdk 比如小程序，react，vue 等等</p>
<p>保证了可维护性的同事，又保证了，拓展性，以及兼容性，缺点就是，如果核心包，所有插件要跟着上线，但解决方案目前来事是最省成本的</p>
<h1 id="你跟开源的项目对比有什么区别" tabindex="-1"><a class="header-anchor" href="#你跟开源的项目对比有什么区别"><span>你跟开源的项目对比有什么区别？</span></a></h1>
<p>这个，其实就是个扯淡的问题，因为大多数单位项目都是在开源项目的基础上一步步的迭代而来，换句话说就是站在巨人的肩膀上</p>
<p>但面试官就爱问这玩意，你说你咋能不回答，但又不能回答我是抄的</p>
<p>所以你只能回答借鉴，但借鉴哪里又是个问题</p>
<p>我们只能说，借鉴架构，将他的架构分为 专门管数据的，专门管上下文的，专门管数据流转的，专门管错误信息的， 专门管数据转化的，他做的太好了</p>
<p>所以，我们可以借鉴，至于其他的， 就是就得自己来了，因为它里面有大量的糟粕</p>
<p>比如，其他端兼容，上报格式限制，等，需要舍弃</p>
<p>所以，我们首先优势的地方是插件机制，其次是代码体积</p>
<h1 id="前端监控有哪些常用的方式" tabindex="-1"><a class="header-anchor" href="#前端监控有哪些常用的方式"><span>前端监控有哪些常用的方式？</span></a></h1>
<p>这个在上文中已经提到过，无非就是重写错误监控，梳理性能监控，梳理行为轨迹，等等</p>
<p>到此，监控考点，都已结束</p>
</div></template>


