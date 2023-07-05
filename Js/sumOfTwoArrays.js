// 19
const array1 = [1, 0, 2, 3, 4];
const array2 = [3, 5, 6, 7, 8, 13];

// function to compute the sum of each individual index value in the given array.
// using map method
const sum_of_two_arrays = (input1, input2) =>
  input1.length > input2.length
    ? input1.map((num, i) => num + (input2[i] ? input1[i] : 0))
    : input2.map((num, i) => num + (input1[i] ? input1[i] : 0));

console.log(sum_of_two_arrays(array1, array2));
