/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
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
 * @return {boolean}
 */
var isBalanced = function(root) {
  return help(root).flag
};

function help(root) {
  if (!root) {
    return {
      flag: true,
      height: 0
    }
  }
  let left = help(root.left)
  let right = help(root.right)
  return {
    flag: left.flag && right.flag && Math.abs(left.height - right.height) <= 1,
    height: Math.max(left.height, right.height) + 1
  }
}
// @lc code=end

