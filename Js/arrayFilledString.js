// 37
const fill_test_n = 5;
const fill_test_string = "mani";

const array_filled_string = (n, val) => Array.from({ length: n }, () => val);

console.log(array_filled_string(fill_test_n, fill_test_string));
