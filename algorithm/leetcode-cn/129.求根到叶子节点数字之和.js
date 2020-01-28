/*
 * @lc app=leetcode.cn id=129 lang=javascript
 *
 * [129] 求根到叶子节点数字之和
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
 * @return {number}
 */
var sumNumbers = function(root) {
  let res = 0;
  help(root, 0)
  return res;

  function help(root, cur) {
    if (root === null) {
      return
    }
    cur = cur * 10 + root.val
    if (root.left === null && root.right === null) {
      res = res + cur
      return
    }

    help(root.left, cur)
    help(root.right, cur)
  }
};
// @lc code=end

