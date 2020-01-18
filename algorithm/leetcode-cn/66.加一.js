/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */
// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let delta = 1
  for (let i = digits.length - 1; i >= 0; i--) {
    let value = digits[i] + delta
    digits[i] = value % 10
    delta = value >= 10 ? 1 : 0
    if (delta === 0) {
      break
    }
  }
  if (delta === 1) {
    digits.unshift(1)
  }
  return digits
};
// @lc code=end

