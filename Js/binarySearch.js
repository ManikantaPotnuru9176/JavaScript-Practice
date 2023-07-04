// 18
const search_test = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const num = 8;

// function to perform a binary search.
// using loop
const binary_search = (input, num) => {
  let left = 0;
  let right = input.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (input[mid] === num) return mid;
    else if (num < input[mid]) right = mid - 1;
    else left = mid + 1;
  }

  return false;
};

// also use indexOf method to get the index of a element
const search_index_of = (input, num) => input.indexOf(num);

console.log(binary_search(search_test, num));

console.log(search_index_of(search_test, num));
