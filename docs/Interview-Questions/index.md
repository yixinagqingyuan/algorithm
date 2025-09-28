# 重点英语单词复盘

template、 foreach、  pop 尾部删除删除  push 插入一个   unshift 头部插入一个  shift 删除一个头部 


# 真题 一Vue 组件设计的窍门

设计优秀的 Vue 组件需要考虑多个方面，以下是一些关键的窍门和最佳实践：

## 1. 组件职责单一化
- **单一职责原则**：每个组件只负责一个功能或业务逻辑
- **可复用性**：设计时考虑组件在不同场景下的复用可能
- **粒度适中**：避免组件过大或过小，保持合理的复杂度

## 2. Props 设计
- **明确的 Props 定义**：使用 `type`、`default`、`required`、`validator` 等属性
- **Props 命名规范**：使用 camelCase，语义清晰
- **避免直接修改 Props**：Props 应该是只读的，通过事件向父组件传递变化

```javascript
props: {
  title: {
    type: String,
    required: true
  },
  size: {
    type: String,
    default: 'medium',
    validator: value => ['small', 'medium', 'large'].includes(value)
  }
}
```

## 3. 事件设计
- **语义化事件名**：使用清晰的动词，如 `@click`、`@change`、`@submit`
- **事件参数规范**：传递必要的数据，避免传递整个对象
- **自定义事件**：使用 `$emit` 向父组件通信

## 4. 插槽 (Slots) 的合理使用
- **具名插槽**：为不同区域提供灵活的内容定制
- **作用域插槽**：向父组件暴露子组件的数据
- **默认内容**：为插槽提供合理的默认内容

```vue
<template>
  <div class="card">
    <header>
      <slot name="header">默认标题</slot>
    </header>
    <main>
      <slot :data="internalData"></slot>
    </main>
  </div>
</template>
```

## 5. 样式设计
- **Scoped CSS**：使用 `<style scoped>` 避免样式污染
- **CSS Modules**：更严格的样式隔离
- **CSS 变量**：提供主题定制能力
- **BEM 命名规范**：保持样式类名的一致性

## 6. 组件通信
- **父子通信**：Props down, Events up
- **兄弟组件**：通过共同父组件或事件总线
- **跨层级通信**：使用 `provide/inject` 或 Vuex
- **避免深层嵌套传递**：超过 2-3 层考虑状态管理

## 7. 生命周期优化
- **合理使用生命周期钩子**：在正确的时机执行操作
- **清理副作用**：在 `beforeDestroy` 中清理定时器、事件监听器
- **异步操作处理**：避免在已销毁组件中执行回调

## 8. 性能优化
- **计算属性**：使用 `computed` 缓存复杂计算
- **条件渲染**：合理使用 `v-if` 和 `v-show`
- **列表渲染**：为 `v-for` 提供唯一的 `key`
- **组件懒加载**：大型组件使用动态导入

## 9. 可访问性 (A11y)
- **语义化标签**：使用正确的 HTML 标签
- **ARIA 属性**：为屏幕阅读器提供信息
- **键盘导航**：支持 Tab 键和方向键操作
- **焦点管理**：合理的焦点顺序和视觉反馈

## 10. 文档和测试
- **组件文档**：清晰的 API 说明和使用示例
- **PropTypes 注释**：详细的参数说明
- **单元测试**：覆盖主要功能和边界情况
- **Storybook**：组件展示和交互测试

## 11. 组件组织结构
```
components/
├── BaseButton/
│   ├── index.vue
│   ├── BaseButton.vue
│   ├── BaseButton.test.js
│   └── README.md
└── UserCard/
    ├── index.vue
    ├── UserCard.vue
    ├── UserAvatar.vue
    └── UserInfo.vue
```

## 12. 设计系统思维
- **原子化设计**：基础组件 → 复合组件 → 页面模板
- **一致性**：统一的设计语言和交互模式
- **可扩展性**：考虑未来功能扩展的可能性
- **主题系统**：支持多主题切换

遵循这些窍门可以帮助你设计出更加健壮、可维护和用户友好的 Vue 组件。记住，好的组件设计是一个迭代的过程，需要在实践中不断优化和改进。
        
          
# 真题二 Vue 2 与 Vue 3 的主要区别

