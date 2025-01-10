// How do you reverse a string in JavaScript without using built-in methods?


let str = "ramuk_hsotuhsa";

let newstr =''

for(let i=str.length-1; i>=0; i--){
    newstr += str[i]
}

console.log(newstr)