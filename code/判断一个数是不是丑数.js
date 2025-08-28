/** @format */

//给你一个整数 n ，请你判断 n 是否为 丑数 。如果是，返回 true ；否则，返回 false 。
//丑数 就是只包含质因数 2、3 和/或 5 的正整数。

const isUgly = (n) => {
  // 如果不是正整数就不搭理
  if (n <= 0) return false
  // 然后就开始循环 2,3,5，这个原理是什么呢？n = 2^a * 3^b * 5^c
  // 其实就是一直除这三个数，直到除不尽为止
  while (n % 2 === 0) {
    n /= 2
  }
  while (n % 3 === 0) {
    n /= 3
  }
  while (n % 5 === 0) {
    n /= 5
  }
  // 如果是1就直接返回true
  if (n === 1) return true

  return false
}

isUgly(16)
