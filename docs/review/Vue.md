<!-- @format -->

# vue 热门考题

## 什么是 Vue 中的 slot？它有什么作用？

在 Vue.js 中，`slot` 是一种用来分发内容的机制，允许开发者在父组件中定义内容，并将其插入到子组件的特定位置。这种机制使得组件更加灵活和可复用。

### 作用：

1. **分发内容**：父组件可以通过 `slot` 将内容插入到子组件的特定位置。
2. **提高复用性**：`slot` 让组件可以接收不同的内容，适应更多场景。
3. **保持结构化**：通过具名插槽（`named slot`），可以更加明确和灵活地组织内容。
4. **动态渲染**：根据需要动态改变插槽的内容，提高交互性。

---

### Slot 的类型：

#### 1. **默认插槽（Default Slot）**

- 子组件中使用 `<slot>` 标签作为占位符，父组件未指定具体的 `name` 时，默认内容会插入到该位置。

```vue
<!-- 子组件 -->
<template>
  <div>
    <slot>默认内容</slot>
  </div>
</template>

<!-- 父组件 -->
<ChildComponent>
  <p>插入的内容</p>
</ChildComponent>
```

**输出结果**：

```html
<div>
  <p>插入的内容</p>
</div>
```

#### 2. **具名插槽（Named Slot）**

- 通过 `name` 属性为插槽命名，用于将内容插入到指定的插槽中。

```vue
<!-- 子组件 -->
<template>
  <header>
    <slot name="header">默认头部</slot>
  </header>
  <main>
    <slot>默认主体</slot>
  </main>
</template>

<!-- 父组件 -->
<ChildComponent>
  <template #header>
    <h1>自定义头部</h1>
  </template>
  <p>自定义主体</p>
</ChildComponent>
```

**输出结果**：

```html
<header>
  <h1>自定义头部</h1>
</header>
<main>
  <p>自定义主体</p>
</main>
```

#### 3. **作用域插槽（Scoped Slot）**

- 用于将子组件的数据传递给插槽中的内容，从而实现更加动态的内容渲染。

```vue
<!-- 子组件 -->
<template>
  <ul>
    <slot :items="items"></slot>
  </ul>
</template>
<script>
export default {
  data() {
    return {
      items: ['苹果', '香蕉', '橙子'],
    }
  },
}
</script>

<!-- 父组件 -->
<ChildComponent>
  <template #default="{ items }">
    <li v-for="item in items" :key="item">{{ item }}</li>
  </template>
</ChildComponent>
```

**输出结果**：

```html
<ul>
  <li>苹果</li>
  <li>香蕉</li>
  <li>橙子</li>
</ul>
```

---

### 总结：

- **`slot` 是 Vue 中一种强大的内容分发机制，支持父子组件之间的灵活内容传递**。
- 默认插槽、具名插槽和作用域插槽适应了多种需求，使得组件开发更加灵活和动态。

## 在 Vue 渲染模板时，如何保留模板中的 HTML 注释？

在 Vue.js 中，默认情况下，编译模板时会移除 HTML 注释。如果你想要保留这些注释，可以使用 `v-html` 指令来手动插入包含注释的 HTML 字符串，或者使用自定义的渲染函数（render function）和虚拟 DOM。

但是，直接在单文件组件（SFCs）或字符串模板中写的 HTML 注释会被编译过程移除。这是因为 Vue 的模板编译器默认配置是不保留注释节点的。

如果你想在开发过程中留下注释用于调试或其他目的，你可以通过以下几种方式实现：

1. **使用 `v-html` 插入包含注释的 HTML**:
   你可以将 HTML 注释作为字符串绑定到 `v-html` 指令上，这样它将会被插入到最终的 DOM 中。

   ```html
   <div v-html="'<!-- This is a comment -->'"></div>
   ```

2. **使用 JavaScript 注释**:
   在 `<script>` 标签内的代码中使用标准的 JavaScript 注释 (`//` 或者 `/* */`)，这些不会出现在最终的渲染结果中，但可以在源码中保留下来供开发者查看。

