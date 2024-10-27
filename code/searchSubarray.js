/** @format */

const findThreeLargestIndices = (arr) => {
  var max = Number.NEGATIVE_INFINITY
  var max1 = Number.NEGATIVE_INFINITY
  var max2 = Number.NEGATIVE_INFINITY
  for (var i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max1 = max
      max2 = max1
      max = arr[i]
    } else if (max1 < arr[i]) {
      max2 = max1
      max1 = arr[i]
    } else if (max2 < arr[i]) {
      max2 = arr[i]
    }
  }
  console.log(max, max1, max2)
}

// findThreeLargestIndices([1, 3, 2, 1, 9])
//  还有一个有意思的就是找到单个的三个最大的子数组和当前这一题有异曲同工
// 我们先来看这题

const singleQuerySearch = (arr) => {
  // 这一题说是求三个，那么我们的思路首先塞进去一个，这样就会有个初始值
  // 然后我们去比价，比当前的这个大的，我们就塞到前头，比这个小的，我们就塞到后头
  // const result = [arr[0]]
  // for (let i = 1; i < arr.length; i++) {
  //   // 我们只塞进去三个，所以，这时候 就要判断我们只需要 length 小于等于 3 即可
  //   if (result.length < 3) {
  //     if (arr[i] > result[0]) {
  //       result.unshift(arr[i])
  //     } else {
  //       result.push(arr[i])
  //     }
  //   }
  // }
  // console.log(result)
  // 上头这个思路不老行，原因很简单，他是三个数字比较，这样就导致我只能比较一个，
  // 当够了以后就不再遍历了，还会有问题，于是我们换一个思路
  // 我们直接搞三个大的数，然后默认都是是一个数字大小，并且默认第一个是最大的，第二个是第二大的，第三个是第三大的
  // let result = [0, 0, 0]
  // // 然后我们遍历数组
  // // 当然了，这时候我们可以从 1 开始，因为第一个已经被赋值了
  // for (let i = 0; i < arr.length; i++) {
  //   // 这时候判断是否大于第一个，然后在判断是否大一第二个，然后在判断是否大于第三个
  //   if (arr[i] > arr[result[0]]) {
  //     // 如果大于第一个，那么我们当然给他赋值为第一个,但是我们默认的由于当前比上一个大，所以
  //     // 上一个得退位，退到第二位,而第二位要退到第三位
  //     result[2] = result[1]
  //     result[1] = result[0]
  //     result[0] = arr[i]
  //   } else if (arr[i] > arr[result[1]]) {
  //     // 如果大于第二个
  //     result[2] = result[1]
  //     result[1] = arr[i]
  //   } else if (arr[i] > arr[result[2]]) {
  //     result[2] = arr[i]
  //   }
  // }
  // console.log(result)
  // 上头的思路还是有问题，我们从头开始
  // 目前除了用 sort 来解决问题，就是双重遍历了，目前没有想到一次便利就能解决问题的绝活
  // 由于我们要找三个数，所以我们只需要在结果级别里头筛选三遍就可以了
  // 首先我们还是定义结果集
  const result = []
  // 然后分别循环三次来找结果集
  for (let i = 0; i < 3; i++) {
    // 每次搞一个最大的空值
    let max = -Infinity
    let index = -1
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > max) {
        max = arr[j]
        index = j
      }
    }
    arr[index] = -Infinity
    result.push(index)
  }
  console.log(result)
}

singleQuerySearch([1, -3, 2, 1, -1])
// 这个函数是有漏洞的,因为如果前头大 那么就会有问题

// 有了上一题打底我们在返回头去看这个问题， 就很简单了，一切问题迎刃而解
//有一个数组 [[1, 2, 3], [4, 5, 6], [-1, 12, 13], [6, 18, 0], [5, 5, 5], [6, 9, 3]],找出其中和最大的三个子数组
// 开始内卷，找出这题三个最大的子数组，这不是跟之前一样吗，
// 所以这一题需要求和
const searchSubarray = (arr) => {
  // // 我们首先国际惯例，指定要搞一个结果集
  // const first = 0
  // const second = 0
  // const third = 0
  // // 然后我们遍历数组
  // for (var i = 0; i < arr.length; i++) {
  //   // 然后我们求和
  //   const num = arr[i][0] + arr[i][1] + arr[i][2]
  //   if (num > first) {
  //     first = num
  //   }
  // }
  // 首先还是要一个结果集
  const result = []
  // 然后我们再遍历数组
  for (let i = 0; i < 3; i++) {
    // 然后我们找一个最小的值
    let max = -Infinity
    let itme = -1
    let index = -1
    for (let j = 0; j < arr.length; j++) {
      // 之前的如果被选中，那么就需要处理一下
      // 相当于给他一个占位符
      if (arr[j] != -Infinity) {
        const num = arr[j][0] + arr[j][1] + arr[j][2]
        if (num > max) {
          max = num
          itme = arr[j]
          index = j
        }
      }
    }
    result.push(itme)
    arr[index] = -Infinity
  }
  console.log(result)
}
searchSubarray([
  [1, 2, 3],
  [4, 5, 6],
  [-1, 12, 13],
  [6, 18, 0],
  [5, 5, 5],
  [6, 9, 3],
])
