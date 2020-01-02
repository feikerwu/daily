/*
 * @lc app=leetcode.cn id=10 lang=javascript
 *
 * [10] 正则表达式匹配
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */

// 递归写发
var isMatch = function(s, p) {
  if (p.length === 0) {
    return !s.length
  }

  let curMatch = s[0] === p[0] || (p[0] === '.' && s.length !== 0)

  if (p.length >= 2 && p[1] === '*') {
    if (s.length === 0) {
      return isMatch(s, p.substring(2))
    }
    return (curMatch && isMatch(s.substring(1), p)) || isMatch(s, p.substring(2))
  }

  return curMatch && isMatch(s.substring(1), p.substring(1))

};
// @lc code=end

