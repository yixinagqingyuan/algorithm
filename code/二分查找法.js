/** @format */

const newfind = (arr, target) => {
  // 首先确定区间，然后确定中位数
  let left = 0
  let right = arr.length - 1
  while (left < right) {
    const mid = Math.floor((left + right) / 2)
    if (arr[mid] === target) {
      return mid
    } else if (mid < target) {
      // 应为都比他小了，指定不可能是这个啊
      left = mid + 1
    } else {
      // 同理
      right = mid - 1
    }
  }
}

// 搞个二分法查找
const newfind1 = (arr, target) => {
  // 这个核心思路就是一半一半的找，但是，要有个技巧，就是怎么获取一半获取一半
  // 首先指定 for 循环，for 循环解决不了问题啊，所以我们得用 while 循环，这样才能一半一半的循环
  // 我们先找到 while 的左右
  let left = 0 // 左边指定是 0 ，右边指定是最大值
  let right = arr.length
  while (left < right) {
    //这里的条件是左边小于右边，如果等于那就基本等于找到了，如果大了或者小了，那就需要在缩小范围
    // 这个有个关键算法要找到中间值
    let mid = Math.floor((left + right) / 2)
    if (mid == target) {
      return mid
    } else if (mid < target) {
      // 都比他大了，指定不能是这个啊，这个是为了解决最后几个数去中间值导致一直遍历有问题的情况
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
}
