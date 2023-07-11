// 45
const unique_elements_test = [1, -2, -2, 3, 4, -5, -6, -5];

const unique_elements = (input) => [...new Set(input)];

console.log(unique_elements(unique_elements_test));
