/** @format */

// 实现 get 方法
const object = { a: [{ b: { c: 3 } }] }
// 这一题都是就是我将这个对象传过去 然后 key 就是其中的任何层级的 key
const newGet = (obj, key) => {
  // 这一步是为了能一步步的拿到这一层内部的东西
  let newobj = obj
  // 这里要先给 key 切割这里为了解决数组中的数字问题
  // 他将其中的数组情况做一个替换处理 歧视就是将这个中括号去掉 然后将那个数字给拆开
  // 这个正则就是要晒出来数组的情况 匹配数字\d 然后还是同样的一次或者多次 然后给中括号替换成点.搞定
  let keyArr = key.replace(/\[(\d+)\]/g, '.$1').split('.')
  console.log(keyArr)
  // 然后开始遍历
  for (let i = 0; i < keyArr.length; i++) {
    // 然后我们就利用不断变换newobj 来解决问题
    newobj = newobj[keyArr[i]]
  }
  console.log(newobj)
}
newGet(object, 'a[0].b.c')
