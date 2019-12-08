// Implement strStr().

// Return the index of the first occurrence of needle
//  in haystack, or -1 if needle is not part of haystack.

const strStr = function(haystack, needle) {
  if (!needle.length) return 0;

  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      const word = haystack.slice(i, i + needle.length);

      if (word === needle) {
        return i;
      }
    }
  }

  return -1;
};
