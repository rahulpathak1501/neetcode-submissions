class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;

        let newMap = new Map();

        for(let char of s){
            newMap.set(char, (newMap.get(char) || 0) +1)
        }

        for(let char of t){
            if(!newMap.has(char)) return false;

            newMap.set(char, newMap.get(char)-1);

            if(newMap.get(char) === 0){
                newMap.delete(char)
            }
        }

        return (newMap.size === 0)
    }
}
