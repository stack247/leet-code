/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let low = prices[0], high = potMaxProfit = 0;
    for (let i = 1; i < prices.length; i++) {
        if (low > prices[i])
        {
            low = prices[i];
            high = 0;
        }
        if (high <= prices[i])
        {
            high = prices[i];
            
            let profit = high - low;
            if (profit > potMaxProfit)
                potMaxProfit = profit;
        }
    }

    if (potMaxProfit < 0)
        res = 0;
    return potMaxProfit;
};

var prices = [7,1,5,3,6,4];
//var prices = [7,6,4,3,1];
//var prices = [2,4,1];
//var prices = [3,3,5,0,0,3,1,4];
var res = maxProfit(prices);
console.log(prices);
console.log(res);