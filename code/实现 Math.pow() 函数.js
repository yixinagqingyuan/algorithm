/** @format */

const pow = (num1, num2) => {
  // 第一个参数是数字，第二个参数是幂次方
  // 首先，我们搞个结果
  let result = 1
  // for (let i = 0; i < num2; i++) {
  //   // 当然这样指定是不行的，我们需要优化一下，怎么优化呢？ 也就是，利用 2*b=num2  的这个套路
  //   // 所以，我们就判断，num2/2  是基数还是偶数，由于必须要让他是偶数，所以就像个办法给整数安排上

  //   result *= num1
  // }
  // 就不能用遍历的方式了，要看有没有给num2 化债话完了
  while (num2 > 0) {
    if (num2 % 2 == 1) {
      result *= num1
    }
    // 剩下的课都是整数了，然后我们要给基数变大，相当于 A2*Anum/2 = A2*num/2
    num1 *= num1
    // 然后，我们就把num2 给减半，然后num1 给平方
    num2 = Math.floor(num2 / 2)
  }
  return result
}
