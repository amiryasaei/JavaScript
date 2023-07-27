function pairSum(arr, sum){
    let sums = [];
    for (let i = 0; i < arr.length; i++){
        let secondPair = sum - arr[i];
        if (arr.includes(secondPair))
            sums.push([arr[i], secondPair])
    }
    return sums
}

const arr = [2, 4, 3, 5, 6, -2, 4, 7, 8, 9]
console.log(pairSum(arr,7))