/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    // Attempt 2.
    let c = root, pq = [], r = [];
    while (c) {
        if (c.left && r[r.length-1] !== c.left.val) {
            pq.push(c);
            c = c.left;
            continue;
            //r.push(c.left.val);
        }
        r.push(c.val);
        if (c.right)
            c = c.right;
        else
            c = pq.pop();
    }

    return r;

    // Attempt 1: works on https://www.geeksforgeeks.org/tree-traversals-inorder-preorder-and-postorder/
    /*
    let c = root, pq = [], r = [], part1Done = false;
    while (c) {
        console.log(c.val);

        if (c.left && !part1Done) {
            //console.log(c.left);
            pq.push(c);
            c = c.left;
            continue;
        }
        else {
            if (!part1Done)
                part1Done = true;

            //console.log('pq vs c ' + pq.length + ' ' + pq[pq.length-1] + ' ' + c.val);
            if (pq[pq.length-1] && pq[pq.length-1].val !== c.val &&
                r[r.length-1] !== c.val)
                r.push(c.val);

            var p = pq.pop();
            if (p)
                r.push(p.val);
            if (c.right)
                r.push(c.right.val);
            
            c = p;
        }

        //break;

        //console.log(q);
        //console.log(c);
    }

    //console.log(pq);

    return r;
    */
};

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

// https://leetcode.com/problems/binary-tree-inorder-traversal/

let rootObj = new TreeNode(1, null, new TreeNode(2, new TreeNode(3, null, null), null));
//let rootObj = new TreeNode(2, new TreeNode(3, new TreeNode(1, null, null), null));
//let rootObj = new TreeNode(1, new TreeNode(2, new TreeNode(4,null,null), new TreeNode(5,null,null)), new TreeNode(3,null,null));
let res = inorderTraversal(rootObj);

console.log('-------------------');
console.log('rootObj ' + rootObj);
//console.log(rootObj.val);
//console.log(rootObj.left.val);
//console.log(rootObj.right.val);
//console.log(rootObj.left.left.val);
//console.log(rootObj.left.right.val);
//console.log(rootObj.right.left.val);
//console.log(rootObj.right.right.val);
console.log('res ' + res);
