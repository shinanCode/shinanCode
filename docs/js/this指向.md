# this指向

在全局执行上下文中，this 的值指向全局对象。(在浏览器中，this引用 Window 对象)。

在函数执行上下文中，this 的值取决于该函数是如何被调用的。如果它被一个引用对象调用，那么 this 会被设置成那个对象，否则 this 的值被设置为全局对象或者 undefined（在严格模式下）



## 参考链接
1. [[译] this（他喵的）到底是什么 — 理解 JavaScript 中的 this、call、apply 和 bind](https://juejin.cn/post/6844903680446038023)