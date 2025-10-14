/** @format */

//样例输入：s = "3[a2[c]]"
//样例输出：accaccacc
// 这一题叫字符串解码，就是把字符串带上括号的地方给拆开
// 有了这个信息，我们就有了阿里味的抓手，中括号，

// 开始字符串解码之前，先看字符串编码

// 字符串编码 转场 3a2c
// 这个就可以用数组解决，也可以一个临时的值来解决问题
//s = '3[a2[c]]'
const encoding = () => {
  let res = ''
  let num = 1
  let curr = s[0]
  for (let i = 1; i < str.length; i++) {
    if (curr == s[i]) {
      num++
    } else {
      res = res + num + curr
      num = 1
      curr = s[i]
    }
  }
  console.log(res)
}
encoding('accaccacc')

const Decoding = () => {
  // 这是简单的解码
  let res = ''
  let curr = ''
  for (let i = 0; i < s.length; i++) {
    if (/\d/.test(s[i])) {
      curr = s[i]
    } else {
      // 这个 api 很精妙，不用 for循环了
      res = res + s[i].repeat(Number(curr))
    }
  }
}
Decoding('3a2c')

// 搞一个升级版本
let s = '3[a2[c]]'
//样例输出：accaccacc
const Decoding1 = () => {
  //  现在因为有括号接入了，所以要判断括号 给他还原
  let res = ''
  let curr = []
  let num = []
  let str = ''
  // 套路还是一样的，要判断字母，判断括号,因为还有个叠加是累加的，是层级来做的
  for (let i of s) {
    // 这一块要从后到前解决，当碰见括号的时候
    if (/\d/.test(i)) {
      str += i
      // 如果是数字的
      // 遇见数字的话存起来，因为是根据括号解决的，所以当碰见右括号再解决，做括号的时候保存内容
      // 每一步都是有用的，因为这里不能 push有可能是多个数字字母的地方也有可能是多个数字。所以只能累加，而不能 push
    } else if (i == '[') {
      num.push(str)
      curr.push(res)
      str = ''
      res = ''
      // 这是括号
    } else if (i == ']') {
      // 这是右括号，这就说明要给他拿出来，然后加起来
      const Letters = curr.pop()
      const num1 = num.pop()
      res = Letters + res.repeat(Number(num1))
    } else {
      // 这是字母
      res += i
    }
  }
}
Decoding1()
