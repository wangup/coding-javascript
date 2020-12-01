/*首先找到A树中和B树根节点相同的节点
从此节点开始，递归AB树比较是否有不同节点


*/
function HasSubtree(pRoot1, pRoot2)
{
    // write code here
    if(!pRoot1||!pRoot2)
        return false
    let res=false
    //如果PRoot1中匹配到了与PRoot2的根节点一样的值
    if (pRoot1.val===pRoot2.val){
        res=isHasSubTree(pRoot1,pRoot2)
    }
    // 如果匹配不到，A 往左
    if (!res){
        res=HasSubtree(pRoot1.left,pRoot2)
    }
    // 如果匹配不到，A 往右
    if (!res){
        res=HasSubtree(pRoot1.right,pRoot2)
    }

    return res
}

function isHasSubTree(A,B){
    //B遍历完了，true
    if(!B){
        return true
    }
    //如果 B 还有，但 A 遍历完了，那 B 剩下的就没法匹配了，false
    if(!A){
        return false
    }
    //A和B的值不等，false
    if(A.val!=B.val)
        return false
    return isHasSubTree(A.left,B.left)&&isHasSubTree(A.right,B.right)
}


console.log(HasSubtree([1,2,3],[3,1]))