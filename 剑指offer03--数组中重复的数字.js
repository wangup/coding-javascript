/*
找出数组中重复的数字。
在一个长度为 n 的数组 nums 里的所有数字都在 0～n-1 的范围内。数组中某些数字是重复的，但不知道有几个数字重复了，也不知道每个数字重复了几次。请找出数组中任意一个重复的数字。
*/

var nums=[2, 3, 1, 0, 2, 5, 3]
var findRepeatNumber = function (nums) {
    let hash = new Array(nums.length).fill(0)
    let len = nums.length
    for(var i = 0;i<len;i++){
        hash[nums[i]]++
        if(hash[nums[i]]>1){

            return nums[i]
        }
    }
    return
}
console.log(findRepeatNumber(nums))