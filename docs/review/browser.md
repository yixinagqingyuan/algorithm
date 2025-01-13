<!-- @format -->

# 浏览器热门考题

## 1、说说你对 fetch 的理解，它有哪些优点和不足？

### **`fetch` 的理解**

`fetch` 是现代浏览器提供的一种用于进行 HTTP 请求的原生 JavaScript API，它比 `XMLHttpRequest`（XHR）更加简洁、灵活、支持 Promise，并且可以更方便地进行异步编程。`fetch` 提供了一种更为现代的方式来处理网络请求，它基于 Promise，能更好地与 `async`/`await` 配合使用。

#### **基本用法**

`fetch` 方法接受一个请求的 URL 和一个配置对象，返回一个 Promise，解析为 `Response` 对象，该对象包含了服务器返回的响应信息。

**基本语法：**

```javascript
fetch(url, options)
  .then((response) => response.json()) // 处理响应数据
  .then((data) => console.log(data))
  .catch((error) => console.error('Error:', error))
```

其中：

- `url` 是要请求的资源的 URL 地址。
- `options` 是一个可选的配置对象，用于指定请求方法、请求头、请求体等信息。

#### **常见的配置选项：**

- **method**: 请求的方法，如 `GET`、`POST`、`PUT` 等。
- **headers**: 请求头信息，通常用于设置请求的内容类型（如 `Content-Type: application/json`）。
- **body**: 请求体，通常用于 `POST` 或 `PUT` 请求，发送数据给服务器。

### **优点**

1. **基于 Promise，支持异步编程**：

   - `fetch` 返回的是一个 Promise，使得它能与 `async`/`await` 搭配使用，代码更加简洁、易读，且易于链式调用。

   ```javascript
   async function fetchData() {
     try {
       const response = await fetch('https://api.example.com/data')
       const data = await response.json()
       console.log(data)
     } catch (error) {
       console.error('Error:', error)
     }
   }
   ```

2. **比 `XMLHttpRequest` 更简洁**：

   - `fetch` API 的语法简洁易用，去除了 `XMLHttpRequest` 中的复杂回调和状态管理，使得网络请求的代码更加清晰。

3. **返回的是 `Response` 对象，支持流（Stream）处理**：

   - `Response` 对象不仅包含响应数据，还包含了其他元数据（如响应状态码、响应头等）。它支持流式读取数据（如使用 `.text()` 或 `.json()` 等方法），使得处理大数据文件（如视频、音频、图片）更加高效。

4. **支持跨域请求（CORS）**：

   - `fetch` 内建了对跨域资源共享（CORS，Cross-Origin Resource Sharing）的支持，这使得它在处理跨域请求时更为方便，尤其是在需要向不同源发送请求时。

5. **自定义请求**：

   - `fetch` 提供了更多灵活的自定义请求配置，如设置请求头、缓存策略等，这些都可以通过 `options` 参数进行配置。

6. **流式响应支持**：
   - `fetch` 支持流式响应（Streams），可以按块（chunk）处理大文件或大数据流，这对于大数据传输时具有明显的性能优势。

---

### **不足**

1. **没有自动处理 HTTP 错误状态**：

   - `fetch` 默认只会在请求失败（如网络问题）时返回拒绝的 Promise，但它不会自动处理 HTTP 错误状态（如 404 或 500）。即使响应状态码为 4xx 或 5xx，`fetch` 仍然会将其视为正常响应，开发者需要手动检查响应的状态码。

   ```javascript
   fetch('https://api.example.com/data')
     .then((response) => {
       if (!response.ok) {
         // 需要手动检查 HTTP 状态码
         throw new Error('Network response was not ok')
       }
       return response.json()
     })
     .then((data) => console.log(data))
     .catch((error) => console.error('Error:', error))
   ```

2. **不支持老旧浏览器**：

   - `fetch` 是现代浏览器的原生 API，但它在旧版浏览器（如 Internet Explorer）中不被支持。如果需要兼容旧浏览器，必须使用 polyfill（如 `whatwg-fetch`）或者使用 `XMLHttpRequest`。

3. **无法中断请求**：

   - `fetch` 本身不支持请求取消（即中断请求）。如果需要取消请求，必须借助 `AbortController` 来实现取消功能，增加了代码复杂度。

   ```javascript
   const controller = new AbortController()
   const signal = controller.signal

   fetch('https://api.example.com/data', { signal })
     .then((response) => response.json())
     .then((data) => console.log(data))
     .catch((error) => {
       if (error.name === 'AbortError') {
         console.log('Request was aborted')
       } else {
         console.error('Error:', error)
       }
     })

   // 在适当时机调用
   controller.abort()
   ```

4. **默认不支持 `timeout`**：

   - `fetch` 并没有内建的 `timeout` 配置，如果请求超时，它会继续等待直到收到响应。为了支持超时控制，需要使用 `Promise.race()` 或者结合 `AbortController` 手动实现。

   ```javascript
   const timeout = new Promise((_, reject) =>
     setTimeout(() => reject(new Error('Request timed out')), 5000),
   )
   const request = fetch('https://api.example.com/data')

   Promise.race([request, timeout])
     .then((response) => response.json())
     .then((data) => console.log(data))
     .catch((error) => console.error(error))
   ```

5. **处理大文件或数据流时可能存在内存问题**：
   - 在处理非常大的数据文件时（如视频、图像等），如果不使用流（Stream），可能会导致内存溢出或性能下降。

---

### **总结**

#### **优点**：

- 简洁的语法，支持 Promise，易于与 `async`/`await` 配合使用。
- 提供灵活的配置，支持跨域请求（CORS）和流式数据处理。
- 更加现代化，相比 `XMLHttpRequest`，代码更加简洁和易于理解。

#### **不足**：

- 不自动处理 HTTP 错误状态，需要手动检查响应状态。
- 在一些老旧浏览器中不支持。
- 没有内建的请求取消和超时机制，需要使用额外的工具（如 `AbortController`）来实现。

尽管存在一些不足，`fetch` 仍然是现代 JavaScript 中进行 HTTP 请求的首选工具，特别是在与 `async`/`await` 一起使用时。对于更复杂的需求，可能需要结合其他库（如 Axios）来处理跨浏览器兼容性和功能扩展。
