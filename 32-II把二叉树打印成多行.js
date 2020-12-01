/*从上到下按层打印二叉树，同一层结点从左至右输出。每一层输出一行。*/

var levelOrder = function(root) {
    if (!root) {
        return [];
    }
    let res=[]//存储结果数组的
    let nowstack=[root]//设置当前层

    while(nowstack.length>0){
        let nextstack=[]//下一层数组
        let nowres=[]//当前层的值
        for(var i=0;i<nowstack.length;i++){
            nowres.push(nowstack[i].val)
            if (nowstack[i].left){
                nextstack.push(nowstack[i].left)
            }
            if (nowstack[i].right){
                nextstack.push(nowstack[i].right)
            }
        }
        res.push([...nowres])
        nowstack=nextstack
    }

    return res
};