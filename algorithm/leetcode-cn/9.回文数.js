/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0) {
    return false
  }

  let y = 0
  let xCopy = x

  while(xCopy) {
    let z = xCopy % 10
    xCopy = ~~(xCopy / 10)
    y = y * 10 + z
  }

  return x === y
};
// @lc code=end

