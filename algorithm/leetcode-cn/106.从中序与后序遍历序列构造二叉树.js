/*
 * @lc app=leetcode.cn id=106 lang=javascript
 *
 * [106] 从中序与后序遍历序列构造二叉树
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
  if (postorder.length === 0) {
    return null
  }

  let value = postorder[postorder.length - 1]
  let root = new TreeNode(value)

  let inOrderIndex = inorder.indexOf(value)
  let left = inorder.slice(0, inOrderIndex)
  let right = inorder.slice(inOrderIndex + 1)
  root.left = buildTree(left, postorder.slice(0, left.length + 1))
  root.right = buildTree(right, postorder.slice(left.length + 1, postorder.length - 2))
  return root
};
// @lc code=end

