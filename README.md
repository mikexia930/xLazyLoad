# x-lazy-load-vue

## 版本
- v1.0.1

## 基于
- vue2
- interaction observe

## 安装

````
npm install x-lazy-load-vue
````

## 使用
**在main.js中引入**
````
import XLazyLoad from './x-lazy-load';

Vue.use(XLazyLoad)
````

**组件中使用**

````
<x-lazy-load
  :dom-class="lazy-dom"
  :dom-attrs="['ids']"
  :times="1"
  :had-mounted-number="mountedNumber"
  @handleLazyData="handleLazyData"
>
    //slot的内容，layzid是返回结果里的key，必须填写！！！！
    <div lazyid='id'></div>
</x-lazy-load>
````

**返回值**

````
{
    lazyid: {
       attr1: value,
       attr2: value,
       ...dom-attrs里的attr
    }
}
````

## 说明
**参数说明**
````
dom-class[字符串] ： 需要监听dom的class属性值
dom-attrs[数组] ： 监听返回的dom上的attributes属性名
times[数值] ： 监听几次，1代表返回一次以后，就不返回了
had-mounted-number[数值] ： 触发内部监听的prop，当该prop变化，会再次监听dom-class
handleLazyData[方法] ：emit的接收方法，会接收返回的监听的dom-attrs
````

## 场景

- slot里为需要监听的dom组;
- 动态更新需要监听的dom时，更新prop值mountedNumber + 1;
- handleLazyData方法接收已出现在可视区域的dom-attrs;
- 接收到返回值后，完成后续的业务操作。




