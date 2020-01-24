/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层次遍历 II
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
var levelOrderBottom = function(root) {
  let res = []
  if (!root) {
    return res
  }
  let queue = [root]
  while(queue.length) {
    let values = []
    let next = []
    for(let i = 0; i < queue.length; i++) {
      values.push(queue[i].val)
      if (queue[i].left) {
        next.push(queue[i].left)
      }
      if (queue[i].right) {
        next.push(queue[i].right)
      }
    }

    queue = next
    res.unshift(values)
  }
  return res;
};
// @lc code=end

