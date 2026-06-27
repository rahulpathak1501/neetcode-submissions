class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let left = 0;
        let right = height.length-1;
        let maxleft = 0;
        let maxright = 0;
        let totalWater = 0;

        while(left<right){
            if(height[left] < height[right]){
                if(height[left] >= maxleft){
                    maxleft = height[left]
                }else{
                    totalWater += maxleft - height[left]
                }
                left++
            } else {
                if(height[right] >= maxright) {
                    maxright = height[right];
                } else {
                    totalWater += maxright-height[right]
                }
                right--
            }
        }
        return totalWater;

    }
}