3. **在构建工具中配置**:
   如果你使用的是 Webpack 或其他构建工具，你可以尝试修改其配置以改变对 HTML 注释的处理方式。例如，在使用 vue-loader 时，你可以调整其选项来控制是否保留注释。

4. **使用特殊的标记代替注释**:
   有时候，为了在生产环境中移除这些信息，可以用特定的标记或数据属性来替代注释，并在需要的时候通过 CSS 或 JavaScript 来隐藏或显示它们。

5. **自定义渲染函数**:
   如果你需要更复杂的逻辑，你可以选择使用 Vue 的渲染函数（render function），这允许你更加精细地控制 VNode 的创建，包括添加注释节点。

请记住，HTML 注释通常不会对用户可见，而且对于性能的影响很小，但在生产环境中可能还是希望移除不必要的注释以减少页面体积。因此，确保你的选择符合项目的实际需求。

## 什么是前端异步编程？请介绍一下 Promise、async/await 在 JavaScript 中的作用及用法。

前端异步编程是指在程序运行过程中，可以执行某些耗时的操作（如网络请求、文件读取或定时器）而不阻塞主线程，使用户界面依然保持响应的编程方式。在 JavaScript 中，异步操作是非常常见的，尤其是在处理 I/O 操作时（如 AJAX 请求、文件读取等）。

### 异步编程的典型方案：Promise 和 async/await

##### **1.回调函数（Callback Functions）**：

这是最基本的异步编程模式，通过将一个函数作为参数传递给另一个函数，在异步操作完成后调用该函数。但是，当多个异步操作嵌套时，容易导致所谓的“回调地狱”。

#### **2. Promise**

**Promise** 是 ES6 引入的一种用于处理异步操作的对象，它可以更优雅地处理回调函数嵌套的问题（也称“回调地狱”）。Promise 代表的是一个尚未完成的操作及其最终结果。

##### **基本概念**

- **三种状态**：

  1. **Pending（进行中）**：初始状态，操作尚未完成。
  2. **Fulfilled（已完成）**：操作成功完成，返回一个结果值。
  3. **Rejected（已失败）**：操作失败，返回一个原因。

- **状态不可逆**：Promise 一旦从 `Pending` 状态变为 `Fulfilled` 或 `Rejected`，就不可更改。

##### **用法**

创建一个 Promise：

```javascript
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = true // 模拟成功或失败
    if (success) {
      resolve('操作成功！')
    } else {
      reject('操作失败！')
    }
  }, 1000)
})

// 使用 then 和 catch 处理
promise
  .then((result) => {
    console.log(result) // 输出: 操作成功！
  })
  .catch((error) => {
    console.error(error) // 输出: 操作失败！
  })
  .finally(() => {
    console.log('操作结束。')
  })
```

##### **Promise 链式调用**

通过链式调用可以处理多个异步任务：

```javascript
new Promise((resolve) => {
  resolve(1)
})
  .then((value) => {
    console.log(value) // 输出: 1
    return value + 1
  })
  .then((value) => {
    console.log(value) // 输出: 2
    return value + 1
  })
  .catch((error) => {
    console.error(error)
  })
```

##### **常用方法**

1. **`Promise.all()`**：等待多个 Promise 全部完成。
2. **`Promise.race()`**：只要有一个 Promise 完成，就返回其结果。
3. **`Promise.allSettled()`**：等待所有 Promise 完成，无论成功还是失败。
4. **`Promise.any()`**：只要有一个 Promise 成功，就返回其结果。

---

#### **3. async/await**

`async/await` 是 ES2017 引入的语法糖，基于 Promise，目的是让异步代码看起来像同步代码，提升代码的可读性。

##### **用法**

- **`async`**：用于声明一个异步函数，返回一个 Promise。
- **`await`**：用于等待一个 Promise 的结果，必须在 `async` 函数中使用。

示例：

```javascript
// 定义一个异步函数
async function fetchData() {
  try {
    const response = await new Promise((resolve, reject) => {
      setTimeout(() => resolve('数据加载成功！'), 1000)
    })
    console.log(response) // 输出: 数据加载成功！
  } catch (error) {
    console.error(error) // 捕获错误
  } finally {
    console.log('操作完成。')
  }
}

fetchData()
```

