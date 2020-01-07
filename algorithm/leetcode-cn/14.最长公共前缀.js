/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (strs.length === 0) {
    return ''
  }

  let pre = strs[0]
  for (let i = 1; i < strs.length; i++) {
    while(strs[i].indexOf(pre) !== 0) {
      pre = pre.substring(0, pre.length - 1)
      if (pre === '') {
        return pre
      }
    }
  }

  return pre
};
// @lc code=end

