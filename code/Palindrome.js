/** @format */

//最长回文子串
// 这一题的核心思想，就是我找到一个点或者两个点
// 因为他有奇偶数的区别然后向四周扩散
const Palindrome = (str) => {
  // 首先搞个扩散的找最长回文的函数
  const search = (i, j) => {
    // 这是时候就要有 while 来去找回文了
    // 直到找不到为止，这时候就要有条件了
    // 什么条件呢？首先要 i> 0 j<str的 length
    // 然后还要i和j的值相等
    // 这个时候就表示他是回文
    // 然后我还要保存的他值，那么就需要提前在++或者--的时候存下来
    const arr = [i, j]
    while (i >= 0 && j < str.length && str[i] === str[j]) {
      arr[0] = i
      arr[1] = j
      i--
      j++
    }
    return arr
  }
  const answer = [0, 0]
  for (let i = 0; i < str.length; i++) {
    const res1 = search(i, i)
    const res2 = search(i, i + 1)
    // 出来了以后就可以开始判断了，主要是判断长度，谁的长，那么就说明谁的回文多啊
    if (res1[1] - res1[0] > res2[1] - res2[0]) {
      if (res1[1] - res1[0] > answer[1] - answer[0]) {
        answer = res1
      }
    } else {
      if (res2[1] - res2[0] > answer[1] - answer[0]) {
        answer = res2
      }
    }
  }
  // 这时候就能拿到最终的最长回文了，那么就直接截取字符串即可
  return str.slice(answer[0], answer[1] + 1)
}

Palindrome('ababbad')

