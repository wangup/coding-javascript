function mergeSort(nums) {
    if (nums.length<2)
        return nums
    let mid=Math.floor(nums.length/2)

    let left=nums.slice(0,mid)
    let right=nums.slice(mid)
    let res=[]

    return merge(mergeSort(left),mergeSort(right),res)
}

function merge(left,right,res) {
    while (left.length&&right.length){
        if(left[0]<right[0]){
            res.push(left.shift())
        }else {
            res.push(right.shift())
        }
    }
    /*while (left.length){
        res.push(left.slice())
    }
    while (right.length){
        res.push(right.slice())
    }
    return res*/
    /*另一种方法*/
    return res.concat(left).concat(right)
}

var nums=[3,4,5,2,9,6]
console.log(mergeSort(nums))


