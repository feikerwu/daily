/**
 * 反转链表，每 k 个节点反转一次，不足 k 就保持原有顺序
 */

interface ListItem {
  next: ListItem | null;
  value: any;
}

interface group {
  head: ListItem;
  tail: ListItem;
}

function reverseEveryKItems(head: ListItem, k: number): ListItem {
  let headTmp: ListItem = head;
  let groupHeads: Array<ListItem> = [];
  let count = 1;
  groupHeads.push(headTmp);

  // 对列表分组
  while (headTmp.next) {
    count = count + 1;
    if (count === k) {
      groupHeads.push(headTmp.next);
      count = 0;
    }
    headTmp = headTmp.next;
  }

  let lastGroupHead: ListItem;
  // 不满K个节点的不反转
  if (count !== 0) {
    lastGroupHead = groupHeads.pop();
  }

  // 每K个节点置换，保存head，tail
  const groups: Array<group> = groupHeads.map(groupHead =>
    reverseGroupList(groupHead, k)
  );

  // 将每个反转后的组前尾后头连起来
  let reverseHead: ListItem = groups[0].head;
  for (let i = 1; i < groups.length; i++) {
    let preTail = groups[i - 1].tail;
    let curHead = groups[i].head;
    preTail.next = curHead;
  }

  groups[-1].tail.next = lastGroupHead || null;

  return reverseHead;
}

/* 每K个列表反转 */
function reverseGroupList(head: ListItem, k: number): group {
  let pre: ListItem = head;
  let cur: ListItem = head.next;

  while (cur && k--) {
    let next: ListItem = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }

  return {
    head: cur,
    tail: head
  };
}
