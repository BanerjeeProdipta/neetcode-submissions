class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
          let hashMap = {};
  for (let num of nums) {
    hashMap[num] = (hashMap[num] || 0) + 1;
  }

  return Object.entries(hashMap)
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map(([key]) => Number(key));
    }
}
