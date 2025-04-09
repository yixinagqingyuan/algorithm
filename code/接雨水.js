/** @format */

// 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。

// 示例 1：

// 输入：height = [0,1,0,2,1,0,1,3,2,1,2,1]
// 输出：6
// 解释：上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。
// 示例 2：

// 输入：height = [4,2,0,3,2,5]
// 输出：9

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  if (!height || height.length < 3) return 0

  const n = height.length
  // 记录每个位置左侧的最大高度
  const leftMax = new Array(n)
  // 记录每个位置右侧的最大高度
  const rightMax = new Array(n)

  // 计算每个位置左侧的最大高度
  leftMax[0] = height[0]
  for (let i = 1; i < n; i++) {
    leftMax[i] = Math.max(leftMax[i - 1], height[i])
  }

  // 计算每个位置右侧的最大高度
  rightMax[n - 1] = height[n - 1]
  for (let i = n - 2; i >= 0; i--) {
    rightMax[i] = Math.max(rightMax[i + 1], height[i])
  }

  // 计算每个位置能接的雨水量
  let totalWater = 0
  for (let i = 0; i < n; i++) {
    // 当前位置能接的雨水量 = min(左侧最高，右侧最高) - 当前高度
    totalWater += Math.min(leftMax[i], rightMax[i]) - height[i]
  }

  return totalWater
}
