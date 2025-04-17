/** @format */

function twoSum(nums, target) {
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i]
    if (map.has(complement)) {
      return [map.get(complement), i]
    }
    map.set(nums[i], i)
  }
  return []
}

//  这个两数之和的思路很简单，其实就一个遍历，然后找到匹配的数字，

function twoSum1(nums, target) {
  // 首先要搞一个 map
  const map = new Map()
  // 然后 for 循环
  for (let i = 0; i < nums; i++) {
    const num = target - nums[i]
    if (map.has(num)) {
      return map.get(num)
    } else {
      // 这时候存的要是当前的值，和当前的 k
      map.set(nums[i], i)
    }
  }
}
