// 52
const find_nan_test = [2, 4, NaN, 16, 32, NaN];

const find_nan = (input) =>
  input.map((num, i) => (!num ? i : false)).filter(Boolean);

console.log(find_nan(find_nan_test));
