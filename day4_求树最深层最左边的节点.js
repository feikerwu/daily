/**
 * 给定一颗树，求最深层的最左边节点的值
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/** 层序遍历
 *  用两个数组，一个用于存储当前行的节点，另一个用于存储下一层的节点，不断遍历
 * @param {TreeNode} root
 * @return {number}
 */
var findBottomLeftValue = function(root) {
    let currentLevelNodes = new Array()
    let nextLevelNodes = new Array()
    let res = root.val
    currentLevelNodes.push(root)

    while(currentLevelNodes.length) {
        let currentNode = currentLevelNodes.shift()
        currentNode.left && nextLevelNodes.push(currentNode.left)
        currentNode.right && nextLevelNodes.push(currentNode.right)

        if (!currentLevelNodes.length) {
            currentLevelNodes = nextLevelNodes
            res = nextLevelNodes.length ? nextLevelNodes[0] : res
            nextLevelNodes = []
        }
    }

    return res.val
}

