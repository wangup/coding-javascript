/*输入一棵二叉树和一个整数，打印出二叉树中节点值的和为输入整数的所有路径。
从树的根节点开始往下一直到叶节点所经过的节点形成一条路径。


套用回溯算法的思路
设定一个结果数组result来存储所有符合条件的路径
设定一个栈stack来存储当前路径中的节点
设定一个和sum来标识当前路径之和
从根结点开始深度优先遍历，每经过一个节点，将节点入栈
到达叶子节点，且当前路径之和等于给定目标值，则找到一个可行的解决方案，将其加入结果数组
遍历到二叉树的某个节点时有2个可能的选项，选择前往左子树或右子树
若存在左子树，继续向左子树递归
若存在右子树，继续向右子树递归
若上述条件均不满足，或已经遍历过，将当前节点出栈，向上回溯


回溯算法一般是先序遍历  回溯算法的核心：选择--判断--递归--撤销选择
选择某一节点--判断当前值是否为sum--递归--撤销选择
* */
/*var root=,sum=22*/

/*var pathSum=function (root,sum) {
    const temp=[]
    /!*const stack=[],cursum=0*!/
    if (root){
        pathSumCore(root,sum,0,[],temp)
    }
    return temp

}

var pathSumCore=function (root,sum,cursum,stack,temp) {
    stack.push(root.val)
    cursum+=root.val
    if(!root.right&&!root.left&&cursum===sum){
        temp.push(stack.slice(0))
    }
    if (root.left){
        pathSumCore(root.left,sum,cursum,stack,temp)
    }
    if (root.right){
        pathSumCore(root.right,sum,cursum,stack,temp)
    }
    stack.pop()
}*/




//方法二：
/*
1.按照前序遍历的顺序将每个节点放到栈中，每次将sum减少当前节点的val
2.判断是否到了叶子节点（叶子节点的左右子树均为null）
3.到了叶子节点若sum===0，则符合要求，放入res中，否则将当前叶子节点出栈
* */
var pathsum=function (root,sum) {
    const res=[]
    if (root){
        pathsumCore(root,sum,[],res)
    }
    return res
}

var pathsumCore =function (root,sum,stack,result) {
    if (!root)
        return
    //stack存放的是每条路径的数组
    stack.push(root.val)
    sum-=root.val
    //对于每一个节点都要判断，如果sum减为0并且为叶子节点（左右子树均为空）的时候满足要求，就存入结果数组中
    if (!root.left&&!root.right&&sum===0){
        //存放的是stack的拷贝，否则stack会随着元素的变化而变化
        result.push([...stack])
    }
    if (root.left){
        pathsumCore(root.left,sum,stack,result)
    }
    if (root.right){
        pathsumCore(root.right,sum,stack,result)
    }

    stack.pop()//Note :一定要弹出当前元素，这是回溯算法关键的一点
}
console.log(pathsum([5,4,8,11,null,13,4,7,2,null,null,5,1],22))