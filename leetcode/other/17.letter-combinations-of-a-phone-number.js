/*
 * [17] Letter Combinations of a Phone Number
 *
 * https://leetcode.com/problems/letter-combinations-of-a-phone-number/description/
 *
 * algorithms
 * Medium (38.82%)
 * Total Accepted:    302.2K
 * Total Submissions: 778.2K
 * Testcase Example:  '"23"'
 *
 * Given a string containing digits from 2-9 inclusive, return all possible
 * letter combinations that the number could represent.
 *
 * A mapping of digit to letters (just like on the telephone buttons) is given
 * below. Note that 1 does not map to any letters.
 *
 *
 *
 * Example:
 *
 *
 * Input: "23"
 * Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
 *
 *
 * Note:
 *
 * Although the above answer is in lexicographical order, your answer could be
 * in any order you want.
 *
 */
/**
 * @param {string} digits
 * @return {string[]}
 * @algorithm: 穷举
 */
const map = {
    0: [],
    1: [],
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z']
}

var letterCombinations = function(digits) {
    let res = []

    for (let i = 0; i < digits.length; i++) {
        let dightMap = map[digits[i]]
        let cur
        if (res.length === 0) {
            res = dightMap
        } else {
            cur = res
            res = []
            cur.forEach(str => {
                dightMap.forEach(char => res.push(str + char))
            })
        }
    }
    return res
}


