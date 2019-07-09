/*
 * [24] Swap Nodes in Pairs
 *
 * https://leetcode.com/problems/swap-nodes-in-pairs/description/
 *
 * algorithms
 * Medium (41.55%)
 * Total Accepted:    253K
 * Total Submissions: 608.9K
 * Testcase Example:  '[1,2,3,4]'
 *
 * Given a linked list, swap every two adjacent nodes and return its head.
 *
 * Example:
 *
 *
 * Given 1->2->3->4, you should return the list as 2->1->4->3.
 *
 * Note:
 *
 *
 * Your algorithm should use only constant extra space.
 * You may not modify the values in the list's nodes, only nodes itself may be
 * changed.
 *
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
 * @param {ListNode} head
 * @return {ListNode}
 * @algorithm: 递归的去交换节点
 */
var swapPairs = function(head) {
    if (!head || !head.next) {
        return head
    }

    let cur = head.next
    head.next = swapPairs(head.next.next)
    cur.next = head

    return cur
};
