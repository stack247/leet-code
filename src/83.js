/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var deleteDuplicates = function(head) {
    // https://leetcode.com/problems/remove-duplicates-from-sorted-list/discuss/1648464/Faster-than-99.82-or-Easy-method
    /*
    let node = head;
    while(node && node.next) {
        if(node.val === node.next.val)
            node.next = node.next.next;
        else
            node = node.next;
    }
    return head;
    */
    
    let r = null, s;
    while (head != null) {
        let n = new ListNode(head.val);
        if (r == null) {
            r = n;
            s = n;
        }
        else {
            if (s.val != n.val) {
                s.next = n;
                s = s.next;
            }
        }
        
        head = head.next;
    }

    return r;
};

class ListNode {
    constructor(val, next) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head;
    }
}

var createLinkedList = function(arr) {
    let llArr = [], prevNode;
    for (let i = 0; i < arr.length; i++) {
        let ln = new ListNode(arr[i]);
        llArr.push(ln);
    }
    for (let i = llArr.length - 1; i >= 0; i--) {
        if (i != llArr.length - 1) {
            llArr[i].next = prevNode;
            prevNode = llArr[i];
        }
        else
            prevNode = llArr[i];
    }

    return new LinkedList(llArr[0]);
};

//https://leetcode.com/problems/remove-duplicates-from-sorted-list/
//let head = [1,1,2,3,3]; // answer is [1,2,3]
let head = [4,5,5]; // answer is [4,5]
let headObj = createLinkedList(head);
//console.log(headObj.head);
let res = deleteDuplicates(headObj.head);
console.log('-------------------');
console.log('head ' + head);
console.log(res);
//console.log(res.val);
//console.log(res.next.val);
//console.log(res.next.next.val);
//console.log(res.next.next.next.val);
//console.log(res.next.next.next.next.val);
//console.log(res.next.next.next.next.next.val);
//console.log(res.next.next.next.next.next.next.val);