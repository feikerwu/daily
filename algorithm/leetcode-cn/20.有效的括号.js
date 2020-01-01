/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let left = ['(', '[', '{']
  let right = [')', ']', '}']
  let leftToRight = {
    '(': ')',
    '[': ']',
    '{': '}'
  }

  let stack = []


  for (let i = 0; i < s.length; i++) {
    if (left.indexOf(s[i]) !== -1) {
      stack.push(s[i])
    }

    if (right.indexOf(s[i]) !== -1) {
      let last = stack.pop()
      // console.log(last)
      if (leftToRight[last] !== s[i]) {
        // console.log(leftToRight[last])
        // console.log(s[i])
        return false
      }
    }
  }

  if (stack.length) {
    return false
  }

  return true
};

// @lc code=end
console.log(isValid('()'))

