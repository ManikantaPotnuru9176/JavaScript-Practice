const swap_test = "The Quick Brown Fox".split("");

// function that accepts a string as input and swaps the case of each character.
// using map method
const swap_case = (input) =>
  input
    .map((ele) =>
      ele.toLowerCase() === ele ? ele.toUpperCase() : ele.toLowerCase()
    )
    .join("");

console.log(swap_case(swap_test));
