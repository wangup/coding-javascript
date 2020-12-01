var s= "25525511135"
function restoreIpAddresses(s){
    const len=s.length-1
    const path=[],result=[]
    dfs(s,len,0,4,path,result)
    return result
}
function dfs(s,len,begin,depth,path,result){
    if (len-begin<depth-1||3*depth-1<len-begin)
        return
    if (depth===0&&path.length===begin){
        result.push(path.join("."))
        return
    }

    for (let i=0;i<3;i++){
        const currentSegment=s.substring(begin,begin+i+1)
        if (Number(currentSegment)>255||(currentSegment.length>1&&currentSegment[0]==='0'))
            return
        path.push(currentSegment)
        dfs(s,len,begin+i+1,depth-1,path,result)
        path.pop()
    }
}
console.log(restoreIpAddresses(s))