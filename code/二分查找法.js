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
