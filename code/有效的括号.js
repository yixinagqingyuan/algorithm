/** @format */

//给定一个只包括 '(' ，')' ，'{' ，'}' ，'[' ，']' 的字符串，判断字符串是否有效。
// 这个题很有意思，所谓有效的括号， 本质上来说，有开始，还要有闭合
// 所以，这一题很简单的要利用栈的能力 利用入栈出栈， 来确定括号是否完整

function isValid(s) {
  // 空字符串认为是有效的
  if (!s) return true
  // 奇数长度的字符串一定不是有效的括号
  if (s.length % 2 !== 0) return false

  // 使用Map存储括号对应关系
  const pairs = new Map([
    [')', '('],
    ['}', '{'],
    [']', '['],
  ])

  const stack = []

  for (let char of s) {
    if (pairs.has(char)) {
      // 当前字符是右括号
      if (!stack.length || stack[stack.length - 1] !== pairs.get(char)) {
        return false
      }
      stack.pop()
    } else {
      // 当前字符是左括号
      stack.push(char)
    }
  }

  // 栈为空说明所有括号都匹配完成
  return stack.length === 0
}

// 测试用例
console.log(isValid1('')) // true
console.log(isValid1('()')) // true
console.log(isValid1('()[]{}')) // true
console.log(isValid1('(]')) // false
console.log(isValid1('([)]')) // false
console.log(isValid1('{[]}')) // true
console.log(isValid1('{')) // false
console.log(isValid1('((()))')) // true
console.log(isValid1('({[]})')) // true

function isValid1(s) {
  // 这个题有意思，首先首先就是找括号的对应关系， 然后利用栈的特性，来确定括号的有效性
  // 首先我们利用栈解决问题
  const stack = []
  for (let i = 0; i < s.length; i++) {
    // 有个思路，就是给他的对头括号存进去，这样是为了在最后一层直接碰见之后判断等于的，这样就能直接解决问题直接判断等于
    if (s[i] === '(') {
      stack.push(')')
    } else if (s[i] === '{') {
      stack.push('}')
    } else if (s[i] === '[') {
      stack.push(']')
    } else {
      if (stack.pop() !== s[i]) {
        return false
      }
    }
  }
  return stack.length === 0
}
