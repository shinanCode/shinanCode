# vue-router实现原理

## hash模式
> 通过`onhashchange()`事件监听hash值变化，页面hash值发生变化后，`window`可以监听到事件改变。hash值变化对应的URL被记录下来，实现浏览器历史页面的前进后退。

## history模式
> 使用`HTML5 history`提供的pushState, replaceState API，用于浏览器历史浏览栈，修改URL时不会触发刷新



## router和route的区别
- router是路由实例，包含了路由跳转的方式，钩子函数。
- route是路由信心，包含path, params, query, name等路由参数。