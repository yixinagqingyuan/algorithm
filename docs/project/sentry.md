<!-- @format -->

# 前端监控

## 什么是前端监控

前端监控用一句话来描述 **利用一切手段监听上线项目的运行情况**

所谓前端监控体系，只是我们发明的一个时髦的词而已，本质上来讲他不过是我们为了了解项目的运行情况的一个手段，只是这个手段涉及前后端，所以我们称之为前端监控体系

当我们理解了这个内核，我们就能很清晰知道我们应该从哪些方向着手去做前端监控，因为我们想要了解的指标就那么多，相应的要达到目的的手段也就那么多

## 前端监控的目的

说起前端监控的目的

很多人只知道做前端监控， 却不知道他的目的是什么，我做他到底有什么用？

因为在大多数人的职业生涯中，只知道埋头干活，却不知道抬头看路，任何事情的产生，都有他产生的理由，前端监控同样如是

之所以大多数人不了解前端监控的目的，是因为他们项目的体量还没有达到需要监控的地步，他们去研究监控的目的，只是因为他比写业务高端

所以，我们在开始研究之前，要弄清楚前端监控到底到底高不高端

答案显而易见： 一点也不高端

我们要清晰的知道，所有的技术都是为业务服务的， 前端监控的诞生，也只是为了更了解我们的业务，所以本质上来说，他跟你写业务没有任何区别

只是前我们的业务是前台，注重用户体验，我们的监控是后勤，注重数据收集，分工不同，仅此而已

完善的监控体系可以从事前预警、事后分析、和性能分析中得到数据

然后再把搜集到的数据，给产品提供决策，作为给产品的需求，在改善前台的用户体验

他是一个循环的过程

![](../assets/loop.jpg)

## 监控的指标

前端监控可以分为三类：数据监控（埋点）、性能监控和异常监控。

### 数据监控（埋点）

所谓数据，就是监听用户的行为，常见的监控项有：

PV/UV:PV(page view)：即页面浏览量或点击量；UV：指访问某个站点或点击某条新闻的不同 IP 地址的人数

用户通过什么入口来访问该网页

用户在相应的页面中触发的行为

用户在每一个页面的停留时间

通过以上数据分析用户行为链路

#### 监控方式

数据监控主要通过埋点的方式来实现，目前常见的前端埋点方法有三种：手动埋点、可视化埋点和无埋点。

1、手动埋点
手动埋点，也叫代码埋点，即纯手动写代码，调用埋点 SDK 的函数，在需要埋点的业务逻辑功能位置调用接口，上报埋点数据，像友盟、百度统计等第三方数据统计服务商大都采用这种方案。

手动埋点让使用者可以方便地设置自定义属性、自定义事件；所以当你需要深入下钻，并精细化自定义分析时，比较适合使用手动埋点。

手动埋点的缺陷就是，项目工程量大，需要埋点的位置太多，而且需要产品开发运营之间相互反复沟通，容易出现手动差错，如果错误，重新埋点的成本也很高。这会导致整个数据收集周期变的很长，收集成本变的很高，而且效率很低。因为手动埋点需要开发人员完成，所以每次有埋点更新，或者漏埋点，都需要重新走上线发布流程，更新成本也高，对线上系统稳定性也有一定危害。

2、可视化埋点
通过可视化交互的手段，代替上述的代码埋点。将业务代码和埋点代码分离，提供一个可视化交互的页面，输入为业务代码，通过这个可视化系统，可以在业务代码中自定义的增加埋点事件等等，最后输出的代码耦合了业务代码和埋点代码。缺点就是可以埋点的控件有限，不能手动定制。

可视化埋点听起来比较高大上，实际上跟代码埋点还是区别不大。也就是用一个系统来实现手动插入代码埋点的过程。比如国外比较早做可视化的是 Mixpanel，国内较早支持可视化埋点的有 TalkingData、诸葛 IO，2017 年腾讯的 MTA 也宣布支持可视化埋点；相比于手动埋点更新困难，埋点成本高的问题，可视化埋点优化了移动运营中数据采集的流程，能够支持产品运营随时调整埋点，无需再走发版流程，直接把配置结果推入到前端，数据采集流程更简化，也更方便产品的迭代。

可视化埋点中多数基于 Xpath 的方案，XPath 是一门在 XML 文档中查找信息的语言，XPath 可用来在 XML 文档中对元素和属性进行遍历。

3、无埋点
无埋点则是前端自动采集全部事件，上报埋点数据，由后端来过滤和计算出有用的数据。优点是前端只要一次加载埋点脚本，缺点是流量和采集的数据过于庞大，服务器性能压力山大。

采用无埋点技术的有主流的 GrowingIO、神策。

总结
在不同场景下我们需要选择不同的埋点方案。例如对于简单的用户行为类事件，可以使用全埋点解决；而对于需要携带大量运行时才可获知的业务字段的埋点需求，就需要声明式埋点来解决。

在大多数情况下，我们的数据监控都是通过手动埋点的方式来解决问题，因为业务每个业务的特殊性，我们必须监控用户每一个行为，提供产品决策的依据。

### 性能监控

性能监控指的是监听前端的性能，主要包括监听网页或者说产品在用户端的体验。常见的性能监控项包括：

不同用户，不同机型和不同系统下的首屏加载时间
白屏时间
http 等请求的响应时间
静态资源整体下载时间
页面渲染时间
页面交互动画完成时间

