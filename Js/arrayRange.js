// 40
const range_start_test = -6;
const range_n_test = 4;

const array_range = (start, n) =>
  Array.from({ length: n }, (_, num) => num + start);

console.log(array_range(range_start_test, range_n_test));
