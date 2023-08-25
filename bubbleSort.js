const bubbleSort = (arr) =>{
    let sorted = true
    let temp
    for (let i = 1; i < arr.length; i++){
      if (arr[i] < arr[i-1]){
        sorted = false
        temp = arr[i]
        arr[i] = arr[i-1]
        arr[i-1] = temp
      }
    }
    if (sorted == false)
      return bubbleSort(arr)
    return arr
}

console.log(bubbleSort([9,8,7,6,5,4,3,2,1]))