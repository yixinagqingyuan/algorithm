<!-- @format -->

https://juejin.cn/post/7406161967616507941#heading-6

# wangEditor 考点解析

怎么开发的 是不是基于 slatejs

# 使用主流技术

wangEditor 从 V5 版本开始，有较大的技术更新。

# 1. 升级为 L1 能力

弃用了 document.execCommand API ，使用 slate.js（但不依赖 React）为内核，升级为 L1 能力。

这也是目前主流富文本编辑器的技术方案，如知名的 Quill ProseMirror Draft 都在使用。

# 2. 使用 vdom

使用 vdom 技术（基于 snabbdom.js ）做视图更新，model 和 view 分离，增加稳定性。

# 3. 扩展性

使用扩展插件和模块的机制，保证扩展性。未来还会继续扩展更多功能。

其实，现在 wangEditor 内置的各个功能，也都是通过扩展插件和模块的形式搭建起来的。

# slate.js
 https://juejin.cn/post/6917123466307698696

 https://juejin.cn/post/6954896971370856485

 https://juejin.cn/post/6968061014046670884





从代码结构来看，这是一个基于模块化设计的富文本编辑器项目，使用TypeScript开发。项目采用Rollup作为构建工具，包含了多个功能模块如表格、列表等。我将分析项目的整体架构、核心模块组成、构建配置以及样式系统，帮助你更好地理解这个项目。我会重点关注模块间的依赖关系、代码组织方式以及构建流程。

          
查看项目的包结构，以了解模块化组织方式。
        
            
toolName: view_folder
            
status: success
          
/Users/a58/open_source_project/wangEditor/packages
          

通过分析项目结构，我可以为您详细介绍 wangEditor 5 这个富文本编辑器项目：

**项目概述**
- 这是一个开源的 Web 富文本编辑器，支持 JS、Vue 和 React
- 使用 TypeScript 开发，采用模块化设计架构
- 使用 Rollup 作为构建工具，支持生产环境的代码压缩和优化

**核心架构设计**
1. 模块化结构
   - core: 编辑器核心模块，包含基础编辑功能
   - editor: 主编辑器模块，负责整合各个功能模块
   - basic-modules: 基础功能模块集合，如字体、颜色、对齐等
   - 独立功能模块：
     - table-module: 表格功能
     - list-module: 列表功能
     - video-module: 视频功能
     - code-highlight: 代码高亮
     - upload-image-module: 图片上传

2. 技术特点
   - 使用 TypeScript 确保代码类型安全
   - 采用 ES6 模块化标准
   - 支持 JSX 语法（使用 snabbdom 作为 JSX 工厂）
   - 完善的测试体系，每个模块都有对应的测试用例

3. 样式系统
   - 使用 Less 预处理器
   - 采用 CSS 变量实现主题定制
   - 统一的样式变量管理（vars.less）

4. 构建配置
   - 支持 sourcemap 方便调试
   - 使用 Babel 处理兼容性
   - 集成 PostCSS 进行样式处理和优化
   - 使用 terser 进行代码压缩

5. 项目管理
   - 使用 Lerna 进行多包管理
   - 规范的版本发布流程
   - 完善的 Changelog 管理
   - 支持国际化（i18n）

**扩展性设计**
- 提供自定义模块扩展机制
- 支持自定义主题
- 提供丰富的 API 接口
- 支持多种集成方式（普通 JS、Vue、React）

## 架构图
![image.png](./image2.png)
！[image.png](./image3.png)

### 数据流转

数据流转
- 采用 model -> vdom -> DOM 的数据流转模式
- 通过 Slate 的 Node、Element、Text 等数据结构管理内容
- 实现了完整的 HTML 解析和生成机制


### 核心话术
content 的线性结构 
Selection 和 Range 
operation

## 这个项目有哪些难点？

 1、弃用 document.execCommand ， contenteditable，分离 view 和 model ，使用 slate.js 作为内核，升级为 L1 能力。


 ### 插件机制

 