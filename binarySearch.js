const binarySearch = (arr, target) => {
    if (arr.length == 0)
        return null;

    const midPoint = Math.floor(arr.length/2);
    if (arr[midPoint] == target)
        return "exists";
    else if(arr[midPoint] > target){
        arr = arr.splice(0, midPoint);
        return binarySearch(arr, target);
    }
    else{
        arr = arr.splice(midPoint, arr.length);
        return binarySearch(arr, target);
    }
    
}

console.log(binarySearch([1,2,3,4,5,6,7,8], 7))