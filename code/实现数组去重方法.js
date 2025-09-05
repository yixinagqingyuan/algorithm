/** @format */

const unique = (arr) => {
  return Array.from(new Set(arr))
}

const unique1 = (arr) => {
  return arr.filter((item, index) => {
    // indexof 返回它的第一个位置，如果找不到就返回-1
    // 那就有点意思了，什么意思呢？ 就是我们 indexof 只返回第一个，但是如果当前的 index 如果不等于 indexof 那么就表示他不是第一个
    // 这样就可以只有第一个了
    return arr.indexOf(item) == index
  })
}

const unique3 = (arr) => {
  // 这个很有意思
  return arr.reduce((prev, curr) => {
    // 这个返回值就是最后的结果，而不是通过 true和false 来返回这个值
    // 这里面我可以直接拿到上一个值和当前值来做一个计算，
    return prev.includes(curr) ? [...prev] : [...prev, curr]
  }, [])
}
