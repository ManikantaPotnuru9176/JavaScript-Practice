const insert_dashes_test = "025468".split("");
console.log(insert_dashes_test);
// function that accepts a number as input and inserts dashes (-) between each even number.
const insert_dashes = (input) =>
  input
    .map((ele) =>
      ele % 2 === 0 &&
      input.at(-1) != ele &&
      input[input.indexOf(ele) + 1] % 2 == 0
        ? ele + "-"
        : ele
    )
    .join("");

console.log(insert_dashes(insert_dashes_test));
