// 14
const duplicate_test = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6];

// function to remove duplicate items from an array.
// using set
const remove_duplicates = (input) => [...new Set(input)];

console.log(remove_duplicates(duplicate_test));
