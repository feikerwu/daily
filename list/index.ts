/* 列表节点 */
class ListItem {
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
class List {
  head: ListItem;
  tail: ListItem;
  constructor(value: any) {
    this.head = new ListItem(value);
    this.tail = this.head;
  }

  /** 尾部添加 */
  add(value: any) {
    let curNode: ListItem = new ListItem(value);
    this.tail.next = curNode;
    this.tail = curNode;
  }

  /* 头部追加 */
  prepend(value: any) {
    let curNode: ListItem = new ListItem(value);
    curNode.next = this.head;
    this.head = curNode;
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
    }
  }
}
