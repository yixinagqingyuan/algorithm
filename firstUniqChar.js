/** @format */

// 第一个只出现一次的字符
//在字符串 s 中找出第一个只出现一次的字符。如果没有，返回一个单空格。 s 只包含小写字母。
// s = "abaccdeff"
//返回 "b"
//s = ""
//返回 " "

const firstUniqChar = (str) => {
  //这个题，首先给他放进去，然后有多个，给他累加
  const map = new Map()
  for (let i = 0; i < str.length; i++) {
    if (map.has(str[i])) {
      map.set(str[i], map.get(str[i]) + 1)
    } else {
      map.set(str[i], 1)
    }
  }
  // 由于他是按照顺序塞进去的，所以我们需要做一件事，
  // 给他遍历一下子，然后找到第一个等于1的就可以了
  // 注意，这里不用用 map 来遍历，更不能用 foreach, 我们只能用 for fo 这种可以遍历含有迭代器的变量去解决
  for (let s of map.keys()) {
    if (map.get(s) == 1) {
      console.log(s)
      return s
    }
  }
}

firstUniqChar('abaccdeff')
