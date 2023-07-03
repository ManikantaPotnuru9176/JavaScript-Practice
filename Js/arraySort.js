const sort_test = [-3, 8, 7, 6, 5, -4, 3, 2, 1];

// function to sort the items of an array.
// using sort method
const array_sort = (input) => input.sort((a, b) => a - b);

console.log(array_sort(sort_test));
