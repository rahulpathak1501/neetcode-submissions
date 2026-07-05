class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    setZeroes(matrix) {
        let rowSet = new Set()
        let colSet = new Set()
        for(let r =0; r<matrix.length;r++){
            for(let c =0;c<matrix[r].length;c++){
                let element = matrix[r][c]
                if(element===0){
                    rowSet.add(r)
                    colSet.add(c)
                }
            }
        }

        for(let r of rowSet){
            matrix[r].fill(0)
        }
        for(let c of colSet){
            for(let r =0;r<matrix.length;r++){
                matrix[r][c]=0
            }
        }

    }
}
