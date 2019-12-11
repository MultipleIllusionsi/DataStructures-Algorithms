// 1. Two pointers
const merge = function(nums1, m, nums2, n) {
  nums1.length = m + n + m;
  let index1 = 0;
  let index2 = 0;

  for (let i = m; i < nums1.length; i++) {
    if (index1 !== m && (index2 === n || nums1[index1] <= nums2[index2])) {
      nums1[i] = nums1[index1];
      index1++;
    } else {
      nums1[i] = nums2[index2];
      index2++;
    }
  }

  // delete unnecessary items
  nums1.splice(0, m);

  return nums1;
};
