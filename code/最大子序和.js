/**
 * 53. 最大子序和
 *
 * 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 *
 * 示例 1：
 * 输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
 * 输出：6
 * 解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。
 *
 * @format
 * @param {number[]} nums
 * @return {number}
 */

var maxSubArray = function (nums) {
  // 特殊情况处理：空数组或只有一个元素
  if (!nums.length) return 0
  if (nums.length === 1) return nums[0]

  // dp[i] 表示以第 i 个数结尾的连续子数组的最大和
  let dp = nums[0]
  // max 记录全局最大和
  let max = dp

  // 从第二个元素开始遍历
  for (let i = 1; i < nums.length; i++) {
    // 状态转移方程：dp[i] = max(nums[i], dp[i-1] + nums[i])
    dp = Math.max(nums[i], dp + nums[i])
    // 更新全局最大和
    max = Math.max(max, dp)
  }

  return max
}

// 测试用例
const testCases = [
  [-2, 1, -3, 4, -1, 2, 1, -5, 4], // 期望输出：6
  [1], // 期望输出：1
  [0], // 期望输出：0
  [-1], // 期望输出：-1
  [-100000], // 期望输出：-100000
]

testCases.forEach((nums, index) => {
  console.log(`测试用例 ${index + 1}:`, maxSubArray(nums))
})

// 有两种解法，第一种，暴力解法，第二种动态规划解法，我们现在直接第二种解法，因为第一种我们之前写过了

const maxSubArray = () => {
  // 他动态规划是什么情况呢？怎么规划呢？
  // 这个是最开始的情况
  let dp = nums[0]
  let max = dp
  for (let i = 1; i < nums.length; i++) {
    // 这时候我们需要规划一下子，怎么规划呢？拿到当前 dp 如果判断当前 dp 然后判断加上当前这个是增了还是减了，您都减了当然就前头的都不要了啊
    dp = Math.max(nums[i], dp + nums[i])
    // 然后求最大值
    max = Math.max(max, dp)
  }
  return max
}
maxSubArray()
