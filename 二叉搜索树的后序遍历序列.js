var postorder=[1,6,3,2,5]
var verifyPostorder = function(postorder) {
    if(!postorder)
        return false
    let res=[]
    if(postorder){
        verifyPostorderCore(postorder,res)
        for(var i=0;i<postorder.length;i++){
            if(postorder[i]!=res[i]){
                return false
            }else{
                continue
            }
        }
        return true
    }

};

var verifyPostorderCore = function(postorder,res){
    let stack=[]
    if(postorder)
        stack.push(postorder)
    while(stack.length>0){
        const node=stack.pop()
        res.unshift(node.val)
        if(node.left)
            stack.push(node.left)
        if(node.right)
            stack.push(node.right)
    }
    return res
}

console.log(verifyPostorder(postorder))