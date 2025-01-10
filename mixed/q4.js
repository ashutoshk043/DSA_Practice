// Write a function to merge two sorted arrays into one sorted array.

let arr1 = [1,2,3,4,5]
let arr2 = [6,7,8,99,10]

for(let i=0; i<arr2.length; i++){
    arr1.push(arr2[i])
}

// to confirm if the array is properly sorted

arr1.sort((a,b)=>(a-b))


console.log(arr1)