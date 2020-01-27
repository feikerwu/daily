/*
 * @lc app=leetcode.cn id=113 lang=javascript
 *
 * [113] 路径总和 II
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
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {

};

function help(root, sum, res) {
  if (root === null) {
    return
  }

  sum = sum - root.val
  res.push(res.val)
  if (root.left === null && root.right === null) {
    if (sum === 0) {

    }
  }
}
// @lc code=end

