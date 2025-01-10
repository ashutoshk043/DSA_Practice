// Write a function to find the Fibonacci sequence up to the nth number.

let upno = 10;

const generateFibo = (num)=>{
    let upArray = [0,1]

    for(let i=1; i<=num-2 ; i++){
        upArray.push(upArray[upArray.length-2]+upArray[upArray.length-1])
    }

    return upArray.toString()
}


console.log(generateFibo(upno))