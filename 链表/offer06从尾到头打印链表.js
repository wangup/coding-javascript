function ListNode(val){
    this.val=val;
    this.next=null;
}

var reversePrint = function(head) {

};

function ArrayConvertLink(arr){
    let link=new ListNode(arr.shift()),temp=link
    while (arr.length){
        temp.next=new ListNode(arr.shift())
        temp=temp.next
    }
    return link
}

function LinkConvertArray(link){
    let arr=[]
    while (link){
        arr.push(link.val)
        link=link.next
    }
    return arr
}

const head=[1,3,2]
const link=ArrayConvertLink(head)
const res=reversePrint(link)
const arr=LinkConvertArray(res)
console.log(arr)