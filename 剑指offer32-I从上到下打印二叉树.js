/*从上往下打印出二叉树的每个节点，同层节点从左至右打印。
*
*
* 1.stack存储当前路径，res存储结果数组
* 2.在打印第一行时，将左右孩子存入stack里
* 3.从stack.shift()取第一个节点存入res*/
function PrintFromTopToBottom(root)
{
    // write code here
    let res=[]
    let stack=[]
    stack.push(root)
    while(stack.length>0){
        let node=stack.shift()
        res.push(node)
        if (node.left){
            stack.push(node.left)
        }
        if (node.right){
            stack.push(node.right)
        }
    }
    return res
}