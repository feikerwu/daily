/*
 * @lc app=leetcode.cn id=41 lang=javascript
 *
 * [41] 缺失的第一个正数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
  nums.push(nums.length + 1);
  const { length } = nums;
  for (let i = 0; i < length; i++) {
    let val = nums[i];
    if (val > 0 && val <= length) {
      nums[val] = true;
    }
  }

  for (let j = 1; j < length; j++) {
    if (nums[j] !== true) {
      return nums[j];
    }
  }
  return length;
};
// @lc code=end
