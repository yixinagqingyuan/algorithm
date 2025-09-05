/** @format */

const dfs = (input) => {
  const result = []

  const visit = (node) => {
    if (Array.isArray(node)) {
      for (const item of node) visit(item)
    } else if (node !== null && typeof node === 'object') {
      for (const key of Object.keys(node)) visit(node[key])
    } else {
      result.push(node)
    }
  }

  visit(input)
  return result
}

// 深度优先遍历递归来做，广度优先遍历用队列来做

// 重写一次这种的深度优先遍历

const dfs1 = (input) => {
  // 这一题我们知道要用递归来做，但是你要能兼容对象和数组
  // 我们首先得判断它是对象还是数组
  const res = []
  const fn = (n) => {
    if (Array.isArray(n)) {
      n.foreach((i) => {
        fn(i)
      })
      
    } else if (Object.prototype.toString.call(n) == '[object Object]') {
      // 这是不是也可以直接用 for in
      for (let key of Object.keys(n)) {
        fn(n[key])
      }
    } else {
      res.push(n)
    }
  }
  fn(input)
}
