export class DoubleListItem {
  pre: DoubleListItem | null;
  next: DoubleListItem | null;
  value: any;
  constructor(value = null) {
    this.value = value;
    this.pre = null;
    this.next = null;
  }
}

export class DoubleList {
  head: DoubleListItem;
  tail: DoubleListItem;
  length: number;

  constructor(values: Array<any> = []) {
    this.length = 0;
    this.head = null;
    this.tail = null;
    values.forEach(value => this.add(value));
  }

  /* 添加元素 */
  add(value: any) {
    let curNode = new DoubleListItem(value);
    if (this.length === 0) {
      this.head = this.tail = curNode;
    } else {
      this.tail.next = curNode;
      curNode.pre = this.tail;
      this.tail = curNode;
    }
    this.length = this.length + 1;
  }

  /* 在链表头部插入 */
  prepend(value: any) {
    let curNode = new DoubleListItem(value);
    if (this.length === 0) {
      this.head = this.tail = curNode;
    } else {
      this.head.pre = curNode;
      curNode.next = curNode;
      this.head = curNode;
    }
    this.length = this.length + 1;
  }

  /* 打印元素 */
  print() {
    let tmpHead = this.head;
    let tmpValues = [];

    while (tmpHead) {
      tmpValues.push(tmpHead.value);
      tmpHead = tmpHead.next;
    }

    console.log('head -> tail: ', tmpValues.join(' -> '));

    let tmpTail = this.tail;
    tmpValues = [];

    while (tmpTail) {
      tmpValues.push(tmpTail.value);
      tmpTail = tmpTail.pre;
    }

    console.log('tail -> head: ', tmpValues.push(' -> '));
  }

  /* 遍历 */
  forEach(cb: (a: DoubleListItem, b: any) => any) {
    let tmp = this.head;
    while (tmp) {
      cb(tmp, tmp.value);
      tmp = tmp.next;
    }
  }
}
