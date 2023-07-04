// 12
const sum_product_test = [1, 2, 3, 4, 5];

// function to compute the sum and product of an array of integers.
// using reduce method
const sum_and_product = (input) => [
  input.reduce((pre, curr) => pre + curr),
  input.reduce((pre, curr) => pre * curr),
];

const result = sum_and_product(sum_product_test);
console.log(`Sum: ${result[0]} Product: ${result[1]}`);
