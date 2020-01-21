/*
 * @lc app=leetcode.cn id=99 lang=javascript
 *
 * [99] 恢复二叉搜索树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function(root) {
  let a, b, pre;
  inorder(root)
  let term = a.val
  a.val = b.val
  b.val = term

  function inorder(root) {
    if (root === null) {
      return
    }
    inorder(root.left)
    // 用两个全局变量记录被变化位置的两个节点
    if (pre && pre.val > root.val) {
      if (!a) {
        a = pre
      }
      b = root
    }
    pre = root
    inorder(root.right)
  }
};

// @lc code=end

