/** @format */

// 实现 get 方法
const object = { a: [{ b: { c: 3 } }] }
const get = (obj, str) => {
  // 这个地方要搞一下子因为有文字，所以要用正则给他替换成数组
  let arr = str.rplace(/\[(\d+)\]/g, function ($1) {
    return `.${$1}`
  })
  let res = ''
  for (let i = 0; i < arr.length; i++) {
    res = obj[arr[i]]
  }
  console.log(res)
}
newGet(object, 'a[0].b.c')
