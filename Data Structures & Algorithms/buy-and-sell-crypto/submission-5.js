class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
    let min = Infinity;
  let max = -Infinity;
  let profit = -Infinity;

  for (let i = 0; i < prices.length - 1; i++) {
    min = Math.min(min, prices[i]);
    max = Math.max(0, prices[i + 1]);
    profit = Math.max(profit, max - min);
  }

  return Math.max(profit, 0);
    }
}
