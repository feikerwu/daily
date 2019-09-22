class DoubleListItem {
  pre: DoubleListItem | null;
  next: DoubleListItem | null;
  value: any;
}

class DoubleList {
  head: DoubleListItem;
  tail: DoubleListItem;
  length: number;

  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }
}
