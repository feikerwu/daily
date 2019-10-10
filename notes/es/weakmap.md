### WeakMap

#### why WeakMap

js 中的 Map 是通过两个数组来实现的，一个数组存储 key，一个数组存储 value, 当需要添加一对 k/v 时候，在 key 数组和 value 数组中分别 push。使用 js 的 Map 有以下两个问题:

1. 需要获取值时，先从 key 数组根据键名拿到下标，再根据下标在 value 数组内拿到相应值, 时间开销是 O(n)
2. 由于是通过两个数组实现，所以存在内存泄露问题

#### 使用 WeakMap 注意点

1. WeakMap 的 key 必须为一个对象
2. WeakMap 的 key 不可遍历，因为当 key 对象没有被引用的时候，key 会被内存销毁
