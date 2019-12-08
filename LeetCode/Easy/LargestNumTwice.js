// In a given integer array nums, there is
// always exactly one largest element.

// Find whether the largest element in the array
// is at least twice as much as every other number in the array.

// If it is, return the index of the largest
// element, otherwise return -1.
const dominantIndex = function(nums) {
  let maxIndex = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[maxIndex]) maxIndex = i;
  }

  for (let i = 0; i < nums.length; i++) {
    if (maxIndex !== i && nums[maxIndex] < 2 * nums[i]) return -1;
  }
  return maxIndex;
};
