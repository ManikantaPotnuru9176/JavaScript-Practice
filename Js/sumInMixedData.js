// 50
const mixed_data_test = [2, "11", 3, "a2", false, 5, 7, 1];

const sum_in_mixed_data = (input) =>
  input.reduce((sum, value) =>
    typeof value === "number" ? sum + value : sum + 0
  );

console.log(sum_in_mixed_data(mixed_data_test));