## 🚀 性能提升

### 1. 响应式系统重写
- **Vue 2**: 使用 `Object.defineProperty()` 实现响应式
- **Vue 3**: 使用 `Proxy` 重写响应式系统
  - 更好的性能表现
  - 支持数组索引和 length 属性的监听
  - 支持 Map、Set、WeakMap、WeakSet 等数据结构
  - 更精确的依赖收集

### 2. 编译优化
- **静态提升**: 静态节点会被提升到渲染函数外部
- **补丁标记**: 动态节点会被标记，减少不必要的比较
- **树摇优化**: 未使用的功能会被移除
- **内联组件 props**: 减少不必要的组件更新

### 3. 包体积优化
- Vue 3 核心库体积减少约 41%
- 支持 Tree-shaking，按需引入功能

## 🔧 API 变化

### 1. Composition API
```javascript
// Vue 2 - Options API
export default {
  data() {
    return {
      count: 0
    }
  },
  methods: {
    increment() {
      this.count++
    }
  }
}

// Vue 3 - Composition API
import { ref } from 'vue'
export default {
  setup() {
    const count = ref(0)
    const increment = () => {
      count.value++
    }
    return {
      count,
      increment
    }
  }
}
```

### 2. 生命周期钩子变化
```javascript
// Vue 2
beforeCreate -> 使用 setup()
created -> 使用 setup()
beforeMount -> onBeforeMount
mounted -> onMounted
beforeUpdate -> onBeforeUpdate
updated -> onUpdated
beforeDestroy -> onBeforeUnmount
destroyed -> onUnmounted
```

### 3. 全局 API 变化
```javascript
// Vue 2
import Vue from 'vue'
Vue.config.productionTip = false
Vue.use(VueRouter)
new Vue({
  render: h => h(App)
}).$mount('#app')

// Vue 3
import { createApp } from 'vue'
const app = createApp(App)
app.use(VueRouter)
app.mount('#app')
```

## 🎯 新特性

### 1. Fragment（片段）
```vue
<!-- Vue 2 需要根元素 -->
<template>
  <div>
    <header>...</header>
    <main>...</main>
  </div>
</template>

<!-- Vue 3 支持多个根节点 -->
<template>
  <header>...</header>
  <main>...</main>
</template>
```

### 2. Teleport（传送门）
```vue
<template>
  <div>
    <h3>组件内容</h3>
    <teleport to="body">
      <div class="modal">模态框内容</div>
    </teleport>
  </div>
</template>
```

### 3. Suspense（异步组件）
```vue
<template>
  <Suspense>
    <template #default>
      <AsyncComponent />
    </template>
    <template #fallback>
      <div>Loading...</div>
    </template>
  </Suspense>
</template>
```

### 4. 多个 v-model
```vue
<!-- Vue 3 支持多个 v-model -->
<UserName
  v-model:first-name="firstName"
  v-model:last-name="lastName"
/>
```

## 🔄 响应式 API 对比

### Vue 2 响应式限制
```javascript
// 无法检测数组索引变化
this.items[0] = newValue // 不会触发更新

// 无法检测对象属性添加/删除
this.obj.newProp = 'value' // 不会触发更新

// 需要使用 Vue.set
Vue.set(this.items, 0, newValue)
Vue.set(this.obj, 'newProp', 'value')
```

### Vue 3 响应式改进
```javascript
// 直接支持数组索引和对象属性变化
state.items[0] = newValue // 会触发更新
state.obj.newProp = 'value' // 会触发更新
```

## 📦 TypeScript 支持

### Vue 2
- 需要额外配置
- 类型推断有限
- 需要使用 vue-class-component

### Vue 3
- 原生 TypeScript 支持
- 更好的类型推断
- Composition API 天然支持 TypeScript

```typescript
// Vue 3 + TypeScript
import { ref, computed } from 'vue'

interface User {
  name: string
  age: number
}

export default {
  setup() {
    const user = ref<User>({ name: 'John', age: 30 })
    const greeting = computed(() => `Hello, ${user.value.name}!`)
    
    return { user, greeting }
  }
}
```

