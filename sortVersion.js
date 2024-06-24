/** @format */

//版本号排序
// 版本号排序，和版本号比较这一版有两个版本题
// 我们先来写简单的一题，比较版本号
// 但是有些恶心人的面试官他除了用数字比较，还会加上除了数字之外字母
// 比如 'v1.0.1-beta.1.1', 'v1.21.1-cr.2.1', 'v1.1.01-alpha.1' 等等
// 当然，他们也不会忘了告诉你cr>beta>alpha
const compareVersion = (version1, version2) => {
  // 这时候我们的思路还是可以用小数点的方式来进行比较
  let arr1 = version1.split('.')
  let arr2 = version21.split('.')
  // 这时候已经给页面分开了，然后我们再来开始讲他变成整数点小数的方式来比较
  let num1 = arr1.shift().substring(1) + '.' + arr1.join('')
  let num2 = arr2.shift().substring(1) + '.' + arr2.join('')
  // 然后我们再来比较
  num1.replace(/-beta|-cr|-alpha/, (res) => {
    if (res === '-beta') {
      return 1
    } else if (res === '-cr') {
      return 2
    } else if (res === '-alpha') {
      return 3
    }
  })
  num2.replace(/-beta|-cr|-alpha/g, (res) => {
    if (res === '-beta') {
      return 1
    } else if (res === '-cr') {
      return 2
    } else if (res === '-alpha') {
      return 3
    }
  })
  return num1 - num2
}

// 这时候再多个比较
const sortVersion = (arr) => {
  // 这个招很简单，就是给之前比较的代码用 sort 包起来就行了
  return arr.sort(compareVersion)
}
