function ListNode(x){
    this.val = x;
    this.next = null;
}

function deleteDuplication(pHead)
{
    // write code here
    if (!pHead)
        return pHead
    let head=new ListNode(0)
    head.next=pHead
    let pre=head
    let cur=head.next
    while (cur){
        if (cur.next&&cur.next.val===cur.val){
            /*找到最后相同的结点*/
            while (cur.next&&cur.next.val===cur.val){
                cur.next=cur.next.next
            }
            //找到不相同的结点
            pre=cur
            cur=cur.next
        }else {
            pre=cur
            cur=cur.next
        }
    }
    return head.next
}

console.log(deleteDuplication([1,2,3,3,4,4,5]))