##### **结合多个异步操作**

```javascript
async function process() {
  const step1 = await new Promise((resolve) =>
    setTimeout(() => resolve('步骤 1 完成'), 1000),
  )
  console.log(step1)

  const step2 = await new Promise((resolve) =>
    setTimeout(() => resolve('步骤 2 完成'), 1000),
  )
  console.log(step2)

  console.log('所有步骤完成！')
}

process()
// 输出:
// 步骤 1 完成
// 步骤 2 完成
// 所有步骤完成！
```

---

### Promise vs async/await

| 特性             | **Promise**                  | **async/await**            |
| ---------------- | ---------------------------- | -------------------------- |
| **代码可读性**   | 嵌套较多时可能不够直观       | 更加接近同步代码，清晰明了 |
| **错误处理**     | 使用 `.catch()` 处理错误     | 使用 `try/catch` 处理错误  |
| **控制流复杂性** | 链式调用适合简单的异步操作链 | 更适合复杂的异步流程       |
| **学习曲线**     | 初学者需要理解 Promise 概念  | 基于 Promise，更易学习     |

---

### 总结

1. **Promise**：提供了一种标准化的方式来处理异步操作，避免“回调地狱”。
2. **async/await**：对 Promise 进行了封装，提供了更加直观的语法，适合复杂的异步逻辑。
3. **实际开发建议**：推荐使用 `async/await`，并结合 `try/catch` 处理错误，代码更简洁且易于维护。

## 如何基于 Vue Router 实现动态切换导航栏标题？请详细描述一下实现的过程。

在 Vue 应用中，使用 **Vue Router** 可以轻松实现根据当前路由动态切换导航栏标题。这种需求在多页面应用中非常常见，比如在不同的页面中显示不同的标题。

以下是实现动态切换导航栏标题的详细步骤：

---

### 1. **定义路由时配置标题**

在 Vue Router 的路由配置中，为每个路由添加一个 `meta` 字段，用于定义页面的标题。

示例代码：

```javascript
// router/index.js
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
    meta: { title: '首页' }, // 定义标题
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue'),
    meta: { title: '关于我们' }, // 定义标题
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('@/views/Contact.vue'),
    meta: { title: '联系我们' }, // 定义标题
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
```

---

### 2. **监听路由变化并设置标题**

利用 Vue Router 提供的 `router.beforeEach` 钩子，每次路由跳转时，动态设置页面的标题。

```javascript
// main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

// 动态设置标题
router.beforeEach((to, from, next) => {
  // 获取当前路由的标题
  const title = to.meta.title
  if (title) {
    document.title = title // 设置页面标题
  }
  next() // 继续导航
})

app.use(router).mount('#app')
```

---

### 3. **动态更新导航栏的标题**

假设我们有一个导航栏组件，需要根据当前路由动态切换标题。可以通过 `useRoute` 或 Vue Router 的全局钩子实现。

#### 示例代码：

```vue
<template>
  <header class="navbar">
    <h1>{{ currentTitle }}</h1>
  </header>
</template>

<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

export default {
  name: 'Navbar',
  setup() {
    const route = useRoute()

    // 动态获取当前标题
    const currentTitle = computed(() => route.meta.title || '默认标题')

    return {
      currentTitle,
    }
  },
}
</script>

<style>
.navbar {
  padding: 16px;
  background-color: #42b983;
  color: white;
  text-align: center;
}
</style>
```

---

### 4. **扩展功能：支持动态标题模板**

如果希望标题包含动态信息（例如添加应用名称），可以在 `beforeEach` 钩子中进行扩展。

```javascript
router.beforeEach((to, from, next) => {
  const baseTitle = '我的应用'
  const pageTitle = to.meta.title
  document.title = pageTitle ? `${pageTitle} - ${baseTitle}` : baseTitle
  next()
})
```

---

### 5. **最终结果**

1. **页面标题**：浏览器页面的标题会根据路由动态切换。
2. **导航栏标题**：应用内部的导航栏标题也会动态切换。
3. **扩展性强**：可以通过 `meta` 配置字段，进一步添加如权限、描述等功能。

---

### 小提示

