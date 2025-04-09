/** @format */

// 去掉连续的 ac 和 b

// 示例 1:
// 输入: s = "aabcc"
// 输出: ""
// 解释: 去掉b和连续的ac后，得到空字符串

// 示例 2:
// 输入: s = "abcabc"
// 输出: "abcabc"
// 解释: 没有连续的 ac 和 b，返回原字符串

const removeAcAndB = (s) => {
  const stack = []

  for (let i = 0; i < s.length; i++) {
    const char = s[i]

    // 跳过 b 字符
    if (char === 'b') continue

    // 如果当前字符是 c，且栈顶是 a，则弹出栈顶元素（去掉 ac）
    if (char === 'c' && stack.length > 0 && stack[stack.length - 1] === 'a') {
      stack.pop()
    } else {
      // 其他情况，将字符压入栈中
      stack.push(char)
    }
  }

  // 返回栈中剩余的字符组成的字符串
  return stack.join('')
}

// 测试用例
console.log(removeAcAndB('aabbc')) // 输出: ""
console.log(removeAcAndB('aaabbbccc')) // 输出: ""
console.log(removeAcAndB('abcdcba')) // 输出: "d"
console.log(removeAcAndB('abcabc')) // 输出: ""
//
//
//
// 重写去掉连续的 ac 和b

const removeAcAndB1 = (s) => {
  // 这个题的思路很有意思，主要思路，就是碰见 ac 和b 就干掉，ac 是和数组里头的内容去比较
  // 先搞个结果
  const res = []
  for (let i = 0; i < s.length; i++) {
    //遇见 b 直接干掉
    if (s[i] == 'b') continue
    // 碰见当前的这个如果是 c，并且碰见数组前头是 a 那一定得干掉啊

    if (s[i] == 'c' && res.length && res[res.length - 1] == 'a') {
      res.pop()
    } else {
      res.push(s[i])
    }
  }
  return res.join('')
}

// // 测试用例
// console.log(removeAcAndB1('aabcc')) // 输出: "c"
// console.log(removeAcAndB1('abcabc')) // 输出: "abcabc"
// console.log(removeAcAndB1('')) // 输出: ""
// console.log(removeAcAndB1('bbb')) // 输出: ""
// console.log(removeAcAndB1('acac')) // 输出: ""
// console.log(removeAcAndB1('aacbcc')) // 输出: "c"
