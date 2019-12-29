/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  if (numRows < 2) {
    return s;
  }
  let len = s.length;
  let res = Array.from({ length: numRows }).fill('');
  let flag = -1;
  let cur = 0;
  for (let i = 0; i < len; i++) {
    res[cur] = res[cur] + s[i];
    if (cur === 0 || cur === numRows - 1) {
      flag = flag * -1;
    }
    cur = cur + flag;
  }

  return res.join('');
};
// @lc code=end
