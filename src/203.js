/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    if (head == null)
        return head;

    let headRes = null, prevNode;
    while (head != null) {
        //prevNode = head;
        if (head.val == val) {
            if (prevNode != null)
                prevNode.next = null;
        }
        if (head.val != val) {
            if (headRes == null)
                headRes = head;
            if (prevNode == null)
                prevNode = headRes;
            else {
                prevNode.next = head;
                prevNode = head;
            }
        }
        
        head = head.next;
    }

    return headRes;
};

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
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

//let head = [1,2,3,4,5,6], val = 6; // answer is [1,2,3,4,5]
//let head = [], val = 1; // answer is []
let head = [7,7,7,7], val = 7; // answer is []
let headObj = createLinkedList(head);
//console.log(headObj.head);
let res = removeElements(headObj.head, val);
console.log('-------------------');
console.log('head ' + head + ' val ' + val);
console.log(res);
//console.log(res.val);
//console.log(res.next.val);
//console.log(res.next.next.val);
//console.log(res.next.next.next.val);
//console.log(res.next.next.next.next.val);
//console.log(res.next.next.next.next.next.val);
//console.log(res.next.next.next.next.next.next.val);