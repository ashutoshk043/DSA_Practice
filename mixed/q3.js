// How do you find the largest/smallest number in an array?

let arr = [1,2,6,3,4,99]


let smallest = Infinity
let largest = -Infinity


for(let i=0; i<arr.length; i++){
    if(arr[i] < smallest){
        smallest = arr[i]
    }
    if(arr[i] > largest){
        largest = arr[i]
    }

}

console.log(smallest, largest)



// Yes, you're correct. When initializing the variable for finding the smallest number in the array, it should be set to Infinity instead of -Infinity. This ensures that any number in the array will be smaller than Infinity, allowing the smallest number to be correctly identified.

// So, to clarify:

// For the smallest number, initialize the variable with Infinity, because any number is smaller than Infinity.
// For the largest number, initialize the variable with -Infinity, because any number is larger than -Infinity.


