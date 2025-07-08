/** @format */

// /**
//  * 实现 Math.pow() 函数
//  * 计算 base 的 exponent 次幂
//  *
//  * @format
//  */

// // 方法1: 递归实现（基础版本）
// function pow1(base, exponent) {
//   // 边界情况处理
//   if (exponent === 0) return 1
//   if (exponent === 1) return base
//   if (base === 0) return 0
//   if (base === 1) return 1
//   if (base === -1) return exponent % 2 === 0 ? 1 : -1

//   // 处理负指数
//   if (exponent < 0) {
//     return 1 / pow1(base, -exponent)
//   }

//   // 递归计算
//   return base * pow1(base, exponent - 1)
// }

// // 方法2: 快速幂算法（分治法）- 推荐
// function pow2(base, exponent) {
//   // 边界情况处理
//   if (exponent === 0) return 1
//   if (exponent === 1) return base
//   if (base === 0) return 0
//   if (base === 1) return 1
//   if (base === -1) return exponent % 2 === 0 ? 1 : -1

//   // 处理负指数
//   if (exponent < 0) {
//     return 1 / pow2(base, -exponent)
//   }

//   // 快速幂算法：利用 x^n = (x^(n/2))^2 的性质
//   if (exponent % 2 === 0) {
//     // 偶数指数
//     const half = pow2(base, exponent / 2)
//     return half * half
//   } else {
//     // 奇数指数
//     return base * pow2(base, exponent - 1)
//   }
// }

// // 方法3: 迭代实现（快速幂的迭代版本）
// function pow3(base, exponent) {
//   // 边界情况处理
//   if (exponent === 0) return 1
//   if (exponent === 1) return base
//   if (base === 0) return 0
//   if (base === 1) return 1
//   if (base === -1) return exponent % 2 === 0 ? 1 : -1

//   let isNegativeExponent = exponent < 0
//   exponent = Math.abs(exponent)

//   let result = 1
//   let currentPower = base

//   // 二进制快速幂
//   while (exponent > 0) {
//     // 如果当前位是1，则乘以当前的幂
//     if (exponent % 2 === 1) {
//       result *= currentPower
//     }
//     // 平方当前的幂，右移指数
//     currentPower *= currentPower
//     exponent = Math.floor(exponent / 2)
//   }

//   return isNegativeExponent ? 1 / result : result
// }

// // 方法4: 支持小数指数的实现（使用对数）
// function pow4(base, exponent) {
//   // 边界情况处理
//   if (exponent === 0) return 1
//   if (exponent === 1) return base
//   if (base === 0) return 0
//   if (base === 1) return 1
//   if (base === -1 && Number.isInteger(exponent)) {
//     return exponent % 2 === 0 ? 1 : -1
//   }

//   // 对于负底数和非整数指数，返回 NaN
//   if (base < 0 && !Number.isInteger(exponent)) {
//     return NaN
//   }

//   // 使用对数计算: base^exponent = e^(exponent * ln(base))
//   return (
//     Math.exp(exponent * Math.log(Math.abs(base))) *
//     (base < 0 && exponent % 2 !== 0 ? -1 : 1)
//   )
// }

// // 方法5: 完整实现（模拟 Math.pow 的行为）
// function myPow(base, exponent) {
//   // 处理特殊值
//   if (isNaN(base) || isNaN(exponent)) return NaN
//   if (exponent === 0) return 1
//   if (base === 0) {
//     if (exponent > 0) return 0
//     if (exponent < 0) return Infinity
//   }
//   if (base === 1) return 1
//   if (base === -1) {
//     if (!isFinite(exponent)) return NaN
//     return Number.isInteger(exponent) && exponent % 2 === 0 ? 1 : -1
//   }

//   // 处理无穷大
//   if (!isFinite(base)) {
//     if (Math.abs(base) === Infinity) {
//       if (exponent > 0)
//         return base > 0 ? Infinity : exponent % 2 === 0 ? Infinity : -Infinity
//       if (exponent < 0) return 0
//     }
//   }

//   if (!isFinite(exponent)) {
//     const absBase = Math.abs(base)
//     if (absBase === 1) return NaN
//     if (exponent === Infinity) {
//       return absBase > 1 ? Infinity : 0
//     } else {
//       // exponent === -Infinity
//       return absBase > 1 ? 0 : Infinity
//     }
//   }

//   // 对于整数指数，使用快速幂算法
//   if (Number.isInteger(exponent)) {
//     return pow3(base, exponent)
//   }

//   // 对于小数指数，使用对数方法
//   return pow4(base, exponent)
// }

// // 测试函数
// function testPowImplementations() {
//   const testCases = [
//     [2, 3], // 8
//     [2, -3], // 0.125
//     [5, 0], // 1
//     [0, 5], // 0
//     [1, 100], // 1
//     [-1, 3], // -1
//     [-1, 4], // 1
//     [2, 10], // 1024
//     [3, 4], // 81
//     [10, -2], // 0.01
//     [2.5, 2], // 6.25
//     [4, 0.5], // 2
//     [8, 1 / 3], // 2
//     [-2, 3], // -8
//     [-2, 2], // 4
//   ]

//   console.log('测试 Math.pow() 实现:')
//   console.log(
//     '格式: base^exponent = 原生结果 | 实现1 | 实现2 | 实现3 | 完整实现',
//   )
//   console.log('='.repeat(80))

