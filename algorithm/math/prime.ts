/**
 * 判断一个数是否是素数
 */
/**
 * 通过i * i < num 减少判断条件
 */
function isPrime(num: number): boolean {
  for (let i = 1; i * i <= num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
