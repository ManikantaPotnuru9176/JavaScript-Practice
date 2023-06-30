const first_test = [7, 9, 0, -2];

// function to get the first element of an array and
// Passing the parameter 'n' will return the first 'n' elements of the array:
// using slice method
const first = (input, n = 1) => (n >= 0 ? input.slice(0, n) : []);

console.log(first(first_test, -3));
