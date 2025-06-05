# Vue3生命周期
> 每个主要`Vue`生命周期事件被分成两个钩子，分别在**事件之前**和**事件之后**调用。

Vue应用程序中有4个主要事件(8个主要钩子)。

- 创建 — 在组件创建时执行
- 挂载 — DOM 被挂载时执行
- 更新 — 当响应数据被修改时执行
- 销毁 — 在元素被销毁之前立即运行


## 生命周期
- `beforeCreate` -> 使用 `setup()`
- `created` -> 使用 `setup()`
- `beforeMount` -> `onBeforeMount`
- `mounted` -> `onMounted`
- `beforeUpdate` -> `onBeforeUpdate`
- `updated` -> `onUpdated`
- `beforeDestroy` -> `onBeforeUnmount`
- `destroyed` -> `onUnmounted`
- `errorCaptured` -> `onErrorCaptured`

- `onActivated`
- `onDeactivated`


### Vue3 调试钩子
`Vue3` 为我们提供了两个可用于调试目的的钩子。
- `onRenderTracked`
- `onRenderTriggered`

::: tip 提示
这两个事件都带有一个`debugger event`，此事件告诉你哪个操作跟踪了组件以及该操作的目标对象和键。
:::
## 参考链接
1. [Vue 3 生命周期完整指南](https://juejin.cn/post/6945606524987244558)