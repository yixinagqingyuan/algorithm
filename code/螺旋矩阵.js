/** @format */

/**
 * 螺旋矩阵
 * @param {number[][]} matrix 输入矩阵
 * @return {number[]} 螺旋顺序的数组
 */
const spiralOrder = (matrix) => {
  // 输入验证
  if (!matrix || !matrix.length || !matrix[0].length) {
    return []
  }

  // 如果是单元素矩阵，直接返回
  if (matrix.length === 1) {
    return matrix[0]
  }
  if (matrix[0].length === 1) {
    return matrix.map((row) => row[0])
  }

  // 定义四个边界
  let left = 0
  let right = matrix[0].length - 1
  let top = 0
  let bottom = matrix.length - 1
  const result = []

  // 当边界合法时继续遍历
  while (left <= right && top <= bottom) {
    // 从左到右遍历上边
    for (let i = left; i <= right; i++) {
      result.push(matrix[top][i])
    }
    top++

    // 从上到下遍历右边
    for (let i = top; i <= bottom; i++) {
      result.push(matrix[i][right])
    }
    right--

    if (top <= bottom) {
      // 从右到左遍历下边
      for (let i = right; i >= left; i--) {
        result.push(matrix[bottom][i])
      }
      bottom--
    }

    if (left <= right) {
      // 从下到上遍历左边
      for (let i = bottom; i >= top; i--) {
        result.push(matrix[i][left])
      }
      left++
    }
  }

  return result
}

// 测试用例
// const test1 = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ]
// console.log('测试用例1:', spiralOrder(test1))

// const test2 = [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12],
// ]
// console.log('测试用例2:', spiralOrder(test2))

// const test3 = [[1]]
// console.log('测试用例3:', spiralOrder(test3))

// const test4 = []
// console.log('测试用例4:', spiralOrder(test4))

//螺旋矩阵，其实就是给一个圈想办法输出成正常的顺序
// 重写一遍试试

const spiralOrder1 = (matrix) => {
  // 首先兜底空，空数组，空数组的数组都是空
  // 然后判断是否是单元素矩阵，是的话直接返回
  if (!matrix || !matrix.length || !matrix[0].length) {
    return []
  }
  // // 然后横着的是一栏，就就是单元素矩阵，直接返回
  // 这个放在最后了
  // if (matrix.length === 1) {
  //   return matrix[0]
  // }
  // // 竖着的单元素矩阵，直接返回
  // if (matrix[0].length === 1) {
  //   return matrix.map((row) => row[0])
  // }
  // 剩下的要定义边界了，然后开始遍历
  let left = 0
  let right = matrix[0].length - 1
  let top = 0
  let bottom = matrix.length - 1
  const result = []
  // 这时候我们要有个判断条件，指定是右边的大于左边，下边的大于上边
  while (left < right && top < bottom) {
    // 然后四个 for 循环，来直接给内容拿出来
    // 首先是从左到右遍历上边,然后从上到下，然后从右到左，然后从下到上
    for (let i = left; i < right; i++) {
      result.push(matrix[top][i])
    }
    for (let i = top; i < bottom; i++) {
      result.push(matrix[i][right])
    }
    for (let i = right; i > left; i--) {
      result.push(matrix[bottom][i])
    }
    for (let i = bottom; i > top; i--) {
      result.push(matrix[i][left])
    }
    // 一轮循环玩了就下一轮
    left++
    right--
    top++
    bottom--
  }
  if (left == right) {
    for (let i = top; i <= bottom; i++) result.push(matrix[i][left])
  }
  // 只有一行的情况，从左往右进行遍历
  else if (top == bottom) {
    for (let i = left; i <= right; i++) result.push(matrix[top][i])
  }
  return result
}

// 测试用例
const test5 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]
console.log('测试用例5 (常规3x3矩阵):', spiralOrder1(test5))

const test6 = [[1, 2, 3, 4]]
console.log('测试用例6 (单行矩阵):', spiralOrder1(test6))

const test7 = [[1], [2], [3], [4]]
console.log('测试用例7 (单列矩阵):', spiralOrder1(test7))

const test8 = []
console.log('测试用例8 (空矩阵):', spiralOrder1(test8))

const test9 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
]
console.log('测试用例9 (3x4矩阵):', spiralOrder1(test9))
