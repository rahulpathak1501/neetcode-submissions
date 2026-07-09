class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0
        let right = heights.length-1;

        let maxWater = 0

        while(left<right){
            let currentWater = 0
            if(heights[left] < heights[right]){
                currentWater = (right-left) * Math.min(heights[left], heights[right])
                maxWater = Math.max(currentWater, maxWater)
                left++
            } else {
                currentWater = (right-left) * Math.min(heights[left], heights[right])
                maxWater = Math.max(currentWater, maxWater)
                right--
            }
        }
        return maxWater
    }
}
