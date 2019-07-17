/**
 * 洗牌算法，从n个数字中随机取出k个随机数
 * 1. 让length=n
 * 2. 生成0-length之间的随机数random，将random放入结果数组
 * 3. 将random和length-1的数交换
 * 4. length = length - 1
 * 5. 依次类推，直到生成k个随机数
 */

function shuffle(arr: Array<number>, k: number): Array<number> {
  const randomPer: Array<number> = [];
  for (let i = 0; i < k; i++) {
    const curLength: number = arr.length - 1 - i;
    const randomIndex: number = ~~(Math.random() * curLength);
    randomPer.push(arr[randomIndex]);

    let term: number = arr[randomIndex];
    arr[randomIndex] = arr[curLength];
    arr[curLength] = term;
  }
  return randomPer;
}
