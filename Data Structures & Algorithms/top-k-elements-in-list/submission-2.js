class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let newMap = new Map();

        for(let num of nums){
            newMap.set(num, (newMap.get(num) || 0)+1)
        }

        let sorted = Array.from(newMap.entries()).sort((a,b) => b[1] - a[1]);

        return sorted.slice(0,k).map(([num]) => num);
    }
}
