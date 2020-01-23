/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层次遍历
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
var zigzagLevelOrder = function(root) {
  let res = []
  if (!root) {
    return res
  }
  // 用一个标示符号确认下一次的方向
  let sign = true
  let level = [root]
  while(level.length) {
    let values = []
    let term = []
    for (let i = 0; i < level.length; i++) {
      values.push(level[i].val)
      let left = level[i].left
      let right = level[i].right
      left && term.push(left)
      right && term.push(right)

    }
    res.push(sign ? values : values.reverse())
    sign = !sign
    level = term
  }
  return res
};
// @lc code=end

// 1
// 2 3
// 4 null null 5
