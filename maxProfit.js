let maxProfit = (prices) => {
    let maxProfit = 0;
    for (let i = 0; i < prices.length; i++){
        for(let j = i+1; j < prices.length; j++){
            if (prices[j] - prices[i] > maxProfit)
                maxProfit = prices[j] - prices[i];
        }
    }
    return maxProfit;
};

console.log(maxProfit([7,6,4,3,1]))