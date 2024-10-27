/** @format */
// 这一题其实就是比较版本号
//样例输入：versions = ['0.1.1', '2.3.3', '0.302.1', '4.2', '4.3.5', '4.3.4.5']
//输出：['0.1.1', '0.302.1', '2.3.3', '4.3.4.5', '4.3.5']
// 而比较版本号有一个特别有意思的绝活，就是我们将它变成一个小数
// 然后比较小数的大小，这样就完事了
const setversions = (versions) => {
  // 首先我们要将版本号变成小数
  return versions.sort((a, b) => {
    // 直接就在这比较就好了，问题史怎么给他变成一个小数
    // 怎么做呢，首先给他变成数组
    const arrA = a.split('.')
    const arrB = b.split('.')
    // 然后就能得到两个数组， 接下来给第一个数拿下来，然后将后头的数据合并
    const firstA = arrA.shift()
    const firstB = arrB.shift()
    // 然后给他 拼接为一个小数解决问题
    return (
      parseFloat(firstA + '.' + arrA.join('.')) -
      parseFloat(firstB + '.' + arrB.join('.'))
    )
  })
}
console.log(
  setversions(['0.1.1', '2.3.3', '0.302.1', '4.2', '4.3.5', '4.3.4.5']),
)
