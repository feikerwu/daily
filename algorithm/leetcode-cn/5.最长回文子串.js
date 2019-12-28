/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  if (s.length <= 0) {
    return s;
  }

  let res = s.substring(0, 1);

  for (let i = 0; i < s.length; i++) {
    let subStr1 = getPalindrome(s, i, i + 1);
    let subStr2 = getPalindrome(s, i - 1, i + 1);
    res = res.length < subStr1.length ? subStr1 : res;
    res = res.length < subStr2.length ? subStr2 : res;
  }

  return res;
};

function getPalindrome(s, start, end) {
  if (s[start] !== s[end]) {
    return '';
  }

  while (start >= 0 && end < s.length && s[start] === s[end]) {
    start = start - 1;
    end = end + 1;
  }

  return s.substring(start + 1, end);
}

// @lc code=end
let res = longestPalindrome('babad');
