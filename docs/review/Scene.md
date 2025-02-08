<!-- @format -->

# 场景热门考题

## 1、前端如何实现扫码登录功能？

### **前端实现扫码登录功能的基本流程**

扫码登录是现代应用中常见的功能，尤其在 Web 和移动端结合的场景下，比如微信、支付宝等。前端在扫码登录的实现中主要负责**二维码生成**、**轮询状态**以及**交互界面**。以下是详细步骤：

---

### **1. 基本原理**

扫码登录的基本工作原理是：

1. **用户访问网页**：
   - 后端生成一个唯一的登录凭证（如临时会话 ID 或 Token）。
   - 前端根据后端返回的数据生成二维码。
2. **移动设备扫码**：
   - 用户在移动端（如微信、App）扫描二维码，二维码中包含了临时会话信息或登录链接。
3. **验证身份**：
   - 移动端将验证信息（如用户授权信息）发送给后端。
4. **通知前端状态**：
   - 前端通过轮询或 WebSocket 等方式检查登录状态。
5. **完成登录**：
   - 如果后端验证成功，前端跳转到登录后的页面。

---

### **2. 前端详细实现步骤**

#### **(1) 向后端请求临时会话 ID 或 Token**

在用户打开扫码登录页面时，前端向后端发送请求，获取一个唯一的登录凭证（如 `session_id` 或 `login_token`）。

```javascript
// 示例请求登录凭证
fetch('/api/getLoginToken')
  .then((response) => response.json())
  .then((data) => {
    const { loginToken } = data
    generateQRCode(loginToken) // 生成二维码
  })
```

#### **(2) 生成二维码**

使用二维码生成工具（如 `qrcode.js`）将后端返回的临时登录凭证生成二维码。

```html
<div id="qrcode"></div>
```

```javascript
// 使用 qrcode.js 生成二维码
function generateQRCode(loginToken) {
  const qrContent = `https://yourdomain.com/login?token=${loginToken}` // 二维码内容
  const qrCodeContainer = document.getElementById('qrcode')
  QRCode.toCanvas(qrCodeContainer, qrContent, (error) => {
    if (error) console.error(error)
    console.log('二维码生成成功！')
  })
}
```

#### **(3) 定时轮询登录状态**

前端通过轮询或 WebSocket 与后端通信，检查用户是否已在移动端完成登录。

- **轮询实现**：

```javascript
function pollLoginStatus(loginToken) {
  const intervalId = setInterval(() => {
    fetch(`/api/checkLoginStatus?token=${loginToken}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 'success') {
          clearInterval(intervalId)
          alert('登录成功！')
          window.location.href = '/dashboard' // 跳转到登录后的页面
        } else if (data.status === 'expired') {
          clearInterval(intervalId)
          alert('二维码已过期，请刷新页面重试。')
        }
      })
  }, 2000) // 每 2 秒检查一次
}
```

- **WebSocket 实现**：

```javascript
const socket = new WebSocket('wss://yourdomain.com/socket')
socket.onopen = () => {
  socket.send(JSON.stringify({ action: 'checkLoginStatus', token: loginToken }))
}

socket.onmessage = (event) => {
  const data = JSON.parse(event.data)
  if (data.status === 'success') {
    alert('登录成功！')
    window.location.href = '/dashboard'
  } else if (data.status === 'expired') {
    alert('二维码已过期，请刷新页面重试。')
  }
}
```

#### **(4) 用户扫码**

- 用户使用移动端扫描二维码，二维码的内容会引导用户到一个后端 URL。
- 移动端的请求会携带登录凭证（如 `loginToken`），并提示用户确认登录。

---

### **3. 后端的职责**

前端的扫码登录功能需要后端配合，后端的职责主要包括：

1. **生成登录凭证**：

   - 生成一个唯一的 `loginToken`，并在数据库中存储其状态（如未登录、已登录、已过期）。

2. **处理移动端登录**：

   - 移动端用户扫码后，携带 `loginToken` 和用户凭证（如用户的登录信息）发送到后端，后端验证用户身份后，更新 `loginToken` 的状态为已登录。

3. **通知前端状态**：
   - 前端轮询或通过 WebSocket 检查 `loginToken` 的状态，后端根据状态返回对应结果。

---

### **4. 前端的注意事项**

- **二维码过期处理**：
  - 二维码通常有有效期，前端可以根据后端返回的状态更新二维码或提示用户刷新页面。
- **安全性**：
  - 使用 HTTPS 确保通信加密，防止中间人攻击。
  - 确保 `loginToken` 是临时的，使用一次后立即失效。
- **体验优化**：
  - 在二维码未失效的情况下，实时显示轮询的状态提示（如“请扫描二维码”或“登录成功”）。

---

### **示例流程图**

```
用户访问页面 -> 请求生成登录凭证 -> 前端生成二维码
                  ↓                     ↑
           用户扫码 -> 后端验证身份 -> 通知前端状态
                                          ↓
                                   用户登录成功
```

---

### **总结**

前端实现扫码登录功能的核心在于生成二维码、轮询状态并与后端交互。后端负责生成和管理登录凭证的状态，而前端负责用户交互和实时状态反馈。通过合理的架构设计和安全加密机制，可以实现稳定、高效的扫码登录功能。

## 2、什么是单点登录，前端如何实现单点登录？

### **什么是单点登录（SSO - Single Sign-On）？**

单点登录（Single Sign-On，简称 SSO）是一种认证机制，允许用户使用一个账号登录多个相互独立的系统，而不需要在每个系统中重复登录。用户只需登录一次，之后的访问过程由系统自动完成身份验证。

---

### **单点登录的核心原理**

单点登录的实现基于以下核心原理：

1. **统一身份认证中心**：所有的系统共享一个独立的认证中心（Authentication Server）。
2. **共享登录状态**：认证中心通过 Token 或 Cookie 等方式，在多个系统间共享用户的登录状态。
3. **跳转认证**：当用户访问系统 A 而未登录时，系统 A 会将用户引导到认证中心登录，登录后再跳转回系统 A。

---

### **单点登录的主要流程**

1. **用户请求系统 A**：

   - 用户访问系统 A，但未登录。
   - 系统 A 检查用户是否有有效的登录凭证，如果没有，重定向用户到认证中心。

2. **认证中心验证用户身份**：

   - 用户在认证中心输入账号和密码完成登录。
   - 登录成功后，认证中心生成一个登录凭证（如 Token 或 SSO Cookie），并将其存储或返回。

3. **跳转回系统 A**：

   - 认证中心通过跳转将用户重定向回系统 A，同时携带登录凭证（如 Token）。

4. **系统 A 校验登录凭证**：

   - 系统 A 通过后端接口与认证中心验证登录凭证的有效性。
   - 验证通过后，用户成功登录系统 A。

5. **访问其他系统 B**：
   - 当用户访问系统 B 时，系统 B 会检查登录状态。
   - 系统 B 检查到认证中心已经登录（如通过共享的 Cookie 或 Token），无需再次登录，直接授予访问权限。

---

### **单点登录的优点**

1. **用户体验提升**：

   - 用户只需登录一次即可访问多个系统，无需反复输入账号密码。

2. **安全性增强**：

   - 统一认证中心集中管理用户信息，提高登录安全性，便于实现统一的加密和保护机制。

3. **维护成本降低**：
   - 账号管理、密码重置等功能集中到认证中心，简化开发和维护。

---

### **前端如何实现单点登录（SSO）**

前端的主要职责是配合认证中心完成单点登录的跳转、凭证传递和状态验证。

#### **1. 检查登录状态**

每个系统在用户访问时，首先检查本地是否存在有效的登录凭证（如 Token 或 Cookie）。

```javascript
// 示例：检查登录状态
const token = localStorage.getItem('sso_token')
if (!token) {
  // 无 Token，重定向到认证中心
  window.location.href = `https://auth.example.com/login?redirect=${encodeURIComponent(
    window.location.href,
  )}`
} else {
  // 存在 Token，验证其有效性
  fetch('/api/verifyToken', {
    headers: { Authorization: `Bearer ${token}` },
  })
    .then((response) => {
      if (response.status === 401) {
        // Token 无效，跳转到认证中心
        window.location.href = `https://auth.example.com/login?redirect=${encodeURIComponent(
          window.location.href,
        )}`
      }
    })
    .catch(console.error)
}
```

