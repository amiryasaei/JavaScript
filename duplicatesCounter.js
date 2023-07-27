function duplicates(arr){
    let occurence = {}; //dictionary to store the occurence of each element as their key
    let counter = 0;

    for (let i = 0; i < arr.length; i++){
        if (occurence[arr[i]]){
            if (occurence[arr[i]] == 1)
                counter++;
            occurence[arr[i]]++;
        }
        else
            occurence[arr[i]] = 1;
    }
    return counter
}
const arr = [1,1,1,1,2,11,2,3,2];
console.log(duplicates(arr));