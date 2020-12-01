var root=[3,9,20,null,null,15,7]
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

//递归方法DFS
/*function levelOrder(root) {
    if(!root)
        return []
    let res=[]
    helper(root,res,0)
    return res

};

 function helper(root, result, depth) {
    if (!root) return;
    if (!result[depth]) {/!*不能全等===*!/
        result[depth] = [];
    }
    result[depth].push(root.val);
    helper(root.left, result, depth + 1);
    helper(root.right, result, depth + 1);
}*/


//BFS遍历
function levelOrder(root){
    if (!root)
        return []/*一定要加[]，代表root为空时是空数组*/
    let queue=[],res=[]
    queue.push(root)
    while (queue.length>0){
       let len=queue.length
        let level=[]
        for(let i=0;i<len;i++){
            const node=queue.shift()
            level.push(node.val)
            if (node.left){
                queue.push(node.left)
            }
            if (node.right){
                queue.push(node.right)
            }
        }
        res.push(level.slice())
    }
    return res
}



console.log(levelOrder(root))