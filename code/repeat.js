/** @format */
// 找出字符串中连续重复次数最多的字符，输出该字符，开始位置，结束位置
// 这个题就需要借助一些中间变量，来保存问题，而且这个题就跟之前的找最大无重复的数异曲同工
// 只是这一次要下标了
const repeat = (str) => {
  // 首先创建一些中间变量
  let maxPosition = [0, 0]
  let position = [0, 0]
  let newChar = str[0]
  // 然后我们开始遍历
  for (let i = 1; i < str.length; i++) {
    // 首先我们开始找相同字符串
    const char = str[i]
    if (char == newChar) {
      position[1] = i
      // 然后我们开始找最大的
    } else {
      newChar = char
      position[0] = i
      position[1] = i
    }
    // 这里就是求出最大下标
    // 这里的本质其实就是那当前的等于的下边和不等于的去比较看哪个大取哪个
    // 这里注意要身拷贝，防止对象引用最后改共同的值导致出错
    console.log(position[1] - position[0], maxPosition[1] - maxPosition[0])
    maxPosition =
      position[1] - position[0] > maxPosition[1] - maxPosition[0]
        ? JSON.parse(JSON.stringify(position))
        : JSON.parse(JSON.stringify(maxPosition))
  }
  // 最后得出最终结果
  console.log(maxPosition)
}

repeat('bsssssssbssseeee')
