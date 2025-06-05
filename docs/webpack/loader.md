
# Loader
> `Loader` 的作用很简单，就是处理任意类型的文件，并且将它们转换成一个让 `webpack` 可以处理的有效模块。


### 配置
`Loader` 可以在 `webpack.config.js` 里配置，这也是推荐的做法，定义在 `module.rules` 里：


```javascript
// webpack.config.js
module.exports = {
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader' },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'postcss-loader' },
        ]
      }
    ]
  }
};
```

每一条 rule 会包含两个属性：test 和 use  
use 的类型：string|array|object|function

Loader 的执行顺序是从右到左，从下到上



## 参考链接
1. [前端工程师都得掌握的 webpack Loader](https://github.com/axuebin/articles/issues/38)