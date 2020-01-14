/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  let res = Array.from({length: n + 1}).map(_ => [])
  // console.log(res)
  res[0] = ['']
  res[1] = ['()']
  for (let i = 2; i <= n; i++) {
    for (let j = 0; j < i; j++) {
        let pre = res[j]
        let after = res[i - j - 1]
        // console.log({pre, after})
        for (let t = 0; t < pre.length; t++) {
          for (let k = 0; k < after.length; k++) {
            res[i].push(`(${pre[t]})${after[k]}`)
          }
        }
      }
  }
  return res[n]
};
// @lc code=end
console.log(generateParenthesis(3))

