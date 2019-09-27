/**
 * 给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。
 * 如果你最多只允许完成一笔交易（即买入和卖出一支股票），设计一个算法来计算你所能获取的最大利润。
 * 注意你不能在买入股票前卖出股票。
 */

export function bestTimeToBuyStock(prices: Array<number>): number {
  let low = prices[0];
  let high = prices[0];
  let profit = 0;

  prices.forEach(price => {
    if (price < low) {
      low = price;
      high = price;
    }

    high = price > high ? price : high;

    profit = profit < high - low ? high - low : profit;
  });

  return profit;
}
