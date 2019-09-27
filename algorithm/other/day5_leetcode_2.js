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
var addTwoNumbers = function(l1, l2) {
    let sum = getValue(l1) + getValue(l2)
    return resolve(sum)
}

var getValue = function(list) {
    let res = 0
    for (let i = 0; i < list.length; i++) {
        res += list[i] * Math.pow(10, i)
    }
    return res
}

var resolve = function(num) {
    let res = []
    while(num) {
        res.push(num % 10)
        num = Math.floor(num / 10)
    }
    return res
}

let l1 = [2, 4, 3]
let l2 = [5, 6, 4]

console.log(addTwoNumbers(l1, l2))