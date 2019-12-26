/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个有序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  if (nums1.length > nums2.length) {
    [nums1, nums2] = [nums2, nums1];
  }

  let left = Math.floor((nums1.length + nums2.length + 1) / 2);
  let right = Math.floor((nums1.length + nums2.length + 2) / 2);
  // 这里是为了将奇数和偶数两种情况归为一种，奇数情况会计算两次
  console.log(findMinKSortedArrays(nums1, nums2, left));
  console.log(findMinKSortedArrays(nums1, nums2, right));
  return (
    (findMinKSortedArrays(nums1, nums2, left) +
      findMinKSortedArrays(nums1, nums2, right)) /
    2
  );
};

// 求两个数组的第K小数
const findMinKSortedArrays = function(nums1, nums2, k) {
  const len1 = nums1.length;
  const len2 = nums2.length;
  let partK = ~~(k / 2);
  partK = Math.min(partK, len1);

  if (len1 === 0) {
    return nums2[k - 1];
  }

  if (k === 1) {
    return Math.min(nums1[0], nums2[0]);
  }

  const i = partK - 1;
  const j = partK - 1;

  if (nums1[i] <= nums2[j]) {
    nums1 = nums1.slice(i + 1);
  } else {
    nums2 = nums2.slice(j + 1);
  }
  if (nums1.length > nums2.length) {
    [nums1, nums2] = [nums2, nums1];
  }

  return findMinKSortedArrays(nums1, nums2, k - partK);
};

findMedianSortedArrays([4], [1, 2, 3, 5, 6]);
// @lc code=end
