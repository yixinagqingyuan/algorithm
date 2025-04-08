/**
 * @format
 * @param {string} s
 * @return {string}
 */

function longestPalindrome(s) {
  // 特殊情况处理
  if (s.length < 2) {
    return s
  }

  let maxLen = 1 // 最长回文子串的长度
  let begin = 0 // 最长回文子串的起始位置
  const len = s.length

  // dp[i][j] 表示 s[i...j] 是否是回文串
  const dp = Array(len)
    .fill()
    .map(() => Array(len).fill(false))

  // 所有单个字符都是回文串
  for (let i = 0; i < len; i++) {
    dp[i][i] = true
  }

  // 枚举子串长度
  for (let L = 2; L <= len; L++) {
    // 枚举子串起始位置
    for (let i = 0; i < len; i++) {
      // 根据起始位置和子串长度计算结束位置
      let j = L + i - 1
      // 结束位置超出字符串范围，结束当前循环
      if (j >= len) break

      if (s[i] !== s[j]) {
        dp[i][j] = false
      } else {
        if (j - i < 3) {
          dp[i][j] = true
        } else {
          dp[i][j] = dp[i + 1][j - 1]
        }
      }

      // 更新最长回文子串的信息
      if (dp[i][j] && j - i + 1 > maxLen) {
        maxLen = j - i + 1
        begin = i
      }
    }
  }

  return s.substring(begin, begin + maxLen)
}

// // 测试用例
// console.log(longestPalindrome("babad")); // 输出: "bab" 或 "aba"
// console.log(longestPalindrome("cbbd")); // 输出: "bb"
// console.log(longestPalindrome("a")); // 输出: "a"
// console.log(longestPalindrome("ac")); // 输出: "a" 或 "c"

//  这个方案太难了，我们暂时不考虑
// 我们利用之前的方案，找到其中的一个点，然后像两边扩散，从而找到最大的回文子字符串

function longestPalindrome1(s) {
  // 特殊情况处理
  if (s.length < 2) {
    return s
  }
  // 首先定义一些初始变量
  let indexstart = 0 // 最长回文子串的起始位置
  let indexend = 0 // 最长回文子串的结束位置
  // 然后找最长回文的方法
  const search = (i, j) => {
    let currstart = 0 // 最长回文子串的起始位置
    let currend = 0 // 最长回文子串的结束位置
    // 这时候就需要来找回文了，回文是什么呢？ 就是 i 和j 相等的情况
    while (i > 0 && j < s.length && s[i] === s[j]) {
      // 符合这条件就是回文了
      currstart = i
      currend = j
      i--
      j++
    }
    // 最后返回的结果就是回文最长的结果了
    return [currstart, currend]
  }
  // 然后我们就需要遍历整个字符串，找到最长的回文子字符串
  for (let i = 0; i < s.length; i++) {
    // 首先我们需要找到一个点，然后向两边扩散，但是这还有一个问题，就是基数偶数的情况
    // 所以我们需要两个点，一个点是 i，一个点是 i+1
    const res = search(i, i)
    // 之所以这样，是 和j 是加减的，所以当你找到一个点的时候，如果是个相当于是给当前的这个为中心了
    // 其实实际情况是俩中心，比如， a 、 aa ，这俩都是中心点 如果你不遍历两次，那么就麻烦了只能识别一个，第二个就黄了
    const res1 = search(i, i + 1)
    // 这个结果就是两个点的情况
    // 然后就需要先比较这两个点，再去跟最大的点比较
    if (res[1] - res[0] > res1[1] - res1[0]) {
      if (indexend - indexstart < res[1] - res[0]) {
        indexstart = res[0]
        indexend = res[1]
      }
    } else {
      if (indexend - indexstart < res1[1] - res1[0]) {
        indexstart = res1[0]
        indexend = res1[1]
      }
    }
  }
  // 最后返回的结果就是最长的回文子字符串了
  return s.slice(indexstart, indexend + 1)
}

// 测试用例
console.log(longestPalindrome1('babad')) // 输出: "bab" 或 "aba"
console.log(longestPalindrome1('cbbd')) // 输出: "bb"
console.log(longestPalindrome1('a')) // 输出: "a"
console.log(longestPalindrome1('ac')) // 输出: "a" 或 "c"



// 这种题还有简单的方式，判断是否是回文字符串

function isPalindrome(str) {
  //这种的有两种招数，反转一下就知道是不是了
  return str === str.split('').reverse().join('')
}

// 当然还有更常规的做法，就是 for 循环

function isPalindrome1(str) {
  // 处理边界条件
  if (!str) return false
  if (str.length <= 1) return true

  // 只需要遍历到字符串长度的一半
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false
    }
  }
  return true
}
// 添加测试用例
const palindromeTests = [
  '', // false
  'a', // true
  'aa', // true
  'aba', // true
  'abba', // true
  'abcd', // false
  'racecar', // true
]

palindromeTests.forEach((test, index) => {
  console.log(`回文测试 ${index + 1}:`, test)
  console.log('结果:', isPalindrome1(test))
  console.log('---')
})
