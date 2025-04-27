/** @format */

const arr = [1, 5, 9, 15, 28, 33, 55, 78, 99]

/**
 * 返回最接近输入值的数字，如果有多个，返回最大的那个
 * @param {number} n
 * @return {number}
 */
function findClosestNumber(n) {
  let left = 0
  let right = arr.length - 1

  // 处理边界情况
  if (n <= arr[0]) return arr[0]
  if (n >= arr[right]) return arr[right]

  // 二分查找
  while (left <= right) {
    const mid = Math.floor((left + right) / 2)

    if (arr[mid] === n) return arr[mid]

    if (arr[mid] < n) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }

  // 此时 right 指向小于 n 的最大值，left 指向大于 n 的最小值
  const leftDiff = Math.abs(arr[right] - n)
  const rightDiff = Math.abs(arr[left] - n)

  // 如果距离相等，返回较大的数
  if (leftDiff === rightDiff) {
    return Math.max(arr[right], arr[left])
  }

  // 返回距离更小的数
  return leftDiff < rightDiff ? arr[right] : arr[left]
}

// // 测试用例
// console.log(findClosestNumber(10)) // 9
// console.log(findClosestNumber(29)) // 28
// console.log(findClosestNumber(50)) // 55
// console.log(findClosestNumber(77)) // 78

// 我先试试用那种最垃圾的方法试试
function findClosestNumber1(n) {
  // 首先是确定目标变量
  let target
  let minDiff
  // 然后确定最小差值
  arr.forEach((item) => {
    if (item == n) {
      return item
    } else {
      // 然后就要开始比较值了
      // 首先是确定差值
      const diff = Math.abs(item - n)
      // 空的时候或者小于的时候
      if (typeof minDiff === 'undefined' || diff < minDiff) {
        minDiff = diff
        target = item
      } else if (diff === minDiff) {
        // 当差值相等的时候，取最大值
        target = Math.max(target, item)
      }
      // 我当时的错误思路
      // const diff = item - n
      // if (diff < 0) {
      //   let newDiff = Math.abs(diff)
      //   if (typeof value === 'undefined' || newDiff < minDiff) {
      //     minDiff = diff
      //     target = item
      //   } else if (diff === minDiff) {
      //     // 当差值相等的时候，取最大值
      //     if (target < item) {
      //       // 相等了就取最大的
      //       target = item
      //     }
      //   }
      // } else {
      //   // 这个地方如法炮制 但是代码写的太垃圾
      // }
      // 其他情况就不处理
    }
  })
  return target
}

// 测试用例
// console.log(findClosestNumber1(10)) // 9
// console.log(findClosestNumber1(29)) // 28
// console.log(findClosestNumber1(50)) // 55
// console.log(findClosestNumber1(77)) // 78

// 接下来就试试绝活，二分法查找

function findClosestNumber2(n) {
  //  二分法的套路有首先既然是二分法，当然是要用 while ，然后要从中间撇开一个数，然后按照区间搜索
  //  我们首先当然要确定区间
  let left = 0
  let right = arr.length - 1
  arr.sort()
  // 然后就开始找呗,但是这可能有点问题，现在是乱序的，我们要排序
  while (left <= right) {
    // 然后我们确定中间值
    let mid = Math.floor((left + right) / 2)
    if (arr[mid] === n) {
      return arr[mid]
    } else if (arr[mid] < n) {
      // 说明中间值比目标值小，那么我们就需要在右边找
      left = mid + 1
    } else {
      // 说明中间值比目标值大，那么我们就需要在左边找
      right = mid - 1
    }
  }
  // 现在已经有了 left 和 right 我们就要选一个最接近的数
  // 首先是确定差值
  const leftDiff = Math.abs(arr[right] - n)
  const rightDiff = Math.abs(arr[left] - n)
  // 然后比较差值
  if (leftDiff === rightDiff) {
    // 当差值相等的时候，直接去右侧的因为排序过了
    return arr[right]
  } else {
    // 当差值不相等的时候，取差值较小的数
    return leftDiff < rightDiff ? arr[right] : arr[left]
  }
}
findClosestNumber2()
