// 30
const merge_array_test_1 = [1, 2, 3, 4, 5, 6];
const merge_array_test_2 = [1, 2, 3, 4, 22];

const merge_array = (input1, input2) => [...new Set(input1.concat(input2))];

console.log(merge_array(merge_array_test_1, merge_array_test_2));
