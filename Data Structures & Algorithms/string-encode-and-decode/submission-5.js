class Solution {
    encode(strs) {
        let res = '';

        for (let str of strs) {
            res += str.length + '#' + str;
        }

        return res;
    }

    decode(str) {
        let res = [];
        let i = 0;

        while (i < str.length) {
            // Find the delimiter
            let j = i;

            while (str[j] !== '#') {
                console.log(str[j],j)
                j++;
            }

            const len=Number(str.substring(i,j))
            const s=str.substring(j+1,j+1+len)
            console.log("LEN:", len,s,j)
res.push(s)
i = j + 1 + len;
            

        }

        return res;
    }
}