# Vue模版编译原理

模版编译主要过程：`template ---> ast ---> render`

- `parse` 函数解析 `template`
- `optimize` 函数优化静态内容
- `generate` 函数创建 `render` 函数字符串