### 缘起
个人手写、收集的一些比较实用的工具方法  
暂不支持umd方式引入

#### 使用方式; 示例如下：
```js
import { getUuid, debounce, getIn, Money } from '@mobro/utils';

// eg: 获取唯一标识id
getUuid(); // adc1ffd9-1ebe-4fcf-b658-4855e8b9057b

Money.toYuan(5689); // 56.89
```

### 使用API
+ [getUuid]()  获取唯一id
+ [debounce]()  防抖
+ [throttle]()  节流
+ [getIn]() 深层获取对象的数据
+ [deepClone]() 深拷贝

#### Money
+ [toYuan]()  分转元
+ [toFen]() 元转分
+ [splitThousands]()  千位分隔
+ [splitThs]()  千位分隔(同上区别不大)

#### Query(操作地址参数)
+ [get]() 获取地址栏指定参数或者所有参数；返回一个json
+ [add]() url上添加参数
+ [remove]() 删除url上的特定参数
+ [getParams]() 拼接对象成为url参数字符串形式

#### MoDate(日期操作)
+ [format]() 格式化日期时间
