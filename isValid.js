/** @format */
//给定一个只包括 '(' ，')' ，'{' ，'}' ，'[' ，']' 的字符串，判断字符串是否有效。
// 这个题很有意思，所谓有效的括号， 本质上来说，有开始，还要有闭合
// 所以，这一题很简单的要利用栈的能力 利用入栈出栈， 来确定括号是否完整
const isValid = (str) => {
  // 开始准备，不管有没有思路，当然，第一步要  创建你觉得的对的相关变量啊
  const stack = []
  // 然后当然得 for 循环啊
  for (var i = 0; i < str.length; i++) {
    // 还记得我们开始的思路，如果找到一个不对的，那么就直接 pass
    // 先取出 s
    const s = str[i]
    // 然后判断当前的括号，是什么德行，然后将他们的闭合括号，存进去栈，然后收的时候直接从栈里头
    // 扒拉出来，判断一样不一样就行了，如果不一样，说明，他存的没对上，pass
    if (s == '(') {
      // 注意这里是技巧，给他的闭合标签存进去，这就相当于提前存，就不用取的时候，再去重新计算
      // 多写垃圾且废物的代码
      stack.push(')')
    } else if (s == '[') {
      stack.push(']')
    } else if (s == '{') {
      stack.push('}')
    } else {
      // 最后的情况，就是这三种都不命中，说明要开始命中闭合标签了
      // 如果正常的话，命中闭合标签，也会是顺序的，如果发现不顺序的，滚。。。。。。。
      const prev = stack.pop()
      if (s !== prev) {
        return false
      }
    }
  }
  // 除了有不对路的情况，直接退出，还有个就是判断是否 stack 里头还有值的情况
  return stack.length > 0 ? false : true
}

console.log(isValid('({]{}'))
