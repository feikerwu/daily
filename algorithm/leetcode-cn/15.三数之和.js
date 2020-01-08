/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  nums = nums.sort((a, b) => a - b)
  let res = []
  for (let i = 0; i < nums.length; i++) {
    let finded = twoSum(nums, i + 1, nums.length - 1, 0 - nums[i])
    res = res.concat(finded)
    while(i < nums.length && nums[i] === nums[i + 1]) {
      i++
    }
  }
  return res
};

function twoSum(nums, start, end, sum) {
  let len = nums.length
  let res = []
  let term = [0 - sum]
  while(start < end) {
    let curSum = nums[start] + nums[end]
    if (curSum === sum) {
      term.push(nums[start], nums[end])
      res.push(term)
      term = [0 - sum]

      while(start < len && nums[start] === nums[start + 1]) {
        start ++
      }
      start ++
      while(end > 0 && nums[end] === nums[start - 1]) {
        end --
      }
      end --
    } else if (curSum < sum) {
      while(start < len && nums[start] === nums[start + 1]) {
        start ++
      }
      start ++
    } else {
      while(end > 0 && nums[end] === nums[start - 1]) {
        end --
      }
      end --
    }
  }

  return res
}
// @lc code=end

threeSum([1,-1,-1,0])

