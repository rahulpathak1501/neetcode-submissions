class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let newMap = new Map();

        for(let str of strs){
            let key = str.split('').sort().join('');

            if(!newMap.has(key)){
                newMap.set(key, [])
            }
            newMap.get(key).push(str)
        }
        return [...newMap.values()]
    }
}
