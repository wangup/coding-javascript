var s = 7, nums = /*[2,3,1,2,4,3]*/[1,7,7];
/*给定一个含有 n 个正整数的数组和一个正整数 s ,
找出该数组中满足其和 ≥ s 的长度最小的 连续 子数组，并返回其长度。
如果不存在符合条件的子数组，返回 0。
*/

/*解题思路：
**/
function minSubArrayLen(s,nums) {

    if (!nums||nums.length===0)
        return 0;

    let left=0,right=0,sum=0,minlen=Number.MAX_SAFE_INTEGER;
    while (right<nums.length){
        sum+=nums[right++]
        while (sum>=s){
            sum-=nums[left++]
            minlen=Math.min(minlen,right-left+1)
        }
    }

    return minlen===Number.MAX_SAFE_INTEGER?Number.MAX_SAFE_INTEGER:minlen;
}

console.log(minSubArrayLen(s,nums));