class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let newMap = new Map();

        for(let i=0; i<nums.length; i++){
            let number = target - nums[i];
            if(newMap.has(number)){
                return [i, newMap.get(number)]
            }
            newMap.set(nums[i],i)
        }
    }
}
