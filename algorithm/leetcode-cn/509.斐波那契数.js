/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
  let arr = new Array(N + 1)
  arr[0] = 0
  arr[1] = 1
  for (let i = 2; i <= N; i++) {
    arr[i] = arr[i-2] + arr[i-1]
  }
  return arr[N]
};
// @lc code=end

