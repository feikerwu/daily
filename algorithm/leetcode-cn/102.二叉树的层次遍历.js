/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层次遍历
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
  let res = []
  if (!root) {
    return res
  }
  let level = [root]
  while(level.length) {
    let values = []
    let term = []
    for (let i = 0; i < level.length; i++) {
      values.push(level[i].val)
      if (level[i].left) {
        term.push(level[i].left)
      }
      if (level[i].right) {
        term.push(level[i].right)
      }
    }
    res.push(values)
    level = term
  }
  return res
};
// @lc code=end

