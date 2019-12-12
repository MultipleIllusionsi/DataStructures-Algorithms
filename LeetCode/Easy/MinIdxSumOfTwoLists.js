// 1. Hash table
const findRestaurant = function(list1, list2) {
  let map = {};

  list1.forEach((elem, idx) => {
    if (!map[elem]) {
      map[elem] = idx;
    }
  });

  let min = Infinity;

  for (let i = 0; i < list2.length; i++) {
    if (list2[i] in map) {
      min = Math.min(min, map[list2[i]] + i);
    }
  }

  return list2.filter((place, i) => map[place] + i === min);
};
