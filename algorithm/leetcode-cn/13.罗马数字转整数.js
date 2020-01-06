/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  let map = {
    'M': 1000,
    'D': 500,
    'C': 100,
    'L': 50,
    'X': 10,
    'V': 5,
    'I': 1
  }

  let res = 0
  for (let i = 0; i < s.length - 1; i++) {
    let next = map[s[i + 1]]
    let cur = map[s[i]]
    res = res + (next > cur ? (-1 * cur) : cur)
  }
  res += map[s[s.length - 1]]
  return res
};
// @lc code=end