- **性能优化**：对于复杂场景，避免频繁监听全局路由变化，可以通过组合式 API 的 `watch` 精准监听特定路由参数。
- **SSR 支持**：在服务端渲染（SSR）中，也可以通过路由的 `meta` 字段设置页面标题。

通过上述步骤，你可以实现一个基于 Vue Router 动态切换导航栏标题的完整解决方案。

## 项目前端使用了 Vant UI 组件库，请列举几个你用到的 Vant UI 组件并介绍它们的用途？

Vant 是一个轻量、简洁的移动端 Vue 组件库，由有赞前端团队开发。它提供了丰富的组件，帮助开发者快速搭建高性能的移动应用界面。以下是几个常见的 Vant UI 组件及其用途：

1. **Button 按钮**:

   - 用于触发事件或操作，如提交表单、打开对话框等。Vant 的 Button 组件支持多种样式和尺寸，可以满足不同场景下的需求。

2. **Cell 单元格**:

   - Cell 是列表项的基础组件，常用于展示条目信息。它可以包含标题、图标、描述文字以及右侧箭头等元素，通常与 `CellGroup` 组件一起使用来构建分组的列表。

3. **Popup 弹出层**:

   - Popup 是一个可自定义内容的浮层组件，适用于需要临时显示一些额外信息或者交互控件的情况，比如选择器、菜单等。

4. **Tab 标签页**:

   - Tab 组件允许用户在多个面板之间进行切换，非常适合用来组织和导航大量内容。通过 `Tabs` 和 `Tab` 组件组合使用，可以创建水平或垂直排列的标签页。

5. **Field 输入框**:

   - Field 提供了文本输入、密码输入等功能，并且可以轻松集成验证规则。它是表单中最基本也是最常用的组件之一。

6. **Picker 选择器**:

   - Picker 是一种下拉选择器，用户可以从预定义的选项中选择一项或多项。它支持日期选择、时间选择、地区选择等多种类型。

7. **Toast 轻提示**:

   - Toast 用于显示简短的消息提示，不会打断用户的操作流程。它可以用来通知用户某些操作的结果（成功/失败）或者其他重要信息。

8. **Loading 加载**:

   - Loading 组件用来表示正在加载中的状态，可以放置在整个页面中央，也可以嵌入到其他组件内部作为局部加载指示。

9. **Dialog 对话框**:

   - Dialog 是一个模态窗口，用来请求用户确认某个动作或者输入必要的信息。它通常包含标题、正文和按钮。

10. **Icon 图标**:
    - Icon 组件提供了一套丰富的矢量图标集合，可以直接在项目中使用，简化了图标的管理和使用过程。

这些只是 Vant 中的一部分组件，实际上它还涵盖了更多种类的组件以适应各种业务需求。每个组件都设计得非常灵活，可以根据实际应用场景调整其属性和样式。此外，Vant 还提供了详细的文档和示例代码，使得开发者能够快速上手并高效地构建应用。

## 请介绍一下 Vue 3 的新特性和与 Vue 2 相比有哪些变化？

**Vue 3** 是对 Vue 2 的全面升级，不仅引入了新的功能和性能优化，还重新设计了架构，以便更好地支持大型应用程序的开发。以下是 Vue 3 的主要新特性以及与 Vue 2 的关键变化：

---

### 1. **性能提升**

Vue 3 的性能得到了显著优化，尤其是在以下方面：

- **编译时间更快**：基于 Proxy 的响应式系统减少了多余的依赖跟踪。
- **内存占用更小**：树形结构组件优化了渲染过程。
- **更快的渲染速度**：Virtual DOM 的重写提升了渲染性能。

---

### 2. **基于 Proxy 的响应式系统**

- **变化**：Vue 2 使用 `Object.defineProperty` 实现响应式，而 Vue 3 使用了 ES6 的 `Proxy`。
- **优势**：
  1. 支持对对象属性的动态添加和删除（Vue 2 无法响应新增属性）。
  2. 支持响应数组的索引操作和长度变化。
  3. 无需依赖 `$set` 和 `$delete` 方法。

示例：

