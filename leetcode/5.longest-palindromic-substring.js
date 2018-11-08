/*
 * [5] Longest Palindromic Substring
 *
 * https://leetcode.com/problems/longest-palindromic-substring/description/
 *
 * algorithms
 * Medium (25.66%)
 * Total Accepted:    401.3K
 * Total Submissions: 1.6M
 * Testcase Example:  '"babad"'
 *
 * Given a string s, find the longest palindromic substring in s. You may
 * assume that the maximum length of s is 1000.
 *
 * Example 1:
 *
 *
 * Input: "babad"
 * Output: "bab"
 * Note: "aba" is also a valid answer.
 *
 *
 * Example 2:
 *
 *
 * Input: "cbbd"
 * Output: "bb"
 *
 *
 */
/**
 * @param {string} s
 * @return {string}
 * algorithm: 遍历传入的字符串s, 对每个字符c,判断其左右两边是否相等
 *
 */
const longestPalindrome = function(s) {
    let length = 0
    let resStr = ''

    for (let i = 0; i < s.length; i++) {
        for (let j = 1; j <= 2; j++) {
            let palindrome = getPalindromeInPos(s, i, j)
            if (length < palindrome.length) {
                length = palindrome.length
                resStr = palindrome.str
            }
        }
    }

    return resStr
};

/**
 *
 * @param {String} str 传入的字符串
 * @param {Number} pos 最中间的字符
 * @param {Number} type type=1时表示奇数串，type=2时，表示偶数传
 */
const getPalindromeInPos = function(str, pos, type = 1) {
    const length = str.length - 1
    let pre = type === 1 ? pos - 1 : pos
    let next = pos + 1
    let palindromeLength = type === 1 ? 1 : 0

    while (pre >= 0 && next <= length && str[pre] === str[next]) {
        pre --
        next ++
        palindromeLength += 2
    }

    return {
        length: palindromeLength,
        str: str.substr(pre + 1, palindromeLength)
    }
}

// longestPalindrome('abbc')




