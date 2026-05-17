
function printBoard(board) {

    for (const row of board) {
        console.log(JSON.stringify(row));

    }

}

function nQueen(n) {
    const board = Array.from({ length: n }).map(() => {
        return Array.from({ length: n }).fill(0);
    })

    console.log("Empty board");

    printBoard(board);

    const canPlaceQueen = (board, row, col) => {

        // check if there is a queen in the same row to 
        // the left column
        for (let i = 0; i < col; i++) {
            if (board[row][i]) {
                return false
            }
        }

        // check if there is a queen in the upper diagonal to the left


        for(let i = row, j=col; i>=0 && j >=0; i--,j--){
            if(board[i][j]){
                return false
            }
        }
        
        // check if there is a queen in the lower diagonal to the left

          for(let i = row, j=col; i< board.length && j >=0; i++,j--){
            if(board[i][j]){
                return false
            }
        }


        return true
    }

    const placeQeen = (board, column) => {

        if (column >= board.length) {
            return true
        }

        for (let i = 0; i < board.length; i++) {
            if (canPlaceQueen(board, i, column)) {
                board[i][column] = 1;

                if (placeQeen(board, column + 1)) {
                    return true
                }
                board[i][column] = 0
            }
        }

        return false
    }

    if (placeQeen(board, 0)) {
        console.log("solutin");
        printBoard(board);

    } else {
        console.log("No solution exits");

    }


}
nQueen(5);
