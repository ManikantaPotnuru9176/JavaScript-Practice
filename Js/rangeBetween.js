// 41
const range_input1_test = -7;
const range_input2_test = 4;

const range_between = (start, end) =>
  Array.from({ length: end - start + 1 }, (_, index) => start + index);

console.log(range_between(range_input1_test, range_input2_test));
