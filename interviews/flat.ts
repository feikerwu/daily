/**
 * 扁平化数组
 * @param arr 数组
 */
export function flat(arr: Array<unknown>): Array<unknown> {
  let flatted: Array<unknown> = [];
  arr.forEach(item => {
    flatted = flatted.concat(Array.isArray(item) ? flat(item) : [item]);
  });
  return flatted;
}
