/** @format */
// 将中文数字转成阿拉伯数字
const chineseToNumber = (chnStr) => {
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
  const unitChar = {
    十: { value: 10, isSection: false },
    百: { value: 100, isSection: false },
    千: { value: 1000, isSection: false },
    万: { value: 10000, isSection: true },
    亿: { value: 100000000, isSection: true },
  }

  let result = 0
  let section = 0
  let number = 0
  let chars = chnStr.split('')

  for (let i = 0; i < chars.length; i++) {
    const char = chars[i]
    const num = numChar[char]

    if (typeof num !== 'undefined') {
      number = num
      // 处理最后一个数字
      if (i === chars.length - 1) {
        section += number
      }
    } else {
      const unit = unitChar[char]
      if (unit.isSection) {
        // 处理万、亿等节权位
        section = (section + number) * unit.value
        result += section
        section = 0
      } else {
        // 处理十、百、千等位
        section += number * unit.value
      }
      number = 0
    }
  }

  return result + section
}

// 测试用例
console.log(chineseToNumber('一万零一百')) // 10100
console.log(chineseToNumber('一千零一')) // 1001
console.log(chineseToNumber('一亿一千万')) // 110000000
console.log(chineseToNumber('二千亿零一百零一万零二百')) // 200001010200

// 这题的核心就是要理解中文转成数字的规律 十百千是一种规律，万和亿也是一种规律 ，因为，千后面可以跟上万，和亿，但是万后面不能跟上千

const chineseToNumber1 = (str) => {
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
  // 这里就是那个区别的提前处理
  const unitChar = {
    十: { value: 10, isSection: false },
    百: { value: 100, isSection: false },
    千: { value: 1000, isSection: false },
    万: { value: 10000, isSection: true },
    亿: { value: 100000000, isSection: true },
  }
  // 接下来就是变量了
  let result = 0
  let temp = 0
  let currNum = 0
  for (let i = 0; i < str.length; i++) {
    const char = str[i]
    const num = numChar[char]
    // 如果我找到了，就说明他是个普通数字
    if (typeof num !== 'undefined') {
      // 我要给他存进去临时变量里面
      currNum = num
      // 得处理最后一个数字
      if (i === str.length - 1) {
        temp += currNum
      }
    } else {
      // 这里就说明他是个单位，要做乘除啥的
      if (unitChar[char].isSection) {
        // 这里就说明是万或者亿,因为万或者亿后面不能跟千，到这一步必然是前面有千或者什么东西，那么就需要乘以 temp 里头的内容
        // 因为有 十五万 这种情况，所以要加起来
        result += (temp + currNum) * unitChar[char].value
        currNum = 0
        temp = 0
      } else {
        // 这里就说明是十百千
        temp += currNum * unitChar[char].value
      }
    }
  }
  return result + temp
}

// 测试用例
console.log(chineseToNumber1('一万零一百')) // 10100
console.log(chineseToNumber1('一千零一')) // 1001
console.log(chineseToNumber1('一亿一千万')) // 110000000
console.log(chineseToNumber1('二千亿零一百零一万零二百')) // 200001010200
console.log(chineseToNumber1('十五')) // 15
console.log(chineseToNumber1('二十')) // 20
console.log(chineseToNumber1('一百零五')) // 105
console.log(chineseToNumber1('一千零五十')) // 1050
