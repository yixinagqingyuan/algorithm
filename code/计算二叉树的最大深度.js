/** @format */

// 定义二叉树节点结构
class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val
    this.left = left
    this.right = right
  }
}

// 计算二叉树的最大深度
const maxDepth = (root) => {
  // 如果是空节点，返回深度0
  if (!root) return 0

  // 递归计算左右子树的深度
  const leftDepth = maxDepth(root.left)
  const rightDepth = maxDepth(root.right)

  // 返回左右子树深度的较大值 + 1（当前节点的深度）
  return Math.max(leftDepth, rightDepth) + 1
}

// 测试用例
const test = () => {
  // 测试用例1：空树
  console.log('测试空树:', maxDepth(null)) // 应输出 0

  // 测试用例2：单节点树
  const tree1 = new TreeNode(1)
  console.log('测试单节点树:', maxDepth(tree1)) // 应输出 1

  // 测试用例3：完全二叉树
  //      1
  //    /   \
  //   2     3
  //  / \   / \
  // 4   5 6   7
  const tree2 = new TreeNode(1)
  tree2.left = new TreeNode(2)
  tree2.right = new TreeNode(3)
  tree2.left.left = new TreeNode(4)
  tree2.left.right = new TreeNode(5)
  tree2.right.left = new TreeNode(6)
  tree2.right.right = new TreeNode(7)
  console.log('测试完全二叉树:', maxDepth(tree2)) // 应输出 3

  // 测试用例4：不平衡二叉树
  //      1
  //    /   \
  //   2     3
  //  /       \
  // 4         5
  //            \
  //             6
  const tree3 = new TreeNode(1)
  tree3.left = new TreeNode(2)
  tree3.right = new TreeNode(3)
  tree3.left.left = new TreeNode(4)
  tree3.right.right = new TreeNode(5)
  tree3.right.right.right = new TreeNode(6)
  console.log('测试不平衡二叉树:', maxDepth(tree3)) // 应输出 4
}

// 运行测试
test()

// 这道题的思路很简单，就是一层层遍历，一层层累加，最后得到最大的深度,我只需要用递归做就可以了
// 最后递归返回的结果，就是左右子树的深度的较大值 + 1（当前节点的深度）
// 如果是个空节点那么就终止递归，返回 0
// 由于递归就是一层层的走方法，最后走的 reurn 所以递归是开始，返回数字是最后的，一定能达到目的
const maxDepth1 = (root) => {
  if (!root) return 0
  const left = maxDepth1(root.left)
  const right = maxDepth1(root.right)
  // 这时候说明就可以返回了，因为走到这了，就说明不能是空的，那么这里就可以+1 了
  // 这里要求最大值，因为上一个的最后能找到那个节点下的最大值
  // 这其实也算是动态规划
  return Math.max(left, right) + 1
}

// 测试maxDepth1函数
console.log('测试maxDepth1函数:')
// 测试用例1：空树
console.log('测试空树:', maxDepth1(null)) // 应输出 0

// 测试用例2：单节点树
const tree4 = new TreeNode(1)
console.log('测试单节点树:', maxDepth1(tree4)) // 应输出 1

// 测试用例3：完全二叉树
//      1
//    /   \
//   2     3
//  / \   / \
// 4   5 6   7
const tree5 = new TreeNode(1)
tree5.left = new TreeNode(2)
tree5.right = new TreeNode(3)
tree5.left.left = new TreeNode(4)
tree5.left.right = new TreeNode(5)
tree5.right.left = new TreeNode(6)
tree5.right.right = new TreeNode(7)
console.log('测试完全二叉树:', maxDepth1(tree5)) // 应输出 3

// 测试用例4：不平衡二叉树
//      1
//    /   \
//   2     3
//  /       \
// 4         5
//            \
//             6
const tree6 = new TreeNode(1)
tree6.left = new TreeNode(2)
tree6.right = new TreeNode(3)
tree6.left.left = new TreeNode(4)
tree6.right.right = new TreeNode(5)
tree6.right.right.right = new TreeNode(6)
console.log('测试不平衡二叉树:', maxDepth1(tree6)) // 应输出 4

// 类似的题还有个反转二叉树

const invert = (root) => {
  // 首先还是来个兜底 root 没有的时候咋整
  if (!root) return null
  // 然后就开始递归反转，递归的目的就是为了从下道上，所以这里要先递归，然后再交换
  const left = invert(root.left)
  const right = invert(root.right)
  // 然后开始交换
  root.left = right
  root.right = left
  // 最后返回这个节点
  return root
}