#### 监控方式

性能监控主要是通过浏览器相关的性能 api 来实现

在我们了解之前，我们还需要了解浏览器浏览器是监控页面性能的，因为只有知道了这些概念，你才能跟面试官去吹，并且吹的时间长一些

在前端的史前时代，为了帮助开发者更好地衡量和改进前端页面性能，W3C性能小组引入了 Navigation Timing API ，实现了自动、精准的页面性能打点；开发者可以通过 window.performance 属性获取。

可时代在进步，人们的生活水平不断提高，浏览器自然也得与时俱进，于是他们有推出了性能监控的新接口，也就是performance升级版

主要重新划分了性能监控的时间节点，新增了一些新的属性，扩充了 performance 的定义，并增加了 PerformanceObserver 的支持。

如下图，PerformanceNavigationTiming 这个新实例的图例，它横跨了页面的整个初始化周期

![](../assets/PerformanceNavigationTiming.png)


我们来一个个解析下

PerformanceNavigationTiming 实例的属性解析
现在，我们就上面的流程，来一个个解析 PerformanceNavigationTiming 实例中所涉及到的各个属性的含义。

- startTime: 开始导航的时间。加载新页面、当前页面卸载时会触发 unload 事件。如果当前页面有未提交的表单数据等情况，会弹出一个确认关闭框。点击确认后，导航流程开始。startTime 值几乎总为 0。

- unloaStart、unloadEnd：对应页面 unload 事件，标记该事件的开始和结束时间。

- redirectStart、redirectEnd：如果页面发生了重定向，redirectStart 表示重定向开始时间，redirectEnd 表示重定向结束时间。如果没有重定向，redirectStart、redirectEnd 值都为 0。

- fetchStart：下一步，取浏览器本地缓存（强缓存，如果本地缓存过期，还有一个走协商缓存的过程）。fetchStart 表示开始取缓存时间。

- domainLookupStart、domainLookupEnd：从域名到 IP 地址有一个 DNS 解析过程。
- domainLookupStart、domainLookupStart 分别标记解析开始和结束时间。

- connnectStart、connectEnd、secureConnectEnd：得到 IP 地址，正式开始请求之前，进行 TCP 连接。
- connnectStart 记录连接的开始时间，如果使用的 https 协议，还有一个建立 STL 连接，得到会话密钥的过程，使用 secureConnectStart 字段记录。

- requestStart：接下来发起真正的 HTTP 请求，构建请求头信息，携带 cookie 字段信息等。

- responseStart、responseEnd：响应开始和结束时间（先接收响应头，再接收响应体）。

- 以上对应的是从发出请求到接收响应的整个过程，如果响应头 Content-Type 字段值为 text/html，那么从下一步开始就是页面渲染阶段了。
domInteractive、domContentLoadedEventStart、domContentLoadedEventEnd、domComplete：domInteractive、domComplete 可以对应到 document readystatechange 事件 上的 interactive、complete 值（document.readyState 属性的两个可用取值）。domContentLoadedEventStart、domContentLoadedEventEnd 则对应 document DOMContentLoaded  事件，标记事件的开始和结束时间。

- loadStart、loadEnd：这里对应的是 load 事件（当页面资源（脚本、样式、图片、音视频、iframe 等）全部加载完成后），标记事件的开始和结束时间

有了以上这些参数，我们就能随意组合我们想要的数据，来监控我们的页面性能

等等等等，开始之前，我们还要拿到数据，怎么拿呢？

当然是使用最新的PerformanceNavigationTiming接口了，毕竟人家官方都说了，这时候就出现了个问题，这是一个新的浏览器标准，是一个标准，就意味着要有浏览器厂商去支持这个标准，既然是支持，就会有一个问题，有的厂商，财大气粗，傲慢无比，都不搭理你，有的厂商拥抱新技术，热情洋溢，就立马支持，但用的人少。即使所有人都支持了，不能热更新的东西，用户到死都不更新咋办，难道这部分用户就要舍弃掉？

舍弃？那是不行的，都是衣食父母，所以只能我们开发者来兼容，怎么兼容呢？

很简单，有就用，没有就降级用之前的那个标准（高端的技术都是朴素的招数）
而获取PerformanceNavigationTiming 也有一个我理解的很奇怪的方式 通过`getEntriesByType` 来获取
就会形成如下兼容代码：

```js
let timing =
    // W3C Level2  PerformanceNavigationTiming
    // 使用了High-Resolution Time，时间精度可以达毫秒的小数点好几位。
    performance.getEntriesByType('navigation').length > 0
      ? performance.getEntriesByType('navigation')[0]
      : performance.timing; // W3C Level1  (目前兼容性高，仍然可使用，未来可能被废弃)。

```
好了，有了以上数据，我们就能顺利的对当前的页面性能进行监控了
代码如下： 

