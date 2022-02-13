(function(window){
let msg = "modular3"
function foo() {
    console.log('foo()',msg)
}

// 如果要对foo()进行执行
//foo()

// 想要和外部进行通讯,把foo暴露在winodw下
window.modular3 = {foo}
})(window)

// iife模式下函数体内部所有的成员方法和变量属性对外都不可见
// iife立刻执行了let msg这部分，后面的函数只是进行了声明并没有调用，所以直接调用并没有显示console.log()