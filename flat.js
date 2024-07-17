/** @format */

const test = ['a', ['b', 'c'], ['d', ['e', ['f']], 'g']]
// 数组扁平化
// 这个题其实就是给多级数组内容变成一级
const flat = (arr) => {
  // 核心就是遍历最外层，然后传入数组
  // 然后遍历数组，然后判断是不是数组，是的话就继续遍历，不是的话就直接push
  let res = []
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      // 结果出来，我们给拼接上去然后在遍历之前的，其实就是遍历
      res = res.concat(flat(arr[i]))
    } else {
      res.push(arr[i])
    }
  }
  return res
}
console.log(flat(test))
