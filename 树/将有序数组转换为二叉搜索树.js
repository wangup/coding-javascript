var nums=[-10,-3,0,5,9]
function TreeNode(val) {
     this.val = val;
     this.left = this.right = null;
}

function sortedArrayToBST(nums){
    if (!nums||nums.length===0)
        return null;
    let len=nums.length;
    let mid=Math.floor(len/2);
    let root=new TreeNode(nums[mid]);
    root.left=sortedArrayToBST(nums.slice(0,mid));
    root.right=sortedArrayToBST(nums.slice(mid+1));
    return root;
}
console.log(sortedArrayToBST(nums))