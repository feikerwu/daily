/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  str = str.trim()
  let flag = str[0]
  if (!(/[\d\+-]/.test(flag))) {
    return 0
  }

  if (/[\+-]/.test(flag)) {
    str = str.substring(1)
  }

  let res = 0
  for(let i = 0; i < str.length; i++) {
    if (!/\d/.test(str[i])) {
      break;
    }
    res = res * 10 + parseInt(str[i])
  }

  res = flag === '-' ? res * -1 : res

  if (res > Math.pow(2, 31) - 1) {
    return Math.pow(2, 31) - 1
  }
  if (res < Math.pow(2, 31) * -1) {
    return Math.pow(2, 31) * -1
  }
  return res
};
// @lc code=end

console.log(myAtoi('42'))