```javascript
const state = reactive({ name: 'Vue' })
state.name = 'Vue 3' // 响应式更新
state.newProperty = 'New' // 响应式添加新属性
```

---

### 3. **Composition API**

- **变化**：新增的 Composition API 提供了更灵活的功能组合方式，相较于 Vue 2 的 Options API，更适合大型复杂应用。
- **主要功能**：
  1. `setup`：用于定义组件逻辑，是 Composition API 的入口。
  2. `reactive` 和 `ref`：实现响应式数据。
  3. `computed` 和 `watch`：增强数据处理和监听。
  4. `provide` 和 `inject`：简化跨组件通信。

示例：

```javascript
import { ref, computed } from 'vue'

export default {
  setup() {
    const count = ref(0)
    const double = computed(() => count.value * 2)

    function increment() {
      count.value++
    }

    return { count, double, increment }
  },
}
```

---

### 4. **Teleport（传送门）**

- **变化**：Vue 3 引入了 `Teleport` 组件，用于将 DOM 节点渲染到组件外的指定位置（例如全局的 `body`）。
- **用途**：常用于模态框、弹窗等不应受组件父级 DOM 限制的场景。

示例：

```vue
<template>
  <teleport to="body">
    <div class="modal">模态框内容</div>
  </teleport>
</template>
```

---

### 5. **Fragment（片段）**

- **变化**：Vue 3 支持在组件中返回多个根节点，而 Vue 2 强制要求一个根节点。
- **优势**：组件模板更加简洁，减少不必要的包装标签。

示例：

```vue
<template>
  <div>标题</div>
  <p>描述内容</p>
</template>
```

---

### 6. **Suspense（异步组件处理）**

- **变化**：Vue 3 引入了 `Suspense`，用于处理异步组件加载时的占位内容。
- **用途**：为异步内容（如 API 数据加载）提供更好的用户体验。

示例：

```vue
<template>
  <suspense>
    <template #default>
      <AsyncComponent />
    </template>
    <template #fallback>
      <div>加载中...</div>
    </template>
  </suspense>
</template>
```

---

### 7. **更好的 TypeScript 支持**

- Vue 3 原生支持 TypeScript，类型定义更加完善。
- 更适合构建大型项目，开发体验更友好。

---

### 8. **全新的自定义渲染器 API**

- **变化**：Vue 3 提供了 `createRenderer`，支持自定义渲染目标（如绘图库、游戏引擎）。
- **用途**：开发 WebGL、Canvas 等非 DOM 环境的应用。

---

### 9. **Tree Shaking 支持**

- Vue 3 的模块设计更加适合 Tree Shaking。
- 未使用的代码会被自动移除，减小打包体积。

---

### 10. **其他改进**

- **全局 API 的变化**：
  - `Vue.component`、`Vue.use` 等迁移到 `app` 实例。
  - 全局配置变为链式调用，如 `app.config.globalProperties`。
- **事件监听器的合并策略**：支持多个同名事件监听器。

---

### Vue 3 和 Vue 2 的对比总结

| **特性**          | **Vue 2**               | **Vue 3**                            |
| ----------------- | ----------------------- | ------------------------------------ |
| 响应式实现        | `Object.defineProperty` | `Proxy`                              |
| API 风格          | Options API             | Options API + Composition API        |
| 根节点限制        | 只能有一个根节点        | 支持多个根节点（Fragment）           |
| DOM 操作          | 不支持 Teleport         | 支持 Teleport                        |
| 异步内容处理      | 需要手动编写逻辑        | 支持 Suspense                        |
| TypeScript 支持   | 基础支持                | 原生支持，类型定义更完整             |
| Tree Shaking 支持 | 较弱                    | 强支持，按需引入模块                 |
| 性能              | 渲染较快                | 性能更优（内存占用更小、编译更高效） |

---

### 总结

Vue 3 的新特性主要围绕性能优化、灵活性提升和开发体验改进。对于简单项目，Vue 3 的 Options API 保持了与 Vue 2 的一致性；对于复杂项目，Composition API 和其他新功能显著提高了代码的组织能力和扩展性。

**迁移建议**：

