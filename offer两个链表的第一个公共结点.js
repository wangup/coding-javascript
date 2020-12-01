function FindFirstCommonNode(pHead1, pHead2)
{
    // write code here
    if(!pHead1||!pHead2){
        return null
    }

    let len1=0,len2=0
    let h1=pHead1,h2=pHead2

    while (pHead1){
        len1++
        pHead1=pHead1.next
    }

    while (pHead2){
        len2++
        pHead2=pHead2.next
    }

    let len3=len1-len2>0?len1-len2:len2-len1
    let long=len1>len2?h1:h2
    let short=len1<len2?h1:h2
    for (var i=0;i<len3;i++){
        long=long.next
    }

    while(long&&short&&long!=short){
        long=long.next
        short=short.next
    }

    let common=long
    return common

}