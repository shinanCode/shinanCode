# Vite

## 模块化标准

- `CommonJS`：现主要用于 Node.js（Node@13.2.0开始支持直接使用 ES Module）
- `ES Module`：ES 语言规范，标准，趋势，未来

::: tip
Vite 的核心正是依靠浏览器对 ES Module 规范的实现。
:::

## 什么是 Vite

> 基于`esbuild`与`Rollup`，依靠浏览器自身 ESM 编译功能， 实现极致开发体验的新一代构建工具！

### 概念

- `依赖`： 指开发不会变动的部分(npm 包、UI 组件库)，esbuild 进行预构建。
- `源码`： 浏览器不能直接执行的非 js 代码(.jsx、.css、.vue 等)，vite 只在浏览器请求相关源码的时候进行转换，以提供 ESM 源码。

### 开发环境

- 利用浏览器原生的 `ES Module` 编译能力，省略费时的编译环节，直给浏览器开发环境源码，dev server 只提供轻量服务。
- 浏览器执行 ESM 的 `import` 时，会向 dev server 发起该模块的 ajax 请求，服务器对源码做简单处理后返回给浏览器。
- Vite 中 HMR 是在原生 ESM 上执行的。当编辑一个文件时，Vite 只需要精确地使已编辑的模块失活，使得无论应用大小如何，HMR 始终能保持快速更新。
- 使用 `esbuild` 处理项目依赖，`esbuild` 使用 go 编写，比一般 node.js 编写的编译器快几个数量级。

### 正式环境

集成`Rollup`打包生产环境代码，依赖其成熟稳定的生态与更简洁的插件机制


## 参考链接
1. [Vite的原理](https://fe.ecool.fun/topic/0d0de429-d6eb-4eda-a614-0a3a22c05237)
