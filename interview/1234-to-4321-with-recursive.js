/**
 * 输入整型 1234，返回字符串“4321”。
 * 要求必须使用递归函数调用，不能用全局变量，输入函数必须只有一个参数传入，必须返回字符串。
 */

/**
 * @case 1234 => '4321'
 * @case 1000 => '1'
 * @case -1000 => '-1'
 * @case -1234 => '-4321'
 *
 * @param {number} number 传入的数值
 */
function solution(number) {
  if (number < 0) {
    return `-${solution(Math.abs(number))}`;
  }

  let integerPart = Math.floor(number);
  let decimal = `${number}`.split('.')[1];

  let numberSize = `${integerPart}`.length;

  if (number < 10) {
    return `${integerPart}`;
  }

  if (integerPart % 10 === 0) {
    let initialNumberSize = decimal || 0;
    // initialNumberSize === 0 => 初始number以0为结尾
    // +initialNumberSize === numberSize => 以2个以上0为结尾
    if (initialNumberSize === 0 || +initialNumberSize === numberSize) {
      return solution(parseFloat(`${~~(integerPart / 10)}.${numberSize - 1}`));
    }
    return `0${solution(
      parseFloat(`${~~(integerPart / 10)}.${initialNumberSize}`)
    )}`;
  }

  // 以小数标示从首位到最后一位非0位置的个数
  return `${integerPart % 10}${solution(
    parseFloat(`${~~(integerPart / 10)}.${decimal || numberSize}`)
  )}`;
}

const assert = require('assert').strict;

assert.strictEqual(solution(1234), '4321');
assert.strictEqual(solution(1000), '1');
assert.strictEqual(solution(-1234), '-4321');
assert.strictEqual(solution(-1000), '-1');
assert.strictEqual(solution(1011), '1101');
assert.strictEqual(solution(-1001), '-1001');
