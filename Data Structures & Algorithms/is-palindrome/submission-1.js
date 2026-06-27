class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        function isAlphaNum(ch){
            return /[a-zA-Z0-9]/.test(ch)
        }

        let left = 0;
        let right = s.length - 1

        while(left<right){
            while(left<right && !isAlphaNum(s[left])) left++;
            while(left<right && !isAlphaNum(s[right])) right--;

            if(s[left].toLocaleLowerCase() !==s[right].toLocaleLowerCase()) return false;

            left++;
            right--;
        }
        return true;
    }
}
