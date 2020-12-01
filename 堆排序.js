var len     //因为声明的多个函数都需要数据长度，所以把len设置为全局变量
var sortArray = function(nums) {

    //构建大顶堆
    buildMaxHeap(nums)

    for (var i=nums.length-1;i>0;i--){
        //交换第一个和最后一个
        swap(nums,0,i)
        len--
        //调整大顶堆
        heapify(nums,0)
    }

    return nums
}

function heapify(nums,i){

    var left=2*i+1,right=2*i+2,target=i

    if (left<len&&nums[left]>nums[target]){
        target=left
    }

    if (right<len&&nums[right]>nums[target]){
        target=right
    }

    if (target!=i){//和最大节点比较

        //互换到最大子节点
        swap(nums,i,target)
        //重建最大节点代表的子树
        heapify(nums,target)

    }

}

function swap(nums,i,j) {

    let temp=nums[i]
    nums[i]=nums[j]
    nums[j]=temp

}

function buildMaxHeap(nums) {

    len=nums.length
    for (var i=Math.floor(len/2);i>=0;i--){
        heapify(nums,i)
    }

}