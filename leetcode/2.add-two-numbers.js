/*
 * [2] Add Two Numbers
 *
 * https://leetcode.com/problems/add-two-numbers/description/
 *
 * algorithms
 * Medium (29.40%)
 * Total Accepted:    637.8K
 * Total Submissions: 2.2M
 * Testcase Example:  '[2,4,3]\n[5,6,4]'
 *
 * You are given two non-empty linked lists representing two non-negative
 * integers. The digits are stored in reverse order and each of their nodes
 * contain a single digit. Add the two numbers and return it as a linked list.
 *
 * You may assume the two numbers do not contain any leading zero, except the
 * number 0 itself.
 *
 * Example:
 *
 *
 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 0 -> 8
 * Explanation: 342 + 465 = 807.
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 * @algorithm: 遍历两个列表，每个节点相加，遇10进1，关键点在与处理两个列表长度不等的情况
 */
const addTwoNumbers = function(l1, l2) {
    let head = new ListNode(0)
    let curNode = head
    let curVal = 0
    let carry = 0
    while(l1 && l2) { // 处理两条列表相加的情况
        let sum = l1.val + l2.val + carry
        dealCurNode(sum)
        l1 = l1.next
        l2 = l2.next
    }

    let remainList = l1 || l2

    while(remainList) { // 处理剩下一条列表的情况
        let sum = remainList.val + carry
        dealCurNode(sum)
        remainList = remainList.next
    }

    carry && dealCurNode(carry) //处理最后有进位的情况

    let res = new Array()

    while(head) {
        res.push(head.val)
        head = head.next
    }
    // console.log(res)
    res.pop()

    return res

    function dealCurNode(sum) {
        curVal= parseInt(sum % 10, 10)
        carry = parseInt(sum / 10, 10)
        curNode.val = curVal
        curNode.next = new ListNode(0)
        curNode = curNode.next
    }

};
