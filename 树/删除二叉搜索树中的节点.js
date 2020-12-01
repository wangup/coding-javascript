var root=[5,3,6,2,4,null,7],key=3
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
function deleteNode(root,key){
    if (root){
        let head=new TreeNode()
        head.left=root

        let finded=findNodePos(head,key)
        if (finded){
            // 已经找到，则看待删除的节点是否有左右孩子，
            // 1.没有左右孩子，则清空即parent[pos]=null
            // 2.只有左孩子或者右孩子，则把该孩子赋值给parent[pos]
            /*3.有左右孩子，（比较复杂）,把待删除节点的左右子节点分别称为 targetLeft 和 targetRight，先找到targetRight的最左子节点，这个子节点一定在右子树中最小，但是在左子树中最大。然后把 parent[pos] 赋值为 targetRight，
            再把 targetRight的最左下角子节点的 left 赋值成原来的 targetLeft 即可。*/

            let {parent,pos}=finded
            let target=parent[pos]
            let targetLeft=target.left
            let targetRight=target.right

            if(!targetLeft&&!targetRight){
                parent[pos]=null
            }else if(!targetLeft){
                parent[pos]=targetRight
            }else if (!targetRight){
                parent[pos]=targetLeft
            }else {
                parent[pos]=targetRight
                let lastLeft=findLastLeft(targetRight)
                targetLeft.left=lastLeft
            }

        }

        return head.left

    }
}

// 通过递归找到目标节点的父节点parent，和目标节点的位置pos:left或者right ，方便后续操作
function findNodePos(node,key){
    if(!node){
        return false;
    }
    if (node.left&&node.left.val===key){
        return {
            parent:node,
            pos:"left",
        }
    }else if (node.right&&node.right.val===key){
        return {
            parent: node,
            pos: "right"
        }
    }else{
        return findNodePos(node.left,key)||findNodePos(node.right,key)
    }
}

// 找到该节点的左节点
function findLastLeft(node){
    if (!node.left){
        return node
    }
    return findLastLeft(node.left)
}

console.log(deleteNode(root,key))
