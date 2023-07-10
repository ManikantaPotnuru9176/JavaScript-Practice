// 23
const difference_test_1 = [5, 10, 1, 2, 3, 4, 5];
const difference_test_2 = [1, [2], [3, [[4]]], [5, 6]];

const difference = (input1, input2) => {
  input1 = input1.flat(Infinity);
  input2 = input2.flat(Infinity);

  return input1
    .concat(input2)
    .filter((num) =>
      input1.indexOf(num) === -1 || input2.indexOf(num) === -1 ? true : false
    )
    .sort((a, b) => a - b);
};

console.log(difference(difference_test_1, difference_test_2));
