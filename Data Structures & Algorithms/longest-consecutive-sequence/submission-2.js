class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const newSet = new Set(nums);
        let maxLen = 0;

        for(let num of nums){
            if(!newSet.has(num-1)){
                let currentNum = num
                let currentLen = 1;

                while(newSet.has(currentNum+1)){
                    currentNum +=1
                    currentLen +=1
                }
                maxLen = Math.max(maxLen, currentLen);
            }
        }
        return maxLen
    }
}
