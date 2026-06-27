class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if (s1.length> s2.length) return false;
        let target = Array(26).fill(0)
        let window = Array(26).fill(0);
        const a = 'a'.charCodeAt(0);
        for(let ch of s1){
            target[ch.charCodeAt(0)-a]++
        }
        let left = 0;
        for(let right= 0;right<s2.length;right++){
            window[s2[right].charCodeAt(0) -a]++

            if(right-left+1 >s1.length){
                window[s2[left].charCodeAt(0) -a]--;
                left++
            }
            if(right-left+1 ===s1.length){
                let match = true
                for(let i=0;i<26;i++){
                    if(target[i] !== window[i]){
                        match = false;
                        break;
                    }
                }
                if(match) return true;
            }
        }
        return false;


    }
}
