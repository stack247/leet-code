/**
 * @param {character[][]} board
 * @return {boolean}
 * 
 * row,col
 * 0,0 - 3,0 - 6,0
 * 0,3 - 3,3 - 6,3
 * 0,6 - 3,6 - 6,6
 * 
 * 
 * 0,0 - 2,2              3,0 - 5,2              6,0 - 8,2
 * 0,0 - 1,0 - 2,0        3,0 - 4,0 - 5,0        6,0 - 7,0 - 8,0
 * 0,1 - 1,1 - 2,1        3,1 - 4,1 - 5,1        6,1 - 7,1 - 8,1
 * 0,2 - 1,2 - 2,2        3,2 - 4,2 - 5,2        6,2 - 7,2 - 8,2
 * 
 * 0,3 - 2,5              3,3 - 5,5              6,3 - 8,5
 * 0,3 - 1,3 - 2,3        3,3 - 4,3 - 5,3        6,3 - 7,3 - 8,3
 * 0,4 - 1,4 - 2,4        3,4 - 4,4 - 5,4        6,4 - 7,4 - 8,4
 * 0,5 - 1,5 - 2,5        3,5 - 4,5 - 5,5        6,5 - 7,5 - 8,5
 * 
 * 0,6 - 2,8              3,6 - 5,8              6,6 - 8,8
 * 
 * 
 * 2,2 - 5,2 - 8,2
 * 2,5 - 5,5 - 8,5
 * 2,8 - 5,8 - 8,8
 */
var isValidSudoku = function(board) {
    let colSets = [], boxSets = [];
    for (let i = 0; i < board.length; i++) {
        //console.log(board[i]);

        // For row
        let rowSet = new Set();

        for (let j = 0; j < board[i].length; j++) {
            //console.log(board[i][j]);

            // For column
            if (i == 0)
                colSets.push(new Set());

            // For box
            if ((i == 0 || i == 3 || i == 6) &&
                (j == 0 || j == 3 || j == 6))
                boxSets.push(new Set());

            let num = board[i][j];
            if (!isNaN(num))
            {
                // Check row
                if (rowSet.has(num))
                    return false;
                    rowSet.add(num);

                // Check column
                let colSet = colSets[j];
                if (colSet.has(num))
                    return false;
                colSet.add(num);

                // Check box
                // TODO: find a mathematical way to calc quadran.
                let b, boxSet;
                if (i <= 2 && j <= 2)
                    b = 0;
                else if (i >= 0 && j >= 3 && i <= 2 && j <= 5)
                    b = 1;
                else if (i >= 0 && j >= 6 && i <= 2 && j <= 8)
                    b = 2;
                else if (i >= 3 && j >= 0 && i <= 5 && j <= 2)
                    b = 3;
                else if (i >= 3 && j >= 3 && i <= 5 && j <= 5)
                    b = 4;
                else if (i >= 3 && j >= 6 && i <= 5 && j <= 8)
                    b = 5;
                else if (i >= 6 && j >= 0 && i <= 8 && j <= 2)
                    b = 6;
                else if (i >= 6 && j >= 3 && i <= 8 && j <= 5)
                    b = 7;
                else if (i >= 6 && j >= 6 && i <= 8 && j <= 8)
                    b = 8;
                boxSet = boxSets[b];

                //console.log('i ' + i);
                //console.log('j ' + j);
                //console.log('num ' + num);
                //console.log('boxSet ' + boxSet);
                //console.log('b ' + b);

                if (boxSet.has(num))
                    return false;
                boxSet.add(num);
            }
        }
    }

    //console.log(colSets);
    //console.log(boxSets);
    return true;
};

let board = [["5","3",".",".","7",".",".",".","."]
    ,["6",".",".","1","9","5",".",".","."]
    ,[".","9","8",".",".",".",".","6","."]
    ,["8",".",".",".","6",".",".",".","3"]
    ,["4",".",".","8",".","3",".",".","1"]
    ,["7",".",".",".","2",".",".",".","6"]
    ,[".","6",".",".",".",".","2","8","."]
    ,[".",".",".","4","1","9",".",".","5"]
    ,[".",".",".",".","8",".",".","7","9"]]; // true
//let board = [["8","3",".",".","7",".",".",".","."]
//    ,["6",".",".","1","9","5",".",".","."]
//    ,[".","9","8",".",".",".",".","6","."]
//    ,["8",".",".",".","6",".",".",".","3"]
//    ,["4",".",".","8",".","3",".",".","1"]
//    ,["7",".",".",".","2",".",".",".","6"]
//    ,[".","6",".",".",".",".","2","8","."]
//    ,[".",".",".","4","1","9",".",".","5"]
//    ,[".",".",".",".","8",".",".","7","9"]]; // false
//let board = [["8","3",".",".","7",".",".",".","."]
//    ,["6",".",".","1","9","5",".",".","."]
//    ,[".","9","8",".",".",".",".","6","."]];
let res = isValidSudoku(board);
console.log(res);