# NextTick
> 在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM



## 使用场景
如果想要在修改数据后立刻得到更新后的DOM结构，可以使用`Vue.nextTick()`


## 原理
1. 将回调函数放到callbacks等待执行
2. 将执行函数放到任务队列中
3. 事件循环到任务队列，执行函数一次执行callbacks里的回调



## 参考链接
1. [Vue中$nextTick源码解析](https://juejin.cn/post/6844904147804749832)
2. [你真的理解$nextTick么](https://juejin.cn/post/6844903843197616136)