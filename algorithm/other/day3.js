/**
 * 给定一个数列，返回一个boolean表示数组内是否有重复
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    return !nums.length === new Set(nums).size
}

/**
 * 对数组排序，判断排序后的数组相邻是否出现相同的数字
 * @param {number[]} nums
 * @return {boolean}
 */
var solution2 = function(nums) {
    nums.sort()
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i + 1]) {
            return true
        }
    }
    return false
}


/**
 * @param {numBer[]} nums
 * @return {boolean}
 */
var solution3 = function(nums) {
    const map = Object.create(null)
    for (let i = 0; i < nums.length; i++) {
        if (typeof map[nums[i]] !== 'undefined') {
            return true
        } else {
            map[nums[i]] = nums[i]
        }
    }
    return false
}