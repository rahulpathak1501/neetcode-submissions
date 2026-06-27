class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let res = {}
        for(let num of nums){
            res[num] = (res[num] || 0) + 1;
        }
        let entries = Object.entries(res);

        entries.sort((a,b) => b[1] - a[1]);

        let topK = entries.slice(0,k).map(entry => Number(entry[0]));

        return topK
    }
}
