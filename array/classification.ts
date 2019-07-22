/**
 * 区间分类
 * @input '1,2,3,5,7,8,9'
 * @output '1~3,5,7~8,10'
 */

function classification(arr: Array<number>): Array<number | string> {
  const res: Array<number | string> = [];
  let start: number = 0;

  arr.reduce((acc, cur, index) => {
    if (acc + 1 !== cur) {
      res.push(index - start <= 1 ? arr[start] : `${arr[start]}~${acc}`);
      start = index;
    }

    // 处理边界情况
    if (index === arr.length - 1) {
      res.push(start === index ? arr[start] : `${arr[start]}~${cur}`);
    }

    return cur;
  });

  return res;
}
