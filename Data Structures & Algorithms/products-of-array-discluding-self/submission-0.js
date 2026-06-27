class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let output = new Array(nums.length).fill(1);

        let leftProduct = 1;
        for(let i=0;i<nums.length;i++){
            output[i] = leftProduct; //[1, 1, 2, 8]
            leftProduct *=nums[i]
        }

        let rightProduct = 1;
        for(let j=nums.length-1 ;j>=0 ;j--){
            output[j] *= rightProduct; 
            rightProduct *=nums[j]
        }

        return output
    }
}
