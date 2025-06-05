# 盒模型
> CSS 盒模型整体上适用于区块盒子，它定义了盒子的不同部分（外边距、边框、内边距和内容）如何协同工作，以创建一个在页面上可以看到的盒子。<br />
> 行内盒子使用的只是盒模型中定义的部分行为。


## 一、CSS标准盒模型
默认：**box-sizing: content-box**

::: info
 外边距不计入盒子的实际大小——当然，它影响盒子在页面上所占的总空间，但只影响盒子外的空间。盒子的面积止于边框，不会延伸到外边距中。
:::

## 二、CSS替代盒模型(IE盒模型)

要为某个元素使用替代模型，可对其设置 **box-sizing: border-box**



## 参考链接
1. [盒模型](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Building_blocks/The_box_model)