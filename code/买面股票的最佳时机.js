/**
 * @format
 * @param {number[]} prices
 * @return {number}
 */

const maxProfit = function (prices) {
  // 处理边界情况
  if (!prices || prices.length < 2) return 0

  let minPrice = prices[0] // 记录最低买入价格
  let maxProfit = 0 // 记录最大利润

  // 遍历价格数组
  for (let i = 1; i < prices.length; i++) {
    // 更新最低买入价格
    minPrice = Math.min(minPrice, prices[i])
    // 计算当前可能的利润并更新最大利润
    maxProfit = Math.max(maxProfit, prices[i] - minPrice)
  }

  return maxProfit
}

// 测试用例
const test1 = [7, 1, 5, 3, 6, 4]
// console.log(maxProfit(test1)) // 输出: 5

// const test2 = [7, 6, 4, 3, 1]
// console.log(maxProfit(test2)) // 输出: 0

//  重写买卖股票的最佳时机

const maxprofit = (prices) => {
  // 这个思路其实就是贪心算法的思路是，只要我找出最大的和最小的利润，就可以了
  // 这个兜底
  if (!prices || prices.length < 2) return 0
  // 首先我先选区最小的一个价格，默认当然是第一个了，然后我在遍历数组，找到最小的价格
  let minPrice = prices[0]
  // 然后我再遍历数组，找到最大的利润
  let max = 0 // 默认利润就是 0
  for (let i = 1; i < prices.length; i++) {
    //找当当前最大的利润
    max = Math.max(max, prices[i] - minPrice)
    // 这时候就找到最小的价格了
    minPrice = Math.min(minPrice, prices[i])
    // 然后就找到最大的利润,就是当前选项的减去最小值
    // max其实前后都可以
  }
  return max
}

// 测试两种实现
console.log('第一种实现结果:', maxProfit(test1))
console.log('第二种实现结果:', maxprofit(test1))

// 测试更多用例
const test2 = [7, 6, 4, 3, 1]
console.log('第一种实现结果:', maxProfit(test2))
console.log('第二种实现结果:', maxprofit(test2))

const test3 = [1, 2, 3, 4, 5]
console.log('第一种实现结果:', maxProfit(test3))
console.log('第二种实现结果:', maxprofit(test3))

/**
 * 买卖股票的最佳时机 II
 * 可以进行多次交易，但不能同时参与多笔交易
 * @param {number[]} prices
 * @return {number}
 */
const maxProfitII = function (prices) {
  // 处理边界情况
  if (!prices || prices.length < 2) return 0

  let totalProfit = 0

  // 遍历价格数组，只要后一天价格比前一天高，就进行买卖交易
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      totalProfit += prices[i] - prices[i - 1]
    }
  }

  return totalProfit
}

// 测试买卖股票的最佳时机 II
console.log('\n测试买卖股票的最佳时机 II:')
const test4 = [7, 1, 5, 3, 6, 4] // 预期输出: 7 (1->5: 4, 3->6: 3)
console.log('测试用例1结果:', maxProfitII(test4))

const test5 = [1, 2, 3, 4, 5] // 预期输出: 4 (每天都交易)
console.log('测试用例2结果:', maxProfitII(test5))

const test6 = [7, 6, 4, 3, 1] // 预期输出: 0 (一直下跌，不交易)
console.log('测试用例3结果:', maxProfitII(test6))

const maxProfitII1 = (prices) => {
  // 这个同样还是贪心算法的思路，我们怎么做呢，我们只在股票上涨的时候进行买卖，下跌的时候不动就行了啊
  // 首先还是兜底
  if (!prices || prices.length < 2) return 0
  let max = 0 // 还是先找个最大利润默认是 0
  for (let i = 1; i < prices.length; i++) {
    // 这时候开始贪心了，只有在挣钱的时候才买东西
    if (prices[i] > prices[i - 1]) {
      max += prices[i] - prices[i - 1]
    }
  }
  console.log(max)
}

maxProfitII1(test6)