```js
let start = timing.navigationStart,
    dnsTime = 0,
    tcpTime = 0,
    firstPaintTime = 0,
    domRenderTime = 0,
    loadTime = 0;

dnsTime = timing.domainLookupEnd - timing.domainLookupStart;
tcpTime = timing.connectEnd - timing.connectStart;
firstPaintTime = timing.responseStart - start;
domRenderTime = timing.domContentLoadedEventEnd - start;
loadTime = timing.loadEventEnd - start;

console.log('DNS解析时间:', dnsTime,
            '\nTCP建立时间:', tcpTime,
            '\n首屏时间:', firstPaintTime,
            '\ndom渲染完成时间:', domRenderTime,
            '\n页面onload时间:', loadTime,
            '\n域名:',  document.domain,
            '\n当前 URL 地址:',  document.URL,
            '\n当前页面标题:',  document.title,
            '\n上一个访问页面 URL 地址:',  document.referrer,
            '\n屏幕高度:',  window.screen.height,
            '\n屏幕宽度:',  window.screen.width,
            '\n屏幕颜色深度:',  window.screen.colorDepth,
            '\n设备型号:',  window.userAgent,
            '\n设备语言:',  window.language,);
```
以上代码中我们就很简单的获取了页面整体性能数据，根据这些数据，就能形成指标

- 加载时间：页面运行时各个阶段的加载时间；
- TTFB(Time To First Byte)(首字节时间)：浏览器发起第一个请求到数据返回第一个字节所消耗的时间，这个时间包含了网络请求时间、后端处理时间；
- FP(First Paint)(首次绘制)：首次绘制包括了任何用户自定义的背景绘制，它是将第一个像素点绘制到屏幕的时刻；
- FCP(First Content Paint)(首次内容绘制)：首次内容绘制是浏览器将第一个 DOM 渲染到屏幕的时间,可以是任何文本、图像、SVG 等的时间；
- FMP(First Meaningful paint)(首次有意义绘制)：首次有意义绘制是页面可用性的量度标准；
- LCP(Largest Contentful Paint)：视窗内最大的图片或者文本渲染的时间，当最大的内容块渲染完的时候，基本上主内容都加载完了，与现有的页面加载指标相比，与用户体验的相关性更好；
- FID(First Input Delay)(首次输入延迟)：用户首次和页面交互到页面响应交互的时间；
- 卡顿：指超过 50ms 的长任务，具体的指标可以根据页面的内容进行调节，一般 50ms 人眼就能感觉到卡顿。
- PV：Page View 即页面浏览量或点击量；
首屏加载时间
首屏加载时间和首页加载时间不一样，首屏指的是屏幕内的 dom 渲染完成的时间

比如首页很长需要好几屏展示，这种情况下屏幕以外的元素不考虑在内

- 计算首屏加载时间流程

1）利用MutationObserver监听document对象，每当 dom 变化时触发该事件

2）判断监听的 dom 是否在首屏内，如果在首屏内，将该 dom 放到指定的数组中，记录下当前 dom 变化的时间点

3）在 MutationObserver 的 callback 函数中，通过防抖函数，监听document.readyState状态的变化

4）当document.readyState === 'complete'，停止定时器和 取消对 document 的监听

5）遍历存放 dom 的数组，找出最后变化节点的时间，用该时间点减去performance.timing.navigationStart 得出首屏的加载时间

当数据形成这些指标的时候就能针对性的对页面进行优化


### 异常监控

顾名思义，就是页面的所有异常采集

Javascript 的异常监控
资源加载异常监控
接口请求异常监控

当然，这个也很简单，同样利用，浏览器的 api 来实现错误捕获

#### 错误捕获方式
##### try/catch
```js
// 示例1：常规运行时错误，可以捕获 ✅
 try {
   let a = undefined;
   if (a.length) {
     console.log('111');
   }
 } catch (e) {
   console.log('捕获到异常：', e);
}

// 示例2：语法错误，不能捕获 ❌
try {
  const notdefined,
} catch(e) {
  console.log('捕获不到异常：', 'Uncaught SyntaxError');
}

// 示例3：异步错误，不能捕获 ❌
try {
  setTimeout(() => {
    console.log(notdefined);
  }, 0)
} catch(e) {
  console.log('捕获不到异常：', 'Uncaught ReferenceError');
}
```

#####  window.onerror
window.onerror 可以捕获常规错误、异步错误，但不能捕获资源错误

```js
window.onerror = function(message, source, lineno, colno, error) {
  console.log("捕获到的错误信息是：", message, source, lineno, colno, error);
};

// 示例1：常规运行时错误，可以捕获 ✅
console.log(notdefined);

// 示例2：语法错误，不能捕获 ❌
const notdefined;

// 示例3：异步错误，可以捕获 ✅
setTimeout(() => {
  console.log(notdefined);
}, 0);

// 示例4：资源错误，不能捕获 ❌
let script = document.createElement("script");
script.type = "text/javascript";
script.src = "https://www.test.com/index.js";
document.body.appendChild(script);
```
######  window.addEventListener
当静态资源加载失败时，会触发 error 事件， 此时 window.onerror 不能捕获到

```js
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
</head>
<script>
  window.addEventListener('error', (error) => {
    console.log('捕获到异常：', error);
  }, true)
</script>

<!-- 图片、script、css加载错误，都能被捕获 ✅ -->
<img src="https://test.cn/×××.png">
<script src="https://test.cn/×××.js"></script>
<link href="https://test.cn/×××.css" rel="stylesheet" />

<script>
  // new Image错误，不能捕获 ❌
  // new Image运用的比较少，可以自己单独处理
  new Image().src = 'https://test.cn/×××.png'
</script>
</html>

```
##### Promise 错误
Promise 中抛出的错误，无法被 window.onerror、try/catch、 error 事件捕获到，可通过 unhandledrejection 事件来处理

