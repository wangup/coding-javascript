
function ListNode(val) {
    this.val=val;
    this.next=null;
}
var deleteNode = function(head, val) {

    /*//方法一
    let pre=new ListNode()
    pre.next=head
    let cur=head
    if(cur.val===val){
        pre.next=cur.next
        cur=cur.next
        return cur
    }
    while(cur){
        if (cur.val===val){
            pre.next=cur.next
        }
        pre=cur
        cur=cur.next
    }

    return head*/

//    方法二(Good)
    let pre=new ListNode()
    pre.next=head
    let cur=pre
    while(cur.next){
        if(cur.next.val===val){
            cur.next=cur.next.next
             break/*如果没有break，删除最后节点会报错*/
        }
        cur=cur.next
    }
    return pre.next

};

// 将数组转换为单链表
function genNodeLink(arr){
    let link=new ListNode(arr.shift()), temp=link
    while(arr.length){
        temp.next=new ListNode(arr.shift())
        temp=temp.next
    }
    return link
}

//将链表转换为数组
function LinkConvertArr(link){
    let arr=[]
    while(link){
        arr.push(link.val)
        link=link.next
    }
    return arr
}
const head=[4,5,1,9],val=9
const link=genNodeLink(head)
const res=deleteNode(link,val)
const arr=LinkConvertArr(res)
console.log(arr)
