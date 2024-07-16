/** @format */
//示例 1:

//输入:
//[
// [ 1, 2, 3 ],
// [ 4, 5, 6 ],
// [ 7, 8, 9 ]
//]
//输出: [1,2,3,6,9,8,7,4,5]
//示例 2:

//输入:
//[
//  [1, 2, 3, 4],
//  [5, 6, 7, 8],
//  [9,10,11,12]
//]
//输出: [1,2,3,4,8,12,11,10,9,5,6,7]
// 螺旋矩阵
// 这一题从本质上来说，其实就是顺时针绕着圈给内容输出出来，他是个二维数组，那么这一题的解题思路
// 其实比较简单吧，我由于能知道二维数组的长宽高，我根据四个方向遍历就行了
const spiralOrder = (arr) => {
  // 首先拿到这个二维数组要处理一下，首先要拿到他的四个方向
  let left = 0
  let right = arr[0].length - 1
  let top = 0
  let bottom = arr.length - 1
  // 然后当然还得有个结果集合
  let res = []
  // 接下来就要开始疯狂遍历了，由于他是一层套一层，所以，我们要有个while 判断
  // 也就是 他还能遍历的时候，指导他遍历不动了，再说
  // 这里之所以为并且，就是因为可能左右还能遍历，但上下遍历不了了
  // 或者上线还能遍历，左右遍历不了了
  while (left < right && top < bottom) {
    // 然后就是上下左右开始遍历
    // 首先是上左到右
    // 还有个问题，之所以是小于 是由于当前的这个一个的结束就是下一个的开始 最后的结束就是第一个的开始
    // 所以就不能是带等于
    for (let i = left; i < right; i++) {
      res.push(arr[top][i])
    }
    // 右 上到下
    for (let i = top; i < bottom; i++) {
      res.push(arr[i][right])
    }
    // 下  右到左
    for (let i = right; i > left; i--) {
      res.push(arr[bottom][i])
    }
    // 左 下到上
    for (let i = bottom; i > top; i--) {
      res.push(arr[i][left])
    }
    // 一遍便利完了，就要给他缩小范围

    left++
    right--
    top++
    bottom--
  }
  // 接下来我们解决上头并且带来的坑，就是当有个地方等于 0 之后， 我们其实就相当于这种四周遍历就迎来了终结
  // 我们只需要顺着当前的为 0 的这个方向，解决问题即可
  console.log(left, right, top, bottom)
  if (left === right) {
    for (let i = top; i <= bottom; i++) {
      res.push(arr[i][left])
    }
  } else if (top === bottom) {
    for (let i = left; i <= right; i++) {
      res.push(arr[top][i])
    }
  }
  console.log(res)
}
spiralOrder([
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
])
