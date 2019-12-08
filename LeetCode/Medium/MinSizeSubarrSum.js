// Given an array of n positive integers and a
// positive integer s, find the minimal length
// of a contiguous subarray of which the sum ≥ s.
//  If there isn't one, return 0 instead.

// Input: s = 7, nums = [2,3,1,2,4,3]
// Output: 2
// Explanation: the subarray [4,3] has the
// minimal length under the problem constraint.

const minSubArrayLen = function(s, nums) {
  let min = Infinity;
  const sums = [0];

  for (let k of nums) {
    sums.push(sums[sums.length - 1] + k);
  }

  for (let i = 0, j = 1; j < sums.length; j++) {
    while (sums[j] - sums[i] >= s) {
      min = Math.min(min, j - i);
      i++;
    }
  }
  return min === Infinity ? 0 : min;
};

const minSubArrayLen = function(s, nums) {
  let min = Infinity;

  for (let i = 0, j = 0, sum = 0; j < nums.length; j++) {
    sum += nums[j];
    while (sum >= s) {
      min = Math.min(min, j - i + 1);
      sum -= nums[i++];
    }
  }

  return min === Infinity ? 0 : min;
};
