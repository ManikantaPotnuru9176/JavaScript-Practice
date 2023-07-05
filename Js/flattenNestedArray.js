// 21
const nest_array_test = [1, [2], [3, [[4]]], [5, 6]];
const shallow_test = false;

// function to flatten a nested (any depth) array.
const flatten_nested_array = (input, shallow) =>
  shallow
    ? input.reduce((res, curr) => res.concat(curr), [])
    : input.reduce(
        (res, curr) =>
          Array.isArray(curr)
            ? res.concat(flatten_nested_array(curr))
            : res.concat(curr),
        []
      );

console.log(flatten_nested_array(nest_array_test, shallow_test));
