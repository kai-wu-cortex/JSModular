排序常用方法：sort
语法：

arr.sort([compareFunction]) ： 返回一个新的数组

如果 compareFunction(a, b) 小于 0 ，那么 a 会被排列到 b 之前；
如果 compareFunction(a, b) 等于 0 ， a 和 b 的相对位置不变。备注： ECMAScript 标准并不保证这一行为，而且也不是所有浏览器都会遵守（例如 Mozilla 在 2003 年之前的版本）；
如果 compareFunction(a, b) 大于 0 ， b 会被排列到 a 之前。
compareFunction(a, b) 必须总是对相同的输入返回相同的比较结果，否则排序的结果将是不确定的。

用法：

arr. sort(function(a,b){return a - b})

3.字符串排序：

arr.sort(function(a,b){return a.localeCompare(b)})来进行排序
但中文排序时发现不是我们想要的 可以通过加参数的方法 a.localeCompare(b,'zh-CN')
  
---
看了题解后发现js可以直接用>或<比较两个字符串的字典排序，所以问题就简单了~

字符串和其他对象比较大小 字符串和其他对象进行比较，大体要遵循下面的这些考量：

两个操作数都是数值，则进行数值比较

两个操作数都是字符串，则比较两个字符串第一个不通的字符编码值

两个操作数有一个是数值，则将另一个转换为数值，再进行数值比较

两个操作数有一个是对象，则先调用valueOf()方法或toString()方法，再用结果比较


const num=parseInt(readline())
function getWordList(num){
    const wordsList=[]
    for(let i=0;i<num;i++){
        wordsList.push(readline())
    }
    return wordsList
}  
getWordList(num).sort((a,b)=>a>b?1:-1).forEach(v=>console.log(v))  

---  
