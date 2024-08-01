/** @format */

//最大子数组和
//给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
//输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
//输出：6
//解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。
const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
const MaxSubSum3 = (nums) => {
  // 这个题，除了暴力解法， 当然传统中还有动态规划，以及贪心算法
  // 我们先用谈心算法，来解决问题，但是由于贪心算法，不一定是准确答案，我们后续还得用动态规划来解决
  // 谈心算法第一步，我们当然先要声明变量
  let max = 0
  let sum = 0
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
    max = Math.max(sum, max)
    // 如果比 0  还有小那么就不看了，说一这种情况会有问题
    // 之所以要舍弃，是因为他变成负数了，说明比之前小了，要重来了，就给他变成 0
    // 但是这就是我要说的问题， 如果全是小于 0 那就废了
    // 所以我们还是要用动态规划
    if (sum < 0) {
      sum = 0
    }
  }
  console.log(max)
}
//MaxSubSum3(nums)

const MaxSubSum4 = (nums) => {
  // 动态规划的方式
  // 动态规划必须要有dp
  // 但是这个所谓的动态规划和贪心算法套路是一样的
  let dp = 0
  let max = 0
  for (let i = 0; i < nums.length; i++) {
    dp = Math.max(dp, 0) + nums[i]
    max = Math.max(dp, max)
  }
  console.log(max)
}
MaxSubSum4(nums)
