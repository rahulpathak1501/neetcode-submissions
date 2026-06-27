class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const newMap = new Map();
        for(let word of strs){
            let key = word.split('').sort().join('');
            if(!newMap.has(key)){
                newMap.set(key, [])
            }
            newMap.get(key).push(word)
        }
        return Array.from(newMap.values())
    }
}
