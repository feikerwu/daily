/*
 * [19] Remove Nth Node From End of List
 *
 * https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/
 *
 * algorithms
 * Medium (33.60%)
 * Total Accepted:    311.9K
 * Total Submissions: 928.3K
 * Testcase Example:  '[1,2,3,4,5]\n2'
 *
 * Given a linked list, remove the n-th node from the end of list and return
 * its head.
 *
 * Example:
 *
 *
 * Given linked list: 1->2->3->4->5, and n = 2.
 *
 * After removing the second node from the end, the linked list becomes
 * 1->2->3->5.
 *
 *
 * Note:
 *
 * Given n will always be valid.
 *
 * Follow up:
 *
 * Could you do this in one pass?
 *
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @algorithm: 用两个指针同时向前，两个指针之前的gap为n，先走的指针到达尾部，而后走的指针刚好到n的位置
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let sentryEle = new ListNode(0)
    sentryEle.next = head
    let firstPos = sentryEle,
        secondPos = sentryEle

    let step = 0
    while (firstPos.next) {
        firstPos = firstPos.next
        step += 1
        if (step > n) {
            secondPos = secondPos.next
        }
    }
    secondPos.next = secondPos.next.next

    return sentryEle.next
};
