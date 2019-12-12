// 1. Set + map
const intersection = function(nums1, nums2) {
  let returnedArray = new Set();
  let map = {};

  for (let value of nums1) {
    if (!map[value]) {
      map[value] = true;
    }
  }

  for (let value of nums2) {
    if (map[value]) {
      returnedArray.add(value);
    }
  }

  return Array.from(returnedArray);
};
