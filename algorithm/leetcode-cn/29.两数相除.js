/*
 * @lc app=leetcode.cn id=29 lang=javascript
 *
 * [29] 两数相除
 */

// @lc code=start
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
  let sign = 1
  if (dividend < 0 && divisor > 0 || dividend > 0 && divisor < 0) {
    sign = 0
  }
  dividend = Math.abs(dividend)
  divisor = Math.abs(divisor)
  let res = 0
  if (divisor === 1) {
    res = dividend + 1
    dividend = -1
  }
  while(dividend >= 0) {
    dividend = dividend - divisor;
    res++;
  }
  res = res - 1;
  if (sign === 0) {
    res = 0 - res
  }
  let MAX = Math.pow(2, 31) - 1
  let MIN = 0 - Math.pow(2, 31)

  res = Math.min(res, MAX)
  res = Math.max(res, MIN)

  return res
};
// @lc code=end

console.log(divide(-2147483648,1))