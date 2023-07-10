// 21
const nest_array_test = [1, [2], [3, [[4]]], [5, 6]];
const shallow_test = true;

// function to flatten a nested (any depth) array.
// using flat
const flatten_nested_array = (input, shallow) =>
  shallow ? input.flat() : input.flat(Infinity);

// using reduce, map
const flatten_nested_array_reduce = (input, shallow) =>
  shallow
    ? input.reduce((res, curr) => res.concat(curr), [])
    : input.toString().split(",").map(Number);

console.log(flatten_nested_array(nest_array_test, shallow_test));

console.log(flatten_nested_array_reduce(nest_array_test, shallow_test));
