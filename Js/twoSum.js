// 26
const two_sum_test = [10, 20, 10, 40, 50, 60, 70];
const two_sum_test_target = 50;

const two_sum = (input, target) =>
  input
    .map((num, i) => {
      const idx = input.indexOf(target - num);
      return idx === -1 && i !== idx ? false : [i, idx];
    })
    .filter((ele) => ele)[0] ?? [];

console.log(two_sum(two_sum_test, two_sum_test_target));
