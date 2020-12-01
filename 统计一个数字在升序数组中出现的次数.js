/*
统计一个数字在升序数组中出现的次数*/

function GetNumberOfK(data, k)
{
    // write code here
    if(data.length===0)
        return 0

    let start=0,end=data.length

    //下边界
    while (start<end){
        const mid=start+((end-start)>>1)
        if (data[mid]<k){
            start=mid+1
        }else{
            end=mid
        }
    }
    let len_start=start

    start=0,end=data.length
    //上边界
    while (start<end){
        const mid=start+((end-start)>>1)
        if (data[mid]<=k){
            start=mid+1
        }else{
            end=mid
        }
    }
    let len_end=end

    return len_end-len_start
}

