# Webpack

关于 **webpack** 的工作流程，简单来说可以概括为以下几步：
1. 参数解析
2. 找到入口文件
3. 调用 Loader 编译文件
4. 遍历 AST，收集依赖
5. 生成 Chunk
6. 输出文件


## 常见的Loader
- file-loader
- ts-loader
- eslint-loader
- tslint-loader
- vue-loader
- sass-loader/less-loader/style-loader/css-loader/postcss-loader

## 常见的plugin
- html-webpack-plugin
- clean-webpack-plugin
- webpack-bundle-analyzer

## Loader和Plugin的区别
`Loader` 本质就是一个函数，在该函数中对接收到的内容进行转换，返回转换后的结果。因为 `Webpack` 只认识 `JavaScript`，所以 `Loader` 就成了翻译官，对其他类型的资源进行转译的预处理工作。  
在 `module.rules` 中配置，作为模块的解析规则，类型为数组。每一项都是一个 `Object`，内部包含了 test(类型文件)、loader、options (参数)等属性。

`Plugin` 就是插件，基于事件流框架 Tapable，插件可以扩展 Webpack 的功能，在 Webpack 运行的生命周期中会广播出许多事件，`Plugin `可以监听这些事件，在合适的时机通过 Webpack 提供的 API 改变输出结果。  
在 `plugins` 中单独配置，类型为数组，每一项是一个 `Plugin` 的实例，参数都通过构造函数传入。


## source map是什么？生产环境怎么用？
`source map` 是将编译、打包、压缩后的代码映射回源代码的过程。打包压缩后的代码不具备良好的可读性，想要调试源码就需要 `soucre map`。

map文件只要不打开开发者工具，浏览器是不会加载的。

::: tip 注意
避免在生产中使用 `inline-` 和 `eval-`，因为它们会增加 `bundle` 体积大小，并降低整体性能。
:::

## Webpack 的热更新原理
Webpack 的热更新，缩写HRM，这个机制可以做到不用刷新浏览器而将新变更的模块替换掉旧的模块。

HMR的核心就是客户端从服务端拉去更新后的文件，准确的说是 chunk diff (chunk 需要更新的部分),实际上 WDS 与浏览器之间维护了一个 Websocket，当本地资源发生变化时，WDS 会向浏览器推送更新，并带上构建时的 hash，让客户端与上一次资源进行对比。

## 参考链接
1. [一文掌握Webpack编译流程](https://mp.weixin.qq.com/s?__biz=MzI0MTUxOTE5NQ==&mid=2247484030&idx=1&sn=d630d4b3995bbfd50f99e781074acfeb)