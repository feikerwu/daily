/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  let head = new ListNode()
  let now = head
  while(l1 || l2) {
    if (!l1) {
      now.next = l2
      break
    } else if (!l2) {
      now.next = l1
      break
    } else {
      let a = l1.val
      let b = l2.val
      let cur = new ListNode()
      if (a <= b) {
        cur.val = a
        l1 = l1.next
      } else {
        cur.val = b
        l2 = l2.next
      }
      now.next = cur
      now = cur
    }
  }
  return head.next
};
// @lc code=end