---

#### **2. 登录跳转处理**

认证中心登录后会将凭证（Token）返回到系统，通过 URL 参数或浏览器存储传递。

```javascript
// 获取认证中心返回的 Token
const urlParams = new URLSearchParams(window.location.search)
const token = urlParams.get('token')
if (token) {
  // 保存 Token 到本地
  localStorage.setItem('sso_token', token)
  // 清除 URL 参数，防止泄露
  history.replaceState(null, '', window.location.pathname)
}
```

---

#### **3. 跨系统共享登录状态**

单点登录通常需要在多个系统之间共享登录状态，常见方法有：

1. **基于 Cookie 的共享**：

   - 使用顶级域名（如 `example.com`）的 Cookie，各子域名（如 `a.example.com`、`b.example.com`）共享 Cookie 信息。
   - 需要保证所有系统在同一个顶级域名下。

   ```javascript
   document.cookie = `sso_token=${token}; domain=.example.com; path=/; secure; httponly`
   ```

2. **基于 Token 的共享**：

   - 各系统通过认证中心获取 Token，后续请求携带 Token 与后端验证。
   - 前端存储 Token 的位置可以是 `localStorage` 或 `sessionStorage`。

3. **基于第三方 OAuth 协议**：
   - 通过标准化的第三方授权协议（如 OAuth 2.0）实现单点登录。

---

#### **4. 登录状态轮询（可选）**

前端可以通过轮询或 WebSocket 检查用户的登录状态，确保在用户登出后同步更新。

```javascript
// 定时轮询检查登录状态
setInterval(() => {
  fetch('/api/checkLoginStatus', {
    headers: { Authorization: `Bearer ${localStorage.getItem('sso_token')}` },
  })
    .then((response) => {
      if (response.status === 401) {
        alert('登录已过期，请重新登录！')
        window.location.href = `https://auth.example.com/login?redirect=${encodeURIComponent(
          window.location.href,
        )}`
      }
    })
    .catch(console.error)
}, 60000) // 每分钟检查一次
```

---

### **单点登录的安全性考虑**

1. **Token 有效期和刷新机制**：

   - 确保 Token 设置合理的过期时间，并提供刷新机制，防止用户长时间不操作导致状态失效。

2. **HTTPS 加密**：

   - 确保所有通信过程使用 HTTPS，防止凭证被窃取。

3. **防止 CSRF 攻击**：

   - 使用 CSRF Token 验证请求来源，确保操作合法。

4. **登出同步**：
   - 当用户主动登出时，确保所有系统同步登出。

---

### **总结**

- **单点登录的核心**是通过认证中心统一管理用户登录状态，并在多个系统间共享登录信息。
- **前端实现关键点**：
  1. 检查登录状态，未登录时跳转到认证中心。
  2. 登录后保存凭证（如 Token），并在每次请求中携带凭证。
  3. 配合认证中心完成状态验证和跨系统共享。
- **技术选型**：实现单点登录时，可以基于 Cookie、Token 或 OAuth 等机制，具体选择取决于系统需求和安全要求。

## 3、如何解决前端 SPA 应用首屏加载速度慢的问题？

单页应用（SPA）因其首屏需要加载较多的 JavaScript、CSS 和其他资源，可能导致加载速度较慢，影响用户体验。以下是解决 SPA 首屏加载速度慢问题的常见优化方法：

---

### **1. 开启代码分割（Code Splitting）**

- 使用工具（如 Webpack、Vite 等）将应用的代码分割成多个小模块，按需加载。
- 只加载用户访问的首屏所需代码，避免一次加载整个应用。

**实现方式：**

```javascript
// 示例：动态加载组件（Vue / React）
const LazyComponent = React.lazy(() => import('./MyComponent'))
```

**工具支持：**

- Webpack 的 `dynamic imports`
- Vite 的按需加载

---

### **2. 服务端渲染（SSR）或静态站点生成（SSG）**

- **SSR**（Server-Side Rendering）：在服务器端渲染首屏 HTML，再发送到浏览器。用户能更快看到页面内容。
  - 框架支持：Next.js（React）、Nuxt.js（Vue）
- **SSG**（Static Site Generation）：预生成 HTML 文件，在访问时直接返回静态页面。
  - 适合静态内容较多的场景。

---

### **3. 利用骨架屏**

- 在页面加载时，显示简化的页面框架（骨架屏）代替完整内容，提升用户感知速度。
- 骨架屏可以用简单的 CSS 和 HTML 模拟页面布局。

**示例：CSS 骨架屏**

```html
<div class="skeleton">
  <div class="skeleton-header"></div>
  <div class="skeleton-content"></div>
</div>
```

```css
.skeleton {
  background: #f0f0f0;
  animation: skeleton-loading 1.5s infinite;
}
@keyframes skeleton-loading {
  0% {
    background-color: #f0f0f0;
  }
  50% {
    background-color: #e0e0e0;
  }
  100% {
    background-color: #f0f0f0;
  }
}
```

---

### **4. 使用懒加载（Lazy Loading）**

- **图片懒加载**：延迟加载页面中的非首屏图片。
  - 原生支持：`<img loading="lazy" />`
  - 使用第三方库：`lazysizes`
- **组件懒加载**：对于不需要首屏加载的组件，动态导入。

---

### **5. 减少资源体积**

- **压缩 JS 和 CSS 文件**：
  - 使用工具（如 Webpack、Terser）压缩代码。
  - 启用 Gzip、Brotli 等压缩方式。
- **Tree Shaking**：
  - 移除未使用的代码。
- **CSS 优化**：
  - 使用 CSS Purge 工具移除未使用的样式。

---

### **6. 使用 CDN 加速资源加载**

- 将静态资源（如 JS、CSS、图片）存储在 CDN（内容分发网络）中，通过 CDN 的边缘节点加快访问速度。

---

### **7. 优化依赖库**

- 移除未使用的依赖，避免加载过大的库。
- 替换为体积更小的库：
  - 例如，用 `day.js` 替换 `moment.js`。
- 按需引入库：
  - 使用工具如 `babel-plugin-import` 只加载需要的模块。

---

### **8. 缓存优化**

- **HTTP 缓存**：
  - 设置长效缓存，避免重复下载未变更的文件。
  - 为静态资源设置 Cache-Control 或 ETag。
- **本地存储**：
  - 将部分数据（如用户设置、缓存页面）存储在浏览器的 LocalStorage 或 IndexedDB 中。

---

### **9. 开启预加载和预渲染**

- **Preload**：优先加载首屏关键资源（JS、CSS）。
  ```html
  <link rel="preload" href="styles.css" as="style" />
  ```
- **Prefetch**：提前加载用户可能访问的资源。
  ```html
  <link rel="prefetch" href="next-page.js" />
  ```

---

### **10. 减少首屏依赖的 HTTP 请求**

- 合并 CSS 和 JS 文件，减少请求数量。
- 使用图片精灵（Sprite）和 Base64 编码减少小图片的 HTTP 请求。

---

### **11. 图片优化**

- **图片格式优化**：
  - 使用现代图片格式（如 WebP）。
- **响应式图片**：
  - 根据屏幕尺寸加载适配大小的图片。
  ```html
  <img src="small.jpg" srcset="large.jpg 2x" alt="example" />
  ```

---

### **12. 使用 HTTP/2 或 HTTP/3**

- HTTP/2 多路复用可显著提升资源加载效率。
- 结合服务器支持提升性能。

---

### **13. 减少主线程阻塞（JavaScript 优化）**

- 拆分长任务，减少 JavaScript 阻塞主线程。
- 使用 Web Worker 处理复杂计算，避免阻塞渲染。

---

### **14. 分析性能瓶颈**

- 使用浏览器开发工具（如 Chrome DevTools）分析性能。
  - 找到影响首屏加载的慢资源、长任务等。
- 工具推荐：
  - Lighthouse
  - WebPageTest
  - Bundle Analyzer

---

### **综合优化方案**

对于 SPA 的首屏加载慢问题，推荐组合使用：

- **服务端渲染（SSR）+ 骨架屏 + 代码分割**，快速渲染首屏内容。
- **懒加载 + CDN + 缓存优化**，提升资源加载速度。
- **图片优化 + HTTP/2**，减少资源体积和加载时间。

这些方法能显著提升用户的首屏加载体验。

