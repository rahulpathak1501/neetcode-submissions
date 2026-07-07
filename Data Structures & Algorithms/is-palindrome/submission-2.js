class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        function alphanumeric(char){
            return /[a-zA-Z0-9]/.test(char)
        }
        let start = 0
        let end = s.length-1
        while(start < end){
            while(start<end && !alphanumeric(s[start])){
                start++
            }
            while(start<end && !alphanumeric(s[end])){
                end--
            }
            if(s[start].toLowerCase() !== s[end].toLowerCase()){
                return false
            } 
            start++;
            end--
        }

        return true
    }
}
