class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const nums2 = new Set(nums);

        if(nums.length > nums2.size){
            return true;
        }else{
            return false;
        }
    }
}
