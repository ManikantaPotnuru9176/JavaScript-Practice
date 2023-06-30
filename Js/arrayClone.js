const array_clone_test = [1, 2, 4, 0];
const array_clone_test1 = [1, 2, 3, 4, [1, 2, 3]];

// function to clone an array:
// using spread operator(...)
const array_clone = (input) => [...input];

// using slice method
const array_clone_slice = (input) => input.slice();

// using map method
const array_clone_map = (input) => input.map(ele => ele)

// using filter method
const array_clone_filter = (input) => input.filter(ele => true);

console.log(array_clone(array_clone_test));

console.log(array_clone_slice(array_clone_test1));

console.log(array_clone_map(array_clone_test));

console.log(array_clone_filter(array_clone_test1));