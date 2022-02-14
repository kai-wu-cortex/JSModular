# 规范
## 说明
***Asynchronous Module Definition***  
***异步模块定义***  
* 专门用于浏览器端，模块的加载是异步的  
## 语法
### 定义暴露模块
1. 
```
// 定义没有依赖的模块
define(function(){
    //暴露模块使用return
    return 模块
})
```  
2. 
```
// 定义有依赖的模块
define(['module1','module2'],function(m1,m2){
    return 模块
})
// 第一个参数必须是数组
// 第二个参数必须是函数，必须要有一个形参，与模块对应
```
### 引入使用模块
1. require(['module1','module2'],function(m1,m2){})) 
# 实现（浏览器端）
* require.js
## 配置
```
    // requirejs配置
    requirejs.config({
        paths: {
        //define([name],function(name_v))
            dataService: './modules/dataService',
            //name              name_v
            alerter: './modules/alerter'
        }
    })

```  
## html 引入
`<script data-main="js/main.js" src="js/libs/require.js"></script>`
## 引入第三方的库
```
        // 需要对单独angular进行配置
        // shim 单独的配置
        shim: {
            angular: {
                exports: 'angular'
            }
        }
```
