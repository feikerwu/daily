/**
 * 前序遍历
 * @param root 根节点
 * @param traval 对每个节点需要做的周游行为
 */
import { treeNode } from './tree';

export default function preTraval(root: treeNode, travel: Function): void {
  if (!root) {
    return;
  }

  travel(root.value);

  preTraval(root.left, travel);
  preTraval(root.right, travel);
}
