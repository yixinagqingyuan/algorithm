/** @format */

//给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？找出所有满足条件且不重复的三元组。
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function threeSum(nums) {
  // 数组长度小于3，直接返回空数组
  if (nums.length < 3) return []

  // 对数组进行排序
  nums.sort((a, b) => a - b)

  const result = []

  // 遍历数组，固定第一个数
  for (let i = 0; i < nums.length - 2; i++) {
    // 如果第一个数大于0，由于数组已排序，后面的数字都大于0，不可能和为0
    if (nums[i] > 0) break

    // 跳过重复的数字以避免重复结果
    if (i > 0 && nums[i] === nums[i - 1]) continue

    // 使用双指针寻找剩余两个数
    let left = i + 1
    let right = nums.length - 1

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right]

      if (sum === 0) {
        // 找到一组解
        result.push([nums[i], nums[left], nums[right]])

        // 跳过重复的数字
        while (left < right && nums[left] === nums[left + 1]) left++
        while (left < right && nums[right] === nums[right - 1]) right--

        left++
        right--
      } else if (sum < 0) {
        // 和小于0，左指针右移
        left++
      } else {
        // 和大于0，右指针左移
        right--
      }
    }
  }

  return result
}

// 测试用例
const test1 = [-1, 0, 1, 2, -1, -4]
console.log(threeSum(test1)) // [[-1,-1,2],[-1,0,1]]

const test2 = [0, 0, 0]
console.log(threeSum(test2)) // [[0,0,0]]

const test3 = []
console.log(threeSum(test3)) // []

// 重新写一遍三个个数之和

const threeSum1 = (nums) => {
  // 首先按照一个思路去写，我们从前头的地方，选中一个数字，然后从前往后头挑选，直到找到合适的等于 0 的
  // 之所以，不往前找，是因为后头的往前找，前头的在往后找，这会重复
  // 首先，必须有兜底
  if (nums.length < 3) return []
  // 找一个值
  const result = []
  // 排个序，这时候遍历的时候，就可以省劲，比如都是大于 0 的是，指定有问题
  nums.sort()
  for (let i = 0; i < nums.length - 2; i++) {
    // 上来这个值大于 0就歇菜
    if (i > 0) break
    // 重复的也要干掉，啥意思呢，就是我当前这个和上一个一样，不就重复了吗。糟践了
    if (nums[i] == nums[i - 1]) break
    // 接下来就开始挑剔了
    let left = i + 1
    let right = nums.length - 1
    // 再循环一回
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right]
      if (sum == 0) {
        // 这时候开始，都不生效了，就都不用了
        result.push([nums[i], nums[left], nums[right]])
        left++
        right--
        // 这时候要干掉 left  还有 right中重复的，由于是排序的所以我们只需要跟前一个比较就行
        while (nums[left] == nums[left - 1]) {
          left++
        }
        while (nums[right] == nums[right - 1]) {
          right--
        }
        // 因为排序，sun >0 所以，得往小的找，找上一个就行
      } else if (sun > 0) {
        right--
      } else {
        // 这个同理
        left++
      }
    }
  }
}
