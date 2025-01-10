// How would you check if two strings are anagrams of each other?


let str1 = 'ba bb'
let str2 = 'ab b b'

let orgStr1 = ''
let orgStr2 = ''


for(let i=0; i<str1.length; i++){
    if(str1[i].trim()!= ''){
        orgStr1 += str1[i]
    }
}

for(let i=0; i<str2.length; i++){
    if(str2[i].trim()!= ''){
        orgStr2 += str2[i]
    }
}

let firstSortedStr = orgStr1.split('').sort().join('');
let secondSortedStr = orgStr2.split('').sort().join('');

if(firstSortedStr == secondSortedStr){
    console.log(true, "Its an anargam")
}else{
    console.log(false, "Not an anargam")
}

