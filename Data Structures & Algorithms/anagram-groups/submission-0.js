class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
          let hashmap = {};

  for (let i = 0; i < strs.length; i++) {
    let sorted = strs[i].split('').sort().join('');
    hashmap[sorted] = [...(hashmap[sorted] ?? []), strs[i]];
  }
        return Object.values(hashmap);
    }

}
