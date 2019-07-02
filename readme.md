#### 简单声明
个人手写、收集的一些比较实用的工具方法

#### 使用方式
```js
const utils = require('mobro-utils');
utils.deepClone({a: 1});
```

#### 目前支持
```js
deepClone(obj: any): any    // 深拷贝
debounce(fn: Function, wait: Number): Function      // 防抖
throttle(fn: Function, delay: Number): Function     // 节流
splitThousands(num: Number, fixed: Number): Number  // 千位分割
```

#### 使用环境
```js
>= ES6
```