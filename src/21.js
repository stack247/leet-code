/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let prevNode, head = null;
    do {
        let lv, l1v, l2v;

        if (list1 != null) {
            l1v = list1.val;
        }
        if (list2 != null) {
            l2v = list2.val;
        }

        console.log('list1 ' + l1v + ' list2 ' + l2v);
        console.log('isNaN ' + isNaN(l1v));
        console.log('l1v not null ' + (l1v != null));

        if ((!isNaN(l1v) && l1v != null && l1v <= l2v) ||
            (isNaN(l2v) && !isNaN(l1v))) {
            list1 = list1.next;
            lv = l1v;
        }
        else if ((!isNaN(l2v) && l2v != null && l2v <= l1v) ||
            (isNaN(l1v) && !isNaN(l2v))) {
            list2 = list2.next;
            lv = l2v;
        }
        else
        {
            console.log('break');
            break;
        }

        //console.log('list1 ' + list1 == null ? '' : list1.val + ' list2 ' + list2 == null ? '' : list2.val);
        
        //console.log(list1);
        
        console.log(lv);
        if (lv != undefined) {
            let n = new ListNode(lv);
            if (prevNode != null)
                prevNode.next = n;
            else
                head = n;
            prevNode = n;
        }
    } while (list1 != null || list2 != null);

    return head;
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

//let list1 = [1,2,4], list2 = [1,3,4]; // answer is [1,1,2,3,4,4]
//let list1 = [1,2,4], list2 = [1,3,4,5];
let list1 = [], list2 = []; // answer is []
let list1Obj = createLinkedList(list1);
let list2Obj = createLinkedList(list2);
//console.log(list1Obj.head);
let res = mergeTwoLists(list1Obj.head, list2Obj.head);

console.log(res);
//console.log(res.val);
//console.log(res.next.val);
//console.log(res.next.next.val);
//console.log(res.next.next.next.val);
//console.log(res.next.next.next.next.val);
//console.log(res.next.next.next.next.next.val);
//console.log(res.next.next.next.next.next.next.val);