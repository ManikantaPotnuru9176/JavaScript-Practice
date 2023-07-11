// 49
const third_smallest_test = [2, 3, 0, 5, 7, 8, -2, -4];

const third_smallest = (input) => input.sort((a, b) => a - b)[2];

console.log(third_smallest(third_smallest_test));
