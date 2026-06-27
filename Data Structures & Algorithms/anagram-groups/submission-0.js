class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let output = {}

        for(let word of strs){
            let key = word.split('').sort().join('');

            if(!output[key]){
                output[key] = []
            }
            output[key].push(word);
        }

        return Object.values(output);
    }
}
