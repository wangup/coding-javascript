/*请设计一个函数，用来判断在一个矩阵中是否存在一条包含某字符串所有字符的路径。
路径可以从矩阵中的任意一格开始，每一步可以在矩阵中向左、右、上、下移动一格。
如果一条路径经过了矩阵的某一格，那么该路径不能再次进入该格子。
例如，在下面的3×4的矩阵中包含一条字符串“bfce”的路径（路径中的字母用加粗标出）。
*/
/*
* 思路：先遍历board，找到起始点
* 1.递归的时候先考虑终止条件
* 终止条件：如果board和word当前位置不同，则false；如果wordIndex（当前位置）和board长度一样，返回true
* 递归左右上下路径，都满足，则true；不满足则向上回溯
* 如果回溯到最外层，则当前字符匹配失败，将当前字符标记为没有走过
*
*
* dfs(){

    // 第一步，检查下标是否满足条件

    // 第二步：检查是否被访问过，或者是否满足当前匹配条件

    // 第三步：检查是否满足返回结果条件

    // 第四步：都没有返回，说明应该进行下一步递归
    // 标记
    dfs(下一次)
    // 回溯
} */
var exist = function(board, word) {

    let row=board.length
    let column=board[0].length
    let wordIndex=0

    for (let i=0;i<row;i++){
        for (let j=0;j<column;j++){
            if (exitCore(board,word,i,j,wordIndex)){
                return true
            }
        }
    }

    return false
}

var exitCore = function(board,word,i,j,wordIndex){

    if (board[i][j]!=word[i][j]){
        return false
    }


    if (word.length-1===wordIndex){
        return true
    }

    let temp=board[i][j]
    board[i][j]=0
    wordIndex++

    if ((i>0&&exitCore(board,word,i-1,j,wordIndex))
        ||(j>0&&exitCore(board,word,i,j-1,wordIndex))
        ||(board.length-1>i&&exitCore(board,word,i+1,j,wordIndex))
        ||(board[0].length-1>j&&exitCore(board,wordIndex,i,j+1,wordIndex))){
            return true
    }

    //如果都不通的话，则回溯到上一状态
    board[i][j]=temp

    return false
}