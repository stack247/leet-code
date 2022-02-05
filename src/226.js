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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if (root == null)
        return root;

    let q=[root];

    while (q.length) {
        let c = q.pop();
        let l = c.left;
        let r = c.right;
        //console.log(l);
        //console.log(r);
        //console.log(c.right);
        c.right = l;
        if (l)
            q.push(c.right);
        c.left = r;
        if (r)
            q.push(c.left);

        //console.log(c.left);
        //console.log(c.right);
        //console.log('--------------');
    }

    return root;
    
    /* Attempt 1: use left and right queue.
    let r=root,lq=[],rq=[];

    if (root.left)
        rq.push(root.left);
    if (root.right)
        lq.push(root.right);

    while (rq.length || lq.length) {
        r.left = lq.pop();
        r.right = rq.pop();

    }

    return root;
    */
};

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

// https://leetcode.com/problems/invert-binary-tree/
//let rootObj = new TreeNode(null, null, null); // answer is []
let rootObj = new TreeNode(4, new TreeNode(2, new TreeNode(1, null, null), new TreeNode(3, null, null)), new TreeNode(7, new TreeNode(6, null, null), new TreeNode(9, null, null))); // answer is [4,7,2,9,6,3,1]
//let rootObj = new TreeNode(2, new TreeNode(1, null, null), new TreeNode(3, null, null)); // answer is [2,3,1]
//let rootObj = new TreeNode(1, new TreeNode(2, null, null), null); // answer is [1,null,2]
let res = invertTree(rootObj);

console.log('-------------------');
//console.log(rootObj.val);
//console.log(rootObj.left.val);
//console.log(rootObj.right.val);
//console.log(rootObj.left.left.val);
//console.log(rootObj.left.right.val);
//console.log(rootObj.right.left.val);
//console.log(rootObj.right.right.val);
console.log('res');
console.log(res);
