function missingDetector(mylist){
    const sum = 10*((11)/2); //e sum of values fron 1 to 10
    let sumOfList = 0; //sum of the values in the input array
    for (let i = 0; i < mylist.length; i++){
        sumOfList += mylist[i];
    }
    return (sum - sumOfList);
}
let liist = [1,2,3,4,6,7,8,9,5];
console.log(missingDetector(liist));

