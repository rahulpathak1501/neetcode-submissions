class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let windowSet = new Set();
        let left = 0;
        let right = 0;
        let maxLen = 0;

        while(right<s.length){
            if(!windowSet.has(s[right])){
                windowSet.add(s[right]);
                right++;
                maxLen = Math.max(maxLen, windowSet.size)
            } else {
                windowSet.delete(s[left]);
                left++;
            }
        }
        return maxLen;
    }
}
