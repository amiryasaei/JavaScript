function duplicateRemover(arr){
    let currentIndex = arr[arr.length-1];
    for (let i = arr.length - 1; i >= 0; i--){
        console.log()
        if (currentIndex === arr[i]){
            console.log(arr[i])
            arr.pop()
            console.log(arr)
            return(duplicateRemover(arr))
        }
    }
    console.log(arr)
}
const arr = [1,1,1,2,3,4,2,5,2]
console.log(duplicateRemover(arr))