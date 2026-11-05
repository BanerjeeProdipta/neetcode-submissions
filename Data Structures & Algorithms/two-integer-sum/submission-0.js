class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
          let hashmap = {};

  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];

    if (hashmap[complement] !== undefined) {
      return [i, hashmap[complement]];
    }

    hashmap[nums[i]] = i;
  }
    }
}
