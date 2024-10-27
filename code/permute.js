/** @format */

// 给定一个 没有重复 数字的序列，返回其所有可能的全排列。
// 这种是通用的解法一般就叫做回朔算法
// 其实说白了，就是利用递归，去一个个排列
let permute = (nums) => {
  // 不不不，先得有个结果集
  const answer = []
  // 因为是递归, 所以当然要有个 dfs
  const dfs = (arr) => {
    // 此时我们通过递归一层层往下走，当走到 arr 满了的时候 就 push 到 answer 中去
    if (arr.length == nums.length) {
      // 之所以 要用slice 是为了深拷贝，防止引用类型带来的问题
      answer.push(arr.slice())
      // 到了三个就是要给他退出来遍历
      return
    }
    // 然后就要开始递归的添加了
    for (let i = 0; i < nums.length; i++) {
      // 因为是全排列，所以之前如果有的话，我们就不往里头推
      if (arr.includes(nums[i])) continue
      // 如果当前的通用 arr 没有的话，就给他塞进去
      arr.push(nums[i])
      // 然后递归，去找，递归的原因，为了给他填满找出一种选项
      dfs(arr)
      // 上一种情况由于push 进去完事了，所以就要一层层的去去掉这个，开始遍历下一个
      // 所以一层层的就能够将所有的情况都照顾到，这就是所谓的全排列
      arr.pop()
    }
  }
  // 递归要从头开始，然后一点点往后添加 之所以传空值，就是要一个个来嘛
  // 最终给数组填满
  dfs([])
  console.log(answer)
}
permute([1, 2, 3])