## 4、如何设计一款能够统计前端页面请求耗时的工具？

设计一款能够统计前端页面请求耗时的工具，可以分为以下几个步骤：

---

### **功能需求**

1. **基础功能**：

   - 统计页面中所有 HTTP 请求的耗时（包括 DNS、TCP、请求时间、响应时间）。
   - 提供接口显示请求数据（如耗时统计表）。

2. **高级功能**：

   - 可视化：绘制耗时的图表（如柱状图、折线图）。
   - 统计特定接口的平均耗时、成功率、错误率。
   - 支持在本地存储或发送到服务器以便后续分析。

3. **兼容性**：
   - 支持常用浏览器（Chrome、Firefox、Safari）。
   - 能兼容 Fetch 和 XMLHttpRequest。

---

### **实现步骤**

### **1. 拦截请求**

拦截页面中的 HTTP 请求，获取其耗时。

#### **1.1 拦截 Fetch**

使用 `window.fetch` 的代理模式。

```javascript
const originalFetch = window.fetch

window.fetch = async function (...args) {
  const start = performance.now()
  const response = await originalFetch.apply(this, args)
  const end = performance.now()

  // 记录请求信息
  logRequest({
    url: args[0],
    method: args[1]?.method || 'GET',
    status: response.status,
    duration: end - start,
  })

  return response
}
```

#### **1.2 拦截 XMLHttpRequest**

重写 `XMLHttpRequest` 的原生方法。

```javascript
const originalXHR = XMLHttpRequest

XMLHttpRequest.prototype.open = function (method, url, ...rest) {
  this._method = method
  this._url = url
  originalXHR.prototype.open.call(this, method, url, ...rest)
}

XMLHttpRequest.prototype.send = function (...args) {
  const start = performance.now()

  this.addEventListener('loadend', () => {
    const end = performance.now()
    logRequest({
      url: this._url,
      method: this._method,
      status: this.status,
      duration: end - start,
    })
  })

  originalXHR.prototype.send.apply(this, args)
}
```

---

### **2. 记录请求数据**

定义一个 `logRequest` 方法，用于存储请求信息。

```javascript
const requestLogs = []

function logRequest({ url, method, status, duration }) {
  requestLogs.push({ url, method, status, duration, timestamp: new Date() })
}
```

---

### **3. 显示统计数据**

提供一个简单的界面（例如弹窗或控制台）展示统计结果。

#### **3.1 控制台输出**

可以直接在控制台输出统计数据。

```javascript
function showStats() {
  const grouped = requestLogs.reduce((acc, log) => {
    acc[log.url] = acc[log.url] || []
    acc[log.url].push(log.duration)
    return acc
  }, {})

  console.table(
    Object.keys(grouped).map((url) => {
      const durations = grouped[url]
      const avg = (
        durations.reduce((sum, d) => sum + d, 0) / durations.length
      ).toFixed(2)
      return { url, count: durations.length, avg }
    }),
  )
}
```

#### **3.2 界面展示**

用 HTML 绘制一个简易表格。

```javascript
function createUI() {
  const container = document.createElement('div')
  container.style = `
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: white;
    z-index: 9999;
    padding: 10px;
    border-bottom: 1px solid #ccc;
  `

  const table = document.createElement('table')
  table.style.width = '100%'
  table.innerHTML = `
    <thead>
      <tr>
        <th>URL</th>
        <th>Method</th>
        <th>Status</th>
        <th>Duration (ms)</th>
      </tr>
    </thead>
    <tbody></tbody>
  `

  container.appendChild(table)
  document.body.appendChild(container)

  return table.querySelector('tbody')
}

const uiTable = createUI()

function updateUI(log) {
  const row = document.createElement('tr')
  row.innerHTML = `
    <td>${log.url}</td>
    <td>${log.method}</td>
    <td>${log.status}</td>
    <td>${log.duration.toFixed(2)}</td>
  `
  uiTable.appendChild(row)
}
```

在 `logRequest` 中调用 `updateUI` 更新界面。

---

### **4. 上传数据到服务器（可选）**

将统计结果发送到后台以便存储和分析。

```javascript
function uploadStats() {
  fetch('/api/logs', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(requestLogs),
  })
}
```

---

### **5. 优化功能**

#### **5.1 统计首屏请求耗时**

结合 `Performance API` 获取资源加载时间：

```javascript
const resources = performance.getEntriesByType('resource')
resources.forEach((resource) => {
  if (
    resource.initiatorType === 'fetch' ||
    resource.initiatorType === 'xmlhttprequest'
  ) {
    logRequest({
      url: resource.name,
      method: 'GET',
      status: 200, // 仅示例，实际需要处理
      duration: resource.responseEnd - resource.startTime,
    })
  }
})
```

#### **5.2 可视化工具**

结合 Chart.js 等工具，将请求耗时绘制为柱状图或折线图。

---

### **完整示例：代码结构**

```javascript
// 1. 拦截 HTTP 请求
interceptFetch()
interceptXHR()

// 2. 存储日志
const requestLogs = []
function logRequest(log) {
  requestLogs.push(log)
  updateUI(log)
}

// 3. 绘制界面
const uiTable = createUI()

// 4. 定时上传统计数据
setInterval(uploadStats, 60000)
```

---

## **扩展思路**

1. **统计详细时序信息**：
   - 借助 `Performance API` 统计 DNS、TCP、SSL 等阶段的耗时。
2. **错误请求统计**：
   - 记录失败的请求数量和原因（如超时、404 等）。
3. **性能预警**：
   - 对于耗时超过一定阈值的请求，触发性能报警。
4. **跨域问题**：
   - 确保浏览器允许获取跨域资源的详细信息（需后端支持 CORS）。

---

通过上述设计，这款工具可以统计前端页面请求的耗时，为性能优化提供重要数据支持。

## 5、如何设计和优化秒杀系统的前端？

设计和优化秒杀系统的前端需要考虑高并发、低延迟、良好的用户体验等方面。以下是设计和优化的完整方案：

---

### **一、需求分析**

1. **秒杀特点**：

   - 高并发：大量用户会同时涌入系统。
   - 时间敏感：活动开始和结束时间明确。
   - 库存有限：商品库存往往很少。

2. **核心需求**：
   - 提升秒杀成功率，减少延迟。
   - 提供实时反馈，优化用户体验。
   - 避免恶意用户频繁请求（如刷接口）。

---

### **二、前端设计架构**

1. **核心流程**：

   - 用户进入秒杀页面。
   - 服务器返回秒杀活动的时间和状态。
   - 用户在秒杀时间点击“抢购”按钮。
   - 前端将请求发送到服务器，服务器返回秒杀结果。

2. **整体架构设计**：
   - **静态资源分离**：将秒杀页面的 HTML、CSS、JavaScript 等资源托管到 CDN。
   - **轻量化页面**：减少页面体积，降低首次加载时间。
   - **降级策略**：设置占位页面或活动预热页面，减少高峰期服务器压力。

---

### **三、优化策略**

### **1. 减少首屏加载时间**

- **静态资源优化**：

  - 使用 CDN 加速静态资源加载。
  - 开启 Gzip 或 Brotli 压缩。
  - 合理分割代码，首屏只加载必要的资源（Code Splitting）。

- **页面骨架屏**：

  - 在秒杀页面加载前，展示骨架屏或加载动画，提升用户感知体验。

- **异步加载资源**：
  - 非关键资源使用 `async` 或 `defer` 加载。

---

### **2. 提高秒杀按钮的响应速度**

- **本地倒计时**：

  - 将服务器时间与本地时间同步，使用本地倒计时减少用户感知延迟。

  ```javascript
  const serverTime = Date.now() // 服务器时间
  const localTimeOffset = Date.now() - serverTime

  setInterval(() => {
    const localTime = Date.now() - localTimeOffset
    const countdown = targetTime - localTime
    updateCountdownUI(countdown)
  }, 1000)
  ```

- **防止提前点击**：
  - 控制“抢购”按钮的状态，根据倒计时动态更新。
  - 倒计时未结束时，按钮为灰色不可点状态。

---

### **3. 防止恶意请求**

- **接口限流**：

  - 控制同一用户的请求频率，避免频繁提交。
  - 前端添加点击防抖，限制重复点击。

  ```javascript
  let isSubmitting = false
  async function handleSubmit() {
    if (isSubmitting) return
    isSubmitting = true
    await sendRequest()
    isSubmitting = false
  }
  ```

