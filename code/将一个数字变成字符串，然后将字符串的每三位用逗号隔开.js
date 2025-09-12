/** @format */

// 这一题就是将一个数字变成字符串，然后将字符串的每三位用逗号隔开

// 首先这个题取名字要见名知意
const numtostr = (mum) => {
  // 既然变成字符串，首先是要 有个存字符串的结果
  let res = ''
  // 首先 for 循环
  for (let i = 0; i < num.length; i++) {
    if (i % 3 == 0) {
      res += ','
    }
    res += num[i]
  }
}

numtostr(1234567890)

const numtostr1 = (num) => {
  // 转成字符串，每三位用逗号隔开
  // 这一题的核心思路是利用取余来解决问题
  const str = num + ''
  let res = ''
  for (let i = 0; i < str.length; i++) {
    if (i != 0 && i % 3 == 0) {
      res += ','
    }
    res += str[i]
  }
}
