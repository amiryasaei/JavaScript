function maxMin(arr){
    if (arr.length === 0)
        return null
    
    let max = arr[0]
    let min = arr[0]

    for (let i = 1; i < arr.length; i++){
        if (arr[i] > max)
            max = arr[i]
        else if(arr[i] < min)
            min = arr[i]
    }
    return [min, max]
}

const arr = [10,5,2,9,8,11,12,4,2,3];
console.log(maxMin(arr));
