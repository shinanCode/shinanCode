# v-if和v-show区别
> v-if和v-show都是通过boolean控制dom的显示隐藏

## 两者区别
`v-show`通过css `display:none/block`切换显示隐藏，`dom`元素一致存在。  
`v-if`是将`dom`元素的销毁和重建的过程。


::: tip 性能消耗
v-if有更高的切换消耗；v-show有更高的初始渲染消耗；
:::


## 场景使用
v-if 与 v-show 都能控制dom元素在页面的显示

v-if 相比 v-show 开销更大的（直接操作dom节点增加与删除）

如果需要非常频繁地切换，则使用 v-show 较好

如果在运行时条件很少改变，则使用 v-if 较好


## 参考链接
1. [面试官：v-show和v-if有什么区别？使用场景分别是什么？](https://vue3js.cn/interview/vue/show_if.html#%E4%B8%89%E3%80%81v-show%E4%B8%8Ev-if%E5%8E%9F%E7%90%86%E5%88%86%E6%9E%90)