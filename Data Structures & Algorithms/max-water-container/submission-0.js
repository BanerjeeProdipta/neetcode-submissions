class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(height) {  let left = 0;
  let right = height.length - 1;
  let max = 0;
  for (let i = 0; i < height.length - 1; i++) {
    let area = (right - left) * Math.min(height[left], height[right]);
    max = Math.max(area, max);
    if (height[left] < height[right]) {
      left++;
    } else right--;
  }
  return max;}
}
