/**
 * 在一个字符串数组中有红、黄、蓝三种颜色的球，且个数不相等、顺序不一致，
 * 请为该数组排序。使得排序后数组中球的顺序为:黄、红、蓝。
 * 例如：红蓝蓝黄红黄蓝红红黄红，排序后为：黄黄黄红红红红红蓝蓝蓝。
 */

/**
 * 根据order的顺序对数据排序
 * @param arr 排序数组
 * @param order 排序内容order
 */
function cunstomSort<T>(arr: Array<T>, order: Array<any>): Array<T> {
  return arr.sort((a, b) => order.indexOf(a) - order.indexOf(b));
}

console.log(
  cunstomSort('红蓝蓝黄红黄蓝红红黄红'.split(''), ['红', '黄', '蓝'])
);
