/** @format */

// 请把俩个数组 [A1, A2, B1, B2, C1, C2, D1, D2] 和 [A, B, C, D]，合并为 [A1, A2, A, B1, B2, B, C1, C2, C, D1, D2, D]
// 这一题的本质，就是在 a 数组里头插入 b 所以我们的关键是 b
const concat = (arr1, arr2) => {
  // 首先搞个数组来存结果
  const res = []
  // 然后我们要一次次吐出来 b 数组的值，然后跟a 去比较
  let b = arr2.shift()
  for (let i = 0; i < arr1.length; i++) {
    // 这个就兼容这一个和下一个，还有 最后一个的情况
    if (arr1[i].includes(b) && arr1[i + 1] && arr1[i + 1].includes(b)) {
      res.push(arr1[i])
    } else {
      res.push(arr1[i])
      if (b) {
        res.push(b)
      }
      b = arr2.shift()
    }
  }
  console.log(res)
}
concat(['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'D1', 'D2'], ['A', 'B', 'C', 'D'])
