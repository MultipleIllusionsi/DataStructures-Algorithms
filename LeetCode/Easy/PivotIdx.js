// Given an array of integers nums, write a method
// that returns the "pivot" index of this array.

// We define the pivot index as the index where the
// sum of the numbers to the left of the index is
// equal to the sum of the numbers to the right of the index.

// If no such index exists, we should return -1. If there
// are multiple pivot indexes, you should return the left-most pivot index.

const pivotIndex = function(nums) {
  let sum = 0;
  let leftSum = 0;

  nums.forEach(num => (sum += num));

  for (let i = 0; i < nums.length; i++) {
    if (leftSum === sum - leftSum - nums[i]) return i;
    leftSum += nums[i];
  }
  return -1;
};
