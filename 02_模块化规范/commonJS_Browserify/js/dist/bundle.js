(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
let mod1 = require("./module1.js")
let mod2 = require("./module2.js")
let mod3 = require("./module3.js")

mod1.foo()
mod2()
mod3.foo()
mod3.bar()
},{"./module1.js":2,"./module2.js":3,"./module3.js":4}],2:[function(require,module,exports){

module.exports = {
    foo(){
        console.log("foo() module 1")
    }
}
},{}],3:[function(require,module,exports){
module.exports = function(){
    console.log("module 2")
}
},{}],4:[function(require,module,exports){
exports.foo = function(){
    console.log("module 3 foo")
}
exports.bar = function(){
    console.log("module 3 bar")
}
},{}]},{},[1]);