## 🛠 开发工具

### Vue 2
- Vue DevTools 5.x
- Vue CLI

### Vue 3
- Vue DevTools 6.x（更强大的调试功能）
- Vite（更快的构建工具）
- Vue CLI 5.x（支持 Vue 3）

## 🔧 迁移注意事项

### 破坏性变化
1. **全局 API 变化**: `Vue.xxx` → `app.xxx`
2. **v-model 变化**: 默认 prop 从 `value` 改为 `modelValue`
3. **事件 API**: `$on`、`$off`、`$once` 被移除
4. **过滤器**: Filters 被移除，建议使用计算属性
5. **内联模板**: `inline-template` 被移除

### 兼容性
- Vue 3 不向后兼容 Vue 2
- 可以使用 `@vue/compat` 进行渐进式迁移
- 大部分 Vue 2 生态系统需要升级

## 📊 性能对比

| 指标     | Vue 2 | Vue 3    | 提升      |
| -------- | ----- | -------- | --------- |
| 包体积   | ~34KB | ~20KB    | 41% ↓     |
| 初始渲染 | 基准  | 1.3-2x   | 30-100% ↑ |
| 更新性能 | 基准  | 1.3-6.1x | 30-510% ↑ |
| 内存使用 | 基准  | 54%      | 46% ↓     |

## 🎯 选择建议

### 选择 Vue 2 的情况
- 现有大型项目，迁移成本高
- 依赖的第三方库尚未支持 Vue 3
- 团队对 Vue 2 更熟悉

### 选择 Vue 3 的情况
- 新项目开发
- 需要更好的性能
- 需要 TypeScript 支持
- 想要使用最新特性

Vue 3 是 Vue.js 的未来方向，提供了更好的性能、更强的功能和更好的开发体验。对于新项目，强烈建议使用 Vue 3。
        
# babel

### Babel 原理的几个阶段
- **配置解析阶段**
  - 读取并合并配置（`babel.config.*`、`.babelrc*`、`package.json#babel`、`env` 条件等）
  - 解析目标环境（`targets`/`browserslist`），展开 `presets` 与 `plugins` 的执行序列

- **解析（Parse）**
  - 词法分析：把源码切成 token
  - 语法分析：根据语法插件（如 TypeScript、JSX、装饰器等）将 token 构建成 AST（Babel AST/ESTree 变体）
  - 附带位置信息、注释等元数据，便于后续处理与源码映射

- **转换（Transform）**
  - 遍历 AST（visitor 模式），按插件顺序对节点做增删改（语法降级、语义改写、提取/合并作用域、插入 helper 等）
  - `@babel/preset-env` 基于 `targets` 选择需要的语法转换
  - Polyfill 策略：
    - `useBuiltIns: "usage"+core-js`：按用量注入 polyfill
    - 或 `@babel/plugin-transform-runtime`：以 runtime 形式复用 helpers/生成器，减少重复内联
  - 模块/语法等转换可能多轮进行，直到得到目标 AST

- **生成（Generate）**
  - 将 AST 输出为目标代码字符串
  - 生成/合并 Source Map，保持调试可用
  - 按需保留或插入 `helpers`、`import` 等

简述：Babel 从配置解析出执行计划，先把源码解析为 AST，再由一系列插件对 AST 做变换，最后把变换后的 AST 生成目标代码与 Source Map。

关键词，token 词法分析，语法分析，状态机，ast 转换语法降级 加入polyfill， 生成目标代码


### JavaScript Bridge

关键词桥梁，说白了就是给 js 和 app 直接搞一个桥梁

1、直接注入，给 webview 中注入方法，通过回调的方式，或者 app 直接调用webview 的方式直接通信
2、URL Scheme 拦截 只能单向通信也就是 web 调用 native，而且有一些长度限制所以一般是用作一些库的降级处理
3、Prompt/Alert 拦截，拦截通过拦截 WebView 的 JavaScript 弹窗实现通信 用户体验差，早被淘汰掉了，

我们这边都是webview 中注入方法 通过入侵 webveiw 来实现的，封装一个库来解决，我们只需要引入就可以了，我看了它的源码，他其实是通过一个核心函数invoke，实现发布订阅这这种方式来实现的，这样一来我们就能避免全局污染这种的，这个对象其实是包在当前初始化的这个实例里头的。方便统一管理，统一初始化




