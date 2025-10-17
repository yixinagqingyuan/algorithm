/** @format */

// 第一个只出现一次的字符
//在字符串 s 中找出第一个只出现一次的字符。如果没有，返回一个单空格。 s 只包含小写字母。
// s = "abaccdeff"
//返回 "b"
//s = ""
//返回 " "

const firstChar = (s) => {
  // 这个思路怎么找出出现一次的呢？搞个对象，去累加，找出出现一次的就可以了
  // 所以我们就搞个对象，自己累加被
  const res = new Map() // map 叫做字典，他跟普通的 obj 最大的区别就是他支持任何类型， 而 obj 只支持一些限定格式
  for (let i of s) {
    if (res.has(i)) {
      res.set(i, res.get(i) + 1)
    } else {
      res.set(i, 1)
    }
  }
  for (let i of res.keys) {
    if (res.get(i) == 1) {
      console.log(i)
    }
  }
}
firstChar()
