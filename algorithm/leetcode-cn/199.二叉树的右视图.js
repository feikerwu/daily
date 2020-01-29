/*
 * @lc app=leetcode.cn id=199 lang=javascript
 *
 * [199] 二叉树的右视图
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
var rightSideView = function(root) {
  if (root === null) {
    return []
  }
  let res = []
  let stack = [root]
  while(stack.length) {
    res.push(stack[stack.length - 1].val)
    let term = []
    for (let i = 0; i < stack.length; i++) {
      let cur = stack[i]
      if (cur.left) {
        term.push(cur.left)
      }
      if (cur.right) {
        term.push(cur.right)
      }
    }
    stack = term
  }
  return res;
};
// @lc code=end

