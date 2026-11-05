class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
 let keySet = new Set();
  let res = [];
  nums.sort((a, b) => a - b);

  function binarySearch(n, i, j) {
    let low = 0;
    let high = nums.length - 1;
    while (high >= low) {
      let mid = low + Math.floor((high - low) / 2);
      if (nums[mid] === n && mid !== i && mid !== j) {
        return mid;
      } else if (nums[mid] > n) {
        high = mid - 1;
      } else low = mid + 1;
    }
    return undefined;
  }

  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      let complement = 0 - (nums[i] + nums[j]);
      let match = binarySearch(complement, i, j);

      if (match !== undefined) {
        let sorted = [nums[i], nums[j], nums[match]].sort((a, b) => a - b);
        let key = sorted.join(',');
        if (!keySet.has(key)) {
          keySet.add(key);
          res.push(sorted);
        }
      }
    }
  }
  return res;
    }
}
