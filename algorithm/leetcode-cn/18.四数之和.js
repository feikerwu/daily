/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  let res = []
  nums = nums.sort((a, b) => a - b)
  for(let i = 0; i < nums.length - 3; i++) {
    if (nums[i] + nums[i+1] + nums[i+2] + nums[i+3] > target) {
      continue
    }
    let len = nums.length
    if (nums[i] + nums[len - 3] + nums[len - 2] + nums[len - 1] < target) {
      continue
    }
    for (let j = i + 1; j < nums.length; j++) {

      let start = j + 1,
        end = nums.length - 1;
      while(start < end) {
        let sum = nums[i] + nums[j] + nums[start] + nums[end]
        if (sum > target) {
          end --
        } else if (sum < target) {
          start ++
        } else {
          res.push([nums[i], nums[j], nums[start], nums[end]])
          while(start < end && nums[start] === nums[start + 1]) {
            start ++
          }
          while(start < end && nums[end] === nums[end - 1]) {
            end --
          }
          start ++;
          end --;
        }
      }
      while(j + 1 < nums.length && nums[j] === nums[j+1]) {
        j++
      }
    }
    while(i + 1 < nums.length && nums[i] === nums[i+1]) {
      i++
    }
    console.log(i)
  }
  return res
};
// @lc code=end
console.log(fourSum([1,0,-1,0,-2,2], 0))
