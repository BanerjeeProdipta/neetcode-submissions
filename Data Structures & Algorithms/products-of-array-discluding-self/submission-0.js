class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
          let product = 1;
  let res = Array(nums.length).fill(1);

  for (let i = 0; i < nums.length - 1; i++) {
    product = nums[i] * product;
    res[i + 1] = product;
  }
  
  product = 1;
  for (let i = nums.length - 1; i > 0; i--) {
    product = nums[i] * product;
    res[i - 1] = product * res[i - 1];
  }
  return res;
    }
}
