function duplicateDetector(arr, start = 0){
    if (start >= arr.length)
        return NaN;
    
    const currentElement = arr[start];

    for (let i = currentElement + 1; i < arr.length; i++){
        if (currentElement === arr[i])
            console.log(currentElement);
    }

    return duplicateDetector(arr, currentElement + 1)
}

const arr = [1, 1, 2, 2, 3, 4, 5];
console.log(duplicateDetector(arr));