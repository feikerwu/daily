/*
 * [14] Longest Common Prefix
 *
 * https://leetcode.com/problems/longest-common-prefix/description/
 *
 * algorithms
 * Easy (32.24%)
 * Total Accepted:    354.5K
 * Total Submissions: 1.1M
 * Testcase Example:  '["flower","flow","flight"]'
 *
 * Write a function to find the longest common prefix string amongst an array
 * of strings.
 *
 * If there is no common prefix, return an empty string "".
 *
 * Example 1:
 *
 *
 * Input: ["flower","flow","flight"]
 * Output: "fl"
 *
 *
 * Example 2:
 *
 *
 * Input: ["dog","racecar","car"]
 * Output: ""
 * Explanation: There is no common prefix among the input strings.
 *
 *
 * Note:
 *
 * All given inputs are in lowercase letters a-z.
 *
 */
/**
 * @param {string[]} strs
 * @return {string}
 * @algorithm: 横向搜索，纵向搜索以及分治法解决, 这里用分支法解决
 */
var longestCommonPrefix = function(strs) {
    let length = strs.length
    if (length === 0) {
        return ''
    }
    if (length === 1) {
        return strs[0]
    }
    let middle = Math.floor(length / 2)
    let leftLongest = longestCommonPrefix(strs.slice(0, middle))
    let rightLongest = longestCommonPrefix(strs.slice(middle))

    let res = 0

    // 这里可以做二分搜索优化

    for(let i = 0; i < Math.min(leftLongest.length, rightLongest.length); i++) {
        if (leftLongest[i] !== rightLongest[i]) {
            return leftLongest.substring(0, i)
        }
    }

    return leftLongest.substring(0, Math.min(leftLongest.length, rightLongest.length))
}
