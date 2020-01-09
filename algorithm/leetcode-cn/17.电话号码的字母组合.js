/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if (digits.length === 0) {
    return []
  }

  let map = [
    [],
    [],
    ['a', 'b', 'c'],
    ['d', 'e', 'f'],
    ['g', 'h', 'i'],
    ['j', 'k', 'l'],
    ['m', 'n', 'o'],
    ['p', 'q', 'r', 's'],
    ['t', 'u', 'v'],
    ['w', 'x', 'y', 'z']
  ]

  let res = ['']
  for (let i = 0; i < digits.length; i++) {
    const dight = digits[i]
    let strs = map[+dight]
    let term = []
    for (let j = 0; j < strs.length; j++) {
      for (let k = 0; k < res.length; k++) {
        term.push(`${res[k]}${strs[j]}`)
      }
    }
    res = term
  }
  return res
};
// @lc code=end

