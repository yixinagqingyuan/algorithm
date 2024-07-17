/** @format */
// 将中文数字转成数字
//二千亿零一百零一万零二百 转为 200001010200
const cvtNum = (digit) => {
  // 这里还是要区分12345 和个十千百万
  const numChar = {
    零: 0,
    一: 1,
    二: 2,
    三: 3,
    四: 4,
    五: 5,
    六: 6,
    七: 7,
    八: 8,
    九: 9,
  }
  const numChar2 = {
    十: 10,
    百: 100,
    千: 1000,
    万: 10000,
    亿: 100000000,
  }
  // 做一个参考变量
  let sum = 0 // 总数
  let temp = 0 // 临时变量为了累加内容
  for (let i = 0; i < digit.length; i++) {
    const char = digit[i]
    // 等于 0 的时候没啥用，因为是相加的吗，所以要略过去
    if (char == '零') {
      continue
    }
    // 这个题当他等于 亿和万的时候 我们需要特殊处理，其他的 就按照千分位累加就可以了
    if (char == '亿' || char == '万') {
      // 这时候我们需要根据 char 做累加
      sum += temp * numChar2[char]
      temp = 0
    } else {
      //否则我们就按照千分位累加但是如果他后头跟的是亿或者万，那么就说说明得乘，不能加了就
      // 获取下一位
      const next = digit[i + 1]
      if (next && next !== '亿' && next !== '万') {
        temp += numChar2[char] * numChar2[next]
        i++
      } else {
        temp += numChar[char]
      }
    }
  }
  console.log(sum)
}
cvtNum('二千亿零一百零一万零二百')
