/** @format */

// 无重复最长子串
const lengthOfLongestSubstring = (str) => {
  // 无重复最长子串，这个有一个思路叫做滑动窗口
  // 本质上，就是有一个左边右边的的指针，如果发现重复的，就给左边的移动一下
  // 然后右边的就一直++
  // 我先得有个 左指针啊对吧
  var left = 0
  // 这个 max 每次都要更新，这样才能求出最长的从而解决问题
  var max = 0
  var map = []
  for (var i = 0; i < str.length; i++) {
    if (map.includes(str[i])) {
      // 如果 map 里有这个字符，就把左边的指针移动到这个字符的下一个
      left = map.indexOf(str[i])
      map = map.slice(0, left + 1)
    }
    // 每次要 push 进去一个，这样才能求出最长的
    map.push(str[i])
    max = Math.max(max, map.length)
  }
  return max
}
