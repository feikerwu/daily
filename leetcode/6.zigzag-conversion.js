/*
 * [6] ZigZag Conversion
 *
 * https://leetcode.com/problems/zigzag-conversion/description/
 *
 * algorithms
 * Medium (29.08%)
 * Total Accepted:    251.3K
 * Total Submissions: 864.3K
 * Testcase Example:  '"PAYPALISHIRING"\n3'
 *
 * The string "PAYPALISHIRING" is written in a zigzag pattern on a given number
 * of rows like this: (you may want to display this pattern in a fixed font for
 * better legibility)
 *
 *
 * P   A   H   N
 * A P L S I I G
 * Y   I   R
 *
 *
 * And then read line by line: "PAHNAPLSIIGYIR"
 *
 * Write the code that will take a string and make this conversion given a
 * number of rows:
 *
 *
 * string convert(string s, int numRows);
 *
 * Example 1:
 *
 *
 * Input: s = "PAYPALISHIRING", numRows = 3
 * Output: "PAHNAPLSIIGYIR"
 *
 *
 * Example 2:
 *
 *
 * Input: s = "PAYPALISHIRING", numRows = 4
 * Output: "PINALSIGYAHRPI"
 * Explanation:
 *
 * P     I    N
 * A   L S  I G
 * Y A   H R
 * P     I
 *
 */
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 * @algorithm 将一个字符串转为在二维面上上到下到上蛇形旋转的形式，并返回一维的字符串
 */
var convert = function(s, numRows) {
    if (numRows === 1) // 特殊的一维情况
        return s
    const length = s.length
    const strCollection = Array.from({ length: numRows }).fill('')
    let toBottom = true
    let rowIndex = 0
    let pos = 0

    // 用toBottom来判断当前蛇形是向上还是向下
    while (pos <= length - 1) {
        toBottom = rowIndex === 0
            ? true
            : rowIndex === numRows - 1
                ? false
                : toBottom
        // console.log({ rowIndex, pos })
        strCollection[rowIndex] += s[pos]
        pos += 1
        rowIndex += (toBottom ? 1 : -1)
    }

    // return strCollection
    return strCollection.join('')
};

// console.log(convert('AB', 1))
