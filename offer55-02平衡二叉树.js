/*输入一棵二叉树的根节点，判断该树是不是平衡二叉树。
如果某二叉树中任意节点的左右子树的深度相差不超过1，那么它就是一棵平衡二叉树。
 后序遍历+剪枝
 * 先递归左节点，若左节点为-1则剪枝
 * 递归右节点，为-1则剪枝
 * 深度若为不大于1，则深度为。。。，否则剪枝为-1
 */

var isBalanced=function (root) {
    return balanced(root)===-1?false:true
}

var balanced=function (node) {
    if (!node)
        return 0
    let left=balanced(node.left)
    if (left===-1)
        return -1
    let right=balanced(node.right)
    if (right===-1)
        return -1
    return Math.abs(left-right)<2?Math.max(left,right)+1:-1
}

console.log(isBalanced([3,9,20,null,null,15,7]))