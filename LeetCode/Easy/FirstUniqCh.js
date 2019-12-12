// 1. Hash Table
const firstUniqChar = function(s) {
  let map = {};

  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) {
      map[s[i]][0]++;
    } else {
      map[s[i]] = [1, i];
    }
  }

  for (let value in map) {
    if (map[value][0] === 1) {
      return map[value][1];
    }
  }

  return -1;
};
