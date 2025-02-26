/** @format */

//先思考下列代码的执行顺序
// setImmediate(() => {
//   console.log('setImmediate')
// })

// process.nextTick(() => {
//   console.log('nextTick 1')
//   process.nextTick(() => {
//     console.log('nextTick 2')
//   })
// })

// console.log('global')

// Promise.resolve().then(() => {
//   console.log('promise 1')
//   process.nextTick(() => {
//     console.log('nextTick in promise')
//   })
// })

// setTimeout(() => {
//   setImmediate(() => {
//     console.log('setImmediate')
//   })

//   process.nextTick(() => {
//     console.log('nextTick 1')
//     process.nextTick(() => {
//       console.log('nextTick 2')
//     })
//   })

//   console.log('global')

//   Promise.resolve().then(() => {
//     console.log('promise 1')
//     process.nextTick(() => {
//       console.log('nextTick in promise')
//     })
//   })
// })

// process.nextTick(function () {
//   console.log(7)
// })

// new Promise(function (resolve) {
//   console.log(3)
//   resolve()
//   console.log(4)
// }).then(function () {
//   console.log(5)
// })

// process.nextTick(function () {
//   console.log(8)
// })

setImmediate(() => {
  console.log('setImmediate')
})

process.nextTick(() => {
  console.log('nextTick 1')
  process.nextTick(() => {
    console.log('nextTick 2')
  })
})

console.log('global')

Promise.resolve().then(() => {
  console.log('promise 1')
  process.nextTick(() => {
    console.log('nextTick in promise')
  })
})

// 总结，nextTick一般是立即执行，当前队列结束后就执行，Promise 在当前事件循环之后执行，所以一般情况下，nextTick 会先执行，Promise 后执行
// 但是有的情况，Promise 会先执行，nextTick 后执行，比如下面的代码
