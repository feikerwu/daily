/*
 * @lc app=leetcode.cn id=838 lang=javascript
 *
 * [838] 推多米诺
 */

// @lc code=start
/**
 * @param {string} dominoes
 * @return {string}
 */
var pushDominoes = function(dominoes) {
  let left = 0
  dominoes = `L${dominoes}R`
  let res = ''
  for(let i = 1; i < dominoes.length - 1; i++) {
    if (dominoes[i] === 'L') {
      if (dominoes[left] === 'L') {
        res += new Array(i - left).fill('L').join('')
      } else {
        let length = i - left - 1
        let term = ''
        if (length > 0) {
          term =  `${new Array(Math.floor(length / 2)).fill('L').join('')}`
            + `${length % 2 === 1 ? '.' : ''}`
            + `${new Array(Math.floor(length / 2)).fill('R').join('')}`
        } else {
          term = ''
        }
        res = res + 'R' + term + 'L'
      }
      left = i
    }
    if (dominoes[i] === 'R') {
      if (dominoes[left] === 'L') {
        res += new Array(i - left - 1).fill('.').join('')
        res += 'R'
      } else {
        res += new Array(i - left).fill('R').join('')
      }
      left = i
    }
  }
  return res
};
// @lc code=end

