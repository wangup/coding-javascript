var nums = [5,7,7,8,8,8,8], target = 8
var searchRange = function(nums, target) {
    if (!nums)
        return 0
    let len=nums.length

    let res=new Array(2)
    res[0]=firstRange(nums,0,len,target)
    res[1]=lastRange(nums,0,len,target)
    return res
};


function firstRange(nums,left,right,target){

    while (left<right){
        const mid=left+((right-left)>>1)
        if(nums[mid]===target){
            if (mid>0&&nums[mid]===nums[mid-1]){
                right=mid
            }else {
                return mid
            }
        }else if (nums[mid]<target){
            left=mid+1
        }else {
            right=mid
        }
    }
    return -1
}

function lastRange(nums,left,right,target){

    while (left<right){
        const mid=left+((right-left)>>1)
        if(nums[mid]===target){
            if (mid<nums.length-1&&nums[mid]===nums[mid+1]){
                left=mid+1
            }else {
                return mid
            }
        }else if (nums[mid]<target){
            left=mid+1
        }else {
            right=mid
        }
    }
    return -1
}


console.log(searchRange(nums,target))