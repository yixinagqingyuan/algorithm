/**
 * @format
 * @param {number[]} height
 * @return {number}
 */

//给定一个长度为 n 的整数数组 height 。有 n 条垂线，第 i 条线的两个端点是 (i, 0) 和 (i, height[i]) 。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。返回容器可以储存的最大水量。
// 这是一个有意思的题，他说了一大堆屁话，说白了就是要根据横坐标纵坐标求一个最大面积
// 可以用双指针套路做
function maxArea(height) {
  if (!height || height.length < 2) return 0

  let left = 0
  let right = height.length - 1
  let maxArea = 0

  while (left < right) {
    // 计算当前容器的面积
    const width = right - left
    const h = Math.min(height[left], height[right])
    const area = width * h

    // 更新最大面积
    maxArea = Math.max(maxArea, area)

    // 移动较小高度的指针
    if (height[left] < height[right]) {
      left++
    } else {
      right--
    }
  }

  return maxArea
}

// // 测试用例
// const testCases = [
//   {
//     input: [1, 8, 6, 2, 5, 4, 8, 3, 7],
//     expected: 49,
//     description: '正常数组',
//   },
//   {
//     input: [1, 1],
//     expected: 1,
//     description: '最小有效输入',
//   },
//   {
//     input: [],
//     expected: 0,
//     description: '空数组',
//   },
//   {
//     input: [1],
//     expected: 0,
//     description: '单元素数组',
//   },
//   {
//     input: [4, 3, 2, 1],
//     expected: 4,
//     description: '递减数组',
//   },
// ]

// // 运行测试
// testCases.forEach((test, index) => {
//   const result = maxArea(test.input)
//   const passed = result === test.expected
//   console.log(
//     `测试 ${index + 1} (${test.description}): ${passed ? '通过' : '失败'}`,
//   )
//   if (!passed) {
//     console.log(`  输入: [${test.input}]`)
//     console.log(`  预期: ${test.expected}`)
//     console.log(`  实际: ${result}`)
//   }
// })

function maxArea1(height) {
  // 这个题就是双指针算法 ，这个解法的思路是，我们用双指针，一步步的紧逼，最终在规划中选出一个最大值
  let left = 0
  let right = height.length - 1
  let max = 0
  while (left < right) {
    // 这时候要求最大值了
    max = Math.max(max, Math.min(height[left], height[right]) * (right - left))
    // 然后就开始移动指针，怎么移动呢?
    // 当然是找矮的一方移动了，因为有可能更高，你如果要移动高的，突然变矮了，或者突然变得更高了，都不会变大面积
    // 你如果以矮的移动，突然变高，因为有高的，就会有面积增大的可能，当然也可能更矮，但会比较不是吗
    if (height[left] > height[right]) {
      right--
    } else {
      left++
    }
  }
}
