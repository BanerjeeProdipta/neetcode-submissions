class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
   let map = {};
  let maxLength = 0;
  let start = 0;

  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] !== undefined) {
      start = Math.max(start, map[s[i]] + 1);
    }

    map[s[i]] = i;
    maxLength = Math.max(maxLength, i - start + 1);
  }

  return maxLength;

    }
}
