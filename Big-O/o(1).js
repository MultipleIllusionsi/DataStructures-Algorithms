const arr = [1, 2, 3, 4, 5, 6];

function logging(array) {
  return array[0];
}

function loggingTwo(array) {
  console.log(array[0]);
  console.log(array[1]);
}

console.log(logging(arr));

// Big O(1) - CONSTANT
