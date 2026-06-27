class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let count=0;

        let newSet = new Set(nums);
        for( let num of newSet){
            if(!newSet.has(num-1)){
                let currentNum = num;
                let currentStreak = 1;

                while(newSet.has(currentNum+1)){
                    currentNum +=1;
                    currentStreak +=1;
                }

                count = Math.max(currentStreak, count)
            }
        }

        return count
    }
}