- 新项目推荐直接使用 Vue 3。
- 旧项目可以根据需要逐步迁移至 Vue 3，官方提供了[迁移指南](https://v3.vuejs.org/guide/migration/introduction.html)。

## Vue.js 中的组件通信方式有哪些？

### vue2.0 组件通信方式

在 Vue.js 中，组件之间的通信是构建复杂用户界面的核心部分。Vue 提供了多种机制来实现组件间的通信，包括父子组件间的通信、兄弟组件间的通信以及跨层级的通信。以下是几种常见的组件通信方式：

### 1. Props 和 Events

这是最基础也是最常用的父子组件通信方式。

- **Props**：父组件通过 `props` 向子组件传递数据。

  ```vue
  <!-- ParentComponent.vue -->
  <template>
    <ChildComponent :message="parentMessage" />
  </template>

  <script>
  export default {
    data() {
      return {
        parentMessage: 'Hello from parent',
      }
    },
  }
  </script>
  ```

- **Events ($emit)**：子组件可以通过 `$emit` 触发自定义事件，并向上传递数据给父组件。

  ```vue
  <!-- ChildComponent.vue -->
  <template>
    <button @click="sendMessage">Click me</button>
  </template>

  <script>
  export default {
    methods: {
      sendMessage() {
        this.$emit('child-event', 'Hello from child')
      },
    },
  }
  </script>
  ```

  父组件可以监听这些事件：

  ```vue
  <!-- ParentComponent.vue -->
  <template>
    <ChildComponent @child-event="handleEvent" />
  </template>

  <script>
  export default {
    methods: {
      handleEvent(message) {
        console.log(message)
      },
    },
  }
  </script>
  ```

### 2. Provide / Inject

用于祖辈组件向后代组件提供数据，不局限于直接的父子关系。

```vue
<!-- AncestorComponent.vue -->
<template>
  <div>
    <ChildComponent />
  </div>
</template>

<script>
export default {
  provide() {
    return {
      祖先提供的属性或方法,
    }
  },
}
</script>
```

后代组件使用 `inject` 接收：

```vue
<!-- DescendantComponent.vue -->
<script>
export default {
  inject: ['祖先提供的属性或方法'],
}
</script>
```

### 3. Vuex (状态管理模式)

对于需要共享状态的应用，尤其是大型应用，推荐使用 Vuex 来集中管理状态。Vuex 是一个专门为 Vue 应用设计的状态管理模式和库，它采用集中式存储管理应用的所有组件的状态，并以规则保证以可预测的方式发生变化。

### 4. Event Bus (事件总线)

适用于非父子组件之间的通信。你可以创建一个空的 Vue 实例作为中央事件中心，任何组件都可以向这个实例派发事件或者监听来自它的事件。

```javascript
// eventBus.js
import Vue from 'vue'
export const EventBus = new Vue()
```

然后，在组件中使用：

```vue
<!-- ComponentA.vue -->
<script>
import { EventBus } from './eventBus'

export default {
  mounted() {
    EventBus.$emit('id-selected', this.id)
  },
}
</script>
```

```vue
<!-- ComponentB.vue -->
<script>
import { EventBus } from './eventBus'

export default {
  created() {
    EventBus.$on('id-selected', (id) => {
      // 执行相应逻辑
    })
  },
}
</script>
```

### 5. Refs

`refs` 主要用于获取对子组件的引用，可以直接访问子组件实例或其 DOM 节点。这种方式主要用于操作子组件的方法调用或者直接修改子组件的数据。

```vue
<!-- ParentComponent.vue -->
<template>
  <ChildComponent ref="childComponent" />
</template>

<script>
export default {
  mounted() {
    this.$refs.childComponent.someMethod()
  },
}
</script>
```

### 6. Global Mixins 或 Plugins

如果你想让某些功能在整个应用程序中可用，可以考虑创建全局混入（mixin）或插件（plugin）。不过要注意，滥用 global mixins 可能会导致代码难以维护。

每种通信方式都有其适用场景，选择合适的通信模式取决于你的具体需求和项目的规模。随着 Vue 3 的发布，Composition API 的引入为组合逻辑提供了更加灵活和强大的工具，进一步丰富了组件通信的选择。
