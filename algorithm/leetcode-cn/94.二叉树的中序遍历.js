/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  function traversal(root, arr) {
    if (root) {
      traversal(root.left, arr)
      arr.push(root.val)
      traversal(root.right, arr)
    }
  }

  let res = []
  traversal(root, res)
  return res;
};
// @lc code=end

