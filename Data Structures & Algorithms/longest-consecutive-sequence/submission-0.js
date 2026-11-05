class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
  let sorted = nums.sort((a, b) => a - b);
  let longest = 0;
  let currLength = 0;

  for (let i = 0; i < sorted.length; i++) {
    let curr = sorted[i];
    let next = sorted[i + 1];
    // 1,1 || 1,2
    if (curr === next) continue;
    else if (curr + 1 === next) {
      currLength++;
    } else {
      longest = Math.max(currLength + 1, longest);
      currLength = 0;
    }
  }
  // longest = Math.max(currLength, longest);
  return longest;}
}
