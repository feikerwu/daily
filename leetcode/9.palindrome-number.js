/*
 * [9] Palindrome Number
 *
 * https://leetcode.com/problems/palindrome-number/description/
 *
 * algorithms
 * Easy (39.44%)
 * Total Accepted:    429.3K
 * Total Submissions: 1.1M
 * Testcase Example:  '121'
 *
 * Determine whether an integer is a palindrome. An integer is a palindrome
 * when it reads the same backward as forward.
 *
 * Example 1:
 *
 *
 * Input: 121
 * Output: true
 *
 *
 * Example 2:
 *
 *
 * Input: -121
 * Output: false
 * Explanation: From left to right, it reads -121. From right to left, it
 * becomes 121-. Therefore it is not a palindrome.
 *
 *
 * Example 3:
 *
 *
 * Input: 10
 * Output: false
 * Explanation: Reads 01 from right to left. Therefore it is not a
 * palindrome.
 *
 *
 * Follow up:
 *
 * Coud you solve it without converting the integer to a string?
 *
 */
/**
 * @param {number} x
 * @return {boolean}
 * @algorithm: 转化为字符回文后比较
 * 另外一个解法是对原数不断的除10模10，计算翻转后的数并与原数比较。
 */
var isPalindrome = function(x) {
    return parseInt(String(x).split('').reverse().join('')) === x
};
