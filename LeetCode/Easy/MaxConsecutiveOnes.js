// Given a binary array, find the maximum
//  number of consecutive 1s in this array.

// Input: [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last
// three digits are consecutive 1s.
// The maximum number of consecutive 1s is 3.

const findMaxConsecutiveOnes = function(nums) {
  let max = 0;
  let current = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i]) {
      current += 1;

      if (current > max) {
        max = current;
      }
    } else {
      current = 0;
    }
  }

  return max;
};
