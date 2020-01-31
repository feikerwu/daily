/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let target = nums[0]
  let count = 1
  for (let i = 1; i < nums.length; i++) {
    if (count === 0) {
      target = nums[i]
      count++
    } else if (target === nums[i]) {
      count++
    } else {
      count--
    }
  }
  return target
};
// @lc code=end

