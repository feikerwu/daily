/* 列表节点 */
export class ListItem {
  next: ListItem | null;
  value: any;
  constructor(value: any) {
    this.value = value;
    this.next = null;
  }
}

/**
 * 列表
 */
export class List {
  head: ListItem;
  tail: ListItem;
  length: number;
  constructor(values?: Array<any>) {
    this.length = 0;
    this.head = null;
    this.tail = null;

    if (values) {
      this.length = values.length;
      values.forEach(item => {
        this.add(item);
      });
    }
  }

  /** 尾部添加 */
  add(value: any) {
    let curNode: ListItem = new ListItem(value);
    if (this.head && this.tail) {
      this.tail.next = curNode;
      this.tail = curNode;
    } else {
      this.head = curNode;
      this.tail = curNode;
    }
    this.length = this.length + 1;
  }

  /* 头部追加 */
  prepend(value: any) {
    let curNode: ListItem = new ListItem(value);
    if (this.head) {
      curNode.next = this.head;
      this.head = curNode;
    } else {
      this.head = curNode;
      this.tail = curNode;
    }
    this.length = this.length + 1;
  }

  /* 打印列表 */
  print() {
    let tmp = this.head;
    let values: any[] = [];
    while (tmp) {
      values.push(tmp.value);
      tmp = tmp.next;
    }
    console.log(values.join(' -> '));
  }

  /* 遍历 */
  forEach(cb: (a: ListItem, b: any) => any) {
    let tmp = this.head;
    while (tmp) {
      cb(tmp, tmp.value);
      tmp = tmp.next;
    }
  }
}
