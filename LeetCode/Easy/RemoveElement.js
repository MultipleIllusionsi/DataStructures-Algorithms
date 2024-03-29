// Given an array nums and a value val,
// remove all instances of that value
// in-place and return the new length.

// Do not allocate extra space for another
// array, you must do this by modifying the
// input array in-place with O(1) extra memory.

// The order of elements can be changed.
// It doesn't matter what you leave beyond the new length.

// Given nums = [3,2,2,3], val = 3,
// Your function should return length = 2,
//  with the first two elements of nums being 2.
// It doesn't matter what you leave beyond the returned length.

// 1. Two pointers
const removeElement = function(nums, val) {
  let i = 0;
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== val) {
      nums[i] = nums[j];
      i++;
    }
  }
  return i;
};

// 2. Twp pointers (if removed element is rare)
const removeElement = function(nums, val) {
  let i = 0;
  let n = nums.length;

  while (i < n) {
    if (nums[i] === val) {
      nums[i] = nums[n - 1];
      // reduce array size by one
      n--;
    } else {
      i++;
    }
  }

  return n;
};

// 3. Push after array and shift then
const removeElement = function(nums, val) {
  const length = nums.length;
  let count = 0;

  for (let i = 0; i < length; i++) {
    if (nums[i] !== val) {
      nums.push(nums[i]);
    }
    count++;
  }

  while (count > 0) {
    nums.shift();
    count--;
  }

  return nums.length;
};

// 4. Push in the beggining of array and pop then
const removeElement = function(nums, val) {
  const length = nums.length;
  let count = 0;

  for (let i = 0; i < length; i++) {
    if (nums[i] !== val) {
      nums[count] = nums[i];
      count++;
    }
  }

  count = length - count;

  while (count > 0) {
    nums.pop();
    count--;
  }

  return nums.length;
};
