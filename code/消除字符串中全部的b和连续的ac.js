/** @format */

// 消除字符串中全部的b和连续的ac

function removeString(str) {
  const stack = []

  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'b') continue

    if (str[i] === 'c' && stack.length > 0 && stack[stack.length - 1] === 'a') {
      stack.pop()
    } else {
      stack.push(str[i])
    }
  }

  return stack.join('')
}

// 测试用例
console.log(removeString('aabbc')) // 输出: ''
console.log(removeString('aaabbbccc')) // 输出: ''
console.log(removeString('abcdcba')) // 输出: 'dc'
console.log(removeString('')) // 输出: ''
console.log(removeString('bbb')) // 输出: ''
console.log(removeString('acac')) // 输出: ''
console.log(removeString('aacbcc')) // 输出: ''

// 重写一遍
// 这个主要思路就是干掉b，然后发现，是 c 然后如果在发现是 a  那就干掉
function removeString1(str) {
  const stack = []
  // 这时候应该遍历
  for (let i = 0; i < str.length; i++) {
    // 按照那个思路，干掉 b
    if (str[i] === 'b') continue
    // 然后如果发现是 c ，然后在发现如果前头是啊，那就给栈顶的家伙事干掉
    if (str[i] === 'c' && stack.length > 0 && stack[stack.length - 1] === 'a') {
      // 这时候就干掉，顺带 c 就不push 进栈了
      stack.pop()
    } else {
      // 其他的就 push 进栈
      stack.push(str[i])
    }
  }
  return stack.join('')
}

// 再做一个类似的题目搞一下
// 删除字符串中的所有相邻重复项
function removeDuplicates(str) {
  // 删除相邻重复项意思就是碰见俩一样的，就干掉
  // 首先还得有个数组
  const stack = []
  for (let i = 0; i < str.length; i++) {
    // 然后就判断，发现栈顶有就干掉
    if (stack.length > 0 && stack[stack.length - 1] === str[i]) {
      // 这个时候就干掉
      stack.pop()
    } else {
      stack.push(str[i])
    }
  }
  return stack.join('')
}

// 测试用例
// console.log(removeDuplicates('abbaca')) // 输出: 'ca'
// console.log(removeDuplicates('azxxzy')) // 输出: 'ay'
//console.log(removeDuplicates('aaaaaaa')) // 输出: ''
// console.log(removeDuplicates('abcdef')) // 输出: 'abcdef'

// 看一些类似的题目
// 删除字符串中出现次数 >= 2 次的相邻字符
function removeDuplicates2(str) {
  const stack = []

  for (let i = 0; i < str.length; i++) {
    const curr = str[i]
    const prev = stack[stack.length - 1]

    if (stack.length > 0 && curr === prev) {
      stack.pop()
      // 跳过剩余的连续相同字符
      while (i + 1 < str.length && str[i + 1] === curr) {
        i++
      }
      continue
    }
    
    stack.push(curr)
  }

  return stack.join('')
}

// 测试用例
// console.log(removeDuplicates2('abbaca')) // 输出: 'c'
console.log(removeDuplicates2('aaa')) // 输出: ''
// console.log(removeDuplicates2('abcdef')) // 输出: 'abcdef'

/**
 * 删除字符串中出现次数 >= 2 次的相邻字符
 * @param {string}s
 */
function removeDuplicate(s) {
  const stack = [] // Space: O(n)
  let top
  let next
  let i = 0
  while (i < s.length) {
    // Time: O(n)
    top = stack[stack.length - 1]
    next = s[i]
    if (next === top) {
      // 字符串中出现了相邻字符
      // 1. 移除栈顶字符
      // 2. 移动指针, 指向下一个不同的字符
      stack.pop()
      while (s[i] === top) i += 1
    } else {
      stack.push(next)
      i += 1
    }
  }

  return stack.join('') // Time: O(n)
}
//console.log(removeDuplicate('aaaaaaaaa'))

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates6 = function (s, k) {
  // 将字符串转换成数组，方便操作
  let stack = []
  let strArr = s.split('')

  for (let i = 0; i < strArr.length; i++) {
    // 栈为空，或当前字符与前一个字符不相同时，压入 (字符, 次数)
    if (stack.length === 0 || strArr[i] !== strArr[i - 1]) {
      stack.push(1)
    } else {
      // 栈顶次数加1
      let incremented = stack.pop() + 1
      if (incremented === k) {
        // 删除满足 k 个连续字符的片段
        strArr.splice(i - k + 1, k)
        i = i - k // 回溯到正确位置(即被删的字符的前一个字符)，继续遍历
      } else {
        stack.push(incremented)
      }
    }
  }
  return strArr.join('')
}
