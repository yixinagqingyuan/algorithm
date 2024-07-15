/** @format */

// 实现一个带并发限制的异步调度器 Scheduler，保证同时运行的任务最多有N个。完善下面代码中的Scheduler类，使得以下程序能正确输出：
// 这个调度，之前面试考过，很遗憾，没写出来，这特么快手的这帮人是不是该反思下，为什么要出这么恶心的内容
// 其实回过头来看，这一题的思路很很简单，利用数组的能力，保证for循环，同时执行几个任务，当有一个任务结束了
// 那么我从数组中拿出来一个任务即可，就是这么简单
// class Scheduler {
//   constructor() {
//     // 任务队列
//     this.tasks = []
//     // 最大任务
//     this.max = 2
//   }
//   add(promiseCreator) {
//     // add 其实就是为了将代码放入队列里头
//     this.tasks.push(promiseCreator)
//   }
//   run() {
//     // run 就是我们的执行了
//     // 这里的关键就是我们要保证我们同时执行的任务不要大于max 所以此时此刻，我们要利用一个 for 循环来分批执行
//     // 这个时候有一些问题，我 then之后就容易出问题，所以我要封装一个函数来解决问题
//     const _reqest = () => {
//       if (this.tasks.length) {
//         const task = this.tasks.shift()
//         task().then(() => {
//           // 这个任务完成了，那么我们就需要执行下一个任务，但是此时就会有个问题，我这个任务没有了咋整
//           // 所以此时要做个判断有的时候再说
//           _reqest()
//         })
//       }
//     }
//     for (let i = 0; i < this.max; i++) {
//       // 这里的 for 循环其实就是启动 任务，后续才是重点
//       // 所以要给这一块干掉
//       // task().then(() => {
//       //   // 这个任务完成了，那么我们就需要执行下一个任务，但是此时就会有个问题，我这个任务没有了咋整
//       //   // 所以此时要做个判断有的时候再说
//       //   if (this.tasks.length) {
//       //     this.tasks.shift()()
//       //   }
//       // })
//       // 用一个函数来解决问题
//       _reqest()
//     }
//   }
// }

// const timeout = (time, index) =>
//   new Promise((resolve) => {
//     setTimeout(() => {
//       console.log(index)
//       resolve()
//     }, time)
//   })

// const scheduler = new Scheduler()
// const addTask = (time, index) => {
//   scheduler.add(() => timeout(time, index))
// }

// addTask(1000, '1')
// addTask(500, '2')
// addTask(300, '3')
// addTask(400, '4')
// scheduler.run()
// 打印顺序是：2 3 1 4

// 上述内容其实是我自己做过更改，不符合原题题意，因为原题是这样的

// class Scheduler {
//   constructor() {
//     this.tasks = []
//     this.max = 2
//     this.run = 0
//   }
//   // 这里我们要知道，每次 add 之后就要给当前的返回
//   // 于是我们要有个专门的函数来解决问题
//   add(promiseCreator) {
//     // 首先当然要 push 过来
//     this.tasks.push(promiseCreator)
//     // 这时候当然要返回那个 promise
//     return this._request()
//   }
//   _request() {
//     // 我们之前是 for 循环判断的，而这一次 我们就不能用了，所以我们还要有个辅助变量来解决问题，由于 一次不能超过两个
//     //所以我们必须要有一个变量来计算到底有多少个正在跑的任务
//     if (this.run > this.max) {
//       // 这个时候说明到达最大的任务了
//     } else {
//       this.run++
//       // 这个时候我们直接执行，并且返回当前的 promise
//       const task = this.tasks.shift()
//       // 这个时候就是返回当前的 promise
//       return task()
//     }
//   }
// }
// 测试函数执行顺序
function testtimeout(time) {
  return new Promise((resolve) => {
    console.log(time)
    setTimeout(resolve, time)
  })
}

function testaddTask(time, order) {
  var a = () => timeout(time).then(() => console.log(order))
  console.log(a)
}

testaddTask(1000, 1)
// const timeout = (time) =>
//   new Promise((resolve) => {
//     setTimeout(resolve, time)
//   })

// const scheduler = new Scheduler()
// const addTask = (time, order) => {
//   // 这就是原题，里头有一个问题就是我 add 之后必须返回当前 promise，所以之前的 for 循环的套路就不能用了
//   scheduler.add(() => timeout(time)).then(() => console.log(order))
// }

// addTask(1000, '1')
// addTask(500, '2')
// addTask(300, '3')
// addTask(400, '4')

// 打印顺序是：2 3 1 4

// function Scheduler() {
//   this.list = []
//   this.add = function (promiseCreator) {
//     this.list.push(promiseCreator)
//   }

//   this.maxCount = 2

//   var tempRunIndex = 0

//   this.taskStart = function () {
//     for (var i = 0; i < this.maxCount; i++) {
//       request.bind(this)()
//     }
//   }

//   function request() {
//     if (!this.list || !this.list.length || tempRunIndex >= this.maxCount) {
//       return
//     }

//     tempRunIndex++
//     this.list
//       .shift()()
//       .then(() => {
//         tempRunIndex--
//         request.bind(this)()
//       })
//   }
// }

// function timeout(time) {
//   return new Promise((resolve) => {
//     console.log(time)
//     setTimeout(resolve, time)
//   })
// }

// var scheduler = new Scheduler()

// function addTask(time, order) {
//   scheduler.add(() => timeout(time).then(() => console.log(order)))
// }

// addTask(1000, 1)
// addTask(500, 2)
// addTask(300, 3)
// addTask(400, 4)

// scheduler.taskStart()

// 自己尝试重写一遍本质上还是利用 for 循环处理，只是他真实的题意是传入一个函数
// 所以我们还是要用for 循环结果问题，只不过打印的结果，要在他传入的结果里头
// 要用闭包体现
class Scheduler {
  constructor() {
    // 创建list
    this.list = []
    // 允许执行的最大并行
    this.max = 2
  }
  add(promiseCreator) {
    // add 其实就是为了将代码放入队列里头
    this.list.push(promiseCreator)
  }
  // 然后需要执行一下
  run() {
    // 这里创建一个请求的递归相当于是，然后 for 循环重复的执行这个递归
    const _request = () => {
      if (this.list.length) {
        const task = this.list.shift()
        // 这个 task 本质上是个 return 出来的函数，所以我们应该这样
        // 先执行下这个函数，然后这个函数就是个 Promise 我们在给他套上一层 then
        task().then((res) => {
          // 此时发现这个任务完成了，就执行下一个任务
          _request()
        })
      }
    }
    // 然后 for 循环执行任务,让并行的几个任务同时跑
    for (let i = 0; i < this.max; i++) {
      _request()
    }
  }
}
function timeout(time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time)
  })
}
var scheduler = new Scheduler()

function addTask(time, order) {
  scheduler.add(() => timeout(time).then(() => console.log(order)))
}

addTask(1000, 1)
addTask(500, 2)
addTask(300, 3)
addTask(400, 4)
scheduler.run()
