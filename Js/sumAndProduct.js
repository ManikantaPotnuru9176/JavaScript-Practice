// 12
const sum_product_test = [1, 2, 3, 4, 5];

// function to compute the sum and product of an array of integers.
// using reduce method
const sum_and_product = (input) => {
  const result = [
    input.reduce((pre, curr) => pre + curr),
    input.reduce((pre, curr) => pre * curr),
  ];
  return `Sum: ${result[0]} Product: ${result[1]}`;
};

console.log(sum_and_product(sum_product_test));
