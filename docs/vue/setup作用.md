# setup作用
> `scrtpt setup` 是 `vue3` 的语法糖，简化了`组合式 API` 的写法，并且运行性能更好。

## 特点
- 属性和方法无需返回，可以直接使用。
- 引入组件的时候，会自动注册，无需通过 `components` 手动注册。
- 使用 `defineProps` 接收父组件传递的值
- `useAttrs` 获取属性，`useSlots ` 获取插槽，`defineEmits` 获取自定义事件。



### 获取组件实例
```javascript
import { getCurrentInstance } from 'vue';
const instance = getCurrentInstance();
```