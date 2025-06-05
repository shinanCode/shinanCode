# 浏览器和Node事件循环
> `事件循环机制`是指浏览器或Node的一种解决`javaScript`单线程运行时不会阻塞的一种机制，也就是我们经常使用`异步`的原理。


## 任务的执行顺序
先到后：`同步任务` -> `微任务` -> `宏任务`。无论是同步任务还是异步任务，都是在**主线程**执行。

#### Event loop 顺序
1. 执行同步代码，属于宏任务
2. 执行微任务
3. 渲染ui
4. 重新执行一遍`event loop`


`JavaScript`在执行过程中会产生**执行环境**，这些执行环境会顺序的加入到**执行栈**中。遇到异步代码，会加入到**任务队列**中，如果**执行栈**内的代码执行完， 就会从`JavaScript`中取出任务放入JavaScript中执行。所以js的异步任务还是同步行为。


### task/macrotask（宏任务）
- script（整体代码）
- setTimeout
- setInterval
- I/O
- UI rendering

### microtask（微任务）
- Promise.then catch finally
- MutationObserver
- Process.nextTick（Node独有）



## 参考链接
1. [JS的执行原理，一文了解Event Loop事件循环、微任务、宏任务](https://juejin.cn/post/7318619321421217832)