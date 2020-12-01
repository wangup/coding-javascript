/*给定一棵二叉树，其中每个节点都含有一个整数数值(该值或正或负).
设计一个算法，打印节点数值总和等于某个给定值的所有路径的数量。
注意，路径不一定非得从二叉树的根节点或叶节点开始或结束，但是其方向必须向下(只能从父节点指向子节点方向)。
*/


/*总体思路是：以每个节点为起点，向下遍历树，当走过的路径和为sum时，更新res
* 1.Note:从根节点出发，也可以不从根节点出发  问题本质：求路径和
* 2.从根节点出发dsf()
* 3.不从根节点出发的情况dsf1()
* */

/*
var pathSum=function (root,sum) {
    if (!root)
        return 0
    return findpath(root,sum)+pathSum(root.left,sum)+pathSum(root.right,sum)
}

var findpath=function (node,sum) {
    if (!node)
        return 0
    let res=0
    if (sum===node.val)
        res++

        res+=findpath(node.left,sum-node.val)

        res+=findpath(node.right,sum-node.val)
    return res
}*/

var pathSum=function (root,sum) {
    if (!root)
        return null
    let count=0
    dfs1(root,sum,count)
    return count
}

var dfs1=function (node,sum,count) {
    if (!node)
        return null
    dfs(node,sum,count,0)
    dfs1(node.left,sum,count)
    dfs1(node.right,sum,count)
}
//根节点开始遍历
var dfs=function (root,sum,count,cursum) {
    if (!root)
        return null
    cursum+=root.val
    if (sum===cursum){
        count++
    }
    if (!root.left&&!root.right){
        return null
    }
    if (root.left){
        dfs(root.left,sum,count,cursum)
    }
    if (root.right){
        dfs(root.right,sum,count,cursum)
    }
}

console.log(pathSum([5,4,8,11,null,13,4,7,2,null,null,5,1],22))