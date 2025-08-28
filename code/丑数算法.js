/** @format */

//我们把只包含因子2、3和5的数称作丑数（Ugly Number）。求按从小到大的顺序的第n个丑数。
//输入: n = 10
//输出: 12
//解释: 1, 2, 3, 4, 5, 6, 8, 9, 10, 12 是前 10 个丑数。
const ugly = (n) => {
  // 首先要求前十个丑数，因为 1 是特殊的
  const res = [1] // 我们先给他糊弄进来
  // 然后我们搞一个在当前的 res 的基础上来解决 乘以一个数字，来取最后的前n个
  // 他最终还是 2^x*3^x*5^x这一套
  let p1 = 0
  let p2 = 0
  let p3 = 0
  // 然后遍历，来往 res 里头push
  for (let i = 1; i < n.length; i++) {
    // 为什么从 1 开始，因为1是特殊的丑数
    // 取一个丑数的最小值
    const min = Math.min(2 * res[p1], 3 * res[p2], 5 * res[p3])
    // 给塞进去
    res.push(min)
    // 这一步就是为了判断我要添加p1 还是p2 还是 p3,主要因为都是倍数，所以只需要按照倍数找就行了
    if (min == 2 * res[p1]) {
      p1++
    } else if (min == 3 * res[p2]) {
      p2++
    } else if (min == 5 * res[p3]) {
      p3++
    }
  }
}

ugly(10)