```js
try {
  new Promise((resolve, reject) => {
    JSON.parse('');
    resolve();
  });
} catch (err) {
  // try/catch 不能捕获Promise中错误 ❌
  console.error('in try catch', err);
}

// error事件 不能捕获Promise中错误 ❌
window.addEventListener(
  'error',
  (error) => {
    console.log('捕获到异常：', error);
  },
  true
);

// window.onerror 不能捕获Promise中错误 ❌
window.onerror = function (message, source, lineno, colno, error) {
  console.log('捕获到异常：', { message, source, lineno, colno, error });
};

// unhandledrejection 可以捕获Promise中的错误 ✅
window.addEventListener('unhandledrejection', function (e) {
  console.log('捕获到异常', e);
  // preventDefault阻止传播，不会在控制台打印
  e.preventDefault();
});

```
##### Vue 错误捕获
Vue 项目中，window.onerror 和 error 事件不能捕获到常规的代码错误，需要使用 vue 的 api 

```js
Vue.config.errorHandler = (err, vm, info) => {
  console.log('进来啦~', err);
};

```

##### React 错误
从 react16 开始，官方提供了 ErrorBoundary 错误边界的功能，被该组件包裹的子组件，render 函数报错时会触发离当前组件最近父组件的 ErrorBoundary

生产环境，一旦被 ErrorBoundary 捕获的错误，也不会触发全局的 window.onerror 和 error 事件

```js
import React from 'react';
import Child from './Child.js';

// window.onerror 不能捕获render函数的错误 ❌
window.onerror = function (err, msg, c, l) {
  console.log('err', err, msg);
};

// error 不能render函数的错误 ❌
window.addEventListener(
  'error',
  (error) => {
    console.log('捕获到异常：', error);
  },
  true
);

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // 更新 state 使下一次渲染能够显示降级后的 UI
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    // componentDidCatch 可以捕获render函数的错误
    console.log(error, errorInfo);

    // 同样可以将错误日志上报给服务器
    reportError(error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      // 自定义降级后的 UI 并渲染
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}

function Parent() {
  return (
    <div>
      父组件
      <ErrorBoundary>
        <Child />
      </ErrorBoundary>
    </div>
  );
}

export default Parent;
```
同 vue 项目的处理类似，react 项目中，可以在 componentDidCatch 中将捕获的错误上报

```js
componentDidCatch(error, errorInfo) {
  // handleError方法用来处理错误并上报
  handleError(err);
}
```
#####  跨域问题捕获
如果当前页面中，引入了其他域名的 JS 资源，如果资源出现错误，error 事件只会监测到一个  script error 的异常。

```js
window.addEventListener(
  'error',
  (error) => {
    console.log('捕获到异常：', error);
  },
  true
);

// 当前页面加载其他域的资源，如https://www.test.com/index.js
<script src="https://www.test.com/index.js"></script>;

// 加载的https://www.test.com/index.js的代码
function fn() {
  JSON.parse('');
}
fn();
```
只能捕获到 script error 的原因：

是由于浏览器基于安全考虑，故意隐藏了其它域 JS 文件抛出的具体错误信息，这样可以有效避免敏感信息无意中被第三方(不受控制的)脚本捕获到，因此，浏览器只允许同域下的脚本捕获具体的错误信息

解决方法：

前端 script 加 crossorigin，后端配置 Access-Control-Allow-Origin, 添加 crossorigin 后可以捕获到完整的报错信息

```js
<script src="https://www.test.com/index.js" crossorigin></script>
```
如果不能修改服务端的请求头，可以考虑通过使用 try/catch 绕过，将错误抛出

```js
<!doctype html>
<html>
<body>
  <script src="https://www.test.com/index.js"></script>
  <script>
  window.addEventListener("error", error => {
    console.log("捕获到异常：", error);
  }, true );

  try {
    // 调用https://www.test.com/index.js中定义的fn方法
    fn();
  } catch (e) {
    throw e;
  }
  </script>
</body>
</html>
```

##### 接口错误
接口监控的实现原理：针对浏览器内置的 XMLHttpRequest、fetch 对象，利用 AOP 切片编程重写该方法，实现对请求的接口拦截，从而获取接口报错的情况并上报
拦截 XMLHttpRequest 请求示例：
```js
function xhrReplace() {
  if (!('XMLHttpRequest' in window)) {
    return;
  }
  const originalXhrProto = XMLHttpRequest.prototype;
  // 重写XMLHttpRequest 原型上的open方法
  replaceAop(originalXhrProto, 'open', (originalOpen) => {
    return function (...args) {
      // 获取请求的信息
      this._xhr = {
        method: typeof args[0] === 'string' ? args[0].toUpperCase() : args[0],
        url: args[1],
        startTime: new Date().getTime(),
        type: 'xhr'
      };
      // 执行原始的open方法
      originalOpen.apply(this, args);
    };
  });
  // 重写XMLHttpRequest 原型上的send方法
  replaceAop(originalXhrProto, 'send', (originalSend) => {
    return function (...args) {
      // 当请求结束时触发，无论请求成功还是失败都会触发
      this.addEventListener('loadend', () => {
        const { responseType, response, status } = this;
        const endTime = new Date().getTime();
        this._xhr.reqData = args[0];
        this._xhr.status = status;
        if (['', 'json', 'text'].indexOf(responseType) !== -1) {
          this._xhr.responseText =
            typeof response === 'object' ? JSON.stringify(response) : response;
        }
        // 获取接口的请求时长
        this._xhr.elapsedTime = endTime - this._xhr.startTime;

        // 上报xhr接口数据
        reportData(this._xhr);
      });
      // 执行原始的send方法
      originalSend.apply(this, args);
    };
  });
}

/**
 * 重写指定的方法
 * @param { object } source 重写的对象
 * @param { string } name 重写的属性
 * @param { function } fn 拦截的函数
 */
function replaceAop(source, name, fn) {
  if (source === undefined) return;
  if (name in source) {
    var original = source[name];
    var wrapped = fn(original);
    if (typeof wrapped === 'function') {
      source[name] = wrapped;
    }
  }
}
```

