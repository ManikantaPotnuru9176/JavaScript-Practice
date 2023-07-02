const last_test = [7, 9, 0, -2];

// function to get the last element of an array and
// Passing the parameter 'n' will return the last 'n' elements of the array:
// using slice method
const last = (input, n = 1) => n >= 0 ? input.slice(n > input.length ? 0 : input.length - n, input.length) : [];

console.log(last(last_test, 5));
