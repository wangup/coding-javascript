var nums=[1,3,5,6],target=4

// 方法一：
/*var searchInsert = function(nums, target) {
    if (!nums||nums.length===0)
        return 0
    if (nums[0]>target)
        return 0
    if (nums[nums.length-1]<target){
        return nums.length
    }
    let left=0,right=nums.length-1
    while(left<right){/!*不能=*!/
        const mid=left+Math.floor((right-left)/2)
        if(nums[mid]<target){
            //搜索【mid+1,right】，先考虑右边区域
            left=mid+1
        }else{
            // 搜索【left,mid】,因为左边区的都有可能是返回值
            right=mid
        }
    }
    return left;
};*/

var searchInsert=function(nums,target){
    let len=nums.length
    if (len===0){
        return 0
    }
    if (nums[0]>target){
        return 0
    }
    if (nums[len-1]<target){
        return len
    }
    let left=0,right=len
    while (left<right){
        const mid=left+((right-left)>>1)
        if (nums[mid]===target){
            return mid
        }else if (nums[mid]<target){
        //    右边[mid+1，right)
            left=mid+1
        }else {
            //[left,mid)
            right=mid
        }
    }

    return nums[left]<target?left+1:left;
};

console.log(searchInsert(nums,target))