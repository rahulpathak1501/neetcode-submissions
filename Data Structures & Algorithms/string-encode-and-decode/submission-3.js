class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let resultStr = ''
        for(let str of strs){
            resultStr+=(str.length+'#'+str)
        }
        return resultStr
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let result = []
        let i=0;
        while(i<str.length){
            let j=i;
            while(str[j]!=='#'){
                j++
            }
            let length = Number(str.substring(i,j));
            j++;

            let word = str.substring(j,j+length)
            result.push(word)

            i=j+length
        }
        return result
    }
}
