class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = '';

        for(let word of strs){
            res+= word.length+'#'+word
        }
        return res
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    //4#neet5#co#de4#love3#you
    decode(str) {
        let res = [];

        let i = 0;

        while(i<str.length){
            let j=i;
            while(str[j] !=='#') j++

            let length = parseInt(str.slice(i,j));//4

            let word = str.slice(j+1, j+1+length);//2,6

            res.push(word);
            i=j+1+length
        }

        return res;
    }
}
