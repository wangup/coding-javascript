var data=[1,2,3,3,3,3,4,5],k=3
function GetNumberOfK(data,k){
    if (data && data.length>0 && k!==null){
        let left=GetFirstK(data,k,0,data.length-1)
        let right=GetLastK(data,k,0,data.length-1)
        if (left!==-1&&right!==-1)
        return right-left+1
    }
    return 0
}

function GetFirstK(data,k,start,end){
    if (start>end)
        return -1
    const mid=start+Math.floor((end-start)/2)
    if (data[mid]===k){
        if (data[mid-1]!==k){
            return mid
        }else {
            return GetFirstK(data,k,start,mid-1)
        }
    }else if (data[mid]<k){
        return GetFirstK(data,k,mid+1,end)
    }else {
        return GetFirstK(data,k,start,mid-1)
    }

}

function  GetLastK(data,k,start,end) {
    if(start>end)
        return -1
    const mid=start+Math.floor((end-start)/2)
    if (data[mid]===k){
        if (data[mid+1]!==k){
            return mid
        }else {
            return GetLastK(data,k,mid+1,end)
        }
    }else if (data[mid]<k){
        return GetLastK(data,k,mid+1,end)
    }else {
        return GetLastK(data,k,start,mid-1)
    }
}

console.log(GetNumberOfK(data,k))