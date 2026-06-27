class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let newSet = new Set(nums);
        let longest = 0;

        for(let num of nums){
            if(!newSet.has(num-1)){
                let count = 1;
                let current = num;
                while(newSet.has(current+1)){
                    current++;
                    count++;
                }
                
            longest = Math.max(longest, count);
            }
        }

        return longest
    }
}
