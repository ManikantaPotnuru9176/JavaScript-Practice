// 46
const permutations_test = [1, 33, 5];

const permutations = (input) =>
  input.length === 1
    ? [input]
    : input.flatMap((item, index) =>
        permutations([...input.slice(0, index), ...input.slice(index + 1)]).map(
          (perm) => [item, ...perm]
        )
      );

console.log(permutations(permutations_test));
