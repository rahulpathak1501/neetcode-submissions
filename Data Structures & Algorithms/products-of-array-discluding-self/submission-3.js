class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let prefix = new Array(nums.length);

        prefix[0] = 1

        for(let i =1;i<nums.length;i++){
            prefix[i] = prefix[i-1]* nums[i-1]
        }

        let rightProduct = 1
        for(let j = nums.length-1; j>=0;j--){
            prefix[j] *=rightProduct
            rightProduct*=nums[j]
        }
        return prefix
    }
}
