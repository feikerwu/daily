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
  let dp = Array.from({length: n + 1}).map(item => {
    return []
  })
  dp[0].push([null])
  dp[1].push([1])
  for(let i = 2; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      let l = dp[j]
      let r = dp[i - j - 1]
      let term = []
      for (let k = 0; k < l.length; k++) {
        for (let m = 0; m < r.length; m++) {
          let l_c = l[k]
          let r_c = r[m].map(item => item ? item - i : item)
          term.push([j+1, ...l_c, ...r_c])
        }
      }
      console.log({term})
      dp[i].push(term)
    }
  }
  // console.log(dp[n])
  return dp[n]
};
// @lc code=end
console.log(generateTrees(2))

