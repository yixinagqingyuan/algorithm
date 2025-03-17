/** @format */

// 定义二叉树节点结构
class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val
    this.left = left
    this.right = right
  }
}

// 递归方式反转二叉树
const invertTreeRecursive = (root) => {
  // 如果是空节点，直接返回
  if (!root) return null

  // 递归反转左右子树
  const left = invertTreeRecursive(root.left)
  const right = invertTreeRecursive(root.right)

  // 交换左右子树
  root.left = right
  root.right = left

  return root
}

// 迭代方式反转二叉树（使用队列）
const invertTreeIterative = (root) => {
  if (!root) return null

  // 使用队列存储需要处理的节点
  const queue = [root]

  while (queue.length > 0) {
    // 取出当前节点
    const current = queue.shift()

    // 交换左右子树
    const temp = current.left
    current.left = current.right
    current.right = temp

    // 将左右子节点加入队列
    if (current.left) queue.push(current.left)
    if (current.right) queue.push(current.right)
  }

  return root
}

// 测试用例
const test = () => {
  // 创建测试用的二叉树
  //      4
  //    /   \
  //   2     7
  //  / \   / \
  // 1   3 6   9
  const root = new TreeNode(4)
  root.left = new TreeNode(2)
  root.right = new TreeNode(7)
  root.left.left = new TreeNode(1)
  root.left.right = new TreeNode(3)
  root.right.left = new TreeNode(6)
  root.right.right = new TreeNode(9)

  console.log('原始二叉树:', root)

  // 测试递归方式
  const recursiveResult = invertTreeRecursive(structuredClone(root))
  console.log('递归反转后:', recursiveResult)

  // 测试迭代方式
  const iterativeResult = invertTreeIterative(structuredClone(root))
  console.log('迭代反转后:', iterativeResult)
}

// 运行测试
test()

// 递归来反转二叉树
// 我们相当于递归到最后一层然后来搞从最后一层开始转
const invert = (root) => {
  // 递归结束条件
  if (!root) return null
  // 开始递归
  const left = invert(root.left)
  const right = invert(root.right)
  // 交换左右子树
  left = root.left
  root.left = right
  root.right = left
}
