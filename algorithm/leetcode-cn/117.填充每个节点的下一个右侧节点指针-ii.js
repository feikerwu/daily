/*
 * @lc app=leetcode.cn id=117 lang=javascript
 *
 * [117] 填充每个节点的下一个右侧节点指针 II
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
  if (root === null) {
    return root
  }
  let left = root.left
  let right = root.right

  while(left && right) {
    left.next = right
    left = left.right || left.left
    right = right.left || right.right
  }

  connect(root.left)
  connect(root.right)
  return root
};
// @lc code=end

