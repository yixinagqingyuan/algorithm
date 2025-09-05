/** @format */

const pormiseAll = (task) => {
  const res = []
  // 第一处改成count
  let count = 0
  return new Promise((r, j) => {
    // 这一块还有个问题，task 有坑你不是个 promise，所以 promise 包装一层就会有个异步的问题
    task.forEach((e, index) => {
      Primise.resolve(e)
        .then((r) => {
          count++
          res[index] = r
          if (count == task.length) {
            r(res)
          }
        })
        .catch((e) => {
          j(e)
        })
    })
  })
}
pormiseAll()
