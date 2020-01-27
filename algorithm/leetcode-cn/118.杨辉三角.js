/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  let res = []
  for (let i = 1; i <= numRows; i++) {
    let term = [1]
    for (let j = 1; j < i - 1; j++) {
      try {
        term.push(res[i-2][j-1] + res[i-2][j])
      } catch(e) {
        console.log({i, j})
      }
    }
    if (i > 1) {
      term.push(1)
    }
    res.push(term)
  }
  return res;
};
// @lc code=end

let res = generate(5)
console.log(res)