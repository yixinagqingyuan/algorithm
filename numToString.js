/** @format */

//【代码题】数字转字符串

//样例输入：1234567890
//样例输出：1,234,567,890
function numToString(num) {
  const string = String(num)
  const result = []
  for (let i = string.length - 1; i >= 0; i--) {
    result.unshift(string[i])
    if (i % 3 == 1) {
      result.unshift(',')
    }
  }
  console.log(result)
  console.log(result.join(''))
}
// numToString(1234567890)

// 当然还可以有个更简单的写法

function numToString1(num) {
  // 可以简化代码直接用字符串拼接来解决问题
  let str = ''
  const string = String(num)
  for (let i = string.length - 1; i >= 0; i--) {
    str = string[i] + str
    if (i % 3 == 1) {
      str = ',' + str
    }
  }
  console.log(str)
  return str
}
numToString1(1234567890)