//   testCases.forEach(([base, exponent]) => {
//     const original = Math.pow(base, exponent)
//     const result1 =
//       Number.isInteger(exponent) && exponent >= 0 ? pow1(base, exponent) : 'N/A'
//     const result2 = Number.isInteger(exponent) ? pow2(base, exponent) : 'N/A'
//     const result3 = Number.isInteger(exponent) ? pow3(base, exponent) : 'N/A'
//     const result5 = myPow(base, exponent)

//     console.log(
//       `${base}^${exponent} = ${original} | ${result1} | ${result2} | ${result3} | ${result5}`,
//     )
//   })
// }

// // 性能测试
// function performanceTest() {
//   const base = 2
//   const exponent = 1000
//   const iterations = 100000

//   console.log('\n性能测试 (计算 2^1000，执行 100,000 次):')
//   console.log('='.repeat(50))

//   // 测试原生 Math.pow
//   console.time('Math.pow')
//   for (let i = 0; i < iterations; i++) {
//     Math.pow(base, exponent)
//   }
//   console.timeEnd('Math.pow')

//   // 测试快速幂递归实现
//   console.time('快速幂递归')
//   for (let i = 0; i < iterations; i++) {
//     pow2(base, exponent)
//   }
//   console.timeEnd('快速幂递归')

//   // 测试快速幂迭代实现
//   console.time('快速幂迭代')
//   for (let i = 0; i < iterations; i++) {
//     pow3(base, exponent)
//   }
//   console.timeEnd('快速幂迭代')

//   // 测试完整实现
//   console.time('完整实现')
//   for (let i = 0; i < iterations; i++) {
//     myPow(base, exponent)
//   }
//   console.timeEnd('完整实现')
// }

// // 算法复杂度分析
// function complexityAnalysis() {
//   console.log('\n算法复杂度分析:')
//   console.log('='.repeat(50))
//   console.log('1. 递归实现 (pow1):')
//   console.log('   时间复杂度: O(n) - 线性递归')
//   console.log('   空间复杂度: O(n) - 递归调用栈')
//   console.log('   适用场景: 小指数，教学演示')

//   console.log('\n2. 快速幂递归 (pow2):')
//   console.log('   时间复杂度: O(log n) - 分治算法')
//   console.log('   空间复杂度: O(log n) - 递归调用栈')
//   console.log('   适用场景: 大整数指数，递归风格')

//   console.log('\n3. 快速幂迭代 (pow3):')
//   console.log('   时间复杂度: O(log n) - 二进制位操作')
//   console.log('   空间复杂度: O(1) - 常数空间')
//   console.log('   适用场景: 大整数指数，性能要求高')

//   console.log('\n4. 对数实现 (pow4):')
//   console.log('   时间复杂度: O(1) - 数学函数调用')
//   console.log('   空间复杂度: O(1) - 常数空间')
//   console.log('   适用场景: 小数指数，精度要求不极高')

//   console.log('\n5. 完整实现 (myPow):')
//   console.log('   时间复杂度: O(log n) 或 O(1) - 根据指数类型')
//   console.log('   空间复杂度: O(1) - 常数空间')
//   console.log('   适用场景: 生产环境，完整功能需求')
// }

// // 导出函数
// if (typeof module !== 'undefined' && module.exports) {
//   module.exports = {
//     pow1,
//     pow2,
//     pow3,
//     pow4,
//     myPow,
//     testPowImplementations,
//     performanceTest,
//     complexityAnalysis,
//   }
// }

// // 如果直接运行此文件，执行测试
// if (typeof require !== 'undefined' && require.main === module) {
//   testPowImplementations()
//   performanceTest()
//   complexityAnalysis()
// }

// // 使用示例
// console.log('\n使用示例:')
// console.log('myPow(2, 3) =', myPow(2, 3)) // 8
// console.log('myPow(2, -3) =', myPow(2, -3)) // 0.125
// console.log('myPow(4, 0.5) =', myPow(4, 0.5)) // 2
// console.log('myPow(-2, 3) =', myPow(-2, 3)) // -8

// 重写
const pow = (num1, num2) => {
  // 第一个参数是数字，第二个参数是幂次方
  // 首先，我们按照最垃圾的遍历来解决
  let result = 1
  // while (num2 > 0) {
  //   result += num1 * num1
  //   num2--
  // }
  // 然后来一个优化版本，思路怎么做呢，其实也很简单，就是先判断能不能取有倍数的关系，这样的话就能做一个优化
  // if (num2 % num1 === 0) {
  //   num2 = num2 / num1
  //   num1 = num1 * num2
  // }
  // while (num2 > 0) {
  //   result += num1 * num1
  //   num2--
  // }
  // 其实就是利用 利用幂的乘法性质，什么意思呢？ 就是利用，吧幂次数给拆解开，然后，逐渐减少倍数，来解决问题
  while (num2 > 0) {
    // 首先拆解幂
    if (num2 % 2 == 1) {
      // 我先给这个多余的结果给安排一下子放在结果里
      result *= num1
    }
    // 然后就开始拆封了直接搞定一半的内容
    num1 *= num1
    // 然后这个幂就要减少一般的次数 ，因为num1 已经翻倍了，再次就用这个翻倍的解决问题
    // 要向下取整，为什么呢，因为可能有个 0.5 的情况，因为在前面的取余数的情况，所以向下取是对的
    num2 = Math.floor(num2 / 2)
  }
  return result
}
console.log(pow(2, 4))
