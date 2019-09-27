import { DoubleList } from '.';

declare const global;

let list: DoubleList;

beforeEach(() => {
  list = new DoubleList();
});

global.console = {
  log: jest.fn()
};

test('length', () => {
  list = new DoubleList([1, 2, 3]);
  expect(list.length).toEqual(3);
});

test('init', () => {
  expect(list.head).toBe(null);
  expect(list.tail).toBe(null);
  expect(list.length).toEqual(0);
});

test('print', () => {
  list.print();
  list = new DoubleList([1, 2]);
});

test('add', () => {
  list.add(1);
  expect(list.length).toEqual(1);
});

test('prepend', () => {
  list.prepend(2);
  expect(list.length).toEqual(1);
  expect(list.tail === list.head && list.head.value === 2).toBeTruthy();
});

test('forEach', () => {
  let fn = jest.fn((a, b) => b + 1);
  list = new DoubleList([1, 2]);
  list.forEach(fn);

  expect(fn.mock.calls.length).toBe(2);
  expect(fn.mock.calls[0][0].value).toBe(1);
  expect(fn.mock.results[0].value).toEqual(2);
});
