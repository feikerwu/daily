/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第N个节点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  if (!head.next) {
    return n === 0 ? head : head.next
  }
  let sign = new ListNode(0);
  sign.next = head
  let s1 = sign, s2 = sign;
  let count = n + 1
  while(s1 && count) {
    s1 = s1.next
    count--
  }

  while(s1) {
    s1 = s1.next
    s2 = s2.next
  }

  s2.next = s2.next.next
  return sign.next
};
// @lc code=end
console.log(removeNthFromEnd([1,2,3,4,5], 2))

