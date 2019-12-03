// On a plane there are n points with integer coordinates
// points[i] = [xi, yi]. Your task is to find the
// minimum time in seconds to visit all points.

// You can move according to the next rules:
// In one second always you can either move vertically,
// horizontally by one unit or diagonally (it means to
// move one unit vertically and one unit horizontally in one second).
// You have to visit the points in the same order as
// they appear in the array

const minTimeToVisitAllPoints = function(points) {
  let count = 0;

  for (let i = 0; i < points.length - 1; i++) {
    const xi = points[i][0];
    const xy = points[i][1];

    const xi2 = points[i + 1][0];
    const xy2 = points[i + 1][1];

    const subtractXI = Math.abs(xi - xi2);
    const subtractXY = Math.abs(xy - xy2);

    const max = subtractXI > subtractXY ? subtractXI : subtractXY;
    count = count + max;
  }

  return count;
};

minTimeToVisitAllPoints([
  [1, 1],
  [3, 4],
  [-1, 0]
]);
minTimeToVisitAllPoints([
  [3, 2],
  [-2, 2]
]);