#### 今天忽然发现有个地区网页加载时间缓慢，你会如何排查

控通常不分地区，有独立的地区监控，要么是分地区服务，要么是超大规模应用。先从自身找原因，那要先看看是不是这个地区在做活动，活动服务有没有瓶颈，一顿分析之后没问题，那从别人身上找原因，看地区dns是否延迟高，cdn是否延迟高之类的

单页可能受限网络，网络可能分 cdn抖动， dns解析异常，cos持续回源
从服务的话，可能是某个地区流量调度到某个机器，比如北京阿里集群，这个集群中的服务存在下游请求阻塞
数据库的话，可能特定地区数据不同或者部署节点不同，导致的单边服务压力不够


网络问题存在滞后性，举个例子哈，我们用阿里云的cdn，阿里云cdn故障，开始切流，但是业务收到干扰，阿里云认为我已经兜底切流了，所以他可能不会通知每个用户。可能需要反向看一下，我们发现某个地区网络异常，cdn失败，重定向，可能需要问下阿里云是否存在异常


### 微前端真题

所谓微前端到底是什么，一句话解释，所谓微前端就是将一个不通业务的大项目，拆分成不同框架，不通技术栈的小项目的技术，这些小项目可以独立运行，独立，部署，并在浏览器中通过基座拼接成一个应用。

他解决了比如多团队并行开发，的维护问题， 解决了多技术站点，项目可以独立回滚问题，可以渐进式的改造旧系统 ，当然也有一些问题，你比如说这个玩意有技术难点，上手成本高，性能优化也是个问题，比如说，我们 b 端实现监控也有问题，最后还需要改监控平台去适应他，因为都是带子项目的吗，要初始化监控 sdk 好几回

当时讨论了几个方案，1、 只在全局加载， 子包不加载，但这样有一个问题，就是如果这个子包要独立使用就麻烦了，搞不定了，最后再子组件的钩子里面拿到父组件再全局抛出来的内容，再子组件中用钩子初始化，如果没有父应用，那么就动态引入 js 完成初始化加载，只是性能会有些损失。

### 怎么实现生态隔离
1、 样式隔离，  用特殊的命名空间，或者 css 模块化，或者 css in js 在乎这 Shadow DOM
2、JS：沙箱（Proxy/快照/with），防止污染 window 

我们之前用的乾坤，我记得他应该是Proxy和快照沙箱做的代理，来解决污染的问题。


### 乾坤怎么做性能优化

1、应用预加载优化
2、沙箱复用
3、资源加载优化它维护了一个 LRU 缓存，对已加载的资源进行缓存，避免重复加载。缓存还有过期机制，定期清理过期资源。


第三个是分层优化。从应用层、网络层面、资源层、构建层、等多个层面进行优化



### 领域驱动
软件工程，代码分层 ，监控问题，
1、mvc 除了模型，视图，控制 ,他区分这三个东西的目的是为了干一个事情，逻辑分层 ，代码分层
2、js 为什么是单线程 多个js 操纵 dom 会有问题，而且结果是你不可控的，他为了简化整体的dom 操作模型
3、领域驱动设计这个问题，前端层面，目前我没有使用，但是之前看过这玩意，其实核心也是以领域为核心，做分层，和提升代码质量，和维护性，降低耦合性。我们内部可能用了这些概念，但是我们意识不到，比如说， 我们后端业务是分领域了，比如简历，运行，主站，等等吧， 然后他们有一个基础层，最后他们统一输出数据和接口，到我们这可能就是表现层，所以就是我们整体的团队协作是用领域驱动设计的这种模式
分治 把问题空间分割为规模更小且易于处理的若干子问题。分割后的问题需要足够小，以便一个人单枪匹马就能够解决他们；其次，必须考虑如何将分割后的各个部分装配为整体。分割得越合理越易于理解，在装配成整体时，所需跟踪的细节也就越少。即更容易设计各部分的协作方式。评判什么是分治得好，即高内聚低耦合。

