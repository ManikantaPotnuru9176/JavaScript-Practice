// 43
const unzip_test = [
  ["a", 1, true],
  ["b", 2, false],
];

const unzip = (input) =>
  input.reduce(
    (result, curr) => (
      curr.forEach((ele, index) =>
        result[index] ? result[index].push(ele) : (result[index] = [ele])
      ),
      result
    ),
    []
  );

console.log(unzip(unzip_test));
