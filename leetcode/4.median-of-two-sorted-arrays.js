/*
 * [4] Median of Two Sorted Arrays
 *
 * https://leetcode.com/problems/median-of-two-sorted-arrays/description/
 *
 * algorithms
 * Hard (24.28%)
 * Total Accepted:    327.8K
 * Total Submissions: 1.3M
 * Testcase Example:  '[1,3]\n[2]'
 *
 * There are two sorted arrays nums1 and nums2 of size m and n respectively.
 *
 * Find the median of the two sorted arrays. The overall run time complexity
 * should be O(log (m+n)).
 *
 * You may assume nums1 and nums2 cannot be both empty.
 *
 * Example 1:
 *
 *
 * nums1 = [1, 3]
 * nums2 = [2]
 *
 * The median is 2.0
 *
 *
 * Example 2:
 *
 *
 * nums1 = [1, 2]
 * nums2 = [3, 4]
 *
 * The median is (2 + 3)/2 = 2.5
 *
 *
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 * @algorithm1: 直接对两个数组合并排序，直接去中位数
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const num = nums1.concat(nums2)
    num.sort((a, b) => a - b)
    const length = num.length
    const left = num[Math.floor((length - 1) / 2)]
    const right = num[Math.floor(length / 2)]
    const res = (left + right) / 2
    return res
}

// console.log(findMedianSortedArrays([2], [1, 3]))