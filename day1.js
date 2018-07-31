/**
 * 给定一串括号，默认该括号串一个合法的串，给定以下规则，计算该括号串的分数
 * 1. () 分数为1
 * 2. AB串的分数为A + B,如()()分数为 1 + 1 = 2
 * 3. (A) 的分数为A * 2，如(())分数为 1 * 2 = 2
 */

/**
 * 解法一：设单一()为一个原子括号，当遇到原子括号时，计算包裹原子括号的层数*2
 * @param {string} S
 * @return {number}
 */
const scoreOfParentheses = function(S) {
    let res = 0
    let help = 0

    for (let i = 0; i < S.length; i++) {
        if (S[i] === '(') {
            help ++
        } else {
            help --
            if (i - 1 >= 0 && S[i - 1] === '(') {
                res += 1 << help
            }
        }
    }

    return res
}


/**
 * 解法2: 递归，对每个A+B的串
 * f(A + B) = f(A) + f(B)
 * 由help是否为0来确定A和B是否为合法括号串
 * f(A) = A.length === 2 ? 1 : 2 * f(A.substr(1, A.length - 1))
 * @param {string} S
 * @return  {number}
 */
const scoreOfParentheses2 = function(S) {
    // console.log(S)
    let res = 0
    let help = 0
    for (let i = 0, k = 0; i < S.length; i++) {
        S[i] === '(' ? help++ : help--
        if (help === 0) {
            console.log(i)
            res += (i - k === 1 ? 1 : 2 * scoreOfParentheses2(S.substr(k + 1, i - k - 1)))
            k = i + 1
        }
    }

    return res
}

// scoreOfParentheses2('()(())()')


