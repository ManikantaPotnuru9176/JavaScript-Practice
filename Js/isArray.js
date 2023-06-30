const is_array_test = [1, 2, 3, 4, 5];
const is_array_test1 = "test1";
const is_array_test2 = { name: "mani" };

// function to check whether an `input` is an array or not:
// using isArray method
const is_array = (input) => Array.isArray(input);

// using conditions
const is_array_condition = (input) => typeof input === "object" && (input[0] || input.length === 0) ? true : false;

console.log(is_array(is_array_test));

console.log(is_array_condition(is_array_test1));