/*
 * @lc app=leetcode.cn id=12 lang=javascript
 *
 * [12] 整数转罗马数字
 */



// @lc code=start
/**
 * 详细证明见 https://leetcode-cn.com/problems/integer-to-roman/solution/tan-xin-suan-fa-by-liweiwei1419/
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  let a = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
  let b = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]

  let res = ''
  for (let i = 0; i < b.length; i++) {
    while(num >= b[i]) {
      res += a[i]
      num -= b[i]
    }
  }

  return res
};
// @lc code=end

