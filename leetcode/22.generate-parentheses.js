/*
 * [22] Generate Parentheses
 *
 * https://leetcode.com/problems/generate-parentheses/description/
 *
 * algorithms
 * Medium (51.15%)
 * Total Accepted:    264.6K
 * Total Submissions: 517.2K
 * Testcase Example:  '3'
 *
 *
 * Given n pairs of parentheses, write a function to generate all combinations
 * of well-formed parentheses.
 *
 *
 *
 * For example, given n = 3, a solution set is:
 *
 *
 * [
 * ⁠ "((()))",
 * ⁠ "(()())",
 * ⁠ "(())()",
 * ⁠ "()(())",
 * ⁠ "()()()"
 * ]
 *
 */
/**
 * @param {number} n
 * @return {string[]}
 * 算法: 对每个n个括号组成的合法串，可以看作是左边的m个括号组成的合法串 + 右边的(n-m)个合法串
 */
var generateParenthesis = function(n) {
    if (n === 0) {
        return ['']
    }

    let res = []

    for (let i = 0; i < n; i++) {
        generateParenthesis(i).forEach(left => {
            generateParenthesis(n - i - 1).forEach(right => {
                res.push(`(${left})${right}`)
            })
        })
    }

    // console.log(res)

    return res
}

// console.log(generateParenthesis(3))
// generateParenthesis(3)

