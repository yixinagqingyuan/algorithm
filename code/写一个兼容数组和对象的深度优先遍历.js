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
