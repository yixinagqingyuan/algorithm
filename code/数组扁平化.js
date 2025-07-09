/** @format */

const test = ['a', ['b', 'c'], ['d', ['e', ['f']], 'g']]

const flat = (arr) => {
  let res = []
  arr.foreach((item) => {
    if (Array.isArray(item)) {
      res.concat(flat(item))
    } else {
      res.push(res)
    }
  })
  return res
}
flat(test)