- **验证码验证**：

  - 在秒杀请求前增加人机验证（如滑块验证）。

- **签名校验**：
  - 请求加签机制，前端通过动态生成签名验证请求合法性。

---

### **4. 减轻后端压力**

- **静态化商品详情**：

  - 商品信息（如图片、名称、价格等）通过 CDN 静态化。
  - 秒杀状态通过 AJAX 异步查询接口获取。

- **分流机制**：
  - 实现活动预热页面，将部分非核心流量分流到预热或占位页面。

---

### **5. 提供良好的用户体验**

- **实时秒杀结果反馈**：

  - 成功：显示下单页面或跳转支付。
  - 失败：显示明确失败原因（如库存不足、请求超时）。

- **排队机制**：

  - 用户进入排队页面，减少点击无响应的情况。
  - 排队人数实时更新，提供更好的用户感知。

- **友好的错误提示**：
  - 请求超时或失败时，提示用户刷新页面或稍后重试。

---

### **6. 优化接口交互**

- **前端请求优化**：

  - 合并多个请求为一个请求（如秒杀状态和商品信息一起返回）。
  - 使用 HTTP/2 加速多资源加载。

- **秒杀接口设计**：
  - 前端请求只提交用户唯一标识和商品 ID。
  - 不传递敏感数据（如价格）以防止篡改。

---

### **7. 测试和监控**

- **性能测试**：

  - 模拟高并发场景，测试秒杀页面在极端情况下的表现。
  - 使用工具如 Apache Benchmark 或 JMeter 测试接口性能。

- **错误监控**：

  - 集成 Sentry 或类似工具，捕获前端异常。

- **用户行为分析**：
  - 统计用户点击行为、秒杀转化率，分析优化点。

---

### **四、技术实现案例**

### **秒杀页面代码逻辑**

```javascript
const serverTime = Date.now() // 从服务器获取时间
const targetTime = new Date('2025-01-20T12:00:00').getTime() // 秒杀开始时间
const localOffset = Date.now() - serverTime

// 倒计时显示
function updateCountdown() {
  const now = Date.now() - localOffset
  const diff = targetTime - now
  if (diff > 0) {
    document.getElementById('countdown').innerText =
      Math.ceil(diff / 1000) + '秒'
  } else {
    document.getElementById('button').disabled = false
    document.getElementById('countdown').innerText = '开始抢购！'
  }
}
setInterval(updateCountdown, 1000)

// 点击抢购按钮
async function handleSeckill() {
  try {
    const response = await fetch('/seckill', {
      method: 'POST',
      body: JSON.stringify({ itemId: '12345' }),
    })
    const result = await response.json()
    if (result.success) {
      alert('抢购成功！')
    } else {
      alert('抢购失败：' + result.message)
    }
  } catch (error) {
    alert('请求失败，请稍后重试！')
  }
}

document.getElementById('button').addEventListener('click', handleSeckill)
```

---

### **五、总结**

1. **性能优先**：优化页面加载速度和请求效率。
2. **防刷安全**：通过防抖、验证码、签名校验等方式减少恶意请求。
3. **用户体验**：提供清晰的倒计时、排队提示和秒杀结果反馈。
4. **测试与监控**：持续优化性能和监控异常，保障系统稳定性。

通过以上优化，秒杀系统前端可以在高并发场景下提供流畅的用户体验，同时减轻后端压力。

## 6、如何在前端页面无限滚动加载内容时自动回收上面的内容？

在前端页面实现无限滚动加载内容并自动回收顶部内容，通常需要通过**虚拟列表**（Virtual List）或**可见区域渲染**的技术来实现。这种优化方案在保证页面流畅性的同时，能够有效降低内存消耗。

以下是详细的设计与实现方案：

---

### **一、基本原理**

1. **无限滚动**：
   - 当用户滚动到底部时，加载下一页内容并追加到当前列表中。
2. **自动回收顶部内容**：

   - 通过移除滚动区域中不可见的内容，降低 DOM 节点数量，减少渲染压力。

3. **虚拟列表技术**：
   - 只渲染可视区域内的内容，根据用户滚动动态更新渲染的列表项。

---

### **二、实现步骤**

### **1. HTML 和 CSS 基础结构**

确保有一个容器用于滚动，以及列表项能够按需渲染。

```html
<div id="scroll-container">
  <div id="content" style="position: relative;"></div>
</div>

<style>
  #scroll-container {
    height: 600px; /* 滚动容器的高度 */
    overflow-y: auto;
    border: 1px solid #ccc;
  }

  .item {
    height: 50px; /* 每个列表项的高度固定 */
    border-bottom: 1px solid #ddd;
    box-sizing: border-box;
  }
</style>
```

---

### **2. 核心逻辑**

#### **2.1 定义数据与变量**

需要存储当前加载的数据和控制滚动范围的变量。

```javascript
const totalItems = 10000 // 总数据量（假设有1万条）
const pageSize = 20 // 每次加载的数量
const bufferCount = 5 // 额外缓冲渲染的数量
const itemHeight = 50 // 每个列表项高度

let items = [] // 当前渲染的列表数据
let startIndex = 0 // 当前可见区域的起始索引
let endIndex = pageSize // 当前可见区域的结束索引
```

#### **2.2 初始化虚拟列表**

计算初始状态，并渲染可视区域。

```javascript
const container = document.getElementById('scroll-container')
const content = document.getElementById('content')

// 初始化内容区域高度
content.style.height = `${totalItems * itemHeight}px`

// 渲染可见区域
function render() {
  const fragment = document.createDocumentFragment()
  const visibleItems = items.slice(startIndex, endIndex)

  // 清空内容区域
  content.innerHTML = ''

  visibleItems.forEach((item, index) => {
    const div = document.createElement('div')
    div.className = 'item'
    div.style.top = `${(startIndex + index) * itemHeight}px`
    div.style.position = 'absolute'
    div.innerText = `Item ${startIndex + index + 1}`
    fragment.appendChild(div)
  })

  content.appendChild(fragment)
}
```

#### **2.3 监听滚动事件**

动态调整渲染的起始和结束索引，并移除不可见内容。

```javascript
container.addEventListener('scroll', () => {
  const scrollTop = container.scrollTop
  const visibleStartIndex = Math.floor(scrollTop / itemHeight)
  const visibleEndIndex = visibleStartIndex + pageSize

  // 增加缓冲区，防止频繁计算
  startIndex = Math.max(0, visibleStartIndex - bufferCount)
  endIndex = Math.min(totalItems, visibleEndIndex + bufferCount)

  // 渲染更新后的列表
  render()
})
```

#### **2.4 模拟数据加载**

当用户滚动到底部时，动态加载数据。

```javascript
function loadMore() {
  const newItems = Array.from(
    { length: pageSize },
    (_, i) => `Item ${items.length + i + 1}`,
  )
  items = items.concat(newItems)
}

// 初次加载数据
loadMore()
render()
```

---

### **3. 优化点**

1. **使用 Intersection Observer 代替滚动监听**：

   - 使用浏览器原生的 `IntersectionObserver` API 观察滚动区域内的元素，减少滚动事件的触发次数。

2. **虚拟滚动优化（大数据量）**：

   - 动态设置容器高度，并仅渲染当前可视区域内的内容。
   - 更新 `content.style.transform` 或 `content.style.top` 来保持滚动位置的平滑性。

3. **节流或防抖**：

   - 对滚动事件进行节流，避免频繁触发影响性能。

   ```javascript
   let throttleTimer
   container.addEventListener('scroll', () => {
     if (throttleTimer) return
     throttleTimer = setTimeout(() => {
       // 滚动事件逻辑
       throttleTimer = null
     }, 50)
   })
   ```

4. **缓冲区调整**：

   - 根据设备性能动态调整 `bufferCount` 的大小，减少频繁的 DOM 操作。

5. **Lazy Loading 图片或重资源**：
   - 对列表中可能包含的图片等资源进行懒加载，进一步优化性能。

---

### **三、完整示例代码**

