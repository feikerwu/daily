import { List } from '.';

declare const global;

let list = new List();
beforeEach(() => {
  list = new List();
});

afterEach(() => {
  list = null;
});

global.console = {
  log: jest.fn()
};

test('List should has function add, prepend, print and forEach', () => {
  ['add', 'prepend', 'print', 'forEach'].forEach(func => {
    expect(typeof list[func] === 'function').toBeTruthy();
  });
});

test('list length', () => {
  list = new List(new Array(10));
  expect(list.length).toBe(10);
});

test('list print', () => {
  list = new List([1, 2]);
  list.print();
  expect(global.console.log).toHaveBeenCalledWith('1 -> 2');
});

test('list add', () => {
  list = new List();
  expect(list.head).toBe(null);
  list.add(1);
  expect(list.head.value).toBe(1);
  expect(list.head).toEqual(list.tail);
  expect(list.length).toEqual(1);
  list.add(2);
  expect(list.length).toEqual(2);
  expect(list.tail.value).toBe(2);
  expect(list.head.value).toBe(1);
  expect(list.head.next).toBe(list.tail);
});

test('list prepend', () => {
  expect(list.head).toBe(null);
  list.prepend(1);
  expect(list.head.value).toBe(1);
  list.prepend(2);
  expect(list.head.value).toBe(2);
  expect(list.length).toEqual(2);
});

test('list forEach', () => {
  let fn = jest.fn((a, b) => b + 1);
  list = new List([1, 2]);
  list.forEach(fn);

  expect(fn.mock.calls.length).toBe(2);
  expect(fn.mock.calls[0][0].value).toBe(1);
  expect(fn.mock.results[0].value).toEqual(2);
});
