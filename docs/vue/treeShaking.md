# Tree shaking
> `Tree shaking` 是一种通过清除多余代码方式来优化项目打包体积的技术，专业术语叫 `Dead code elimination`



### 问：Vue2为什么没有使用
Vue2中，Vue实例在项目中是单例，捆绑程序无法检测到对象的哪些属性在代码中使用到。
Vue3源码引入tree shaking特性，将全局API分模块。


## Tree shaking原理
> `Tree shaking`是基于ES6模板语法（`import与export`），主要是借助`ES6`模块的静态编译思想，在编译时就能确定模块的依赖关系，以及输入和输出的变量

`Tree shaking`无非就是做了两件事：

- 编译阶段利用`ES6 Module`判断哪些模块已经加载
- 判断那些模块和变量未被使用或者引用，进而删除对应代码


## 优势
- 减少源码体积（更小）
- 减少程序执行时间（更快）
- 便于将来对程序架构进行优化（更友好）


## 参考链接
1. [Vue 3.0中Treeshaking特性是什么，并举例进行说明？](https://fe.ecool.fun/topic/c1ee1a9b-5955-4dc1-a89d-2ce7b017616a?orderBy=updateTime&order=desc&tagId=14)