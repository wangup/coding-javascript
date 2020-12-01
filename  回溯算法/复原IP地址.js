var s= "25525511135"
function restoreIpAddresses(s){
    let len=s.length;
    let res=[]
    if (len>12||len<4)
        return res
    let path=new Array(4)/*/!*记录从根节点到叶子节点的一个路径*!/*/
    // begin:截取IP段的起始位置，res :记录结果集的变量，常规变量
    dfs(s,len,0,4,path,res)

    return res
}

// 需要一个变量记录还有多少段没被分割：residue
function dfs(s,len,begin,residue,path,res){
    // 到了字符的最后位置且0段没被分割
    if(begin===len){
        if (residue===0){
            res.push(path.join("."))
            return
        }
    }

    for (let i=begin;i<begin+3;i++){
        if (i>=len)
            break
        if (residue*3<len-i){
            continue
        }

        if (judgeIpSegment(s,begin,i)){
            let currentIpSegment=s.substring(begin,i+1)
            path.push(currentIpSegment)
            dfs(s,len,i+1,residue-1,path,res)
            path.pop()
        }
    }
}

function judgeIpSegment(s,left,right){
    let len=right-left+1
    if(len>1&&s[left]==='0'){
        return false
    }

    let res=0
    while(left<=right){
        res=res*10+s[left]-'0'
        left++
    }

    return res<=255&&res>=0
}
console.log(restoreIpAddresses(s))
