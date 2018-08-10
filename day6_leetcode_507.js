/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
    let sum = 0;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            sum += i
        }
    }
    if (num !== 1) {
        sum += 1
    }
    return sum === num
}

console.log(checkPerfectNumber(28))