抽象 使用抽象能够精简问题空间，而且问题越小越容易理解。举个例子，从北京到上海出差，可以先理解为使用交通工具前往，但不需要一开始就想清楚到底是高铁还是飞机，以及乘坐他们需要注意什么。

知识 顾名思义，DDD可以认为是知识的一种。

美团的参考文档：https://tech.meituan.com/2017/12/22/ddd-in-practice.html


稳定的业务知识体系
可传承的代码体系
脱离UI的单元测试
跨端开发、多端共用的便捷性
明确的团队分工s
需求变更的快速响应
持续敏捷



### 美团真题
低代码原子组件之间的关联关系
业界的方式我觉得又两种吧
1、 发布订阅
2、预设配置

wangeditor相关问题 slate.js（是一个专门给 react 做的东西，但是他的 core 只是模型，我们可以随意定制，所以 wangeditor 就是这个基础上定制的）
首先slate.js 是一个数据模型，文档模型 + 光标/变换）选区的内容，数据接口是节点的 ast化，提供很多，这个文档弃用了 execCommandapi 使用自研 api 来解决  加粗斜体 插入撤销复制等问题
使用 Selection/Range 来划定选区，更改添加 dom 
wangeditor 的核心就是模型和视图分离，模型用的 slate.js 来解决问题，核心还有单向数据流 视图是自己写的，通过这种事件，选区滑动，来更改 slate 的模型，然后根据他的模型operations，转成 vdom 然后跟最开始的 vdom 做一个对比，更新视图，更新模型

wangeditor的插件机制-插件的本质就是配置对象，包含了一些核心变量和方法，比如，名字，按钮实例。插入方法，转义方法， 还有一些钩子方法。插件的核心使用就是，给当前的差价在初始化注册的时候混入当前编辑器实例的上下文中，并利用name 这种 key 进行关联绑定，然后在点击当前目标按钮的时候又触发方法对当前文档做一些操作


type  和 interface 区别
interface 更适合"面向对象"和"可扩展"的场景，type 更适合"类型计算"和"复杂类型表达"的场景。 比如一些交叉类型，联合类型的声明
ts infer关键字 就像是一个"类型拆解器"，从复杂类型中把需要的部分"拆"出来。 比如Promise<infer Content>  如果是个 promise 那就给这个 promise 返回类型提出来，如果不是，那就返回默认预设好的类型
Map 和 object 的区别在 Object 中， key 必须是简单数据类型（整数，字符串或者是 symbol），而在 Map 中则可以是 JavaScript 支持的所有数据类型，也就是说可以用一个 Object 来当做一个Map元素的 key。
栈和堆的区别
展示先入后出的一种线性数据结构，我们在使用层面上，有时候洗数据可能需要这个东西，在我们底层使用上，原始类型可能就是栈的结构
堆是一种无序树形数据结构，我们代码里面可能用到的较少，主要是我们一些数据结构的底层可能用到的较多，比如说，堆数据结构，对象就是典型的堆数据结构


## 百度真题

vue和 react 的一些区别
Vue 更偏“声明式模板 + 编译期优化 + 精细响应式”；React 更偏“JSX + 函数式心智 + 显式性能优化”

node 的事件循环机制
宏观顺序：timers → pending → poll → check → close
每个阶段后：先清空 nextTick，再清空 Promise 微任务
I/O 回调后更容易触发 setImmediate 先于 setTimeout(0) 执行
setImmediate用途
I/O 回调中“让步”给事件循环，然后尽快继续后续逻辑。
避免阻塞 poll 阶段，拆分长任务到多个切片。

wangeditor 的一些机制，


插件机制应该怎么写
设计模式
- 观察者/发布-订阅（Observer/Pub-Sub）
  - Vue2：`Dep` ←→ `Watcher` 依赖收集与派发更新
  - Vue3：`effect/track/trigger` 响应式副作用收集与触发
  - 事件总线、组件自定义事件也属发布-订阅

- 代理（Proxy）
  - Vue2：`Object.defineProperty` 劫持数据（数据代理）
  - Vue3：`Proxy` 实现 `reactive`/`readonly`/`shallowReactive` 等

