var numbers=[3,4,5,1,2]
/*解题思路：
* 1.以numbers数组的最后一个数字为基准
2.中间值小于基准，则往左边找，right=mid
3.中间值大于基准，则往右边找，left=mid+1
4.若中间值等于基准，则基准往前移一位，right=right-1*/
function minArray(numbers){
    if (numbers.length===0)
        return 0
    //right很重要，是len-1
    let left=0,right=numbers.length-1
    let target=0
    //循环条件很重要，终止条件是left===right，不是left>right，是因为right=mid
    while (left<right){
        /*const mid=left+(right-left)>>1*/
        const mid=left+Math.floor((right-left)/2)
        target=numbers[right]
         if (numbers[mid]<target){
             right=mid
         }else if (numbers[mid]>target){
             left=mid+1
         }else{
             right=right-1
         }
    }
    return numbers[left]
}
console.log(minArray(numbers))