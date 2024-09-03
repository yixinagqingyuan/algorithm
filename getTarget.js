/** @format */

//输入：nums = [5,7,7,8,8,10], target = 8
// 这题有人说不是很简单吗。我直接一个遍历找到目标值不就行了吗
// 这玩意不是不行，而是不能够，为什么？ 你想想，面试啊，这么简单就让你蒙混过关了
// 面试官还混不混了，面试官要的是什么，是感觉，你要定要有让他惊艳的感觉
// 怎么惊艳，就是有很多数据，我们怎样解决效率最高
// 所以就得用二分法解决问题，注意他是一个递增的数组才能用二分法
const getTarget = (nums, target) => {
  // 二分法怎么搞呢？
  // 我们首先要搞到中间值，因为这样才能二分啊
  // 首先当然要有开始和结束的值了
  let start = 0
  let end = nums.length - 1

  // 然后就得 while 循环不断的逼近真相

  while (start <= end) {
    // 然后我们要搞到中间值
    let mid = Math.floor((start + end) / 2)
    if (nums[mid] == target) {
      console.log(mid)
      return
      // 在这两种情况下如果一样了，那么我们直接将这个中间值赋值就行了
      // 之所以加 1  是为了防止死循环
      // 因为我们每次都要逼近真相，但是由于 math，floor 是向下取整
      // 所以在特殊情况的时候就要加 1  来解决问题 ,并且从正常的思维逻辑来看，
      // 我这个值比较大，那么我就应该把 start 赋值为 mid + 1
      // 同理，我这个值比较小，那么我就应该把 end 赋值为 mid - 1
    } else if (nums[mid] < target) {
      start = mid + 1
    } else {
      end = mid - 1
    }
  }
}
getTarget([8], 8)
