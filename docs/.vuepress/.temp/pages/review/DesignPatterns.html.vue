<template><div><!-- @format -->
<h1 id="设计模式热门考题" tabindex="-1"><a class="header-anchor" href="#设计模式热门考题"><span>设计模式热门考题</span></a></h1>
<h2 id="_1、请用一句话概括-什么是设计模式-为什么要用" tabindex="-1"><a class="header-anchor" href="#_1、请用一句话概括-什么是设计模式-为什么要用"><span>1、请用一句话概括，什么是设计模式？为什么要用？</span></a></h2>
<p><strong>设计模式</strong>是总结和提炼出的一套可复用的解决方案，用于应对软件开发中常见的设计问题，<strong>目的是提高代码的可维护性、可扩展性和重用性，同时降低开发难度和耦合度</strong>。</p>
<h2 id="_2、谈谈你了解的最常见的几种设计模式-说说他们的应用场景" tabindex="-1"><a class="header-anchor" href="#_2、谈谈你了解的最常见的几种设计模式-说说他们的应用场景"><span>2、谈谈你了解的最常见的几种设计模式，说说他们的应用场景</span></a></h2>
<p>以下是几种常见的设计模式及其应用场景：</p>
<hr>
<h3 id="_1-单例模式-singleton-pattern" tabindex="-1"><a class="header-anchor" href="#_1-单例模式-singleton-pattern"><span><strong>1. 单例模式（Singleton Pattern）</strong></span></a></h3>
<ul>
<li><strong>定义</strong>：保证一个类只有一个实例，并提供全局访问点。</li>
<li><strong>应用场景</strong>：
<ul>
<li>配置管理类（例如读取应用配置）。</li>
<li>日志管理（确保日志文件唯一）。</li>
<li>数据库连接池（避免多次实例化浪费资源）。</li>
</ul>
</li>
<li><strong>关键点</strong>：私有化构造函数，提供一个静态方法获取实例。</li>
</ul>
<hr>
<h3 id="_2-工厂模式-factory-pattern" tabindex="-1"><a class="header-anchor" href="#_2-工厂模式-factory-pattern"><span><strong>2. 工厂模式（Factory Pattern）</strong></span></a></h3>
<ul>
<li><strong>定义</strong>：提供一个创建对象的接口，而不指定具体的类。</li>
<li><strong>应用场景</strong>：
<ul>
<li>创建复杂对象时隐藏其创建细节。</li>
<li>当程序需要在运行时动态决定实例化哪个类。</li>
<li>数据库访问层（根据不同数据库类型创建对应的连接）。</li>
</ul>
</li>
<li><strong>变种</strong>：简单工厂模式、工厂方法模式、抽象工厂模式。</li>
</ul>
<hr>
<h3 id="_3-策略模式-strategy-pattern" tabindex="-1"><a class="header-anchor" href="#_3-策略模式-strategy-pattern"><span><strong>3. 策略模式（Strategy Pattern）</strong></span></a></h3>
<ul>
<li><strong>定义</strong>：定义一系列算法，将每种算法封装，并使它们可以互换。</li>
<li><strong>应用场景</strong>：
<ul>
<li>支付方式选择（支付宝、微信、信用卡等）。</li>
<li>订单排序策略（按价格、销量、时间排序）。</li>
<li>不同的日志记录策略。</li>
</ul>
</li>
<li><strong>关键点</strong>：使用接口或抽象类定义不同策略，实现动态切换。</li>
</ul>
<hr>
<h3 id="_4-观察者模式-observer-pattern" tabindex="-1"><a class="header-anchor" href="#_4-观察者模式-observer-pattern"><span><strong>4. 观察者模式（Observer Pattern）</strong></span></a></h3>
<ul>
<li><strong>定义</strong>：当一个对象状态发生变化时，自动通知依赖它的对象。</li>
<li><strong>应用场景</strong>：
<ul>
<li>事件订阅系统（如邮件通知、消息推送）。</li>
<li>数据绑定（前端框架中如 Vue 的响应式数据更新）。</li>
<li>新闻客户端（订阅新闻频道，自动接收更新）。</li>
</ul>
</li>
<li><strong>关键点</strong>：被观察者维护一组观察者列表，状态改变时调用观察者的更新方法。</li>
</ul>
<hr>
<h3 id="_5-代理模式-proxy-pattern" tabindex="-1"><a class="header-anchor" href="#_5-代理模式-proxy-pattern"><span><strong>5. 代理模式（Proxy Pattern）</strong></span></a></h3>
<ul>
<li><strong>定义</strong>：为另一个对象提供一个代理对象，控制对原对象的访问。</li>
<li><strong>应用场景</strong>：
<ul>
<li>网络代理（如代理服务器）。</li>
<li>缓存代理（减少数据库或接口的访问次数）。</li>
<li>权限控制（代理检查用户是否有权限访问资源）。</li>
</ul>
</li>
<li><strong>变种</strong>：静态代理、动态代理、虚拟代理。</li>
</ul>
<hr>
<h3 id="_6-装饰器模式-decorator-pattern" tabindex="-1"><a class="header-anchor" href="#_6-装饰器模式-decorator-pattern"><span><strong>6. 装饰器模式（Decorator Pattern）</strong></span></a></h3>
<ul>
<li><strong>定义</strong>：动态地给对象添加新功能，而不改变其结构。</li>
<li><strong>应用场景</strong>：
<ul>
<li>添加额外的功能（如 UI 元素添加滚动条、边框等）。</li>
<li>数据流处理（如 Java 的 I/O 流）。</li>
<li>动态权限校验。</li>
</ul>
</li>
<li><strong>关键点</strong>：将功能拆分为独立的装饰类，按需要组合使用。</li>
</ul>
<hr>
<h3 id="_7-适配器模式-adapter-pattern" tabindex="-1"><a class="header-anchor" href="#_7-适配器模式-adapter-pattern"><span><strong>7. 适配器模式（Adapter Pattern）</strong></span></a></h3>
<ul>
<li><strong>定义</strong>：将一个类的接口转换成用户期望的另一个接口。</li>
<li><strong>应用场景</strong>：
<ul>
<li>系统集成（新旧系统的数据交互）。</li>
<li>封装第三方库（将其接口调整为符合业务需求）。</li>
<li>不兼容硬件设备的适配。</li>
</ul>
</li>
<li><strong>关键点</strong>：实现目标接口，并持有被适配对象的实例。</li>
</ul>
<hr>
<h3 id="_8-模板方法模式-template-method-pattern" tabindex="-1"><a class="header-anchor" href="#_8-模板方法模式-template-method-pattern"><span><strong>8. 模板方法模式（Template Method Pattern）</strong></span></a></h3>
<ul>
<li><strong>定义</strong>：定义一个算法的框架，将具体实现步骤延迟到子类。</li>
<li><strong>应用场景</strong>：
<ul>
<li>固定流程操作（如文档生成流程）。</li>
<li>数据分析系统（固定数据处理框架，不同处理方式交由子类实现）。</li>
<li>游戏开发（固定游戏逻辑框架，扩展具体细节）。</li>
</ul>
</li>
<li><strong>关键点</strong>：抽象类定义算法框架，子类实现具体步骤。</li>
</ul>
<hr>
<h3 id="_9-命令模式-command-pattern" tabindex="-1"><a class="header-anchor" href="#_9-命令模式-command-pattern"><span><strong>9. 命令模式（Command Pattern）</strong></span></a></h3>
<ul>
<li><strong>定义</strong>：将请求封装为对象，从而允许使用不同的请求、队列或日志来参数化对象。</li>
<li><strong>应用场景</strong>：
<ul>
<li>实现撤销/重做功能（如文本编辑器中的撤销）。</li>
<li>任务队列（异步执行操作）。</li>
<li>日志记录和事务操作。</li>
</ul>
</li>
<li><strong>关键点</strong>：封装命令对象并提供执行方法。</li>
</ul>
<hr>
<h3 id="_10-中介者模式-mediator-pattern" tabindex="-1"><a class="header-anchor" href="#_10-中介者模式-mediator-pattern"><span><strong>10. 中介者模式（Mediator Pattern）</strong></span></a></h3>
<ul>
<li><strong>定义</strong>：用一个中介对象封装一组对象的交互，避免对象之间的直接耦合。</li>
<li><strong>应用场景</strong>：
<ul>
<li>聊天系统（中介者是聊天室，用户通过聊天室交流）。</li>
<li>GUI 组件交互（组件间通过中介者协调）。</li>
<li>消息队列（Kafka、RabbitMQ 等）。</li>
</ul>
</li>
<li><strong>关键点</strong>：中介者负责对象间的交互逻辑。</li>
</ul>
<hr>
<h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span><strong>总结</strong></span></a></h3>
<ul>
<li><strong>选择依据</strong>：根据实际场景中遇到的问题和代码结构，选择合适的设计模式。</li>
<li><strong>核心目标</strong>：解耦、增强灵活性、提高复用性、减少代码复杂度。</li>
</ul>
<h2 id="_3、什么是策略模式-一般用在什么场景" tabindex="-1"><a class="header-anchor" href="#_3、什么是策略模式-一般用在什么场景"><span>3、什么是策略模式？一般用在什么场景？</span></a></h2>
<h3 id="什么是策略模式-在-javascript-中" tabindex="-1"><a class="header-anchor" href="#什么是策略模式-在-javascript-中"><span><strong>什么是策略模式？（在 JavaScript 中）</strong></span></a></h3>
<p>在 <strong>JavaScript</strong> 中，<strong>策略模式（Strategy Pattern）</strong> 是一种行为型设计模式，指的是将一组具有相同行为的算法或操作封装为独立的策略类（对象），然后通过客户端动态选择其中一个来执行具体操作。</p>
<p><strong>核心思想</strong>：</p>
<ol>
<li>将具体的行为抽象为策略，使其可以独立于客户端的代码进行扩展或修改。</li>
<li>通过动态切换策略，避免使用复杂的 <code v-pre>if-else</code> 或 <code v-pre>switch</code> 语句。</li>
</ol>
<hr>
<h3 id="策略模式的结构" tabindex="-1"><a class="header-anchor" href="#策略模式的结构"><span><strong>策略模式的结构</strong></span></a></h3>
<ol>
<li><strong>策略（Strategy）</strong>：封装一组行为的独立对象，每个对象实现不同的算法。</li>
<li><strong>上下文（Context）</strong>：持有当前的策略对象，并通过该对象调用具体的算法。</li>
<li><strong>客户端（Client）</strong>：根据需求动态选择并设置策略。</li>
</ol>
<hr>
<h3 id="策略模式在-javascript-中的应用场景" tabindex="-1"><a class="header-anchor" href="#策略模式在-javascript-中的应用场景"><span><strong>策略模式在 JavaScript 中的应用场景</strong></span></a></h3>
<h4 id="_1-表单验证" tabindex="-1"><a class="header-anchor" href="#_1-表单验证"><span><strong>1. 表单验证</strong></span></a></h4>
<p>动态选择不同的验证规则，比如验证用户名、邮箱、密码。</p>
<h4 id="_2-支付方式" tabindex="-1"><a class="header-anchor" href="#_2-支付方式"><span><strong>2. 支付方式</strong></span></a></h4>
<p>根据用户选择的支付方式（支付宝、微信、信用卡等）执行对应的支付逻辑。</p>
<h4 id="_3-促销和折扣" tabindex="-1"><a class="header-anchor" href="#_3-促销和折扣"><span><strong>3. 促销和折扣</strong></span></a></h4>
<p>根据商品类型或用户身份，动态选择折扣策略。</p>
<h4 id="_4-日志输出" tabindex="-1"><a class="header-anchor" href="#_4-日志输出"><span><strong>4. 日志输出</strong></span></a></h4>
<p>根据不同的环境（如开发环境、生产环境），选择不同的日志输出方式。</p>
<hr>
<h3 id="策略模式示例代码" tabindex="-1"><a class="header-anchor" href="#策略模式示例代码"><span><strong>策略模式示例代码</strong></span></a></h3>
<h4 id="示例-折扣计算" tabindex="-1"><a class="header-anchor" href="#示例-折扣计算"><span><strong>示例：折扣计算</strong></span></a></h4>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">// 策略对象：定义不同的折扣策略</span></span>
<span class="line"><span class="token keyword">const</span> discountStrategies <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function-variable function">noDiscount</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">price</span><span class="token punctuation">)</span> <span class="token operator">=></span> price<span class="token punctuation">,</span> <span class="token comment">// 无折扣</span></span>
<span class="line">  <span class="token function-variable function">percentage</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">price</span><span class="token punctuation">)</span> <span class="token operator">=></span> price <span class="token operator">*</span> <span class="token number">0.9</span><span class="token punctuation">,</span> <span class="token comment">// 打9折</span></span>
<span class="line">  <span class="token function-variable function">fixed</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">price</span><span class="token punctuation">)</span> <span class="token operator">=></span> price <span class="token operator">-</span> <span class="token number">50</span><span class="token punctuation">,</span> <span class="token comment">// 立减50</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 上下文类：负责使用当前策略</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">DiscountContext</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">constructor</span><span class="token punctuation">(</span>strategy <span class="token operator">=</span> <span class="token string">'noDiscount'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>strategy <span class="token operator">=</span> discountStrategies<span class="token punctuation">[</span>strategy<span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token function">setStrategy</span><span class="token punctuation">(</span><span class="token parameter">strategyName</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>strategy <span class="token operator">=</span> discountStrategies<span class="token punctuation">[</span>strategyName<span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token function">calculate</span><span class="token punctuation">(</span><span class="token parameter">price</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">strategy</span><span class="token punctuation">(</span>price<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 客户端代码</span></span>
<span class="line"><span class="token keyword">const</span> price <span class="token operator">=</span> <span class="token number">500</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 默认无折扣</span></span>
<span class="line"><span class="token keyword">const</span> context <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DiscountContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">无折扣: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>context<span class="token punctuation">.</span><span class="token function">calculate</span><span class="token punctuation">(</span>price<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> 元</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 切换为打9折</span></span>
<span class="line">context<span class="token punctuation">.</span><span class="token function">setStrategy</span><span class="token punctuation">(</span><span class="token string">'percentage'</span><span class="token punctuation">)</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">打9折: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>context<span class="token punctuation">.</span><span class="token function">calculate</span><span class="token punctuation">(</span>price<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> 元</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 切换为立减50</span></span>
<span class="line">context<span class="token punctuation">.</span><span class="token function">setStrategy</span><span class="token punctuation">(</span><span class="token string">'fixed'</span><span class="token punctuation">)</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">立减50: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>context<span class="token punctuation">.</span><span class="token function">calculate</span><span class="token punctuation">(</span>price<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> 元</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h4 id="示例-表单验证" tabindex="-1"><a class="header-anchor" href="#示例-表单验证"><span><strong>示例：表单验证</strong></span></a></h4>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">// 策略对象：定义验证规则</span></span>
<span class="line"><span class="token keyword">const</span> validators <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function-variable function">isNotEmpty</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=></span> value<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">!==</span> <span class="token string">''</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token function-variable function">isEmail</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^[^\s@]+@[^\s@]+\.[^\s@]+$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token function-variable function">isNumber</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token operator">!</span><span class="token function">isNaN</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 上下文类：执行验证策略</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">ValidatorContext</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">strategy</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>strategy <span class="token operator">=</span> validators<span class="token punctuation">[</span>strategy<span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token function">setStrategy</span><span class="token punctuation">(</span><span class="token parameter">strategyName</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>strategy <span class="token operator">=</span> validators<span class="token punctuation">[</span>strategyName<span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token function">validate</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">strategy</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 客户端代码</span></span>
<span class="line"><span class="token keyword">const</span> validator <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ValidatorContext</span><span class="token punctuation">(</span><span class="token string">'isNotEmpty'</span><span class="token punctuation">)</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>validator<span class="token punctuation">.</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token string">'hello'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// true</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>validator<span class="token punctuation">.</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// false</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 切换为邮箱验证</span></span>
<span class="line">validator<span class="token punctuation">.</span><span class="token function">setStrategy</span><span class="token punctuation">(</span><span class="token string">'isEmail'</span><span class="token punctuation">)</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>validator<span class="token punctuation">.</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token string">'test@example.com'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// true</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>validator<span class="token punctuation">.</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token string">'invalid-email'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// false</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 切换为数字验证</span></span>
<span class="line">validator<span class="token punctuation">.</span><span class="token function">setStrategy</span><span class="token punctuation">(</span><span class="token string">'isNumber'</span><span class="token punctuation">)</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>validator<span class="token punctuation">.</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token string">'123'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// true</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>validator<span class="token punctuation">.</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token string">'abc'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// false</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h3 id="策略模式的优点" tabindex="-1"><a class="header-anchor" href="#策略模式的优点"><span><strong>策略模式的优点</strong></span></a></h3>
<ol>
<li><strong>避免冗长的条件语句</strong>：将每种策略独立封装，代码更清晰、可维护。</li>
<li><strong>遵循开闭原则</strong>：新增策略时无需修改现有代码，只需增加一个新的策略对象。</li>
<li><strong>提高灵活性</strong>：可以根据需求动态切换策略。</li>
</ol>
<hr>
<h3 id="策略模式的缺点" tabindex="-1"><a class="header-anchor" href="#策略模式的缺点"><span><strong>策略模式的缺点</strong></span></a></h3>
<ol>
<li>如果策略过多，会导致策略类或对象数量增加，增加管理复杂度。</li>
<li>策略的选择逻辑可能会从客户端迁移到上下文类，导致代码分散。</li>
</ol>
<hr>
<h3 id="总结-1" tabindex="-1"><a class="header-anchor" href="#总结-1"><span><strong>总结</strong></span></a></h3>
<p>在 JavaScript 中，策略模式通过对象或类的封装和动态选择机制，可以优雅地替代复杂的条件判断逻辑，尤其适用于算法切换、表单验证、支付方式选择等场景，提高代码的可读性和扩展性。</p>
<h2 id="_4、请描述简单工厂模式的工作原理。" tabindex="-1"><a class="header-anchor" href="#_4、请描述简单工厂模式的工作原理。"><span>4、请描述简单工厂模式的工作原理。</span></a></h2>
<h3 id="什么是简单工厂模式" tabindex="-1"><a class="header-anchor" href="#什么是简单工厂模式"><span><strong>什么是简单工厂模式？</strong></span></a></h3>
<p><strong>简单工厂模式（Simple Factory Pattern）</strong> 是一种创建型设计模式，它通过定义一个专门的工厂类来负责创建某一类对象的实例，而客户端只需要知道具体对象的类型名称，无需了解创建对象的细节。</p>
<p>简单工厂模式并不属于设计模式的经典 23 种类型之一，但在实际开发中非常常见，常用于简单的对象创建。</p>
<hr>
<h3 id="简单工厂模式的工作原理" tabindex="-1"><a class="header-anchor" href="#简单工厂模式的工作原理"><span><strong>简单工厂模式的工作原理</strong></span></a></h3>
<ol>
<li><strong>工厂类</strong>：
<ul>
<li>提供一个静态方法（或普通方法），根据传入的参数，动态地实例化并返回不同类型的对象。</li>
</ul>
</li>
<li><strong>具体产品类</strong>：
<ul>
<li>定义要创建的对象，每种产品类实现特定的逻辑。</li>
</ul>
</li>
<li><strong>客户端</strong>：
<ul>
<li>客户端通过调用工厂类的方法获取对象，而不直接实例化具体的产品类。</li>
</ul>
</li>
</ol>
<hr>
<h3 id="简单工厂模式的优点" tabindex="-1"><a class="header-anchor" href="#简单工厂模式的优点"><span><strong>简单工厂模式的优点</strong></span></a></h3>
<ul>
<li><strong>封装对象创建逻辑</strong>：客户端无需关心对象的创建过程，工厂类统一负责。</li>
<li><strong>代码复用性强</strong>：对象的创建逻辑集中在工厂类中，便于维护和复用。</li>
<li><strong>扩展性强</strong>：可以通过修改工厂类，支持更多的对象类型。</li>
</ul>
<hr>
<h3 id="简单工厂模式的缺点" tabindex="-1"><a class="header-anchor" href="#简单工厂模式的缺点"><span><strong>简单工厂模式的缺点</strong></span></a></h3>
<ul>
<li><strong>不符合开闭原则</strong>：增加新的产品时需要修改工厂类的代码。</li>
<li><strong>单一职责风险</strong>：工厂类可能随着产品种类增加变得复杂，承担过多职责。</li>
</ul>
<hr>
<h3 id="简单工厂模式的实现-javascript-示例" tabindex="-1"><a class="header-anchor" href="#简单工厂模式的实现-javascript-示例"><span><strong>简单工厂模式的实现（JavaScript 示例）</strong></span></a></h3>
<h4 id="示例-车辆工厂" tabindex="-1"><a class="header-anchor" href="#示例-车辆工厂"><span><strong>示例：车辆工厂</strong></span></a></h4>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">// 具体产品类</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">Car</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">drive</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'驾驶一辆汽车'</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">Bike</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">ride</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'骑一辆自行车'</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">Bus</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">transport</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'乘坐一辆公交车'</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 工厂类</span></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">VehicleFactory</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">static</span> <span class="token function">createVehicle</span><span class="token punctuation">(</span><span class="token parameter">type</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">switch</span> <span class="token punctuation">(</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">case</span> <span class="token string">'car'</span><span class="token operator">:</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Car</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">      <span class="token keyword">case</span> <span class="token string">'bike'</span><span class="token operator">:</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Bike</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">      <span class="token keyword">case</span> <span class="token string">'bus'</span><span class="token operator">:</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Bus</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">      <span class="token keyword">default</span><span class="token operator">:</span></span>
<span class="line">        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">'未知的车辆类型'</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 客户端代码</span></span>
<span class="line"><span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> car <span class="token operator">=</span> VehicleFactory<span class="token punctuation">.</span><span class="token function">createVehicle</span><span class="token punctuation">(</span><span class="token string">'car'</span><span class="token punctuation">)</span></span>
<span class="line">  car<span class="token punctuation">.</span><span class="token function">drive</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 输出：驾驶一辆汽车</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">const</span> bike <span class="token operator">=</span> VehicleFactory<span class="token punctuation">.</span><span class="token function">createVehicle</span><span class="token punctuation">(</span><span class="token string">'bike'</span><span class="token punctuation">)</span></span>
<span class="line">  bike<span class="token punctuation">.</span><span class="token function">ride</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 输出：骑一辆自行车</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">const</span> bus <span class="token operator">=</span> VehicleFactory<span class="token punctuation">.</span><span class="token function">createVehicle</span><span class="token punctuation">(</span><span class="token string">'bus'</span><span class="token punctuation">)</span></span>
<span class="line">  bus<span class="token punctuation">.</span><span class="token function">transport</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 输出：乘坐一辆公交车</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// 测试未知类型</span></span>
<span class="line">  VehicleFactory<span class="token punctuation">.</span><span class="token function">createVehicle</span><span class="token punctuation">(</span><span class="token string">'plane'</span><span class="token punctuation">)</span> <span class="token comment">// 抛出错误：未知的车辆类型</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>error<span class="token punctuation">.</span>message<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h3 id="应用场景" tabindex="-1"><a class="header-anchor" href="#应用场景"><span><strong>应用场景</strong></span></a></h3>
<ol>
<li><strong>前端开发：组件实例化</strong>
<ul>
<li>通过简单工厂创建不同类型的组件实例。</li>
</ul>
</li>
<li><strong>后端开发：日志记录</strong>
<ul>
<li>根据日志类型（文件日志、数据库日志、控制台日志）创建对应的日志记录器。</li>
</ul>
</li>
<li><strong>数据解析</strong>
<ul>
<li>根据文件类型（如 JSON、XML、CSV）创建对应的解析器。</li>
</ul>
</li>
</ol>
<hr>
<h3 id="总结-2" tabindex="-1"><a class="header-anchor" href="#总结-2"><span><strong>总结</strong></span></a></h3>
<p>简单工厂模式通过工厂类统一管理对象的创建逻辑，简化了客户端的使用流程，但不适用于需要频繁扩展的新产品场景，因为每次扩展都需要修改工厂类代码，可能引入维护复杂度。</p>
</div></template>


