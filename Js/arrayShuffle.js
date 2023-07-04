// 17
const shuffle_test = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function to shuffle an array.
// using sort, random method
const array_shuffle = (input) =>
  input.sort(() => Math.random() - Math.random());

console.log(array_shuffle(shuffle_test));
