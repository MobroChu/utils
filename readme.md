### 缘起
个人手写、收集的一些比较实用的工具方法  
暂不支持umd方式引入

### 使用方式
```js
import { Mo, Money, Obj } from '@mobro/uitls';

// eg: 获取唯一标识id
Mo.getUuid(); // adc1ffd9-1ebe-4fcf-b658-4855e8b9057b
```

### 使用API
#### Mo
+ [getUuid]()  获取唯一id
+ [debounce]()  防抖
+ [throttle]()  节流

#### Money
+ [toYuan]()  分转元
+ [toFen]() 元转分
+ [splitThousands]()  千位分隔
+ [splitThs]()  千位分隔(同上区别不大)

#### Obj
+ [getIn]() 深层获取对象的数据
+ [deepClone]() 深拷贝
