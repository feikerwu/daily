/**
 * 给一颗二叉树，和一个值，检查二叉树中的是否存在一条路径，
 * 这条路径上所有节点的值加起来等于给定的那个初始值。
 * 例如下面的二叉树，如果初始值是22，那么存在一条路径 5 -> 4-> 11 -> 2
 *        5
         / \
        4   8
       /   /  \
      11  13   4
     /  \       \
    7    2       1
 */

import { treeNode } from './tree';
import buildTree from './buildTree';

function hasSumPath(root: treeNode, sum: number, travel: Function): boolean {
  if (!root) {
    return false;
  }

  if (root && !root.left && !root.right) {
    travel(root.value);
    return root.value === sum;
  }

  if (root.value > sum) {
    return false;
  }

  travel(root.value);

  return (
    hasSumPath(root.left, sum - root.value, travel) ||
    hasSumPath(root.right, sum - root.value, travel)
  );
}

// const preTreeSeq: number[] = [5, 4, 11, 7, 2, 8, 13, 4, 1];
// const midTreeSeq: number[] = [7, 11, 2, 4, 5, 13, 8, 4, 1];

const pre: number[] = [5, 4, 11, 7, 2, 8, 13, 4, 1];
const mid: number[] = [7, 11, 2, 4, 5, 13, 8, 4, 1];

const travelPath: Array<number> = [];

hasSumPath(buildTree(pre, mid), 27, value => travelPath.push(value));

console.log(travelPath);
