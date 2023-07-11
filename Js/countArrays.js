// 53
const count_arrays_test = [2, 8, [6, 3, 3], [4], 5, [3, 4, [5, 4]]];

const count_arrays = (input) =>
  input.filter((ele) => Array.isArray(ele)).length;

console.log(count_arrays(count_arrays_test));
