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

## 2、Cookie、Session、Token 之间有什么区别？

**Cookie、Session 和 Token** 都是用来在客户端和服务器之间传递和存储用户状态信息的技术。它们各自有不同的工作原理和使用场景，下面是它们之间的主要区别：

### 1. **Cookie**

- **存储位置：** 存储在用户的浏览器中。
- **作用：** 用于在客户端保存用户信息，如登录状态、偏好设置等。
- **生命周期：** Cookie 可以设置过期时间，也可以是会话级别的（浏览器关闭后失效）。
- **传输方式：** 每次向服务器发起请求时，浏览器会自动携带相应的 Cookie 信息。
- **安全性：** 因为 Cookie 存储在浏览器中，容易受到 XSS（跨站脚本）攻击。如果没有正确的设置 `HttpOnly` 和 `Secure` 标志，可能会暴露敏感信息。

### 2. **Session**

- **存储位置：** 存储在服务器端，客户端只保存一个指向 Session 的标识（通常是一个 Session ID）。
- **作用：** 用于存储和跟踪用户的会话信息。通常用于登录后的状态管理，确保同一用户在多个请求之间的一致性。
- **生命周期：** Session 在服务器端存储，会话结束后会失效（如浏览器关闭或会话超时）。
- **传输方式：** 服务器通常通过 Cookie 将 Session ID 传递给客户端，或者通过 URL 中的查询参数（不推荐）传递。
- **安全性：** Session 信息存储在服务器端，相对安全，不容易被盗取。但是，如果 Session ID 泄露，攻击者仍然可以伪造会话。

### 3. **Token**

- **存储位置：** 存储在客户端，通常保存在 LocalStorage 或 SessionStorage 中，或者通过 HTTP 请求头（如 `Authorization`）传递。
- **作用：** 用于在客户端和服务器之间传递验证信息。常用于无状态的认证机制，尤其在使用 RESTful API 和 OAuth2.0 时。
- **生命周期：** Token 一般是有时效性的，可能是几分钟到几小时。Token 的过期时间通常是服务器生成时设定的。
- **传输方式：** Token 通常通过 HTTP 请求头（`Authorization`）传递，也可以在 URL 中传递（不推荐）。Token 是无状态的，不依赖于服务器端存储。
- **安全性：** Token 通常采用加密算法（如 JWT）进行签名或加密，但也容易受到 CSRF 和 XSS 攻击。通常需要通过 HTTPS 传输，以避免在中间人攻击中被窃取。

### 关键区别：

- **存储位置：**
  - **Cookie** 存储在客户端（浏览器）。
  - **Session** 存储在服务器端，客户端只存储一个 Session ID。
  - **Token** 存储在客户端，通常使用 LocalStorage 或 SessionStorage。
- **状态管理：**

  - **Cookie 和 Session** 是有状态的，服务器需要保存信息。
  - **Token** 是无状态的，不需要服务器存储会话信息，便于分布式系统和负载均衡。

- **安全性：**
  - **Cookie** 可能容易受到 XSS 攻击，需使用 `HttpOnly` 和 `Secure` 属性来增强安全性。
  - **Session** 安全性较高，但如果 Session ID 泄露，可能会被盗用。
  - **Token** 可以采用加密和签名，但仍需要防止 XSS 和 CSRF 攻击。

### 使用场景：

- **Cookie** 适用于需要在浏览器和服务器之间持久保存少量数据的场景，如用户的偏好设置、认证状态等。
- **Session** 适用于服务器端需要管理用户状态的场景，通常用于传统的 Web 应用中，需要跟踪用户登录状态。
- **Token** 适用于分布式应用和 API 认证，尤其是在微服务架构或移动应用中，Token 是常用的无状态认证机制。

## 3、cookie localstorage sessionstorage 区别

**Cookie、LocalStorage 和 SessionStorage** 都是浏览器用于存储客户端数据的技术，但它们在存储位置、生命周期、容量等方面有显著的区别。以下是它们之间的主要差异：

### 1. **Cookie**

- **存储位置：** 存储在浏览器中，随每个 HTTP 请求一起发送。
- **容量：** 每个 Cookie 的最大容量通常为 4KB。
- **生命周期：**
  - Cookie 可以设置 `expires` 或 `max-age` 属性来指定过期时间。若未设置，则会在会话结束时（即浏览器关闭）过期。
- **作用域：**
  - Cookie 可以设置 `domain` 和 `path` 属性，指定哪些 URL 可以访问该 Cookie。
  - Cookie 会随每个 HTTP 请求自动发送到服务器，适用于服务器端与客户端之间的状态保持。
- **安全性：**
  - 可以设置 `Secure` 属性，使 Cookie 仅通过 HTTPS 发送，增加安全性。
  - 可以设置 `HttpOnly` 属性，防止 JavaScript 访问 Cookie，增强防止 XSS 攻击的安全性。
- **缺点：**
  - 每个请求都会自动发送 Cookie，这可能会影响性能，尤其是在大量 Cookie 的情况下。

### 2. **LocalStorage**

