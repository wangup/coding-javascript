/*输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历的结果。
如果是则返回true,否则返回false。
假设输入的数组的任意两个数字都互不相同。*/
function VerifySquenceOfBST(sequence)
{
    // write code here
    if (sequence&&sequence.length>0){
        return helperVerify(sequence,0,sequence.length-1)
    }

}

function helperVerify(sequence,start,end){
    if (start>=end){
        return true
    }
    let index=sequence[end]
    for (var i=start;i<end;i++){
        if (sequence[i]>index){
            break
        }
    }

    for (let j=i;j<end;j++){
        if (sequence[j]<index){
            return false
        }
    }

    return helperVerify(sequence,start,i-1)&&helperVerify(sequence,i,end-1)
}

console.log(VerifySquenceOfBST([1,3,2,6,5]))