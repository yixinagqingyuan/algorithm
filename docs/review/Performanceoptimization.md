<!-- @format -->

# 性能优化热门考题

## 1、说一下前端性能优化

前端性能优化是提升网页加载速度、用户体验和响应速度的过程。良好的前端性能优化能够减少页面加载时间，降低带宽使用，改善用户体验，特别是在移动设备和低网络速度环境下。以下是一些常见的前端性能优化方法，涵盖了从资源加载、渲染、脚本执行等多个方面。

### 1. **减少 HTTP 请求**

- **合并文件：** 将多个 CSS 和 JavaScript 文件合并为一个文件，减少浏览器的请求次数。
- **图片精灵（Image Sprite）：** 将多个小图标合并成一个大图，再通过 CSS 的 `background-position` 来显示对应的部分，减少图片的 HTTP 请求。
- **图像压缩：** 优化图片大小，使用合适的格式（如 PNG、JPEG、WebP 等），通过工具压缩图片，降低图片体积。

### 2. **使用 CDN（内容分发网络）**

- 使用 CDN 将静态资源（如图片、CSS、JavaScript 文件）分发到全球的多个服务器节点上，减少资源加载的延迟，提高下载速度。
- CDN 可加速资源加载，特别是对于国际用户，避免数据请求集中到单一服务器。

### 3. **使用缓存机制**

- **缓存静态资源：** 配置合适的缓存头（如 `Cache-Control`、`Expires`），使浏览器缓存静态资源（CSS、JS、图片等），避免重复请求相同的资源。
- **服务工作者（Service Worker）：** 使用 Service Worker 缓存常用资源，在离线状态下也能提供应用的部分功能。
- **版本控制：** 通过修改文件的版本号（如在文件名中添加 hash 值）来确保文件在更新时不会被浏览器缓存，避免缓存过期问题。

### 4. **异步加载资源**

- **异步加载 JavaScript：** 使用 `async` 或 `defer` 属性异步加载 JavaScript，防止阻塞渲染。
  - `async`：脚本下载完成后立即执行，执行顺序不一定。
  - `defer`：脚本会在页面解析完成后再执行，并且执行顺序按照脚本出现的顺序执行。
- **懒加载（Lazy Loading）：** 延迟加载不立即显示的资源，特别是对于图片和视频，只有在用户滚动到相应位置时才加载。可以使用 `IntersectionObserver` API 或第三方库来实现懒加载。

### 5. **减少和优化 JavaScript 执行**

- **压缩和混淆代码：** 使用工具（如 UglifyJS、Terser）压缩和混淆 JavaScript 代码，减小文件大小。
- **避免阻塞渲染：** 确保 JavaScript 文件不阻塞页面的渲染。将 JavaScript 文件放在页面底部或使用 `async` 或 `defer` 属性来加载。
- **减少 DOM 操作：** 尽量避免频繁地访问和操作 DOM，合并多个 DOM 操作以减少重绘和回流。
- **减少内存泄漏：** 确保事件监听器和定时器被正确清除，避免不必要的内存占用。

### 6. **优化 CSS**

- **压缩 CSS：** 使用工具（如 CSSNano）压缩 CSS，去除空格和不必要的符号，减小文件体积。
- **CSS 文件合并：** 将多个 CSS 文件合并为一个文件，减少 HTTP 请求。
- **避免使用 `@import`：** `@import` 会导致资源的阻塞加载，建议直接使用 `<link>` 标签来加载 CSS。
- **使用 CSS 动画代替 JavaScript 动画：** CSS 动画在性能上通常优于 JavaScript 动画，尤其是在硬件加速方面。

### 7. **优化 Web 字体**

- **减少字体文件的大小：** 使用 WOFF2 格式，它比 WOFF 更小，加载速度更快。
- **只加载所需的字形：** 使用字体子集化工具（如 FontFace Observer）只加载需要的字体和字形。
- **字体预加载：** 使用 `<link rel="preload">` 提前加载 Web 字体，避免出现“FOIT”（Flash of Invisible Text）或“FOUT”（Flash of Unstyled Text）问题。

### 8. **利用 HTTP/2 和 HTTP/3**

- **启用 HTTP/2：** HTTP/2 提供了更高效的多路复用，可以减少请求头的冗余，合并多个请求，提升请求并发性。
- **使用 HTTP/3：** HTTP/3 基于 QUIC 协议，进一步优化了连接的延迟，提升了性能。

### 9. **减少重绘与回流**

- **避免强制同步布局：** 避免在 JavaScript 中使用可能会引起重排和回流的操作，如修改布局属性（`offsetHeight`, `scrollTop` 等）时引起重绘。
- **使用 CSS 3D Transforms：** 尽量避免使用会导致回流的布局修改，而改用 CSS 动画和 3D 变换，它们通常可以触发 GPU 加速。

### 10. **前端框架与库的优化**

- **按需加载：** 使用模块化构建工具（如 Webpack、Parcel、Rollup）进行代码拆分，按需加载页面所需的资源，避免一次性加载整个应用。
- **Tree Shaking：** 在构建过程中，移除未使用的代码，减小 JavaScript 文件的体积。

### 11. **网络优化**

