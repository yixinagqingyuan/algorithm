/** @format */

// 给n个数组，给出所有数组的排列组合
// 这个说白了其实就是，在每个数组里头找一个值组合一下，最后找出所有排列
function getCombinations(arrays) {
  // 参数验证
  if (!Array.isArray(arrays) || arrays.length === 0) {
    return []
  }

  // 如果只有一个数组，直接返回该数组的每个元素作为单独的组合
  if (arrays.length === 1) {
    return arrays[0].map((item) => [item])
  }

  const result = []

  // 获取第一个数组
  const firstArray = arrays[0]
  // 递归获取其余数组的组合
  const restCombinations = getCombinations(arrays.slice(1))
  // 将第一个数组的每个元素与其余数组的组合进行组合
  for (const item of firstArray) {
    for (const combination of restCombinations) {
      // 其实是拿到前文的所有组合，然后在第一个数组的每个元素后面添加，也就是说
      // 最后一层会随着 递归的进行，不断的添加，最后一层的递归，会把所有的情况都遍历到
      result.push([item, ...combination])
    }
  }

  return result
}

// 测试用例
const arrays = [
  [1, 2],
  ['a', 'b'],
  ['x', 'y'],
]

const result = getCombinations(arrays)
console.log('所有可能的组合：')
console.log(result)

// 这个题可能跟全排列有点像我们可以刷下全排列，主要就是递归，来做
// 给定一个 没有重复 数字的序列，返回其所有可能的全排列。
// 这种是通用的解法一般就叫做回朔算法
// 其实说白了，就是利用递归，去一个个排列
const permute = (nums) => {
  const res = []
  // 首先当然是递归方法
  const dfs = (arr) => {
    // 递归的终止条件，就是排满了，我们就撤退
    if (arr.length == nums.length) {
      // 这里要深拷贝，因为后面还要pop
      res.push(arr.slice())
      return
    }
    // 然后就是遍历，一个个的去添加
    for (let i = 0; i < nums.length; i++) {
      if (!arr.includes(nums[i])) {
        arr.push(nums[i])
        // 然后再往下走,也就是递归
        dfs(arr)
        // 搞定了就给这个弄出去，为了让后来者居上，这个能排上
        arr.pop()
      }
    }
  }
  dfs([])
}
