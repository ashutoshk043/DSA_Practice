// How do you remove duplicates from an array?

let arr = [8,8,1,1,2,3,9,3,4,1,90,90]

let arr2 = []

arr.sort((a,b)=>(a-b))
for(let val of arr){
    if(!arr2.includes(val)){
        arr2.push(val)
    }
}


console.log(arr2)