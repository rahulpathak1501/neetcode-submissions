class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const newMap = new Map();

        for(let num of nums){
            newMap.set(num, (newMap.get(num) || 0) +1 )
        }

        const bucket = Array.from({length: nums.length+1}, ()=> [])
        
        for(let [num, count] of newMap.entries()){
            bucket[count].push(num)
        }
        let result = [];
        for(let i =bucket.length - 1;i>=0;i--){
            if(bucket[i].length>0){
                result.push(...bucket[i])
            }
            if(result.length >=k){
                return result.slice(0,k)
            }
        }
        return result
    }
}
