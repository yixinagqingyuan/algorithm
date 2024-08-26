/** @format */

//random实现返回一个长度为num 元素值在[min, max]区间的整数数组
// arr 指的是区间   num 指的是数
const random_num = (arr, num) => {
  // 这一题 random 返回的首先是 0-1 的小数，我们要想要区间就要对这个数做变化
  // 所以首先我们要创建一个数组 长度为 num
  const range = arr[1] - arr[0]
  return new Array(num).fill(1).map((_) => {
    // 然后就要用 random 处理了 首先我们要确定区间 确定区间，其实很好理解
    // 怎么理解呢，我们用最大值减去最小值 就是一个区间值这个区间值，random 是返回的 0-1 的数
    // 就相当于 给这个区间值乘以比例，然后我在加上最小值，就相当于我在确定了一个区间
    // 这个区间不可能比最大值大，比最小值小
    return Math.round(Math.random() * range + arr[0])
  })
}
