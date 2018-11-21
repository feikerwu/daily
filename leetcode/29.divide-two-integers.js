/*
 * [29] Divide Two Integers
 *
 * https://leetcode.com/problems/divide-two-integers/description/
 *
 * algorithms
 * Medium (15.77%)
 * Total Accepted:    161.8K
 * Total Submissions: 1M
 * Testcase Example:  '10\n3'
 *
 * Given two integers dividend and divisor, divide two integers without using
 * multiplication, division and mod operator.
 *
 * Return the quotient after dividing dividend by divisor.
 *
 * The integer division should truncate toward zero.
 *
 * Example 1:
 *
 *
 * Input: dividend = 10, divisor = 3
 * Output: 3
 *
 * Example 2:
 *
 *
 * Input: dividend = 7, divisor = -3
 * Output: -2
 *
 * Note:
 *
 *
 * Both dividend and divisor will be 32-bit signed integers.
 * The divisor will never be 0.
 * Assume we are dealing with an environment which could only store integers
 * within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of
 * this problem, assume that your function returns 231 − 1 when the division
 * result overflows.
 *
 *
 */
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    if (divisor === 0) return 0;
    if (dividend === 0) return 0;
    if (dividend === -2147483648 && divisor === -1) return 2147483647;

    var isPositive = true;
    if (dividend > 0 !== divisor > 0) isPositive = false;

    divisor = Math.abs(divisor);
    dividend = Math.abs(dividend);

    var count = 1,
      result = 0,
      base = divisor;

    while (dividend >= divisor) {
      count = 1;
      base = divisor;
      while (base <= (dividend >> 1)) {
        base = base << 1;
        count = count << 1;
      }
      result += count;
      dividend -= base;
    }

    if (!isPositive) result = -result;
    return result;
  };