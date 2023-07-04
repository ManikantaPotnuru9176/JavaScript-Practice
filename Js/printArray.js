const print_test = [
  [1, 2, 1, 24],
  [8, 11, 9, 4],
  [7, 0, 7, 27],
  [7, 4, 28, 14],
  [3, 10, 26, 7],
];

// function that prints the elements of the following array.
// using map method
const print_array = (input) =>
  input.map((ele, i) => ["row " + i].concat(typeof ele === "object" ? ele.map((ele1) => ele1) : ele));

console.log(print_array(print_test));
