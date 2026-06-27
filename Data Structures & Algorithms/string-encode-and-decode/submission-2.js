class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let newStrs='';
        for(let str of strs){
            newStrs += str.length+'#'+str
        }
        return newStrs;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let decodedStrs = [];

        let i = 0;

        while(i<str.length){
            let j = i;

            while(str[j] !== '#') {
                j++;
            }

            const wordLength = parseInt(str.slice(i,j))

            decodedStrs.push(str.slice(j+1, j+1+wordLength));

            i = j+1+wordLength
        }
        return decodedStrs;
    }
}
