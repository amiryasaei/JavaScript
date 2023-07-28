function duplicateDetector(arr){
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

const arr = [1, 1, 2, 20, 3, 4, 5];
console.log(duplicateDetector(arr));