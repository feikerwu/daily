/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
var preorderTraversal = function(root) {
  let stack = []
  const res = []
  stack.push(root)
  while(stack.length) {
    let cur = stack.pop()
    while(cur) {
      res.push(cur.val)
      stack.push(cur.right)
      cur = cur.left
    }
  }
  return res
};
// @lc code=end

