// 20
const duplicate_num_test = [1, 2, -2, 4, 5, 4, 7, 8, 7, 7, 71, 3, 6];

// function to find duplicate values in a JavaScript array.
// using filter method
const duplicate_values = (input) => [
  ...new Set(input.filter((num, i) => input.indexOf(num) !== i)),
];

console.log(duplicate_values(duplicate_num_test));
