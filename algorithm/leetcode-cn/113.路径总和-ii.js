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
  let res = []
  help(root, sum, [])

  function help(root, sum, term) {
    if (root === null) {
      return
    }
    sum = sum - root.val
    term.push(root.val)
    if (root.left === null && root.right === null) {
      if (sum === 0) {
        res.push(term)
      }
    }
    help(root.left, sum, term.slice())
    help(root.right, sum, term.slice())
  }
  return res
};


// @lc code=end

