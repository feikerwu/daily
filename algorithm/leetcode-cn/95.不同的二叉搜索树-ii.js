/*
 * @lc app=leetcode.cn id=95 lang=javascript
 *
 * [95] 不同的二叉搜索树 II
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
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
  let dp = new Array(n+1).fill(null)
  dp[1] = new TreeNode(1)
  for(let i = 2; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
    }
  }
};
// @lc code=end
console.log(generateTrees(3))

