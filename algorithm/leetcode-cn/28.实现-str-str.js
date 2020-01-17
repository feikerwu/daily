/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if (needle.length === 0) {
    return 0
  }
  let next = getNext(needle)
  let j = 0;
  for (let i = 0; i < haystack.length;) {
    if (j === -1 || haystack[i] === needle[j]) {
      i++;
      j++;
      if (j === needle.length - 1) {
        return i - j + 1
      }
    } else {
      j = next[j]
    }
  }
  return -1
};

function getNext(p) {
  let next = Array.from(p).fill(0)
  next[0] = -1
  for(let i = 1; i < p.length; i++) {
    let k = next[i - 1]
    while(k !== -1 && p[k+1] !== p[i]) {
      k = next[k]
    }
    if (p[k + 1] === p[i]) {
      next[i] = k + 1
    }
  }
  return next
}
// @lc code=end
console.log(getNext('a'))
console.log(strStr('a', 'a'))
