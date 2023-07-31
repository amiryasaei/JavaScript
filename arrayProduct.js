const arrayProduct = (arr) =>{
    let output = [];
    let product = 1;

    if (arr.length < 2)
        return arr

    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr.length; j++){
            if (i != j)
                product *= arr[j];
        }
        output.push(product)
        product = 1;
    }
    return output;
}

console.log(arrayProduct([-1,1,0,-3,3]))