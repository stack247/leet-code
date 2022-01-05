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
var reverseList = function(head) {
    // https://leetcode.com/problems/reverse-linked-list/discuss/1624113/TypeScript-solution-O(n)-time-O(1)-space-faster-than-93-just-6-lines.
    let n = null;

    while (head != null) {
        n = new ListNode(head.val, n);
        console.log(n);
        head = head.next;
    }

    return n;

    /*
    let headRes = null, stageRes, arr = [];
    while (head != null) {
        console.log(head.val);

        arr.push(head.val);
        head = head.next;
    }

    //console.log(arr);
    //console.log(arr.length);

    for (let i = arr.length - 1; i >= 0; i--) {
        //console.log(i);
        let n = new ListNode(arr[i]);
        if (headRes == null)
            headRes = n;
        else
            stageRes.next = n;
        stageRes = n;
    }

    return headRes;
    */
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

//https://leetcode.com/problems/reverse-linked-list/
let head = [1,2,3,4,5]; // answer is [5,4,3,2,1]
//let head = [1,2]; // answer is [2,1]
//let head = []; // answer is []
let headObj = createLinkedList(head);
//console.log(headObj.head);
let res = reverseList(headObj.head);
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