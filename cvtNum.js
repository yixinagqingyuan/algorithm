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
    十: 10,
  }
  const numChar2 = {
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
  }
}
