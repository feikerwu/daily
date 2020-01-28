/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
var postorderTraversal = function(root) {
  let stack = [root]
  let res = []
  while(stack.length) {
    let cur = stack[stack.length - 1]
    while(cur) {
      stack.push(cur)
      cur.right && stack.push(cur.right)
      cur.left && stack.push(cur.left)
      cur = cur.left
    }
    let top = stack.pop()
    res.push(top.val)
  }
  return res
};
// @lc code=end

