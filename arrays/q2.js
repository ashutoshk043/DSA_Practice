// Find the second largest element in an array.

let arr = [1,2,4,6,10,98,92]

// console.log(arr.sort((a,b)=>(b-a))[arr.length-2])

// console.log(arr.sort((a,b)=>(a-b))[arr.length-2])

let smallest = Infinity
let largest = -Infinity
let secLargets = -Infinity

const findLargest = (arr)=>{

    for(let i=0; i<arr.length; i++){
        if(arr[i] > largest){
            largest = arr[i]
        }
        if(arr[i]<smallest){
            smallest = arr[i]
        }
        
    }
    return "smallest " + smallest + ' largest ' + largest + " secLargest " + secLargets 
}

console.log(findLargest(arr))


// console.log(smallest, largest, secLargets)