- 组合（Composite）
  - 组件树与 `VNode` 树（虚拟 DOM）是典型的树形组合结构，统一以相同接口遍历/渲染/diff

- 策略（Strategy）
  - Diff 策略（同层对比、key 优化、`patchFlag` 分支）
  - 指令/事件修饰符、平台差异适配（DOM/Native/Weex）按策略分发
  - 表达式/指令解析不同分支策略

- 工厂（Factory）
  - `h()`/`createVNode()` 创建不同类型的 VNode
  - 组件/指令/插件注册创建实例的统一入口

- 装饰器（Decorator）
  - Vue2 生态：类式组件/属性装饰器（TS 装饰器语法）
  - 指令/mixin 在运行时对组件能力进行“装饰式”增强（本质是 AOP/拦截）

- 外观（Facade）
  - 对外 API（如 `Vue.use`、`app.mount`、`nextTick`）对复杂内部流程提供简化门面

- 模板方法（Template Method）
  - 组件生命周期钩子在既定流程中开放“步骤扩展点”
  - 渲染/更新管线固定骨架，平台实现细节由钩子覆盖

- 迭代器（Iterator）
  - 遍历 VNode/依赖集合/Effect 列表的统一迭代封装（代码层多为抽象遍历函数）

- 依赖注入（DI）
  - `provide/inject` 在祖先与后代间传递依赖（配置/服务）

- 享元/缓存（Flyweight）
  - `KeepAlive` 缓存子树、VNode 复用（结合 LRU 策略实现）

- 单例（Singleton）
  - 全局配置、调度器（scheduler）、全局编译缓存等在运行期多以单例存在

- 命令（Command）（在 Vuex/生态更明显）
  - `dispatch/commit` 将动作意图与执行解耦（更偏 Flux 架构）

想深入某一条（比如 Dep/Watcher 的依赖收集细节或 Vue3 的 `track/trigger` 触发路径），我可以结合源码关键片段画调用链。


发布订阅和观察者有啥区别

观察者是订阅了就一直变化 比如 vue2 的依赖收集，发布订阅是订阅就是订阅，触发就是触发

做通用兼容，我们一个页面可能要兼容赶集和 58 还要兼容小程序，来多端复用


wangeditor 的一些机制， 

大型的项目升级迭代

从我目前遇到的应该就是两种方案吧

1、 重新做个新的，给老的项目引流到新的上来，你比如说，很多邮箱都是这么干的，我们之前做 im sass 也是这么做的，这种的好处就是没有技术负债，可以随意摆弄，但是前提是我们项目已经稳定，暂时可以不需要新增功能，或者跟产品那边达成了一致性意见
2、原有项目升级，这又得分一些情况，
1、业务项目大幅度改动升级， 这就得靠真功夫了，一般就屎上雕花，兼容老的项目，开辟新的，遵循开闭原则，尽量少动原有业务代码，并且确定影响范围，做好质量把关
2、第二种情况就是彻底升级了，这个我们在监控 sdk 的时候做个尝试，就是目前我觉得比较好的方案就是灰度，我们当时的做的是找了几种典型的比如移动端，微前端，端内，运营的一些流量比较小的页面来做灰度，刚改他的监控链接，持续监控一部分，发现问题及时更改，直到所有问题被暴露完了之后（暴露方式就看监控异常），开始全量
当然这也得按照实际情况来，因为我们是 cdn 在线链接，所以不能通过服务端下发做灰度，但是比如我们有的项目是通过域名访问的， 就可以配置代理，来确定灰度比例

3、就是模块化重构项目，但这种的一般情况下也是有技术负，一些技术栈，包的版本，还有一些书写范式都可能会别捆住。

灵动渲染器升级迭代 

1、vue2升级 vue3，解决渲染问题
2、解决兼容问题 
3、解决线上已有项目问题 利用后缀来解决问题
4、更改rem 方案

css 盒模型

文档流，就是正常排布，然后文字不能被遮住，这一行排不下换行，所以当 flex 开始的时候，flex 1 会有空间的最小宽度产生于计算，并且等分，但文本的"不可压缩性"，所以用 min-width 来改变他的最小宽度，让参与计算的的最小宽度，不是文字的宽度，让他可以压缩

