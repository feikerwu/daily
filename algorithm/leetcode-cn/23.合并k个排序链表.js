/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个排序链表
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  function getLeftChild(index) {
    return index * 2 + 1
  }

  function getRightChild(index) {
    return index * 2 + 2
  }

  // 保证start是一个堆
  function heapfy(lists, start) {
    if (lists[start] === null) {
      swap(lists, start, lists.length - 1)
      lists.pop()
      heapfy(lists, start)
      return
    }
    // console.log({start})
    // console.log({lists})
    const { length } = lists
    let left = getLeftChild(start)
    let right = getRightChild(start)
    let min = start
    // 获取到三个节点中最大值的那个节点
    if (left < length && lists[left] && lists[left].val < lists[start].val) {
      min = left
    }
    if (right < length && lists[right] && lists[right].val < lists[min].val) {
      min = right
    }


    // 如果最小和当前节点不匹配，则继续维持堆
    if (start !== min) {
      // 交换两个链表
      swap(lists, start, min)
      heapfy(lists, min)
    }
  }

  function swap(lists, i, j) {
    let term = lists[i]
    lists[i] = lists[j]
    lists[j] = term
  }

  for(let i = Math.floor(lists.length / 2); i >= 0; i--) {
    heapfy(lists, i)
  }


  let head = new ListNode()
  let now = head
  // let count = 2
  while(lists.length) {
    if (lists[0]) {
      now.next = lists[0]
      now = now.next
      lists[0] = lists[0].next
      heapfy(lists, 0)
    } else {
      break
    }
  }
  return head.next
};
// @lc code=end

// 以lists构建一个最小堆a
// 每次从a中取出最小值x，x = x.next，同时平衡

function ListNode(val) {
  this.val = val;
  this.next = null;
}

let lists = [[[-10,-9,-9,-3,-1,-1,0],[-5],[4],[-8],[],[-9,-6,-5,-4,-2,2,3],[-3,-3,-2,-1,0]]]
lists = lists.map(item => {
  let head = new ListNode()
  let now = head
  for(let i = 0; i < item.length; i++) {
    let cur = new ListNode(item[i])
    now.next = cur
    now = now.next
  }
  return head.next
})

console.log(mergeKLists(lists))