/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// eslint-disable-next-line no-unused-vars
var threeSumClosest = function(nums, target) {
  nums = nums.sort((a, b) => a - b)
  let res = Infinity
  for (let i = 0; i < nums.length; i++) {
    let start = i + 1;
    let end = nums.length - 1
    while(start < end) {
      let sum = nums[i] + nums[start] + nums[end]
      if (Math.abs(res - target) > Math.abs(sum - target)) {
        res = sum
      }
      if (sum > target) {
        end--
      } else if (sum < target) {
        start++
      } else {
        return target
      }
    }
  }
  return res;
};

// @lc code=end

