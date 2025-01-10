// Implement a function to find the first non-repeating character in a string.

let str = 'abcdefrabcdef'

let map = {}

for(let i=0; i<str.length; i++){
    if(map[str[i]]){
        map[str[i]] += 1
    }else{
        map[str[i]] = 1
    }
}
let key = ''

for(val in map){
    if(map[val] == 1){
        key = val
    }   
}

console.log(key)