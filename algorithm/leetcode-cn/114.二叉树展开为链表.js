/*
 * @lc app=leetcode.cn id=114 lang=javascript
 *
 * [114] 二叉树展开为链表
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
  let head = root;
  while(head) {
    if (head.left === null) {
      head = head.right
    } else {
      let pre = head.left
      while(pre.right !== null) {
        pre = pre.right
      }
      pre.right = head.right
      head.right = head.left
      head.left = null
    }
  }
};
// @lc code=end

