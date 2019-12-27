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
  nums.push(nums.length + 1); // 推入一个哨兵
  const { length } = nums;
  for (let i = 0; i < length; i++) {
    while (nums[i] > 0 && nums[i] < length && nums[nums[i]] !== nums[i]) {
      swap(nums, nums[i], i);
    }
  }

  for (let j = 1; j < length; j++) {
    if (nums[j] !== j) {
      return j;
    }
  }

  return length;
};

// 交换两个数，用异或或者加减都可以
function swap(nums, x, y) {
  let a = nums[x];
  nums[x] = nums[y];
  nums[y] = a;
}

// @lc code=end
