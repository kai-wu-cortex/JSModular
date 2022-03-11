# JSModular
const readline = require('readline');
let lines =[];
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('line', function (line) {
    lines.push(line)
    if(lines.length == +lines[0]+1){
        let hash = new HashTable()
        lines.shift()
        //console.log(lines)
        for(let each of lines){
            let keys = each.split(" ")
            hash.put(+keys[0],+keys[1])
        }
        for(let each of lines){
            let keys = each.split(" ")
            
            hash.print(+keys[0],+keys[1])
        }
    }
});
    
class HashTable{
    constructor(){
        this.storage =[]
        this.limit = 500
        this.count = 0
    }
    
    hashFunc(key,max){
        let hashCode = 0
        if(typeof key == "string"){
            var value_t = +key
        }else{
            var value_t = key
        }
        
        // 哈希化
        hashCode = 31*hashCode+value_t
        hashCode = hashCode % max
        return hashCode
    }
    
    put(key,value){
        let index = this.hashFunc(key,this.limit)
         //get bucket 
        let bucket = this.storage[index]
        // 如果bucket不存在
        if(bucket === undefined){
            bucket = []
            this.storage[index] = bucket
        }
        // 如果加入的index中的bucket存在
        //@override
        // 遍历bucket
        // 判断当前位上是否存在相同key
        let isSame = false
        for(let tuple of bucket){
            if(tuple[0]==key){
                tuple[1] = value + tuple[1]
                isSame = true
            }
            
            
        }
        if(!isSame){
            bucket.push([key,value])
            this.count++
        }
        
        }

    print(key,value){
        let index = this.hashFunc(key,this.limit)
        let bucket = this.storage[index]
        for(let tuple of bucket){
            console.log(tuple[0],tuple[1])
        }
    }
}
