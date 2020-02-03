/*
 * @lc app=leetcode.cn id=455 lang=javascript
 *
 * [455] 分发饼干
 */

// @lc code=start
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
  g = g.sort((a, b) => a - b)
  s = s.sort((a, b) => a - b)
  let res = 0;
  for (let i = 0, j = 0; i < g.length, j < s.length; i++, j++) {
    while(s[j] < g[i] && j < s.length) {
      j++
    }
    if (s[j] >= g[i]) {
      res++
    }
  }
  return res
};
// @lc code=end

