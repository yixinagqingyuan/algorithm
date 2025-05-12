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

// 重写一遍接雨水 用最简单的正反扫描
// 这个接雨水，其实就是去左右两边最大值，然后在最大值中去最小值，然后减去当前值
// 这其实就是动态规划的思路我们只需要管当前的就行
const trap1 = (height) => {
  // 所以首先兜一个边界条件,如果没有或者小于三的时候返回 0
  if (!height || height.length < 3) return 0
  const n = height.length
  // 然后我们记录左右的最大值，啥意思呢？
  // 其实就是动态规划的逻辑，我们只需要关注当下这一格子，左右两边的最大值，然后取最小值，然后减去当前值
  const left = []
  const right = []
  // 首先记录左侧最大值
  left[0] = height[0]
  for (let i = 1; i < n; i++) {
    // 这里意思就是，如果当前的这个前后指定是最高的能兜雨水，所以找的就是最高的
    left[i] = Math.max(left[i - 1], height[i])
  }
  right[n - 1] = height[n - 1]
  // 这一次要找右边的，所以要倒着循环
  for (let i = n - 2; i >= 0; i--) {
    right[i] = Math.max(right[i + 1], height[i])
  }
  // 最后找能接雨水的量
  let totalWater = 0
  for (let i = 0; i < n; i++) {
    // 取当前左右的最小值
    // 如果当前这个最高，并且最大最小值是自己呢？
    // 这个代表能承受的水是多少呢？
    // 那当前值也是 自己，减去之后那么就是 0，所以动态规划很棒
    totalWater += Math.min(left[i], right[i]) - height[i]
  }
  return totalWater
}

// 测试用例
const testCases = [
  {
    input: [0,1,0,2,1,0,1,3,2,1,2,1],
    expected: 6,
    description: '示例1：常规情况'
  },
  {
    input: [4,2,0,3,2,5],
    expected: 9,
    description: '示例2：常规情况'
  },
  {
    input: [],
    expected: 0,
    description: '边界情况：空数组'
  },
  {
    input: [1, 2],
    expected: 0,
    description: '边界情况：长度小于3的数组'
  },
  {
    input: [1,1,1],
    expected: 0,
    description: '特殊情况：所有高度相同'
  },
  {
    input: [5,4,3,2,1],
    expected: 0,
    description: '特殊情况：递减数组'
  }
]

// 运行测试
testCases.forEach((testCase, index) => {
  const result1 = trap(testCase.input)
  const result2 = trap1(testCase.input)
  console.log(`测试用例 ${index + 1}: ${testCase.description}`)
  console.log(`输入: [${testCase.input}]`)
  console.log(`预期输出: ${testCase.expected}`)
  console.log(`trap函数输出: ${result1}`)
  console.log(`trap1函数输出: ${result2}`)
  console.log(`trap函数测试${result1 === testCase.expected ? '通过' : '失败'}`)
  console.log(`trap1函数测试${result2 === testCase.expected ? '通过' : '失败'}`)
  console.log('-------------------')
})
