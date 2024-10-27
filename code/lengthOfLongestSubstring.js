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

// 再写一遍

const lengthOfLongestSubstring1 = (str) => {
  //  这题就是利用一个个往后走，发现重复的给前头的干掉，然后再往后走,最终比较从而求出最大的
  let max = 0
  let arr = []
  for (let i = 0; i < str.length; i++) {
    // 发现里头有了，就给前头的都干掉
    if (arr.includes(str[i])) {
      arr = arr.slice(arr.indexOf(str[i]) + 1)
    }
    arr.push(str[i])
    max = Math.max(max, arr.length)
  }
}