- **使用更快的网络协议（如 QUIC）：** QUIC 协议能够减少连接延迟和丢包重传的时间，提升网站加载速度。
- **压缩资源：** 使用 Gzip 或 Brotli 压缩服务器上的静态资源，减少网络传输时的文件大小。

### 12. **监控和性能分析**

- **性能分析工具：** 使用浏览器开发者工具（如 Chrome DevTools）来分析网站的加载时间、资源使用情况、渲染性能等。
- **Lighthouse：** 使用 Google 的 Lighthouse 工具进行网站性能分析，给出具体的性能优化建议。
- **Web Vitals：** 通过监控 Web Vitals（如 LCP、FID、CLS）来评估网站的用户体验，并进行持续的性能优化。

### 总结

前端性能优化是一个持续的过程，从资源加载、渲染、脚本执行、图片优化等方面入手，通过合理的技术手段提升网页的加载速度和响应速度，最终提供更好的用户体验。


## 2、如何在前端页面无限滚动加载内容时自动回收上面的内容？


在前端实现无限滚动时自动回收旧内容，可通过 **虚拟滚动（Virtual Scrolling）** 技术动态管理 DOM，只渲染可视区域内容。以下是实现步骤和代码示例：

---

### **核心思路**
1. **监听滚动事件**，计算当前可视区域的起始/结束索引。
2. **动态渲染**：仅保留可视区域及缓冲区的元素，移除其他 DOM。
3. **占位元素**：保持总高度，维持滚动条位置稳定。

---

### **原生 JavaScript 实现示例**

```html
<div id="scrollContainer" style="height: 500px; overflow-y: auto;">
  <div id="contentPlaceholder" style="height: 0;"></div>
  <div id="visibleContent"></div>
</div>
```

```javascript
const DATA = Array.from({ length: 1000 }, (_, i) => `Item ${i + 1}`); // 模拟数据
const ITEM_HEIGHT = 50; // 假设每个项目高度固定为50px
const BUFFER = 5; // 缓冲区额外渲染的项目数

const container = document.getElementById('scrollContainer');
const placeholder = document.getElementById('contentPlaceholder');
const visibleContent = document.getElementById('visibleContent');

let startIdx = 0;
let endIdx = 0;

// 初始化占位高度
placeholder.style.height = `${DATA.length * ITEM_HEIGHT}px`;

function updateVisibleItems() {
  const scrollTop = container.scrollTop;
  const visibleCount = Math.ceil(container.clientHeight / ITEM_HEIGHT);
  
  // 计算起止索引（含缓冲区）
  startIdx = Math.max(0, Math.floor(scrollTop / ITEM_HEIGHT) - BUFFER);
  endIdx = Math.min(DATA.length, startIdx + visibleCount + BUFFER * 2);

  // 创建新片段
  const fragment = document.createDocumentFragment();
  for (let i = startIdx; i < endIdx; i++) {
    const item = document.createElement('div');
    item.textContent = DATA[i];
    item.style.height = `${ITEM_HEIGHT}px`;
    item.dataset.index = i; // 标记索引
    fragment.appendChild(item);
  }

  // 清空并替换内容
  visibleContent.innerHTML = '';
  visibleContent.appendChild(fragment);

  // 调整内容位置
  visibleContent.style.transform = `translateY(${startIdx * ITEM_HEIGHT}px)`;
}

// 滚动事件节流处理
let isThrottled = false;
container.addEventListener('scroll', () => {
  if (!isThrottled) {
    requestAnimationFrame(() => {
      updateVisibleItems();
      isThrottled = false;
    });
    isThrottled = true;
  }
});

// 初始渲染
updateVisibleItems();
```

---

### **关键优化点**
1. **动态索引计算**  
   - 根据 `scrollTop` 和容器高度计算当前应渲染的数据范围。
   - 添加缓冲区（`BUFFER`）避免滚动时出现空白。

2. **文档片段（DocumentFragment）**  
   - 批量操作 DOM 减少重排次数。

3. **CSS Transform 定位**  
   - 使用 `translateY` 移动内容区域，而非修改每个元素的位置。

4. **滚动节流**  
   - 使用 `requestAnimationFrame` 控制更新频率。

---

### **处理动态高度内容**
若项目高度不固定，需先测量并缓存高度：

```javascript
const measuredHeights = {};

// 在初次渲染后记录高度
function measureHeights() {
  const items = visibleContent.children;
  for (let item of items) {
    const index = item.dataset.index;
    if (!measuredHeights[index]) {
      measuredHeights[index] = item.getBoundingClientRect().height;
    }
  }
}

// 更新总占位高度
function updatePlaceholderHeight() {
  const totalHeight = DATA.reduce((sum, _, i) => sum + (measuredHeights[i] || ITEM_HEIGHT), 0);
  placeholder.style.height = `${totalHeight}px`;
}
```

---

### **使用现成库简化**
- **React**: 使用 `react-window` 或 `react-virtualized`。
- **Vue**: 使用 `vue-virtual-scroller`。
- **原生优化库**: `Intersection Observer` 监听元素可见性。

---

通过动态计算和渲染，可高效实现无限滚动的内容回收，保持页面流畅性。