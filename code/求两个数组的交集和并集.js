/** @format */

// 求两个数组的交集和并集
const arr1 = [1, 3, 4, 6, 7]
const arr2 = [2, 5, 3, 6, 1]

// 所谓求两个数组的交集和并集，的意思就是找到其中相等的数，或者去掉其中重复的数字
// 这就很好搞了，怎么搞呢？
// 如果交集的话，就是双重 for循环 找到两个数组里面一样的数字

const intersection = () => {
  // 这时候一种方式是用 现在api 一种是直接循环
  // 我们先来第一种
  // const res = []
  // for (let i = 0; i < arr1.length; i++) {
  //   for (let j = 0; j < arr2.length; j++) {
  //     if (arr1[i] == arr2[j]) {
  //       res.push(arr1[i])
  //     }
  //   }
  // }
  // console.log(res)
  // 然后利用api 搞定
  console.log(
    arr1.filter((item) => {
      return arr2.includes(item)
    }),
  )
}
const union = () => {
  // 这个求交集，其实也很简单就是找到一样的给解决了，如果是不一样的 就保存起来
  const res = [...arr1]
  for (let i = 0; i < arr2.length; i++) {
    if (!res.includes(arr2[i])) {
      res.push(arr2[i])
    }
  }
  console.log(res)
}

// 数组去重，直接
//Array.form(new Set(arr))
