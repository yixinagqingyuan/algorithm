/** @format */

// 二叉树的遍历
// 这个题用递归做，深度优先遍历，然后先序遍历
// 先序遍历，是根左右
// 所谓深度优先遍历，往深处深挖
// 所以，这一题需要用递归去做
const preorderTraversal = (root) => {
  // 这题相当于跟上一题最长的深度一样的思路
  // 如果 root 没有
  if (!root) {
    return
  }
  console.log(root)
  if (root.left || root.right) {
    // 这一块就是深度优先
    preorderTraversal(root.left)
    preorderTraversal(root.right)
  }
  // if (root.left) {
  //   preorderTraversal(root.left)
  // }
  // if (root.right) {
  //   preorderTraversal(root.right)
  // }
}