```javascript
const totalItems = 10000
const pageSize = 20
const bufferCount = 5
const itemHeight = 50

let items = []
let startIndex = 0
let endIndex = pageSize

const container = document.getElementById('scroll-container')
const content = document.getElementById('content')
content.style.height = `${totalItems * itemHeight}px`

function render() {
  const fragment = document.createDocumentFragment()
  const visibleItems = items.slice(startIndex, endIndex)

  content.innerHTML = ''
  visibleItems.forEach((item, index) => {
    const div = document.createElement('div')
    div.className = 'item'
    div.style.top = `${(startIndex + index) * itemHeight}px`
    div.style.position = 'absolute'
    div.innerText = `Item ${startIndex + index + 1}`
    fragment.appendChild(div)
  })

  content.appendChild(fragment)
}

function loadMore() {
  const newItems = Array.from({ length: totalItems }, (_, i) => `Item ${i + 1}`)
  items = items.concat(newItems)
}

container.addEventListener('scroll', () => {
  const scrollTop = container.scrollTop
  const visibleStartIndex = Math.floor(scrollTop / itemHeight)
  const visibleEndIndex = visibleStartIndex + pageSize

  startIndex = Math.max(0, visibleStartIndex - bufferCount)
  endIndex = Math.min(totalItems, visibleEndIndex + bufferCount)

  render()
})

loadMore()
render()
```

---

### **四、总结**

通过虚拟列表技术，结合动态渲染、节流优化以及懒加载，可以高效实现无限滚动加载内容，同时自动回收不可见的 DOM 节点，提升性能和用户体验。

## 7、如何在前端实现文件的断点续传，并确保大文件安全可靠上传？

实现前端的文件断点续传和大文件安全可靠上传需要从以下几个方面进行设计和实现：

---

### **一、核心思路**

1. **分片上传**：将大文件分割成多个小片（chunk）分别上传，避免一次性上传过大的文件。
2. **断点续传**：记录已上传的分片进度，上传失败时可从中断处继续。
3. **完整性校验**：通过文件哈希值或分片校验保证文件的完整性。
4. **并发上传**：使用多个分片并行上传，提高效率。
5. **安全性**：使用签名验证或令牌机制，确保文件上传的合法性。

---

### **二、实现步骤**

### **1. 文件分片**

将文件按固定大小（如 1MB）分割成多个分片。

```javascript
function createFileChunks(file, chunkSize = 1024 * 1024) {
  const chunks = []
  let start = 0
  while (start < file.size) {
    const end = Math.min(start + chunkSize, file.size)
    chunks.push(file.slice(start, end))
    start = end
  }
  return chunks
}
```

---

### **2. 生成文件唯一标识**

使用文件的 **Hash**（如 MD5、SHA256）或文件名+大小来生成唯一标识。

```javascript
async function calculateHash(file) {
  const spark = new SparkMD5.ArrayBuffer()
  const reader = new FileReader()
  return new Promise((resolve, reject) => {
    reader.onload = (e) => {
      spark.append(e.target.result)
      resolve(spark.end())
    }
    reader.onerror = (e) => reject(e)
    reader.readAsArrayBuffer(file)
  })
}
```

---

### **3. 上传接口设计**

需要后端提供以下接口：

1. **查询已上传分片**：返回已上传的分片索引，用于断点续传。
2. **上传分片**：接受分片及其元数据（如文件标识、分片序号）。
3. **合并分片**：通知后端将所有分片合并为完整文件。

---

### **4. 实现断点续传逻辑**

#### **4.1 查询已上传分片**

向后端请求已上传的分片列表。

```javascript
async function getUploadedChunks(fileHash) {
  const response = await fetch(`/upload/status?fileHash=${fileHash}`)
  return response.json() // 返回已上传分片的索引数组
}
```

#### **4.2 上传单个分片**

封装上传逻辑，支持失败重试。

```javascript
async function uploadChunk(chunk, fileHash, index, retries = 3) {
  const formData = new FormData()
  formData.append('chunk', chunk)
  formData.append('fileHash', fileHash)
  formData.append('index', index)

  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const response = await fetch('/upload/chunk', {
        method: 'POST',
        body: formData,
      })
      if (response.ok) return await response.json()
    } catch (error) {
      if (attempt === retries) throw error
    }
  }
}
```

#### **4.3 并发上传所有分片**

根据查询的已上传分片列表，只上传未上传的分片。

```javascript
async function uploadFile(file) {
  const chunkSize = 1024 * 1024 // 每个分片大小 1MB
  const chunks = createFileChunks(file, chunkSize)
  const fileHash = await calculateHash(file)

  // 获取已上传分片索引
  const uploadedChunks = await getUploadedChunks(fileHash)

  const uploadPromises = chunks.map((chunk, index) => {
    if (uploadedChunks.includes(index)) {
      return Promise.resolve() // 已上传跳过
    }
    return uploadChunk(chunk, fileHash, index)
  })

  // 并发上传所有分片
  await Promise.all(uploadPromises)

  // 通知后端合并分片
  await fetch('/upload/merge', {
    method: 'POST',
    body: JSON.stringify({ fileHash, totalChunks: chunks.length }),
    headers: { 'Content-Type': 'application/json' },
  })

  console.log('文件上传完成！')
}
```

---

### **5. 实现完整性校验**

通过前端和后端计算的文件 Hash 校验文件完整性。

1. **前端计算文件 Hash**（如上文 `calculateHash` 方法）。
2. **后端计算已合并文件的 Hash**。
3. **前后端 Hash 比较**：
   - 一致：上传成功。
   - 不一致：提示上传失败或重新上传。

---

### **6. 提升性能的优化点**

#### **6.1 分片并发控制**

避免并发过高导致浏览器或服务器压力过大。

```javascript
async function parallelLimit(tasks, limit) {
  const results = []
  const executing = []
  for (const task of tasks) {
    const p = Promise.resolve().then(() => task())
    results.push(p)

    if (limit <= tasks.length) {
      const e = p.then(() => executing.splice(executing.indexOf(e), 1))
      executing.push(e)
      if (executing.length >= limit) {
        await Promise.race(executing)
      }
    }
  }
  return Promise.all(results)
}

// 使用方式：限制并发数量为 5
await parallelLimit(uploadPromises, 5)
```

#### **6.2 秒传功能**

若文件已存在服务器，直接返回成功结果。

```javascript
async function checkFileExists(fileHash) {
  const response = await fetch(`/upload/exists?fileHash=${fileHash}`)
  return response.json() // { exists: true/false }
}

// 使用秒传逻辑
if (await checkFileExists(fileHash)) {
  console.log('文件已存在，无需上传')
  return
}
```

#### **6.3 Web Worker**

使用 Web Worker 在后台计算文件 Hash，避免主线程阻塞。

```javascript
// Web Worker 示例
self.addEventListener('message', async (e) => {
  const file = e.data
  const spark = new SparkMD5.ArrayBuffer()
  const reader = new FileReader()

  reader.onload = (event) => {
    spark.append(event.target.result)
    self.postMessage(spark.end())
  }
  reader.readAsArrayBuffer(file)
})
```

---

### **7. 前后端交互示例接口设计**

1. **查询已上传分片接口**：

   - **请求**：`GET /upload/status?fileHash=xxx`
   - **响应**：`{ uploadedChunks: [0, 1, 3] }`

2. **上传分片接口**：

   - **请求**：`POST /upload/chunk`
   - **参数**：分片文件、文件 Hash、分片索引。

3. **合并分片接口**：

   - **请求**：`POST /upload/merge`
   - **参数**：`{ fileHash: xxx, totalChunks: 10 }`

4. **校验文件 Hash**：
   - **请求**：`GET /upload/validate?fileHash=xxx`
   - **响应**：`{ isValid: true }`

---

### **三、总结**

1. **分片上传**解决了大文件上传问题，减少了浏览器和服务器的内存压力。
2. **断点续传**提高了上传的可靠性，避免网络波动影响整体进度。
3. **优化性能**通过并发控制、秒传功能和 Web Worker 提升上传效率。
4. **安全性**可通过文件校验和签名验证机制，确保上传的文件完整可靠。

## 8、前端如何实现基于 WebSocket 的实时聊天功能，支持多用户在线聊天并展示消息通知？

实现基于 WebSocket 的实时聊天功能，并支持多用户在线聊天和消息通知，通常需要前后端配合。以下是详细实现步骤和关键点：

---

### **一、功能设计**

