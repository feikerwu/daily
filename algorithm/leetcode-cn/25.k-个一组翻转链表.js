/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
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
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
  if (!head || !head.next) {
    return head
  }
  let term = head
  let count = k;
  while(count--) {
    if (term === null) {
      return head
    }
    term = term.next
  }
  // console.log(term)

  let [newHead, oldHead] = reverse(head, term)
  // console.log({newHead})
  // console.log({oldHead})
  oldHead.next = reverseKGroup(term, k)
  return newHead
};

function reverse(head, end) {
  let pre = null, cur = head, next = null;
  // console.log({end})
  while(cur && cur !== end) {
    next = cur.next
    cur.next = pre
    pre = cur
    cur = next
  }
  return [pre, head]

}
// @lc code=end

function ListNode(val) {
  this.val = val;
  this.next = null;
}

function t(arr) {
  let term = new ListNode();
  let pre = term;
  for (let i = 0; i < arr.length; i++) {
    let n = new ListNode(arr[i])
    term.next = n
    term = term.next
  }
  return pre.next
}

let lists = t([1,2])
console.log(reverseKGroup(lists, 2))