# 规范
## 说明
* 每一个文件都可以当作一个模块
* 在服务端模块的加载时运行时同步加载的
* 在浏览器端：模块需要提前编译打包
## 基本语法
### 暴露模块
 1. module.exports = value
 2. exports.xxx = value
 问题：  
 暴露的模块到底是什么？  
 暴露的本质是export 
### 引入模块
require(xxx)  
第三方模块：xxx为模块名  
自定义模块：xxx为模块路径  
# 实现
## 服务端实现
NodeJS
## 浏览器实现
browserify【也称为CommonJS的浏览器打包工具】  
npm install -g browserfify
## 区别Node与Browserify
参考项目文件夹
其中打包处理js  
```browserify js/src/app.js -o js/dist/bundle.js  
```  
