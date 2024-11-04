/** @format */

// 爬楼梯问题
// 爬楼梯这道题，是一个经典的动态规划问题
const climbStairs = (n) => {
  // 说起动态规划问题，那么最重要的就是定义公式
  // 这也是最难的，就是要找到定义公式的规律
  // 而当前题目，其实，就是这一阶梯等等于上一阶梯，和上上阶梯所有的爬楼梯的方式的总和
  // 于是我们就可以利用这个来定义公式
  // 首先我们要给前三个的给给写出来，因为他是已知的
  //n = n - 1 + n - 2
  var dp = [1, 2]
  for (let i = 2; i < n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }
  // 用 n 就可以解决问题了，而不用 length
  return dp[n - 1]
}