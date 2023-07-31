const duplicateRemover = (arr) => {
    for (let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
            if (arr[j] === arr[i]){
                arr.splice(j, 1);
                arr = duplicateRemover(arr)
            }
        }
    }
    return arr
}
console.log(duplicateRemover([1,1,1,2,3,4,3,2,5,2]))
