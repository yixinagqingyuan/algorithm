/**
 * 找出字符串中连续重复次数最多的字符，输出该字符，开始位置，结束位置
 *
 * @format
 * @param {string} str 输入字符串
 * @returns {object} 返回包含字符、开始位置和结束位置的对象
 */

// function findMostRepeatedChar(str) {
//   if (!str || str.length === 0) {
//     return { char: '', start: -1, end: -1 }
//   }

//   let maxChar = str[0]
//   let maxStart = 0
//   let maxEnd = 0
//   let maxCount = 1

//   let currentChar = str[0]
//   let currentStart = 0
//   let currentCount = 1

//   // 遍历字符串，使用双指针记录连续重复字符的位置
//   for (let i = 1; i < str.length; i++) {
//     if (str[i] === currentChar) {
//       currentCount++
//       // 如果当前重复次数大于最大重复次数，更新结果
//       if (currentCount > maxCount) {
//         maxCount = currentCount
//         maxChar = currentChar
//         maxStart = currentStart
//         maxEnd = i
//       }
//     } else {
//       // 遇到不同字符，重置当前计数
//       currentChar = str[i]
//       currentStart = i
//       currentCount = 1
//     }
//   }

//   return {
//     char: maxChar,
//     start: maxStart,
//     end: maxEnd,
//   }
// }

// 重写这一题
function findMostRepeatedChar1(str) {
  // 先来个兜底，处理下边界条件
  if (!str || str.length === 0) {
    return { char: '', start: -1, end: -1 }
  }
  // 然后就是最大开始指针，结束指针，以及做大长度
  let maxStart = 0
  let maxEnd = 0
  let maxCount = 0
  // 然后然后在存一下当前指针，包括当前开始指针，结束指针，还有长度了，
  let currentStart = 0
  let currentEnd = 0
  let currentCount = 0
  // 然后就开始遍历，利用当前的指针来更新最大的指针
  for (let i = 0; i < str.length; i++) {
    // 这里的判断条件是当前字符，和当前变量是否相等，如果相等要更新最大指针了，如果不是要从新开始
    if (str[i] == str[currentStart]) {
      // 如果是相等的条件，那么就要跟新最大的指针了
      currentCount++
      currentEnd = i
      if (currentCount > maxCount) {
        maxStart = currentStart
        maxEnd = currentEnd
        maxCount = currentCount
      }
    } else {
      currentStart = i
      currentEnd = i
      currentCount = 1
    }
  }
  return {
    char: str[maxStart],
    start: maxStart,
    end: maxEnd,
  }
}

// 测试用例
const testCases = [
  'aabbbcccc', // 期望输出: { char: 'c', start: 5, end: 8 }
  'aaa', // 期望输出: { char: 'a', start: 0, end: 2 }
  'abcd', // 期望输出: { char: 'a', start: 0, end: 0 }
  '', // 期望输出: { char: '', start: -1, end: -1 }
]

testCases.forEach((test, index) => {
  console.log(`测试用例 ${index + 1}:`, test)
  console.log('结果:', findMostRepeatedChar1(test))
  console.log('---')
})
