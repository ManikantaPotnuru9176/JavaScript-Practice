const sum_test = [0, 1, 2, 3, 4];

// function to find the sum of squares of a numerical vector.
// using reduce method
const sum_of_squares = (input) => input.reduce((pre, curr) => pre + curr ** 2);

console.log(sum_of_squares(sum_test));
