/*输入一个字符串,按字典序打印出该字符串中字符的所有排列。
例如输入字符串abc,
则按字典序打印出由字符a,b,c所能排列出来的所有字符串abc,acb,bac,bca,cab和cba。*/


var permutation = function (s) {
    var res = new Set();
    var path = [];
    var visited = [];
    dfsHelper([...s], path, res,visited);
    return Array.from(res);
};

function dfsHelper(arr, path, res,visited) {
    if (arr.length === path.length) { //说明走到底(叶子节点)
        res.add(path.join(''))
        return;
    }

    for (let i = 0; i < arr.length; i++) {
        if(visited[i]){
            continue;
        }
        visited[i] = true;
        //进入下一层
        path.push(arr[i]);
        dfsHelper(arr, path, res,visited);
        path.pop();
        visited[i] = false;
    }

}
