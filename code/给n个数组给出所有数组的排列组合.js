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
// 这种的就不是递归做，说白了就是全排列

function getCombinations1(arrays) {
  if (arrays.length == 0) {
    return []
  }
  // 因为有递归，当然得兜底，当只有一个数组的时候，那么我们就要返回，这个数字了
  if (arrays.length == 0) {
    // 这是为了什么呢，是为了到时候破开 返回的结果是[[1],[2]]
    return arrays[0].map((item) => [item])
  }
  // 他这一题说的是啥呢？ 是我找出所有数组的排列组合，这种其实跟全排列一样，核心思路就是递归
  // 首先就是搞个结果啊，为了能存上个结果
  // const res = []
  // // 然后我们先取出第一个，因为你要跟后面的比较啊
  // const frist = arrays[0]
  // const rest = getCombinations1(arrays.splice(1))
  // // 然后  for 循环比较
  // for (let i of frist) {
  //   for (let j of rest) {
  //     res.push([i, ...j])
  //   }
  // }
  const res = []
  const frist = arrays.shift()
  const rest = getCombinations1(arrays)
  for (let i of frist) {
    for (let j of rest) {
      res.push(i, ...j)
    }
  }
  return res
}

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

// 重写全排列

const permute1 = (nums) => {
  // 全排列首先得有结果 res 其次得有递归，然后还得有个回朔算法
  const res = []
  // 都说了用递归，递归的方式不一样啊，跟上一个，不要这么死板啊，兄弟
  // 上一个题能递归的方式我要去组合而不用回朔，这个要回朔，所以我们的目的是要从结果来倒推遍历
  const dfs = (arr) => {
    // 首先当数组满了，我们要 push 进去重新开始.
    if (arr.length == nums.length) {
      // 这里要复制数组，不然就有问题
      res.push(arr.push(arr.slice()))
      // 完事要 retrun 出去
      return
    }
    for (let n of nums) {
      if (!arr.includes(n)) {
        // 我要回朔
        arr.push(n)
        // 然后要再往下叠加，直到累加满三个
        dfs(arr)
        // 完事之后退出来
        arr.pop()
      }
    }
  }
  dfs([])
}

permute1([1, 2, 3])
