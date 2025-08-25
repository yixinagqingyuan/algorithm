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

关键词，token 词法分析，语法分析，状态机，ast 转换降级 加入polyfill， 生成目标代码