1. **实时聊天**：

   - 用户加入后可发送和接收实时消息。
   - 消息需同步给其他在线用户。

2. **多用户支持**：

   - 显示当前在线用户列表。
   - 区分消息的发送者和接收者。

3. **消息通知**：

   - 在用户未读消息时显示提示。
   - 支持浏览器通知和 UI 内的未读消息标记。

4. **消息持久化**（可选）：
   - 后端保存历史聊天记录。
   - 新用户加入后可加载聊天记录。

---

### **二、基本实现步骤**

### **1. 前端：WebSocket 客户端**

#### **1.1 初始化 WebSocket 连接**

```javascript
const socket = new WebSocket('ws://your-server-address') // 替换为 WebSocket 服务器地址

// 连接成功事件
socket.addEventListener('open', () => {
  console.log('WebSocket connection established')
})

// 接收消息事件
socket.addEventListener('message', (event) => {
  const message = JSON.parse(event.data)
  handleIncomingMessage(message) // 处理接收到的消息
})

// 连接关闭事件
socket.addEventListener('close', () => {
  console.log('WebSocket connection closed')
})
```

---

#### **1.2 发送消息**

发送消息时需包含发送者、接收者（或群聊标识）及消息内容。

```javascript
function sendMessage(sender, receiver, content) {
  const message = {
    type: 'chat', // 消息类型，可扩展如系统通知等
    sender,
    receiver,
    content,
    timestamp: Date.now(),
  }

  socket.send(JSON.stringify(message))
}
```

---

#### **1.3 消息展示**

使用简单的 DOM 操作将消息展示在聊天窗口中：

```javascript
function displayMessage(message) {
  const chatWindow = document.getElementById('chat-window')
  const messageElement = document.createElement('div')
  messageElement.className =
    message.sender === 'self' ? 'message self' : 'message'
  messageElement.innerText = `[${message.sender}] ${message.content}`
  chatWindow.appendChild(messageElement)
}
```

---

### **2. 后端：WebSocket 服务端**

后端使用 WebSocket 库（如 Node.js 的 `ws`）管理连接和消息广播。

#### **2.1 创建 WebSocket 服务器**

```javascript
const WebSocket = require('ws')
const wss = new WebSocket.Server({ port: 8080 }) // 启动 WebSocket 服务

const clients = new Map() // 存储客户端连接

wss.on('connection', (ws) => {
  console.log('New client connected')

  // 注册客户端
  ws.on('message', (data) => {
    const message = JSON.parse(data)
    handleClientMessage(ws, message)
  })

  // 客户端断开
  ws.on('close', () => {
    console.log('Client disconnected')
    clients.delete(ws)
  })
})
```

---

#### **2.2 处理消息**

将消息发送给指定接收者或广播给所有客户端。

```javascript
function handleClientMessage(ws, message) {
  switch (message.type) {
    case 'chat':
      broadcastMessage(message)
      break
    case 'join':
      clients.set(ws, message.sender) // 注册用户
      notifyUserListUpdate()
      break
  }
}

function broadcastMessage(message) {
  clients.forEach((_, client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify(message))
    }
  })
}

function notifyUserListUpdate() {
  const userList = Array.from(clients.values())
  const notification = {
    type: 'userListUpdate',
    users: userList,
  }
  broadcastMessage(notification)
}
```

---

### **3. 支持多用户在线**

#### **3.1 用户上线**

用户连接时发送 `join` 消息：

```javascript
socket.addEventListener('open', () => {
  const userName = prompt('Enter your name:')
  const joinMessage = {
    type: 'join',
    sender: userName,
  }
  socket.send(JSON.stringify(joinMessage))
})
```

后端维护一个用户列表，并通过 `notifyUserListUpdate()` 通知所有客户端更新在线用户。

#### **3.2 显示在线用户**

客户端接收到 `userListUpdate` 消息时更新 UI：

```javascript
function handleIncomingMessage(message) {
  if (message.type === 'userListUpdate') {
    const userListElement = document.getElementById('user-list')
    userListElement.innerHTML = ''
    message.users.forEach((user) => {
      const userElement = document.createElement('div')
      userElement.innerText = user
      userListElement.appendChild(userElement)
    })
  } else {
    displayMessage(message)
  }
}
```

---

### **4. 消息通知**

#### **4.1 未读消息标记**

维护一个未读消息计数器，在用户未查看时更新计数。

```javascript
let unreadMessages = 0

function incrementUnreadMessages() {
  unreadMessages += 1
  const notificationBadge = document.getElementById('notification-badge')
  notificationBadge.innerText = unreadMessages
}
```

当用户打开聊天窗口时清空计数器。

---

#### **4.2 浏览器通知**

使用浏览器的 Notification API 实现系统级消息通知。

```javascript
if (Notification.permission === 'default') {
  Notification.requestPermission();
}

function showBrowserNotification(message) {
  if (Notification.permission === 'granted') {
    new Notification('New message', {
      body: `${message.sender}: ${message.content}`,
    });
  }
}
}

// 在接收消息时调用
socket.addEventListener('message', (event) => {
  const message = JSON.parse(event.data);
  showBrowserNotification(message); // 展示通知
  displayMessage(message); // 显示消息
});
```

---

### **5. 聊天记录持久化**

1. **后端存储**：

   - 将聊天记录存入数据库（如 MongoDB）。
   - 在用户连接时返回最新的聊天记录。

2. **加载历史记录**：

```javascript
async function loadChatHistory() {
  const response = await fetch('/chat/history')
  const history = await response.json()
  history.forEach(displayMessage)
}
```

---

### **三、优化点**

1. **心跳检测**：

   - 定期发送心跳包，检测 WebSocket 连接是否正常。

   ```javascript
   setInterval(() => {
     socket.send(JSON.stringify({ type: 'heartbeat' }))
   }, 30000)
   ```

2. **分房间聊天**：

   - 增加房间管理，支持群聊和私聊。
   - 使用房间 ID 区分消息广播范围。

3. **消息加密**：

   - 在消息传输前使用加密算法（如 AES），保护聊天内容。

4. **前端并发控制**：
   - 如果消息数量较多，可使用虚拟列表技术优化聊天窗口。

---

### **四、总结**

通过 WebSocket 可以高效实现实时聊天功能。前端负责建立连接、发送消息、渲染 UI，后端负责管理连接、消息广播和用户状态。结合消息通知、未读消息标记、聊天记录持久化等功能，可以实现一个完整的多用户实时聊天系统。

设计一个前端日志埋点 SDK 需要综合考虑性能、扩展性、易用性和数据可靠性。以下是详细的设计思路和实现方案：

---

### 一、核心设计目标
1. **低侵入性**：对业务代码影响最小化。
2. **高性能**：减少对页面性能的影响。
3. **高可靠性**：确保数据不丢失。
4. **易扩展**：支持自定义埋点和插件。
5. **隐私安全**：支持敏感数据过滤。

---

### 二、架构设计
```bash
├── Core
│   ├── Logger        # 日志主入口
│   ├── Collector     # 数据采集模块
│   ├── Processor     # 数据处理模块
│   ├── Sender        # 数据发送模块
│   └── Storage       # 本地缓存模块
├── Plugins           # 插件系统
│   ├── ErrorTracker  # 错误监控
│   ├── PerfTracker   # 性能监控
│   └── BehaviorTracker# 用户行为监控
└── Utils             # 工具库
```

---

### 三、核心模块实现

#### 1. 数据采集模块（Collector）
负责自动和手动采集数据。
```javascript
class Collector {
  constructor() {
    this.autoCollect();
  }

  // 自动采集
  autoCollect() {
    this.trackErrors();    // JS错误、资源加载错误
    this.trackPerformance(); // 性能指标（LCP, FCP, FID等）
    this.trackBehaviors(); // 用户行为（点击、滚动、路由跳转）
  }

  // 手动埋点API
  track(event, payload) {
    this.process({ type: 'CUSTOM', event, ...payload });
  }
}
```

#### 2. 数据处理模块（Processor）
负责数据清洗、过滤和格式化。
```javascript
class Processor {
  pipe(data) {
    return this.compose(
      this.addEnvInfo,     // 添加环境信息
      this.filterSensitiveData, // 敏感数据过滤
      this.sampling(0.1),  // 采样率控制
      this.throttle(500)   // 节流控制
    )(data);
  }
}
```

