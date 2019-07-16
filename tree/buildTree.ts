/**
 * 根据前序遍历和中序遍历构建一个二叉树
 * @param preTreeSeq 前序遍历
 * @param midTreeSeq 中序遍历
 *
 */

import { treeNode } from './tree';
export default function buildTree(
  preTreeSeq: number[],
  midTreeSeq: number[]
): treeNode {
  if (preTreeSeq.length === 0) {
    return null;
  }

  const root: treeNode = {
    left: null,
    right: null,
    value: null
  };

  const curRootValue = preTreeSeq[0];
  root.value = curRootValue;

  const rootIndexInMid = midTreeSeq.indexOf(curRootValue);

  const midLeftSeq: Array<number> = midTreeSeq.slice(0, rootIndexInMid);
  const midRightSeq: Array<number> = midTreeSeq.slice(
    rootIndexInMid + 1,
    midTreeSeq.length
  );

  const preLeftSeq: Array<number> = preTreeSeq.slice(1, midLeftSeq.length + 1);
  const preRightSeq: Array<number> = preTreeSeq.slice(
    midLeftSeq.length + 1,
    preTreeSeq.length
  );

  root.value = curRootValue;
  root.left = buildTree(preLeftSeq, midLeftSeq);
  root.right = buildTree(preRightSeq, midRightSeq);

  return root;
}
