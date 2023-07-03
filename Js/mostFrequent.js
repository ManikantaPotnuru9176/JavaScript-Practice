const frequency_test = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];
const obj = {};

// function to find the most frequent item in an array.
// using map, sort methods
const most_frequent = (input) => {
  input.map((ele) => (obj[ele] ? (obj[ele] += 1) : (obj[ele] = 1)));
  const result = Object.entries(obj)
    .sort((a, b) => a[1] - b[1])
    .at(-1);
  return result[0] + ` ( ${result[1]} times )`;
};

console.log(most_frequent(frequency_test));
