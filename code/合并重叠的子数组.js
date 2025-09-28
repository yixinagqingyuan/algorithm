/** @format */

// 合并重叠的子数组，有一个数组包含多个子数组，每个子数组都由不同的时间段[starti,endi]组成，要求合并所有重叠的时间段，返回一个新的二维数组。

// 输入intervals：一个二维数组，其中每个元素也是一个数组 [start, end] 表示一个时间段，start 和 end 均为整数，且满足 start <= end。

// 例输入： [[1, 3], [2, 6], [8, 10], [15, 18]];

// 输出：返回一个二维数组，包含合并后的所有不重叠的时间段。

// 输出：[[1, 6], [8, 10], [15, 18]]

function mergeIntervals(intervals) {
  // 如果数组为空或只有一个区间，直接返回
  if (!intervals || intervals.length <= 1) {
    return intervals
  }

  // 按照区间起始时间排序
  intervals.sort((a, b) => a[0] - b[0])

  // 结果数组，初始化时放入第一个区间
  const result = [intervals[0]]

  // 遍历剩余区间
  for (let i = 1; i < intervals.length; i++) {
    // 获取当前区间
    const currentInterval = intervals[i]
    // 获取结果数组中最后一个区间
    const lastInterval = result[result.length - 1]

    // 如果当前区间的起始时间小于等于最后一个区间的结束时间，说明有重叠
    if (currentInterval[0] <= lastInterval[1]) {
      // 更新最后一个区间的结束时间为两个区间结束时间的最大值
      lastInterval[1] = Math.max(lastInterval[1], currentInterval[1])
    } else {
      // 如果没有重叠，直接将当前区间加入结果数组
      result.push(currentInterval)
    }
  }

  return result
}

// 测试用例
const test1 = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
]
console.log('测试用例1：常规情况')
console.log('输入：', test1)
console.log('输出：', mergeIntervals(test1))

const test2 = [
  [1, 4],
  [4, 5],
  [5, 6],
  [6, 7],
]
console.log('\n测试用例2：连续区间')
console.log('输入：', test2)
console.log('输出：', mergeIntervals(test2))

const test3 = [
  [1, 4],
  [0, 4],
]
console.log('\n测试用例3：完全重叠区间')
console.log('输入：', test3)
console.log('输出：', mergeIntervals(test3))

const test4 = [
  [1, 4],
  [2, 3],
]
console.log('\n测试用例4：包含关系区间')
console.log('输入：', test4)
console.log('输出：', mergeIntervals(test4))

//  重写合并数组区间
// 这一题很有意思，其实本质上来说就是先给左当前数组的左侧排序，然后在根据右侧的有交叉的部分动态的更改区间，最后得到合并后的区间

function mergeIntervals1(arr) {
  // 首先得有个兜底
  if (!arr || arr.length == 0) return []
  // 然后来个结果数组
  const result = []
  // 接下来当然要排序了，按照左边的排序
  arr.sort((a, b) => {
    return a[0] - b[0]
  })
  // 然后第一个当然是要放进去的我们从总不能最左边的都不管吧
  result.push(arr[0])
  // 然后就要排序找区间了，我们第一个已经塞进去了，接下来就要从第二个开始
  for (let i = 1; i < arr.length; i++) {
    // 接下来我们就要开始比较了
    // 我们先拿到当前的这个
    const curr = arr[i]
    // 再拿到 result 中的最后一个，因为你这个要跟最后一个比较啊，看有没有需要合并的区间
    const last = result[result.length - 1]
    // 然后就开始比较了
    if (curr[0] < last[1]) {
      // 最终怎么比较呢？很简单，如果你发现 当前的这个左边的小于上一个0，这说明什么，这说明他们指定是重合区间了
      // 但是你这时候还不能瞎搞，直接去 curr[1]作为结果，为什么呢? 因为万一last 直接全包含呢？ 那不就歇菜了吗
      last[1] = Math.max(curr[1], last[1])
    } else {
      // 否则的话，当然是你右边最小的都大于左边最大的了，说明压根没有交集，你直接塞进去就可以了
      result.push(curr)
    }
  }
  return result
}

// 测试用例
console.log('\n测试用例1：常规情况（mergeIntervals1）')
const test1_1 = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
]
console.log('输入：', test1_1)
console.log('输出：', mergeIntervals1(test1_1))

console.log('\n测试用例2：连续区间（mergeIntervals1）')
const test2_1 = [
  [1, 4],
  [4, 5],
  [5, 6],
  [6, 7],
]
console.log('输入：', test2_1)
console.log('输出：', mergeIntervals1(test2_1))

console.log('\n测试用例3：完全重叠区间（mergeIntervals1）')
const test3_1 = [
  [1, 4],
  [0, 4],
]
console.log('输入：', test3_1)
console.log('输出：', mergeIntervals1(test3_1))

console.log('\n测试用例4：包含关系区间（mergeIntervals1）')
const test4_1 = [
  [1, 4],
  [2, 3],
]
console.log('输入：', test4_1)
console.log('输出：', mergeIntervals1(test4_1))

console.log('\n测试用例5：空数组（mergeIntervals1）')
const test5_1 = []
console.log('输入：', test5_1)
console.log('输出：', mergeIntervals1(test5_1))

console.log('\n测试用例6：单个区间（mergeIntervals1）')
const test6_1 = [[1, 2]]
console.log('输入：', test6_1)
console.log('输出：', mergeIntervals1(test6_1))

// 重写写一遍多理解
const mergeIntervals2 = (arr) => {
  // 这道题咱不是写过吗，区间左右比较然后合并重叠区间
  // 这是数据结构 [[1, 6], [8, 10], [15, 18]]
  // 首先要搞个结果啊
  // const arr = []
  // // 然后就是遍历了
  // for (var i = 1; i < arr.length; i++) {
  //   // 如果第一个数组的右边大于第二个数组的左边
  //   if (arr[i - 1][1] > arr[i][0]) {
  //     arr.push([arr[i-1][0]])
  //   }
  // }
  // 之前的思路错了，应该是先弄一个进去，然后,在用外头的跟当前进去的比较，从而确定他的所有区间值
  // 当然他给的可能是不排序的，所以还得想办法排一下子序
  // 我们直接浅浅的用 sort 就行，这个是直接改变原数组的
  arr.sort((a, b) => a[0] - b[0])
  // 我们先给第 0 个填进去，为了方便比较
  const res = [arr[0]]
  for (let i = 1; i < arr.length; i++) {
    // 找到最后一个，去比较
    const oldarr = res[res.length - 1]
    // 如果上一个最后一个小于这个的开始那么说明，他俩压根不在一个区间了
    if (oldarr[1] < arr[i][0]) {
      // 这时候就需要 push 了，来解决问题
      res.push(arr[i])
    } else {
      // 这时候就是如果小于了，那就说明什么
      // 当前的这个区间需要合并了，给重叠的区间合并成一个
      // oldarr[1] = arr[i][1]
      // 取一个最大值,为啥呢，因为有可能是包含关系，不是交叉关系
      oldarr[1] = Math.max(oldarr[1], arr[i][1])
    }
  }
  return res
}
mergeIntervals2([
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
])
