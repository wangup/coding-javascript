/*定义一个函数，输入一个链表的头节点，反转该链表并输出反转后链表的头节点。
示例:
输入: 1->2->3->4->5->NULL
输出: 5->4->3->2->1->NULL
*/
function ListNode(val){
    this.next=null;
    this.val=val;
}
var reverseList = function(head){

    if (!head||!head.next){
        return head
    }
    let pre=null
    let cur=head
    while (cur){
        let temp=cur.next
        cur.next=pre
        pre=cur
        cur=temp
    }
    return pre
};
const n1=new ListNode(1)
const n2=new ListNode(2)
const n3=new ListNode(3)
const n4=new ListNode(4)
const n5=new ListNode(5)

n1.next=n2
n2.next=n3
n3.next=n4
n4.next=n5
n5.next=null
console.log(reverseList(n1))