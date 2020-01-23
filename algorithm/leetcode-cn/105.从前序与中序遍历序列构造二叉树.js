/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  if (preorder.length === 0) {
    return null
  }

  let value = preorder[0]
  let root = new TreeNode(value)

  let inOrderIndex = inorder.indexOf(value)
  let left = inorder.slice(0, inOrderIndex)
  let right = inorder.slice(inOrderIndex + 1)
  root.left = buildTree(preorder.slice(1, left.length + 1), left)
  root.right = buildTree(preorder.slice(1 + left.length), right)

  return root
};
// @lc code=end
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
buildTree([3,9,20,15,7], [9,3,15,20,7])
