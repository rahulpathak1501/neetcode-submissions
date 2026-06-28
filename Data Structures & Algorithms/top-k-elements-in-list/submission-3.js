class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let newMap = new Map();
        for(let num of nums) {
            if(newMap.has(num)){
                newMap.set(num, newMap.get(num)+1)
            }else {
                newMap.set(num, 1);
            }
        }
        const arr = [...newMap.entries()]
        arr.sort((a,b) => b[1]-a[1])

        console.log(arr)

        return arr.slice(0,k).map(item => item[0])
    }
}
