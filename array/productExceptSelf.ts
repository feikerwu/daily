/**
 * O(n) 实现除自身以外数组的乘积，不使用除法
 * 分别求当前数值的左右积
*/

function productExceptSelf(nums: Array<number>): Array<number> {
	const { length } = nums;
	let output: Array<number> = Array.from({ length });
	let left: Array<number> = Array.from({ length });
	let right: Array<number> = Array.from({ length });

	for (let i = 0; i < length; i++) {
		left[i] = (left[i - 1] || 1) * (nums[i - 1] || 1);
	}

	for (let j = length - 1; j >= 0; j--) {
		right[j] = (right[j + 1] || 1) * (nums[j + 1] || 1);
	}

	output = output.map((item, index) => left[index] * right[index]);

	return output;
}
