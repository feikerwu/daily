/**
 * 给定一个整数数组，判断是否存在重复元素。
 * 如果任何值在数组中出现至少两次，函数返回 true。
 * 如果数组中每个元素都不相同，则返回 false。
 */

/* 时间复杂性: O(nlogn), 空间复杂性: O(1) */
export function isDuplicate(nums: Array<number>): boolean {
  let tmpArr = nums.sort();
  return tmpArr.reduce(
    (acc, cur, index) => acc || cur === tmpArr[index + 1],
    false
  );
}

/* 时间复杂性: O(n), 空间复杂性: O(n) */
export function isDuplicate2(nums: Array<number>): boolean {
  const map: Map<any, number> = new Map();
  let isDuplicate: boolean = false;
  nums.forEach(num => {
    if (map[num]) {
      isDuplicate = true;
    }
    map[num] = true;
  });
  return isDuplicate;
}

export function isDuplicate3(nums: Array<number>): boolean {
  const set = new Set(nums);
  return !(set.size === nums.length);
}
