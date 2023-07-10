// 22
const union_test_1 = [5, 2, 3];
const union_test_2 = [2, 3, 4];

const union = (input1, input2) => [...new Set(input1.concat(input2))].sort((a, b) => a-b);

console.log(union(union_test_1, union_test_2));