class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let newSet = {};
        let left = 0;
        let right = 0;
        let maxLen = 0;
        let maxCount = 0;

        while(right<s.length){
            const char = s[right];
            newSet[char] = (newSet[char] || 0)+1;
            maxCount = Math.max(maxCount, newSet[char])
            while((right - left +1) -maxCount > k){
                newSet[s[left]]--;
                left++
            }
            maxLen = Math.max(maxLen, (right - left +1))
            right++;
        }
        return maxLen;
    }
}
