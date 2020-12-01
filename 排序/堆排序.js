var nums = [5,1,1,2,0,0]
function sortArray(nums){
    // 构建堆
    buildMaxHeap(nums);
    //将最后一个数和第一个数交换
    let len=nums.length
    for (let i=nums.length-1;i>0;i--){
        swap(nums,0,i);
        len--;
        // 调整大顶堆
        adjustHeap(nums,0,len);
    }
    return nums;
}

function buildMaxHeap(nums){
    let len=nums.length
    for (var i=Math.floor(len/2);i>=0;i--){
        adjustHeap(nums,i,len);
    }
}

function adjustHeap(nums,i,len) {
    let left=2*i+1,right=2*i+2,target=i;
    if(left<len&&nums[left]>nums[target]){
        target=left;
    }
    if (right<len&&nums[right]>nums[target]){
        target=right;
    }
    // 如果target不等于nums[i]，则交换两个数，再调整二叉树
    if (target!==i){
        swap(nums,target,i);
        adjustHeap(nums,target,len);/*很重要，是target，因为target是交换后小的数字下标，需要重构这个*/
    }
}

function swap(nums,i,j){
    let temp=nums[i];
    nums[i]=nums[j];
    nums[j]=temp;
}

console.log(sortArray(nums))