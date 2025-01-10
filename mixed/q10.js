// How do you flatten a nested array?


let nestedArray = [1,[2,3],[6,7],9,10,[1,[2,3],[1]]]

let flattenArray = []

for(let i=0; i<nestedArray.length; i++){
    if(Array.isArray(nestedArray[i])){
        plainNestedArray(nestedArray[i])
    }else{
        flattenArray.push(nestedArray[i])
    }

    function plainNestedArray(arrayIs){
        for(let i=0; i<arrayIs.length; i++){
            if(Array.isArray(arrayIs[i])){
                plainNestedArray(arrayIs[i])
            }else{
                flattenArray.push(arrayIs[i])
            }
        }
        
    }
}


console.log(flattenArray.sort((a,b)=>(a-b)))