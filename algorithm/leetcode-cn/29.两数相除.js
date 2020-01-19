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
    res = dividend
    dividend = -1
  }

  res = res + calc(dividend, divisor)

  if (sign === 0) {
    res = 0 - res
  }
  let MAX = Math.pow(2, 31) - 1
  let MIN = 0 - Math.pow(2, 31)

  res = Math.min(res, MAX)
  res = Math.max(res, MIN)

  return res
};

function calc(a, b) {
  if (b === 0) {
    return 0
  }
  let res = 0
  let count = 1
  let c = b
  while(a >= b && b > 0) {
    a = a - b
    res = res + count
    b = b << 1
    count = count << 1
    console.log({
      b,
      count
    })
  }

  if (a >= c) {
    return res + calc(a, c)
  }
  return res
}
// @lc code=end

console.log(divide(2147483647,2))