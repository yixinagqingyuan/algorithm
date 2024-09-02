/** @format */

var template = '{{nnnn}}很厉害，才{{age}}岁'
var context = { nnnn: 'bottle', age: '15' }
//输入：template context
//输出：bottle很厉害，才15岁
//这一题其实就是字符串模板匹配
// 主要就是利用正则解决问题
// 此时首先我们应该有一个函数吧
const render = () => {
  // 然后弄一个正则表达式
  // 这个正则表达式我懂了，当.*? 单独出现的时候，是单独匹配，但当他跟别的字符一块出现的时候，那么就会全量匹配
  // 将中间的能匹配到的内容全部匹配上去要跟后头的对齐从而也能匹配到后都的内容属于贪婪匹配的并且贪婪一次
  // 如果不加？ 就贪婪到最后一次
  // 这个.* 就是任意字符，但是有点贪婪  加个问号？ 就是变成非贪婪模式了
  // 注意单独出现的时候就是单独匹配
  const reg = /\{\{(.*?)\}\}/
  return template.replace(reg, (item, $1) => {
    console.log(item, $1)
    return context[$1]
  })
  // console.log(template)
}
// console.log(render())
render()
