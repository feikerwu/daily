import { flat } from './flat';

test('flat', () => {
  let a = [1, 2];
  expect(flat(a)).toEqual([1, 2]);

  let b = [1, [2, 3], [4]];
  expect(flat(b)).toEqual([1, 2, 3, 4]);

  let c = [1, [2, 3], [[4]], [[[5, 6], 7], 8], 9];
  expect(flat(c)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
});
