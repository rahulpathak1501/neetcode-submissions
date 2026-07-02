class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let newMap = new Map();

        for(let i =0;i<nums.length;i++){
            let conVal = target - nums[i];
            // console.log(conVal)
            if(newMap.has(conVal)){
                return [newMap.get(conVal), i]
            }
            newMap.set(nums[i],i)
        }
        return []
    }
}
