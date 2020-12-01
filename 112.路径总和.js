
var hasPathSum=function(root,sum){
    /*方法一：DFS
    if(!root){
        return false
    }
    sum-=root.val
    if (!root.right&&!root.left&&sum===0){
        return true
    }
    return hasPathSum(root.left,sum)||hasPathSum(root.right,sum)*/

    /*二：回溯 利用 DFS 找出从根节点到叶子节点的所有路径，
    只要有任意一条路径的 和 等于sum，就返回 True。*/
    /*if (!root)
        return false
    return dfs(root,sum,0)
    function dfs(root,sum,cursum) {
        if(!root)
            return false
        cursum+=root.val
        if (!root.right&&!root.left&&sum===cursum){
            return true
        }
        let left_flag=false,right_flag=false
        if (root.left){
            left_flag=dfs(root.left,sum,cursum)
        }
        if (root.right){
            right_flag=dfs(root.right,sum,cursum)
        }
        return left_flag||right_flag
    }*/

    /*方法三：栈*/
    if (!root)
        return false
    let stack=[]
    return findpath(root,sum,stack)
    function findpath(root,sum,stack) {
        if (!root)
            return false

        stack.push({node:root,val:root.val})

        while (stack.length>0){
            const {node,cursum}=stack.pop()
            if (!node.left&&!node.right&&cursum===sum){
                return true
            }
            if (node.left){
                stack.push({node:node.left,cursum:cursum+node.left.val})
            }
            if (node.right){
                stack.push({node:node.right,cursum:cursum+node.right.val})
            }
        }
        return false
    }


}
console.log(hasPathSum([5,4,8,11,null,13,4,7,2,null,null,null,1],22))