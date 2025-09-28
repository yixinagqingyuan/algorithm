/** @format */

const tree = {
  id: 'A',
  children: [
    { id: 'B', children: [] },
    { id: 'C', children: [{ id: 'D' }, { id: 'F' }] },
  ],
}
const getTargetNodeById = (tr, str) => {
  // 递归
  const fn = (arr, str) => {
    let res
    arr.find((element) => {
      if (element.id == str) {
        res = element
        return element
      } else {
        if (element.children) {
          res = fn(element.children, str)
        }
      }
    })
    return res
  }
  if (tr.id == str) {
    return tree
  } else {
    if (tree.children) {
      return fn(tree.children, str)
    }
  }
}
const targetNode = getTargetNodeById(tree, 'D')
console.log(targetNode)
