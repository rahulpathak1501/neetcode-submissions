class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let newSet = new Set(nums);
        let maxLen = 0;
        for(let num of nums){
            let currentNum = num
            let currentLen = 1
            if(!newSet.has(currentNum - 1)){
                while(newSet.has(currentNum+1)){
                    currentNum +=1;
                    currentLen +=1
                }
                maxLen = Math.max(currentLen, maxLen)
            }
        }
        return maxLen
    }
}
