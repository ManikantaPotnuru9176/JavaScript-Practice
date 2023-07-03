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
  input.map((ele, i) => {
    console.log("row " + i);
    ele.map((ele1) => console.log(ele1));
  });

print_array(print_test);
