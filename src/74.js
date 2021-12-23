/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    for (let i = 0; i < matrix.length; i++) {
        if (target > matrix[i][matrix[i].length - 1])
            continue;
        
        //console.log(matrix[i][0]);
        for (let j = 0; j < matrix[i].length; j++) {
            let num = matrix[i][j];
            if (num == target)
                return true;
        }

        return false;
    }

    return false;
};

//let mat = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], tar = 13;
let mat = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], tar = 16;
//let mat = [[1]], tar = 2;
let res = searchMatrix(mat, tar);
console.log(res);