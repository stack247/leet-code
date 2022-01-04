/** https://leetcode.com/problems/linked-list-cycle/
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
// https://leetcode.com/problems/linked-list-cycle/discuss/1605170/Javascript-two-pointer
var hasCycle = function(head) {
    if (head == null || head.next == null) {
      return false;
    }
    
    let slow = head;
    let fast = head;
    let count = 0;
    
    while (fast != null && fast.next != null) {
      count++;
      console.log(count + ' f-' + fast.data + ' s-' + slow.data);
      fast = fast.next.next;
      slow = slow.next;
      
      // If fast catchup to slow, it means there is a cycle in the linked list
      if (slow === fast) {
        return true;
      }
    }
    
    return false;
  };

class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head;
    }
}

var createLinkedList = function(arr, pos) {
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
    llArr[llArr.length - 1].next = llArr[pos];

    return new LinkedList(llArr[0]);
};

//let head = [3,2,0,-4], pos = 1;
let head = [3,2,0,-4], pos = 1;
let headObj = createLinkedList(head, pos);
//console.log(headObj.head.data);
//console.log(headObj.head.next.data);
//console.log(headObj.head.next.next.data);
//console.log(headObj.getLast());
let res = hasCycle(headObj.head);
console.log(head + ' p=' + pos);
console.log(res);