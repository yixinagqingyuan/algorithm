<!-- @format -->

# 基础热门考题

## 1、如何解决⻚⾯请求接⼝⼤规模并发问题？

页面请求接口大规模并发问题是指在前端应用中同时发起大量网络请求时，可能会导致性能问题（如浏览器或服务器崩溃）、请求失败、服务器资源紧张等问题。以下是几种常见的解决方案：

---

### **1. 问题的原因分析**

1. **浏览器限制并发连接数**：大部分浏览器对同一个域名的并发请求数量有限制（通常是 6~8 个）。
2. **服务器压力**：过多的并发请求可能导致服务器负载过高，出现响应延迟或失败。
3. **接口依赖关系**：某些请求可能依赖于其他请求的结果，增加了复杂性。
4. **网络带宽问题**：过多请求同时进行可能会占用客户端的网络资源，导致拥塞。

---

### **2. 解决方案**

#### **2.1 请求合并（Batching）**

- **原理**：将多个请求合并成一个批量请求，通过服务器端解析后处理，减少请求数量。
- **适用场景**：多个相似的小请求（如获取多条数据详情）。
- **示例**：

前端代码：

```javascript
const ids = [1, 2, 3, 4, 5]
fetch(`/api/batch?ids=${ids.join(',')}`)
  .then((response) => response.json())
  .then((data) => console.log(data))
```

后端解析：

```javascript
// 假设收到的请求为 GET /api/batch?ids=1,2,3,4,5
app.get('/api/batch', (req, res) => {
  const ids = req.query.ids.split(',')
  const data = ids.map((id) => ({ id, detail: `Detail for ${id}` }))
  res.json(data)
})
```

---

#### **2.2 请求节流（Throttling）**

- **原理**：限制同时进行的请求数量，待某些请求完成后再发送新的请求。
- **适用场景**：页面中发起了大量非关键请求。
- **实现方法**：
  使用 `Promise` 队列控制请求并发数：

```javascript
function throttleRequests(requests, maxConcurrent) {
  const results = []
  let index = 0

  const execute = async () => {
    while (index < requests.length) {
      const currentIndex = index++
      results[currentIndex] = await requests[currentIndex]()
    }
  }

  const workers = Array(maxConcurrent).fill().map(execute)
  return Promise.all(workers).then(() => results)
}

// 示例
const requests = [
  () => fetch('/api/data1'),
  () => fetch('/api/data2'),
  () => fetch('/api/data3'),
]
throttleRequests(requests, 2).then(console.log)
```

---

#### **2.3 请求去重**

- **原理**：在短时间内对同一资源的重复请求只保留一个，避免浪费资源。
- **适用场景**：多个组件或功能可能触发相同的请求。
- **实现方法**：使用缓存记录正在进行的请求，完成后移除。

```javascript
const requestCache = new Map()

function fetchWithDeduplication(url) {
  if (requestCache.has(url)) return requestCache.get(url)

  const promise = fetch(url).finally(() => requestCache.delete(url))
  requestCache.set(url, promise)
  return promise
}

// 示例
fetchWithDeduplication('/api/data')
fetchWithDeduplication('/api/data') // 第二次请求将复用第一次的结果
```

---

#### **2.4 分批请求（请求队列）**

- **原理**：将大量请求拆分为多批次发送，每一批完成后再发送下一批。
- **适用场景**：需要处理大量请求且对时间敏感性不高。
- **示例**：

```javascript
async function batchRequests(requests, batchSize) {
  for (let i = 0; i < requests.length; i += batchSize) {
    const batch = requests.slice(i, i + batchSize)
    await Promise.all(batch.map((req) => req()))
  }
}

// 示例
const requests = [
  () => fetch('/api/data1'),
  () => fetch('/api/data2'),
  () => fetch('/api/data3'),
]
batchRequests(requests, 2) // 每次发送 2 个请求
```

---

#### **2.5 服务端分页**

- **原理**：让后端支持分页查询，减少前端一次性获取大量数据。
- **适用场景**：列表类数据加载。
- **示例**：

前端：

```javascript
let currentPage = 1

async function loadPage() {
  const response = await fetch(`/api/data?page=${currentPage}`)
  const data = await response.json()
  console.log(data)
  currentPage++
}
```

后端（Node.js 示例）：

```javascript
app.get('/api/data', (req, res) => {
  const page = parseInt(req.query.page, 10) || 1
  const pageSize = 10
  const data = getDataFromDB().slice((page - 1) * pageSize, page * pageSize)
  res.json(data)
})
```

---

#### **2.6 Web Workers（前端多线程）**

- **原理**：利用 Web Workers 处理部分复杂的逻辑或非关键请求，减少主线程负担。
- **适用场景**：需要处理大量数据计算或非关键的异步请求。

---

#### **2.7 使用 CDN 缓存**

- **原理**：通过 CDN 缓存静态资源或接口响应，减少重复请求和服务器压力。
- **适用场景**：静态资源请求（如图片、文件）。

---

#### **2.8 HTTP/2 多路复用**

- **原理**：通过 HTTP/2 协议在同一连接中发送多个请求，减少连接开销。
- **适用场景**：请求数较多的场景（需要服务端支持 HTTP/2）。

---

#### **2.9 提前请求（Prefetching）**

- **原理**：提前加载用户可能需要的资源或接口数据，避免瞬时并发。
- **适用场景**：用户操作可以预测（如分页列表的下一页）。

---

### **3. 实际应用策略**

根据场景选择合适的优化方案：

1. **少量重复请求**：用去重策略避免重复发送。
2. **大量无序请求**：使用节流或分批请求限制并发数量。
3. **性能关键场景**：采用请求合并或服务端分页。
4. **长远优化**：考虑 CDN 缓存、HTTP/2、Web Workers 等。

通过以上优化方案，可以有效解决页面请求接口的大规模并发问题，从而提升前端性能和用户体验。
