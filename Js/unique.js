// 42
const unique_test_input1 = [1, 2, 3, 4, 5];
const unique_test_input2 = [1, [2], [3, [[4]]], [5, 6]];;

const unique = (input1, input2) => [...new Set(input1.flat(Infinity).concat(input2.flat(Infinity)))];

console.log(unique(unique_test_input1, unique_test_input2));