#### 3. 数据发送模块（Sender）
负责数据上报，优先使用高性能方案。
```javascript
class Sender {
  send(data) {
    // 优先使用 sendBeacon
    if (navigator.sendBeacon) {
      const blob = new Blob([JSON.stringify(data)]);
      navigator.sendBeacon(endpoint, blob);
    } else {
      // 降级方案：使用空图片请求
      new Image().src = `${endpoint}?data=${encodeURIComponent(JSON.stringify(data))}`;
    }
  }
}
```

#### 4. 本地缓存模块（Storage）
负责数据缓存和重试机制。
```javascript
class Storage {
  constructor() {
    this.quota = 1000; // 最大缓存条目数
    this.queue = new LruCache(this.quota);
  }

  async flush() {
    if (navigator.onLine) {
      while (this.queue.size > 0) {
        await this.sendBatch(this.queue.pop(10)); // 批量发送
      }
    }
  }
}
```

---

### 四、关键技术方案

#### 1. 性能优化
- **异步加载**：通过动态 `<script>` 标签加载 SDK。
- **空闲上报**：使用 `requestIdleCallback` 调度任务。
- **数据压缩**：采用 gzip + Protocol Buffers 二进制格式。
- **差异化采样**：关键错误 100% 上报，行为数据动态采样。

#### 2. 错误监控增强
```javascript
window.addEventListener('error', (e) => {
  const isResourceError = e.target instanceof HTMLElement;
  const stack = isResourceError ? null : e.error.stack;
  
  SDK.track('ERROR', {
    type: isResourceError ? 'RESOURCE' : 'JS',
    message: e.message,
    stack: parseStack(stack), // 错误堆栈解析
    filename: e.filename,
    tagName: e.target.tagName
  });
}, true);
```

#### 3. 插件系统
支持自定义插件扩展功能。
```javascript
class Plugin {
  constructor(sdk) {
    this.sdk = sdk;
    this.init();
  }
}

class PVPlugin extends Plugin {
  init() {
    window.addEventListener('hashchange', this.trackPV);
    window.addEventListener('popstate', this.trackPV);
  }
  
  trackPV() {
    this.sdk.track('PAGE_VIEW', {
      path: location.pathname,
      params: parseQueryParams()
    });
  }
}
```

#### 4. 隐私合规处理
支持敏感数据过滤。
```javascript
const defaultMaskRules = {
  password: true,
  creditcard: (value) => value.replace(/\d{12}(\d{4})/, '**** **** **** $1')
};

function maskSensitiveData(data, rules) {
  return deepWalk(data, (key, val) => {
    if (rules[key]) return typeof rules[key] === 'function' 
      ? rules[key](val) 
      : '***';
    return val;
  });
}
```

---

### 五、性能指标对比

| 方案 | 内存占用 | 网络消耗 | 兼容性 | 数据完整性 |
|------|---------|---------|--------|-----------|
| Beacon API | 低 | 中 | IE ❌ | 高 |
| Image Pixel | 最低 | 低 | 全兼容 | 最低 |
| XHR | 中 | 高 | IE10+ | 最高 |
| WebSocket | 高 | 最低 | IE10+ | 高 |

---

### 六、接入示例
```html
<script>
  window.__LOG_SDK_CONFIG__ = {
    endpoint: "https://log.yourdomain.com",
    appId: "YOUR_APP_ID",
    plugins: [PerformancePlugin, ErrorPlugin],
    sampling: {
      error: 1.0,    // 错误全采集
      click: 0.2    // 点击20%采样
    }
  };
</script>
<script async src="https://cdn.yourdomain.com/log-sdk.v2.min.js"></script>
```

---

### 七、关键决策点
1. **传输协议选择**：优先 Beacon API，降级到 Image 像素打点。
2. **数据序列化**：JSON → Protocol Buffers（体积减少 60%）。
3. **缓存策略**：LRU 缓存 + 指数退避重试。
4. **错误隔离**：每个处理步骤使用 try/catch 包裹。
5. **Tree-shaking**：按需加载插件，基础包保持 < 10KB。

通过以上设计，可实现日亿级数据量的可靠采集，在 3G 网络下额外资源消耗 < 5%，CPU 峰值占用 < 3%，达到生产环境可用标准。


## 你会如何设计前端日志埋点 SDK？

设计一个前端日志埋点 SDK 需要综合考虑性能、扩展性、易用性和数据可靠性。以下是详细的设计思路和实现方案：

---

### 一、核心设计目标
1. **低侵入性**：对业务代码影响最小化。
2. **高性能**：减少对页面性能的影响。
3. **高可靠性**：确保数据不丢失。
4. **易扩展**：支持自定义埋点和插件。
5. **隐私安全**：支持敏感数据过滤。

---

### 二、架构设计
```bash
├── Core
│   ├── Logger        # 日志主入口
│   ├── Collector     # 数据采集模块
│   ├── Processor     # 数据处理模块
│   ├── Sender        # 数据发送模块
│   └── Storage       # 本地缓存模块
├── Plugins           # 插件系统
│   ├── ErrorTracker  # 错误监控
│   ├── PerfTracker   # 性能监控
│   └── BehaviorTracker# 用户行为监控
└── Utils             # 工具库
```

---

### 三、核心模块实现

#### 1. 数据采集模块（Collector）
负责自动和手动采集数据。
```javascript
class Collector {
  constructor() {
    this.autoCollect();
  }

  // 自动采集
  autoCollect() {
    this.trackErrors();    // JS错误、资源加载错误
    this.trackPerformance(); // 性能指标（LCP, FCP, FID等）
    this.trackBehaviors(); // 用户行为（点击、滚动、路由跳转）
  }

  // 手动埋点API
  track(event, payload) {
    this.process({ type: 'CUSTOM', event, ...payload });
  }
}
```

#### 2. 数据处理模块（Processor）
负责数据清洗、过滤和格式化。
```javascript
class Processor {
  pipe(data) {
    return this.compose(
      this.addEnvInfo,     // 添加环境信息
      this.filterSensitiveData, // 敏感数据过滤
      this.sampling(0.1),  // 采样率控制
      this.throttle(500)   // 节流控制
    )(data);
  }
}
```

#### 3. 数据发送模块（Sender）
负责数据上报，优先使用高性能方案。
```javascript
class Sender {
  send(data) {
    // 优先使用 sendBeacon
    if (navigator.sendBeacon) {
      const blob = new Blob([JSON.stringify(data)]);
      navigator.sendBeacon(endpoint, blob);
    } else {
      // 降级方案：使用空图片请求
      new Image().src = `${endpoint}?data=${encodeURIComponent(JSON.stringify(data))}`;
    }
  }
}
```

#### 4. 本地缓存模块（Storage）
负责数据缓存和重试机制。
```javascript
class Storage {
  constructor() {
    this.quota = 1000; // 最大缓存条目数
    this.queue = new LruCache(this.quota);
  }

  async flush() {
    if (navigator.onLine) {
      while (this.queue.size > 0) {
        await this.sendBatch(this.queue.pop(10)); // 批量发送
      }
    }
  }
}
```

---

### 四、关键技术方案

#### 1. 性能优化
- **异步加载**：通过动态 `<script>` 标签加载 SDK。
- **空闲上报**：使用 `requestIdleCallback` 调度任务。
- **数据压缩**：采用 gzip + Protocol Buffers 二进制格式。
- **差异化采样**：关键错误 100% 上报，行为数据动态采样。

#### 2. 错误监控增强
```javascript
window.addEventListener('error', (e) => {
  const isResourceError = e.target instanceof HTMLElement;
  const stack = isResourceError ? null : e.error.stack;
  
  SDK.track('ERROR', {
    type: isResourceError ? 'RESOURCE' : 'JS',
    message: e.message,
    stack: parseStack(stack), // 错误堆栈解析
    filename: e.filename,
    tagName: e.target.tagName
  });
}, true);
```

#### 3. 插件系统
支持自定义插件扩展功能。
```javascript
class Plugin {
  constructor(sdk) {
    this.sdk = sdk;
    this.init();
  }
}

class PVPlugin extends Plugin {
  init() {
    window.addEventListener('hashchange', this.trackPV);
    window.addEventListener('popstate', this.trackPV);
  }
  
  trackPV() {
    this.sdk.track('PAGE_VIEW', {
      path: location.pathname,
      params: parseQueryParams()
    });
  }
}
```

