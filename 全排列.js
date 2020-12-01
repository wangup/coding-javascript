var nums=[1,2,3]
function permute(nums){
    if (nums.length===0)
        return -1;
    let visited=new Array(nums.length).fill(false);
    let res=[],stack=[],len=nums.length;
    permuteCore(nums,visited,res,stack);
    return [...new Set(res)];
}

function permuteCore(nums,visited,res,stack){
    if (nums.length===0)
        return -1;
    if (nums.length===stack.length){
        res.push([...stack]);
        return ;
    }
    // 不能设置为i=start，i<nums.length,因为递归回溯的时候都与i有关，会影响结果
    for (let i=0;i<nums.length;i++){
        if (!visited[i]){
            stack.push(nums[i]);
            visited[i]=true;
            permuteCore(nums,visited,res,stack);
            visited[i]=false;
            stack.pop();
        }
    }
}
/*function permute(nums){
    let set = new Set();
    let res=[];
    var permuteCore=function (tempPath,depth) {
      if (nums.length===0)
          return -1;
      if (nums.length===tempPath.length){
          res.push(tempPath.slice());
          return ;
      }
      // depth与nums数组没有直接关系，所以也可以去掉这个
      for (let i=0;i<nums.length;i++){
          if (!set.has(i)){
              tempPath.push(nums[i])
              set.add(i)
              permuteCore(tempPath,depth+1)
              tempPath.pop()
              set.delete(i);
          }
      }
    };
    permuteCore([],0);
    return res;
}*/
console.log(permute(nums))