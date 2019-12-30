/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let y = Math.abs(x)
  let flag = x === y
  let reversed = y.toString().split('').reverse().join('')
  if (reversed < Math.pow(2, 31) * -1 || reversed > Math.pow(2, 31) - 1) {
    return 0
  }
  return flag ? reversed : reversed * -1
};
// @lc code=end