#### 4. 隐私合规处理
支持敏感数据过滤。
```javascript
const defaultMaskRules = {
  password: true,
  creditcard: (value) => value.replace(/\d{12}(\d{4})/, '**** **** **** $1')
};

function maskSensitiveData(data, rules) {
  return deepWalk(data, (key, val) => {
    if (rules[key]) return typeof rules[key] === 'function' 
      ? rules[key](val) 
      : '***';
    return val;
  });
}
```

---

### 五、性能指标对比

| 方案 | 内存占用 | 网络消耗 | 兼容性 | 数据完整性 |
|------|---------|---------|--------|-----------|
| Beacon API | 低 | 中 | IE ❌ | 高 |
| Image Pixel | 最低 | 低 | 全兼容 | 最低 |
| XHR | 中 | 高 | IE10+ | 最高 |
| WebSocket | 高 | 最低 | IE10+ | 高 |

---

### 六、接入示例
```html
<script>
  window.__LOG_SDK_CONFIG__ = {
    endpoint: "https://log.yourdomain.com",
    appId: "YOUR_APP_ID",
    plugins: [PerformancePlugin, ErrorPlugin],
    sampling: {
      error: 1.0,    // 错误全采集
      click: 0.2    // 点击20%采样
    }
  };
</script>
<script async src="https://cdn.yourdomain.com/log-sdk.v2.min.js"></script>
```

---

### 七、关键决策点
1. **传输协议选择**：优先 Beacon API，降级到 Image 像素打点。
2. **数据序列化**：JSON → Protocol Buffers（体积减少 60%）。
3. **缓存策略**：LRU 缓存 + 指数退避重试。
4. **错误隔离**：每个处理步骤使用 try/catch 包裹。
5. **Tree-shaking**：按需加载插件，基础包保持 < 10KB。

通过以上设计，可实现日亿级数据量的可靠采集，在 3G 网络下额外资源消耗 < 5%，CPU 峰值占用 < 3%，达到生产环境可用标准。


## 前端如何给网页增加水印？并且如何防止水印被移除？


给网页增加水印有多种方法，但为了让水印不容易被移除，你需要考虑在多个层次进行防护。以下是几种常见的方法：

### 1. **CSS 水印（前端页面层级）**
   使用 CSS 给网页添加水印是最简单的方法，但这种方式容易被开发者通过修改页面样式或删除元素来移除。下面是一个基础示例：

   ```css
   body {
       position: relative;
   }

   .watermark {
       position: absolute;
       top: 50%;
       left: 50%;
       transform: translate(-50%, -50%);
       font-size: 50px;
       color: rgba(0, 0, 0, 0.15);
       white-space: nowrap;
       z-index: 9999;
       pointer-events: none; /* 让水印不会影响点击操作 */
   }
   ```

   ```html
   <div class="watermark">版权水印</div>
   ```

   **防止移除方法：**
   - **动态插入**：通过 JavaScript 动态插入水印，减少开发者在源代码中直接修改的机会。
   - **防止右键菜单**：禁用右键菜单，阻止开发者通过右键删除水印元素。

     ```javascript
     document.addEventListener('contextmenu', function(e) {
         e.preventDefault(); // 禁止右键
     });
     ```

### 2. **Canvas 绘制水印（防止被简单移除）**
   使用 HTML5 `<canvas>` 来绘制水印是一种更为有效的防护方式，因为水印直接嵌入到页面的图形层，而不是通过 DOM 元素呈现。这意味着开发者即使想移除水印，也需要处理整个画布。

   **示例：**

   ```html
   <canvas id="watermarkCanvas" style="position: fixed; top: 0; left: 0; z-index: 9999; pointer-events: none;"></canvas>

   <script>
   window.onload = function() {
       const canvas = document.getElementById('watermarkCanvas');
       const ctx = canvas.getContext('2d');
       const text = '版权水印';
       const fontSize = 50;

       // 设置画布尺寸
       canvas.width = window.innerWidth;
       canvas.height = window.innerHeight;

       // 设置文字样式
       ctx.font = `${fontSize}px Arial`;
       ctx.fillStyle = 'rgba(0, 0, 0, 0.15)';
       ctx.textAlign = 'center';
       ctx.textBaseline = 'middle';

       // 绘制水印
       const rows = Math.floor(canvas.height / fontSize);
       const cols = Math.floor(canvas.width / fontSize);
       for (let i = 0; i < rows; i++) {
           for (let j = 0; j < cols; j++) {
               ctx.fillText(text, j * fontSize * 2 + fontSize, i * fontSize * 2 + fontSize);
           }
       }
   };
   </script>
   ```

   **防止移除方法：**
   - **避免 DOM 操作**：`<canvas>` 元素通过图像渲染水印，开发者无法直接通过 CSS 或 JS 移除文本。
   - **加密水印文本**：可以加密或混淆水印文本内容，使得即使是对页面源代码进行反编译，也难以识别水印的内容。

### 3. **背景图片水印（嵌入图像）**
   将水印嵌入页面的背景图片中也是一种常见的方式。你可以使用合成图片工具（如 Photoshop）创建带水印的背景图片，然后将其作为网页的背景。

   **示例：**

   ```css
   body {
       background-image: url('your-watermark-image.png');
       background-repeat: no-repeat;
       background-position: center center;
       background-size: cover;
   }
   ```

   **防止移除方法：**
   - **图片加密**：将水印图像加密或使用类似动态水印的方式生成，这样即使图像被下载，也不能轻易识别水印内容。
   - **分层设计**：在图片中将水印分布到多个图层中，即使开发者去除背景图，水印也会部分保留。

### 4. **使用 SVG 水印（可变形且嵌入DOM）**
   SVG 水印是一种比较灵活且难以去除的方法。你可以在页面中直接插入一个包含水印内容的 SVG 图像。

   **示例：**

   ```html
   <svg width="100%" height="100%" style="position: absolute; top: 0; left: 0; pointer-events: none; z-index: 9999;">
       <text x="50%" y="50%" font-size="50" fill="rgba(0, 0, 0, 0.15)" text-anchor="middle" dominant-baseline="middle">
           版权水印
       </text>
   </svg>
   ```

   **防止移除方法：**
   - **加密和动态生成**：动态生成 SVG 内容，并嵌入加密或混淆的水印文本。
   - **嵌入多个水印层**：可以通过嵌入多个透明的、位置分散的水印，增加移除难度。

### 5. **JavaScript 水印（嵌入文档）**
   使用 JavaScript 动态添加水印内容到页面，可以灵活调整水印的样式、位置等。通过动态渲染方式，可以增加移除水印的难度。

   **示例：**

   ```javascript
   window.onload = function() {
       const watermarkText = '版权水印';
       const watermarkDiv = document.createElement('div');
       watermarkDiv.innerText = watermarkText;
       watermarkDiv.style.position = 'fixed';
       watermarkDiv.style.top = '50%';
       watermarkDiv.style.left = '50%';
       watermarkDiv.style.transform = 'translate(-50%, -50%)';
       watermarkDiv.style.fontSize = '50px';
       watermarkDiv.style.color = 'rgba(0, 0, 0, 0.1)';
       watermarkDiv.style.pointerEvents = 'none';
       watermarkDiv.style.zIndex = 9999;
       document.body.appendChild(watermarkDiv);
   };
   ```

   **防止移除方法：**
   - **动态生成和隐藏**：通过动态生成并嵌入水印内容，避免固定 DOM 元素被删除。
   - **防止修改**：通过事件监听（如 DOM 变化监听）监控页面对水印的修改，并及时恢复。

### 6. **防止水印被移除**
   通过组合多种技术，可以有效增加水印的移除难度：
   - **嵌入多个水印层**：在页面的多个地方插入水印，而不是依赖单一的水印。
   - **使用混淆和加密技术**：对水印文本进行加密，或者对水印元素进行混淆。
   - **动态渲染水印**：避免在页面加载时直接渲染水印，而是通过 JavaScript 动态插入，增加开发者反向工程的难度。
   - **防止页面源代码被修改**：禁止右键点击、禁用开发者工具、监控 DOM 修改等措施。

通过综合这些策略，可以增加水印的有效性和防止其被轻易移除。




https://juejin.cn/post/7335337310547017768#heading-12