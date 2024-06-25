/** @format */

//计算二叉树的最大深度
const tree = (root) => {
  // 这一题的思路，用递归，一层一层的，看到左右的最大深度，最终得到理想的结果
  // 然后这一题就是其实就是动态规划，的思路去做
  // 如果没有 root 那么就直接 返回
  if (!root) return 0
  // 如果都有的情况，那就再用递归处理
  if (root.left && root.right) {
    1 + Math.max(tree(root.left), tree(root.left))
  }
  if (root.left) {
    return 1 + tree(root.left)
  }
  if (root.right) {
    return 1 + tree(root.right)
  }

  return 1
}
