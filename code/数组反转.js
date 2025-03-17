/** @format */

// 数组反转

function reverse(input) {
  // 参数验证
  if (input == null) {
    throw new Error('输入不能为空')
  }

  // 处理字符串
  if (typeof input === 'string') {
    return input.split('').reverse().join('')
  }

  // 处理数组或类数组对象
  const arr = Array.from(input)
  let left = 0
  let right = arr.length - 1

  while (left < right) {
    ;[arr[left], arr[right]] = [arr[right], arr[left]]
    left++
    right--
  }

  // 如果输入是字符串，返回字符串；否则返回数组
  return Array.isArray(input) ? arr : arr.join('')
}

// 测试用例
function test() {
  // 测试数组反转
  console.log(reverse([1, 2, 3, 4, 5])) // [5, 4, 3, 2, 1]

  // 测试字符串反转
  console.log(reverse('hello')) // 'olleh'

  // 测试类数组对象
  const arrayLike = { 0: 'a', 1: 'b', 2: 'c', length: 3 }
  console.log(reverse(arrayLike)) // 'cba'

  // 测试异常情况
  try {
    reverse(null)
  } catch (e) {
    console.log(e.message) // '输入不能为空'
  }
}

// 运行测试
// test();

// 重新反转数组
function reverseArray(arr) {
  // 我们先用本身的方法
  //return arr.reverse()
  // 然后自己写算法
  let left = 0
  let right = arr.length - 1
  // 这时候我们直接替换，本质上讲，就是将最后一个替换成第一个，然后依次递减就可以了
  // 好了，我们开始,首先当然要设定一个条件， 普通的 for 循环当然不行，我们得用 while
  while (left < right) {
    // 使用那个新的绝活替换，直接原地替换，也叫做解构赋值法，当然也可以用笨办法，先给一个值提出来，然后再替换
    ;[arr[left], arr[right]] = [arr[right], arr[left]]
    left++
    right--
  }
  return arr
}
console.log(reverseArray([1, 2, 3, 4, 5]))
// 数组反转之后我们拓展一下开启字符串反转
function reversestr(str) {
  // 但是这样会有一个问题，他会给所有的字母都颠倒了，所以你数组拆分要有特色
  return reverseArray(str.split(' ')).join(' ')
}

console.log(reversestr('the sky is blue'))
