# new 操作符

> new 操作符通过执行自定义构造函数或者 js 内置构造函数，从而生成一个实例对象。

mdn 上把内部操作大概分为 4 步：

1. 创建一个空对象，这个对象将成为新实例的原型。
2. 将这个空对象的原型指向构造函数的 prototype 属性。
3. 将构造函数的 this 绑定到新创建的对象。
4. 执行构造函数中的代码，可以对新对象进行初始化。
5. 返回新创建的对象实例。

### 手动实现

```js
function myNew(constructor, ...args) {
  const obj = Object.create(constructor.prototype);
  const result = constructor.apply(obj, args);
  return result instanceof Object ? result : obj;
}

function Person(name, age) {
  this.name = name;
  this.age = age;
}

const person1 = myNew(Person, "Alice", 30);
console.log(person1.name); // 输出 "Alice"
console.log(person1.age); // 输出 30
```
