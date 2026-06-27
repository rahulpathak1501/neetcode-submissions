class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let profit = 0;
        let minprice = Infinity;

        for(let price of prices){
            if(price < minprice){
                minprice = price;
            } else {
                profit = Math.max(profit, price-minprice)
            }
        }
        return profit
    }
}
