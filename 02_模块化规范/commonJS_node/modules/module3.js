
exports.foo = function(){
    console.log("module3")
}

exports.bar = function(){
    console.log("modulebar")
}

//module.exports = {}// 直接覆盖exports的所有属性

// 两者的关系
// exports.xxx 相当于无限的为exports添加xxx 的属性
// module.exports 相当于 exports的父属性，只可以导出一种

exports.arr = [0,30,30,301,5,6,788,4]