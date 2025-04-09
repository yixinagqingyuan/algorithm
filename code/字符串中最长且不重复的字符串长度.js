/** @format */

/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
  // 处理边界情况
  if (!s) return 0
  if (s.length === 1) return 1

  // 使用Set来存储当前窗口中的字符
  const set = new Set()
  let maxLength = 0
  let left = 0
  let right = 0

  while (right < s.length) {
    // 如果当前字符不在set中，添加到set并移动右指针
    if (!set.has(s[right])) {
      set.add(s[right])
      maxLength = Math.max(maxLength, set.size)
      right++
    } else {
      // 如果当前字符在set中，移除左指针对应的字符并移动左指针
      set.delete(s[left])
      left++
    }
  }

  return maxLength
}

// 测试用例
console.log(lengthOfLongestSubstring('')) // 0
console.log(lengthOfLongestSubstring('a')) // 1
console.log(lengthOfLongestSubstring('abcabcbb')) // 3
console.log(lengthOfLongestSubstring('bbbbb')) // 1
console.log(lengthOfLongestSubstring('pwwkew')) // 3

// 重写，就是用滑动窗口去做

function lengthOfLongestSubstring1(s) {
  // 先兜底
  if (!s) return 0
  // 然后搞俩变量
  const res = []
  let max = 0
  for (let i = 0; i < s.length; i++) {
    // 滑动窗口啥意思呢。就是找个窗口，如果有重复的就移动
    if (res.includes(s[i])) {
      const index = res.indexOf(s[i])
      // 给前面的都干掉
      res.splice(0, index + 1)
    }
    res.push(s[i])
    max = Math.max(res.length, max)
  }
  return max
}

// 测试用例
console.log(lengthOfLongestSubstring1('')) // 0
console.log(lengthOfLongestSubstring1('a')) // 1
console.log(lengthOfLongestSubstring1('abcabcbb')) // 3
console.log(lengthOfLongestSubstring1('bbbbb')) // 1
console.log(lengthOfLongestSubstring1('pwwkew')) // 3
console.log(lengthOfLongestSubstring1('dvdf')) // 3
