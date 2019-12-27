/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let res = '';
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j <= Math.min(i, s.length - i - 1); j++) {}
  }
  return res;
};

function isPalindrome(s) {
  return (
    s ===
    s
      .split('')
      .reverse()
      .join('')
  );
}
// @lc code=end