- **存储位置：** 存储在浏览器中，属于本地存储，数据只在客户端存在。
- **容量：** 每个域名通常允许存储 5MB 或更多的数据（浏览器有所不同）。
- **生命周期：**
  - LocalStorage 中的数据在浏览器关闭后仍然存在，直到被手动删除或通过 JavaScript 删除。
- **作用域：**
  - LocalStorage 只限于客户端，数据不会自动发送给服务器。
  - 它适用于存储长期需要的数据，比如用户设置、缓存等。
- **安全性：**
  - LocalStorage 通过 JavaScript 访问，可能受到 XSS 攻击的威胁。
  - 不会像 Cookie 那样随每个 HTTP 请求一起发送，因此更适合存储不需要与服务器通信的数据。

## 4、说一下浏览器缓存机制？

浏览器缓存机制是指浏览器通过保存静态资源（如图片、CSS、JavaScript 文件等）来减少网络请求，提升页面加载速度。它通过利用不同的缓存策略来判断是否重新请求资源或使用本地缓存。浏览器缓存分为两种类型：**强缓存** 和 **协商缓存**。

### 1. **强缓存（Strong Cache）**

强缓存指的是在缓存有效期内，浏览器直接使用缓存资源，不会发送请求到服务器。强缓存由 HTTP 响应头中的 `Cache-Control` 和 `Expires` 控制。

- **Cache-Control：**

  - `Cache-Control` 是强缓存的主要控制机制。它通过设置不同的指令来决定缓存的策略。
    - `public`：表示响应可以被任何缓存缓存，不限于浏览器缓存。
    - `private`：表示响应只能被单一用户的浏览器缓存，不能被共享缓存（如 CDN）缓存。
    - `no-store`：禁止缓存，浏览器每次都必须请求服务器获取最新数据。
    - `no-cache`：即使有缓存，也必须先向服务器验证缓存是否过期，才可以使用缓存。
    - `max-age=<seconds>`：指定缓存的最大有效时间，单位为秒。超过这个时间，缓存会过期。
    - `s-maxage=<seconds>`：与 `max-age` 相似，但仅影响共享缓存，如 CDN 缓存。

- **Expires：**
  - `Expires` 头部指定缓存资源的过期时间，过期后缓存会被清除。如果 `Expires` 存在且有效，则缓存一直有效直到该时间点。
  - 需要注意，`Expires` 使用的是绝对时间，而 `Cache-Control` 使用的是相对时间（`max-age`）。如果两者都存在，`Cache-Control` 的优先级更高。

### 2. **协商缓存（Conditional Cache）**

协商缓存指的是浏览器会发送请求到服务器，通过与服务器协商，判断是否使用本地缓存。服务器根据缓存资源的状态返回是否使用缓存。

- **Last-Modified 和 If-Modified-Since：**

  - **Last-Modified**：服务器返回资源的最后修改时间。
  - **If-Modified-Since**：当浏览器发起请求时，会在请求头中携带 `If-Modified-Since`，其值为上次缓存时服务器返回的 `Last-Modified` 时间。
  - 如果服务器返回的资源没有变化，服务器会返回 `304 Not Modified`，表示客户端可以继续使用本地缓存；如果资源有变化，服务器会返回新的资源和 `200 OK` 响应。

- **ETag 和 If-None-Match：**
  - **ETag**：服务器为每个资源生成一个唯一的标识符（通常是文件内容的哈希值），并通过 `ETag` 响应头返回。
  - **If-None-Match**：浏览器发送请求时，会在请求头中携带 `If-None-Match`，其值为上次缓存时服务器返回的 `ETag`。
  - 如果资源没有改变，服务器会返回 `304 Not Modified`；如果资源已更改，服务器返回新的资源和 `200 OK` 响应。

### 3. **缓存的工作流程**

1. **浏览器请求资源**：当浏览器第一次请求一个资源时，它会向服务器发送请求。
2. **强缓存判断**：服务器响应时，会包含 `Cache-Control` 或 `Expires` 头。如果资源在缓存有效期内，浏览器直接使用缓存，不向服务器发送请求。
3. **协商缓存判断**：
   - 如果强缓存失效，浏览器会根据 `Last-Modified` 或 `ETag` 信息向服务器发送请求，验证资源是否被修改。
   - 服务器根据条件判断资源是否有更新。如果没有变化，返回 `304 Not Modified`，浏览器则使用缓存资源；如果有变化，返回新的资源。

### 4. **缓存的清理与失效**

- 浏览器的缓存机制是有一定的失效时间的，超出有效期后，缓存会自动失效并从缓存中删除。
- 一些情况如手动清理缓存、强制刷新（Ctrl + F5）会导致缓存被清除。

### 总结

- **强缓存** 让浏览器直接使用缓存，不再请求服务器。
- **协商缓存** 则是通过与服务器的通信来验证缓存是否有效，只有在缓存失效时才重新加载资源。

浏览器缓存机制能够有效减少资源加载时间，提高页面响应速度，但需要合理配置缓存策略，确保客户端和服务器之间的数据一致性和安全性。

