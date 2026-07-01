class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let row = Array.from({length: 9}, () => new Set());
        let col = Array.from({length: 9}, () => new Set());
        let box = Array.from({length: 9}, () => new Set());
        
        for(let r=0;r<9;r++){
            for(let c=0;c<9;c++){
                let val = board[r][c]

                if(val === '.') continue;

                let boxIndex = Math.floor(r /3)*3 + Math.floor(c/3);

                if(row[r].has(val) || col[c].has(val) || box[boxIndex].has(val)) return false

                row[r].add(val)
                col[c].add(val)
                box[boxIndex].add(val)
            }
        }
        return true;
    }
}
