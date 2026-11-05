class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = "";
        for (let s of strs) {
            res += s.length + "#" + s;
        }
        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let res = [];
        let i = 0;

        while (i < str.length) {
            let j = i;

            // Find the delimiter '#'
            while (str[j] !== "#") {
                j++;
            }

            // Extract length
            let length = parseInt(str.substring(i, j));

            // Extract the string
            let word = str.substring(j + 1, j + 1 + length);
            res.push(word);

            // Move pointer forward
            i = j + 1 + length;
        }

        return res;
    }
}