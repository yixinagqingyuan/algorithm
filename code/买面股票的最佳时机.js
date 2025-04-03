/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function(prices) {
    // 处理边界情况
    if (!prices || prices.length < 2) return 0;
    
    let minPrice = prices[0];  // 记录最低买入价格
    let maxProfit = 0;         // 记录最大利润
    
    // 遍历价格数组
    for (let i = 1; i < prices.length; i++) {
        // 更新最低买入价格
        minPrice = Math.min(minPrice, prices[i]);
        // 计算当前可能的利润并更新最大利润
        maxProfit = Math.max(maxProfit, prices[i] - minPrice);
    }
    
    return maxProfit;
};

// 测试用例
const test1 = [7,1,5,3,6,4];
console.log(maxProfit(test1));  // 输出: 5

const test2 = [7,6,4,3,1];
console.log(maxProfit(test2));  // 输出: 0