class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        // for(let num of nums) {
        //     if(nums.indexOf(num) !== nums.lastIndexOf(num)){
        //         return true;
        //     }
        // }
        // return false;
        let seen = new Set();

        for(let num of nums) {
            if(seen.has(num)){
                return true;
            }
            seen.add(num)
        }
        return false
    }
}
