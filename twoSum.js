/** @format */

//给定 nums = [2, 7, 11, 15], target = 9
//因为 nums[0] + nums[1] = 2 + 7 = 9
//所以返回 [0, 1]

const twoSum = (nums, target) => {
  // 这道题就很有意思 属于最简单的套路题
  // 所谓的两数之和，在数组里头找俩数，保证这俩数，结果是 9
  // 我们怎么办呢，类似于找对象 把我的条件提出来
  // 存到map 中，然后找到匹配的人，如果找到了，那么就 放在结果中，这样就能找到了
  // 首先弄个结果
  const result = []
  // 然后要有个 字典来保存找对象的内容
  const map = new Map()
  // 然后开始遍历，遍历的时候去操作找对象
  for (let i = 0; i < nums.length; i++) {
    // 找对象怎么找呢，就是把对象的值，当做 key
    // 当前的 i 拿出来
    // 这里记得一定要用has ,因为如果你用 get 来获取的时候，结果有 0 的情况，就会导致
    // 出问题的情况，然而 has 表示的是是否存过，只有 ture 和 false ，就能完美避过值有问题的情况
    // 不然我们只能判定 undefind 不是很优雅
    if (map.has(nums[i])) {
      //如果找到了， 那就导出来
      console.log([map.get(nums[i]), i])
    }
    // 当前的 第 i 个的对象先存起来
    map.set(target - nums[i], i)
  }
}

twoSum([2, 7, 11, 15], 9)
