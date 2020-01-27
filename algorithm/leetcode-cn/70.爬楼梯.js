/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  let res = new Array(n + 1)
  res[0] = 0;
  res[1] = 1
  res[2] = 2
  for (let i = 3; i <= n; i++) {
    res[i] = res[i-1] + res[i-2]
  }
  return res[n]
};
// @lc code=end

