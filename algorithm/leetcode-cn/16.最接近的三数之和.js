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
    let diff = target - nums[i]
    let start = i - 1
    let end = i + 1
    let delta = Infinity
    while(start >= 0 && end < nums.length && start < i && end > i) {
      let sum = nums[start] + nums[end]
      delta = Math.abs(delta) > Math.abs(diff - sum) ? diff - sum : delta
      console.log({
        diff,
        i,
        start,
        end,
        sum
      })
      if (sum < diff) {
        start++
      } else if (sum > diff) {
        end--
      } else {
        return target
      }
    }
    res = Math.abs(target - res) > Math.abs(delta) ? target - delta : res
  }
  return res;
};

console.log(threeSumClosest([1,1,1,0], 100))
// @lc code=end

