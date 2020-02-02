/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let i = 0, j = height.length - 1;
  let max = -Infinity

  while(j >= i) {
    let curValue = (j - i) * Math.min(height[i], height[j])
    max = Math.max(curValue, max)
    height[i] < height[j] ? i++ : j--
  }

  return max
};
// @lc code=end


/**
 * 暴力解法，时间O(n * n)，空间O(1)
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let start = 0, end = height.length - 1
  let max = -Infinity
  while(start < end) {
    max = Math.max(max, (end - start) * Math.min(height[start], height[end]))
    if (height[start] < height[end]) {
      start ++
    } else {
      end --
    }
  }
  return max
};

