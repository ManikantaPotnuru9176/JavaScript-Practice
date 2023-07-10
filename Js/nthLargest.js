// 34
const nth_large_test = [43, 56, 23, 89, 88, 90, 99, 652];
const nth_test = 4;

const nth_largest = (input, n) => input.sort((a, b) => b - a)[n - 1];

console.log(nth_largest(nth_large_test, nth_test));
