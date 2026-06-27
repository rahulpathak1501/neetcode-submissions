class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const n = nums.length;
        const output = new Array(n).fill(1)
        let prefix = 1;
        for(let i = 0;i<nums.length;i++) {
            output[i] = prefix;
            prefix *= nums[i]
        }
        let sufix = 1;
        for(let i = nums.length-1; i>=0;i--) {
            output[i] *= sufix;
            sufix *= nums[i]
        }
        return output;
    }
}
