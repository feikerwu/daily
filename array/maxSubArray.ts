/**
 * 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 */

export function maxSubArray(nums: Array<number>): number {
	let maxSum: number = 0;
	let tmpMaxSum: number = 0;

	nums.forEach((num) => {
		tmpMaxSum = tmpMaxSum + num > 0 ? tmpMaxSum + num : 0;
		maxSum = tmpMaxSum > maxSum ? tmpMaxSum : maxSum;
	});

	return maxSum;
}

