/*
 * [7] Reverse Integer
 *
 * https://leetcode.com/problems/reverse-integer/description/
 *
 * algorithms
 * Easy (24.52%)
 * Total Accepted:    515K
 * Total Submissions: 2.1M
 * Testcase Example:  '123'
 *
 * Given a 32-bit signed integer, reverse digits of an integer.
 *
 * Example 1:
 *
 *
 * Input: 123
 * Output: 321
 *
 *
 * Example 2:
 *
 *
 * Input: -123
 * Output: -321
 *
 *
 * Example 3:
 *
 *
 * Input: 120
 * Output: 21
 *
 *
 * Note:
 * Assume we are dealing with an environment which could only store integers
 * within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of
 * this problem, assume that your function returns 0 when the reversed integer
 * overflows.
 *
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let minValue = -1 * Math.pow(2, 31)
    let maxValue = Math.pow(2, 31) - 1
    let sign = true
    let res
    let xArr = String(x).split('')
    xArr[0] === '-' && (sign = false)
    !/\d/.test(xArr[0]) && (xArr = xArr.slice(1))
    xArr.reverse()
    res = (sign ? 1 : -1) * parseInt(xArr.join(''))
    if (res < minValue || res > maxValue)
        res = 0
    return res
};

console.log(reverse('-123'))