拦截 fetch 请求示例：

```js
function fetchReplace() {
  if (!('fetch' in window)) {
    return;
  }
  // 重写fetch方法
  replaceAop(window, 'fetch', (originalFetch) => {
    return function (url, config) {
      const sTime = new Date().getTime();
      const method = (config && config.method) || 'GET';
      let handlerData = {
        type: 'fetch',
        method,
        reqData: config && config.body,
        url
      };

      return originalFetch.apply(window, [url, config]).then(
        (res) => {
          // res.clone克隆，防止被标记已消费
          const tempRes = res.clone();
          const eTime = new Date().getTime();
          handlerData = {
            ...handlerData,
            elapsedTime: eTime - sTime,
            status: tempRes.status
          };
          tempRes.text().then((data) => {
            handlerData.responseText = data;
            // 上报fetch接口数据
            reportData(handlerData);
          });

          // 返回原始的结果，外部继续使用then接收
          return res;
        },
        (err) => {
          const eTime = new Date().getTime();
          handlerData = {
            ...handlerData,
            elapsedTime: eTime - sTime,
            status: 0
          };
          // 上报fetch接口数据
          reportData(handlerData);
          throw err;
        }
      );
    };
  });
}
```

##### 监控白屏异常
白屏就是页面上什么东西也没有，在页面加载完成之后，如果页面上的空白点很多，就说明页面是白屏的，需要上报，这个上报的时机是：document.readyState === 'complete' 表示文档和所有的子资源已完成加载，表示load（window.addEventListener('load'）状态事件即将被触发。

document.readyState 有三个值：loading（document正在加载），interactive（可交互，表示正在加载的状态结束，但是图像，样式和框架之类的子资源仍在加载），complete 就是完成，所以监控白屏需要在文档都加载完成的情况下触发。
```js
export function onload(callback) {
  if (document.readyState === 'complete') {
    callback()
  } else {
    window.addEventListener('onload', callback)
  }
}
```
监控白屏的思路主要是：可以将可视区域中心点作为坐标轴的中心，在X、Y轴上各分 10 个点，找出这个 20 个坐标点上最上层的 DOM 元素，如过这些元素是包裹元素，空白点数就加一，包裹元素可以自定义比如 Html Body App Root Container Content 等，空白点数大于 0 就上报白屏日志。他的主要核心就是`elementFromPoint` api

```js
export default function computedBlankScreen() {
  // 包裹玉元素列表
  const wrapperSelectors = ['body', 'html', '#root', '#App']
  // 空白节点的个数
  let emptyPoints = 0
  // 判断20个点处的元素是否是包裹元素
  function isWrapper(element) {
    const selector = getSelector(element)
    console.log(selector)
    if (wrapperSelectors.indexOf(selector) >= 0) { // 表示是在包裹元素里面，空白点就要加一
      emptyPoints++
    }
  }
  onload(function() {
    let xElements, yElements
    for (let i = 0; i <=9; i++) {
      xElements = document.elementFromPoint(window.innerWidth * i / 10, window.innerHeight / 2)
      yElements = document.elementFromPoint(window.innerHeight * i / 10, window.innerWidth / 2)
      // document.elementFromPoint 返回的是某一个坐标点的由到外的html元素的集合
      isWrapper(xElements[0])
      isWrapper(yElements[0])
    }
    if (emptyPoints >= 0) {
      let centerPoint = document.elementFromPoint(window.innerWidth / 2, window.innerHeight / 2)
      tracker.send()
    }
  })
}
```
### 内容上报

内容上报支持图片打点上报和 fetch 请求上报两种方式

一般情况下，都是伪装图片上报偷偷携带内容为主

图片打点上报的优势：
1）支持跨域，一般而言，上报域名都不是当前域名，上报的接口请求会构成跨域
2）体积小且不需要插入 dom 中
3）不需要等待服务器返回数据

图片打点缺点是：url 受浏览器长度限制，但你可以在上报的时候限制，可谓瑕不掩瑜

上报方式非常简单

```js
var img = new Image();
img.width = 1;
img.height = 1;
img.src = '/sa.gif?project=default&data=xxx';
```

### 上报数据清洗

这其实就很简单了入库分类，然后展示，不再赘述

以上内容整个监控体系的整体搭建流程，涉及性能分析，错误分析，错误展示，等等
## sentry-javascript 分析

sentry是一个开源的监控平台，可为监控界的老大哥，我们科普了整体监控体系之后，就可以琢磨下源码解读了

其实大家可以发现，整体的监控平台的核心就是 sdk 只要 sdk 的数据上报能搞搞定，其他的数据清洗都是展示和分类而已

所以我们要来琢磨一下如果引导大家看 sentry-sdk 

 Sentry 支持 React、Vue、Angular 等框架，支持 nodejs、浏览器端 javascript，可以说支持非常全面。


接下来就以 sentry-javascript（sdk） 为例，自顶向下的分析其结构。

**仓库地址：https://github.com/getsentry/sentry-javascript**

### 准备工作


首先对整体结构进行分析，观察其调用链、各个模块的作用和相互之间的依赖关系，构建一个全局的视野。

其次会综合使用动态分析和静态分析两种方法，对源码进行分析总结，围绕两大线索进行分析总结：

- 监控脚本是如何初始化的
- 出现错误时是如何捕获、处理、上报的
- 理清楚这两条线，就能够对 sentry-javascript 的源码执行的来龙去脉有比较好的把握。

最后查看 sentry 使用的一些辅助工具，对本次分析绘制出完整的总结图，分析 Sentry 在质量保障上是如何实践的。完成这些后在 Sentry 源码分析之旅上就向前了一小步。







#### 了解使用方式
刚开始时我们拥有的信息非常少，不足以支撑进行下一步，可以先了解使用方式入手。我主要使用 React 技术栈，这就先看看 vue 和 JavaScript 两种情况的接入方式。

从使用文档中我们找到了一段示例：

```js
npm install --save @sentry/vue
import * as Sentry from '@sentry/vue';
const app = createApp({
  // ...
});

Sentry.init({
  app,
  dsn: '__PUBLIC_DSN__',
  integrations: [
    // Or omit `router` if you're not using vue-router
    Sentry.browserTracingIntegration({ router }),
  ],
});
```
### 依赖结构

了解使用方式之后我们就可以分析他的依赖结构

也就是依赖关系，能帮助我们更透彻的理解整体的脉络

我们可以借助一个工具

**https://npmgraph.js.org/ 可视化 npm 包的依赖**

![](../assets/relyOn.png)

如图所示，我们就能通过依赖图谱，看到整体的依赖关系

然后在依据整体的监控上报流程，就可以打断点分析源码了

当然源码其实已经有人帮忙分析过了，我们可以参考一下
具体参考如下：

- https://www.yuque.com/lizhiyao/sentry-miniapp/sentry-javascript-src


## 考点

- 表述整体监控体系的整体搭建流程？
- 你在做这个项目中遇到了什么难点，你是怎么解决的？
- 你跟开源的项目对比有什么区别？
- 前端监控有哪些常用的方式？

### 表述整体监控体系的整体搭建流程？

这个其实就是考察，你对于整体监控体系的搭建有什么理解，知不知道行业最新的通用方案是什么？

数据监控（埋点）、性能监控和异常监控

数据监控就是单位内部的埋点，C 端埋点会较多，b端一般较少无外乎统计（pv,uv 等），主要是为了统计用户行为，分析用户行为，优化产品

性能监控其实就是监听不同用户，不同机型和不同系统下的首屏加载时间、白屏时间、http 等请求的响应时间、静态资源整体下载时间、页面渲染时间、页面交互动画完成时间 主要就是利用浏览器的 navigator、document、performance  api 来拿到这些数据

然后通过 sdk上报 后端对数据分类存储，然后还会有一个管理后台，对数据进行可视化展示利用（echart 等）

然后这时候，一般情况下，可能追问的点就是白屏检测等功能，体面的面试官都会问这个，如果他问你别的实现方式，那就说明这个面试官没水平 ，不去也罢，因为别的问题都是利用 performance 的时间点算出来，一般人记不住，也不会记


当然这个 performance会有个模型，可能要记一下，也可以不记，被问到的概率从人性上来说很小

我们就来讲讲白屏检测，讲白屏检测，是要有核心点的，核心点就是浏览器 api 

先声明，是利用`elementFromPoint`  这个能获取当前页面中的某个左边点的最外层元素，来判断这个元素是否是根节点，如果是根节点，当然表示没有内容，就是白屏了

其实就是白屏检测时机，我们要在页面加载完成之后，利用 load 事件来判断页面逻辑执行页面渲染完

如果执行完成，我们就可以利用`elementFromPoint` 来判断页面是否是白屏，判断白屏的时候需要打点，原理很简单，就是在页面横向和纵向 分别取几个点（正常情况下在拿到屏幕宽高之后会取一个十字）

然后利用之前的那个 api 来算当前的元素，如果是根节点，就表示白屏了


#  你在做这个项目中遇到了什么难点，你是怎么解决的？

这个其实就是考验项目的架构设计和解决问题的能力

但是大部分项目其实都没有啥架构设计，都是天下一大抄，用技术圈来说的，叫借鉴，包括大名鼎鼎的 vue 也是搞借鉴

那怎么办呢？答案很简单，也借鉴啊，我们可以借鉴开源项目啊

比如 你们要做监控平台，sentry 当然首屈一指，借鉴他的架构设计

那么他是怎么设计的呢？

后端咱就不说了，咱说说前端sdk-javascript

sdk-javascript 是个模块化设计的项目

首先给面试官说的得是 使用monorepo的设计，为了能有多包的能力而之所以要有多包的能力，是为了以后能拓展，比如，将来要出个 小程序监控，react 监控，vue 监控等等，
必须要将核心的能力开放出来，供别人使用

其次插件设计，因为现在但凡成熟的项目都有插件设计，通过外部传入插件，在内部初始化，来解决和实现和拓展新的功能

别人问你内部项目为啥要插件设计，其实也很简单，就是为了热插拔设计，比如白屏检测， 小程序和web页面的方案是不一样的，所以一个热插拔显得尤其重要

## 其实就是项目架构了

所谓的项目架构核心就是代码分层，一个方法只干一件事，一个模块只负责一个功能一些主要模块说明

主要模块说明：
1. Sentry.init：初始化 SDK，并配置核心功能（如传输层、集成插件、全局上下文等）。
2. Hub：一个中心模块，管理 Scope 和 Client 的实例。每个事件的上下文（用户信息、标签等）都通过 Scope 设置并存储在 Hub 中。
3. Scope：提供用户信息、标签、附加数据等上下文，作用域信息会在错误和性能事件中自动包含。
4. Client：负责将捕获的事件（如异常和性能数据）发送到 Sentry 服务器。
5. Transport：传输层模块，负责和 Sentry 服务通信。通常使用 fetch 或 XHR，可以自定义传输方式（如支持不同的协议）。
6. Integrations：集成模块，用于框架的自动错误捕获（如 React、Vue、Express 等），并提供一些全局监听器（如 window.onerror）。
7. Sentry Server：接收并处理 SDK 发送的数据，将错误信息存储并展现到 Sentry 控制台上。

数据流动：
初始化 Sentry.init 时，加载 SDK 配置、集成模块和传输层。
Hub 创建一个 Client 实例，并持有 Scope 信息以管理上下文。
错误发生时，Integrations 捕获错误并传递给 Hub，Hub 从 Scope 中获取相关信息。
Client 对错误数据进行格式化，传输层将其发送到 Sentry Server。
最终数据上传至 Sentry 服务器进行处理和展示。

其实这些模块的本质就是知识为了清晰的数据架构和流动，仅此而已，监控的本质是重写或者重新组织浏览器错误以及性能api

## 遇到了什么难点

这个方向就很有讲究了，必须要提前准备，也就是提前想一个，因为当你在即兴的时候往往不会注意你在开发中遇到的细节

看看我是怎么准备的

很简单，技术细节别人也听不懂，因为有的面试官也是很废物的，怎么办呢，给他说一些老项目都会遇到的难题

比如，我们既然重构了这个监控系统，我们就要做一个事情啊，就是怎么兼容老项目

老项目也有一个 sdk，现在要给老sdk 嫁接到新的 sdk 上来，怎么兼容呢？
 
方案 1、 让所有的老项目，都更改一遍 sdk 地址

这个指定是不行的，因为这样会造成很多人力浪费，并且上线就会出错，所以pass

方案 2、 老项目都不动，然后新项目接入，这样也会有一个问题，服务端就需要解决，因为服务端的数据格式不一样新功能不一样的兼容问题，所以也pass

那么就只剩第三种方案了，sentry 不动，继续导出npm 包，但是只保留核心内容

插件全部通过外挂的形式嵌入 ，并且插件等工程在当前的 sdk 项目开发，然后导入核心包中的，数据流转，上报，数据转换， 数据存储等能力

由于这些能力其实一旦开发完成基本是不变的，所以，可维护性，也有保障，可以解构，每次上线，不会改动其他模块内容，这样的设计是最好的，也是最合理的，然后在当前 sdk 中编写插件

插件，和 sdk 的其余内容，并导出 sdk 链接

这样改动插件这种频繁改动的内容，就不会被 sdk 维护，而不改动核心包的内容，还可以拓展多个 sdk 比如小程序，react，vue 等等

保证了可维护性的同事，又保证了，拓展性，以及兼容性，缺点就是，如果核心包，所有插件要跟着上线，但解决方案目前来事是最省成本的



# 你跟开源的项目对比有什么区别？

这个，其实就是个扯淡的问题，因为大多数单位项目都是在开源项目的基础上一步步的迭代而来，换句话说就是站在巨人的肩膀上

但面试官就爱问这玩意，你说你咋能不回答，但又不能回答我是抄的

所以你只能回答借鉴，但借鉴哪里又是个问题

我们只能说，借鉴架构，将他的架构分为 专门管数据的，专门管上下文的，专门管数据流转的，专门管错误信息的， 专门管数据转化的，他做的太好了

所以，我们可以借鉴，至于其他的， 就是就得自己来了，因为它里面有大量的糟粕

比如，其他端兼容，上报格式限制，等，需要舍弃

所以，我们首先优势的地方是插件机制，其次是代码体积




# 前端监控有哪些常用的方式？

这个在上文中已经提到过，无非就是重写错误监控，梳理性能监控，梳理行为轨迹，等等


到此，监控考点，都已结束



## sentry 架构分析
#### 代码实现
- packages/core : SDK的核心功能实现
- packages/browser : 浏览器环境相关的实现
- packages/hub : 全局状态和上下文管理
- packages/tracing : 性能追踪功能
- packages/utils : 通用工具函数
- packages/types : 类型定义
- packages/miniapp : 小程序环境支持

#### 数据流转
- 错误监控：通过core包实现基础错误捕获
- 性能追踪：通过tracing包实现性能监控
- 事件管理：通过hub包统一管理事件状态
- 集成模块：通过integrations包提供各种集成能力
- 回放功能：通过replay相关包实现用户行为回放

#### 扩展性设计
- 插件化架构：通过integrations包支持功能扩展
- 平台适配：支持多种JavaScript运行环境

我们当时沿用了 sentry 的监控体系，保留了核心监控功能，重写了部分功能

例如：
1、重写数据格式
2、重写了上报方式 （之前的链接是dsn包括域名，公钥私钥，端口路径，啥的还有校验）我们这应为都是 58 域，也做了 csrf 这些攻击，所以基本上不需要多余的功能
3、删除了无用模块减少项目体积（比如node环境代码，因为我们目前是 c 端的业务基本都是浏览器端的监控）
4、添加了性能模块
5、更改了数据流转的逻辑 （之前是事件捕获、事件处理（加入一些浏览器信息等内容）、数据传输（调用内置的传输）），我们发现，请求在配置测传入是不符合我们的逻辑的，我们把整个请求外置，来应对不同平台的不同请求，在钩子里面处理请求，并且在不入侵内置代码的情况下，添加我们需要的一些功能和加入我们需要的针对公司要的信息，并且删除内置的请求请求逻辑
例子: 我们性能监控上报和错误上报是两个接口，所以这时候在传入的时候处理，不太优雅，所以我们就开始根钩子中的类型， 来判断使用哪个接口，而不是传入，在内部判断，并且入侵内部核心代码造成一些意想不到的异常

原来包括 Hub、Client、Transport 等关键模块。

**核心流程**
初始化 Sentry.init 时，加载 SDK 配置、集成模块和传输层。
Hub 创建一个 Client 实例，并持有 Scope 信息以管理上下文。
错误发生时，Integrations 捕获错误并传递给 Hub，Hub 从 Scope 中获取相关信息。
Client 对错误数据进行格式化，传输层将其发送到 Sentry Server。
最终数据上传至 Sentry 服务器进行处理和展示。

#### 小程序的架构设计

集成sentry 的核心能力 （Hub、Transport）， 重写Client 换用小程序相关，



#### 重写Client

 主要就是重写那些集成插件，用小程序的替代浏览器的
- InboundFilters：过滤器，用于控制事件上报
- FunctionToString：函数信息序列化
- TryCatch：包装原生API，提供更好的错误捕获
- GlobalHandlers：全局错误处理，包括：
- onError：捕获全局错误
- onUnhandledRejection：捕获未处理的Promise异常
- onPageNotFound：页面不存在异常
- onMemoryWarning：内存警告
- LinkedErrors：关联错误处理
- System：系统信息收集，包括设备、系统版本等
- Router：路由信息收集
- IgnoreMpcrawlerErrors：爬虫相关错误处理

替换小程序的数据流转

### 遇见什么难点
1、资源接口异常监控的时候我我们想劫持 小程序的 request 方法，但是后来发现不能劫持，最后调研半天Object.defineProperties 可以绕过这个限制
3、主包子包的接入设计，我们的小程序有很多主包子包，在我们这主包其实就是个壳子，每一个子包就是一个b 端或者 c 端的项目所以不是整体小程序要有个数据报表，而是主包子包都要有单独的数据报表
如果我们在每个子包接入就很麻烦，因为每次迭代就会有问题，所以当时我们就想能不能在主包接入，能覆盖到子包，后来调研发现，主包子包最后就是一个运行时的环境，这样就有了可能性，我们最后根不同的路径区分主包子包，每个报表有个 id 我们就主包中传入一个数组，然后重写了上报的逻辑，在上报之前添加当前的路由，在路由中，判断主包子包，最后分别上报到不同的报表里
解决了问题
## 还有什么未完成的

1、白屏检测
2、资源异常检测



## 面试官会问白屏检测方案

1）页面DOM元素检测，通过设置阈值判断页面是否加载正常 
  const query = wx.createSelectorQuery()
query.select('#myElement')
  .boundingClientRect(function(rect){
    // rect 包含了节点的位置和尺寸信息
    console.log(rect.width, rect.height)
  })
  .exec()
我们通过监听createSelectorQuery 这个方法，来获取页面的特定元素，来判断页面是否加载正常  但是有一些缺点，这个些元素需要指定， 根据项目特定的来配置，但又没别的办法，所以不准确

2）页面错误监听，捕获页面渲染过程中的错误 ，如果错误超过阈值，就认为页面加载异常。 


## 怎么解决话术问题

首先我们借用了 sentry 的架构设计，保留了 hub 的核心功能，重写了上报， 以及 client 逻辑，开发了一些新插件

首先我说一下sentry 的架构，整个 包含三个模块， 核心模块 hub 包括全局上下文，和一些初始化的全局信息
然后是 client 模块， 这个模块主要是负责数据的收集，数据的转化，数据的上报， 以及一些全局的方法，比如 错误捕获，性能监控， 等等
最后是 transport 模块， 这个模块主要是负责数据的传输， 比如 上报的接口， 上报的方式， 上报的格式等等 这块我们重写了
最后就是一些插件， 比如 错误捕获， 性能监控， 

他的运行模式就是这三个模块相辅相成 然后利用插件来拓展功能

后来我们小程序，利用插件机制来拓展工能，比如错误监控插件，性能监控插件、请求错误插件，路由插件，内存警告插件等等，这些插件本质上就是生成或者完善，sentry 上报数据

### 然后可能问这个插件怎么处理的

这个插件是继承了一个base 类，然后重写了类的方法， 在当前重写的方法中去做自己的事情，比如错误监控，我们就在重写的方法中，去捕获错误

然后所有插件，在初始化的时候，去执行这个重写的方法，这样就可以实现插件的功能

