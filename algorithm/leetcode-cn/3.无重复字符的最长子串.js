/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let arr = s.split('');
  let term = [];
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    const index = term.indexOf(arr[i]);
    if (index === -1) {
      term.push(arr[i]);
    } else {
      term = term.slice(index + 1);
      term.push(arr[i]);
    }
    max = Math.max(max, term.length);
  }

  return max;
};
// @lc code=end
