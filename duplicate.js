const duplicateDetector = (arr) => {
    let occurence = {}
    for (let i = 0; i < arr.length; i++){
        if (occurence[arr[i]]){
            if (occurence[arr[i]] <= 1)
                occurence[arr[i]]++
            if(occurence[arr[i]] == 2){
                console.log(arr[i])
                occurence[arr[i]]++
            }    
        }
        occurence[arr[i]] = 1
    }
    return null
}

console.log(duplicateDetector([1, 1, 2, 20, 3, 4, 5]));