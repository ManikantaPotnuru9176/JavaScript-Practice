// 38
const move_array_test = [10, 20, 30, 40, 50];
const move_from_test = 0;
const move_to_test = 2;

const move = (input, from, to) =>
  input.splice(to, 0, input.splice(from, 1)[0]) && input;

console.log(move(move_array_test, move_from_test, move_to_test));
