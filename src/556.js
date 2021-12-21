/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(mat, r, c) {
    let matR = mat.length, matC = mat[0].length, matCounts = matR * matC, stage = [], res = [];
    
    if (matCounts != r * c)
        return mat;
    
    for (let i = 0; i < matR; i++) {
        for (let j = 0; j < mat[i].length; j++) {
            //console.log('r ' + i + ' c' + j + ' ' + mat[i][j]);
            stage.push(mat[i][j]);
        }
    }

    //console.log(stage);

    for (let i = 0; i < r; i++) {
        res.push([]);
        for (let j = 0; j < c; j++) {
            res[i].push(stage.shift());
        }
    }

    return res;
};

//let matrix = [[1,2],[3,4]], row = 1, col = 4;
let matrix = [[1,2,3],[4,5,7]], row = 3, col = 2;
let res = matrixReshape(matrix, row, col);
console.log(res);