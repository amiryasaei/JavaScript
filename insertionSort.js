const insertionSort = (arr) => {
    let temp, targetValue
    for(let i = 1; i < arr.length; i++){
        let prevIndex = i - 1
        targetValue = arr[i]
        while(prevIndex >= 0){ 
            if(arr[prevIndex] > targetValue){
                temp = arr[prevIndex + 1]
                arr[prevIndex + 1] = arr[prevIndex]
                arr[prevIndex] = temp
            }
            prevIndex--
        }
    }
    return arr
}

console.log(insertionSort([6,5,4,3,2,1]))