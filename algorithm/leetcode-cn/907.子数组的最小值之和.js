/*
 * @lc app=leetcode.cn id=907 lang=javascript
 *
 * [907] 子数组的最小值之和
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number}
 */
var sumSubarrayMins = function(A) {
  console.log(A)
  const {length} = A
  const pre = Array.from({length}).fill(-1)
  const next = Array.from({length}).fill(length)
  const stack= []
  for(let i = 0; i < length; i++) {
    while(stack.length && A[stack[0]] > A[i]) {
      next[stack[0]] = i
      stack.shift()
    }
    pre[i] = stack.length ? stack[0] : -1;
    stack.unshift(i)
  }
  let res = 0
  let mod = 1e9 + 7
  for (let i = 0 ; i < length; i++) {
    res = (res + A[i] * (i - pre[i]) * (next[i] - i)) % mod
  }
  return res
};
// @lc code=end

let res = sumSubarrayMins([3,1,2,4])
console.log(res)
