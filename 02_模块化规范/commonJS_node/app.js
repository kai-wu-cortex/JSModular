let module1 = require('./modules/module1.js')
let module2 = require('./modules/module2.js')
let module3 = require('./modules/module3.js')
let uniq = require("uniq")
module1.foo()
module2()
module3.foo()
module3.bar()

let arr = module3.arr
console.log(uniq(arr))