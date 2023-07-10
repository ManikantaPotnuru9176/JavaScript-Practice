// 31
const array_test = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const remove_test = 2;

const remove_array_element = (input, n) => input.filter((ele) => ele !== n);

console.log(remove_array_element(array_test, remove_test));
