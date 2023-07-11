// 51
const factor_chain_test = [2, 4, 16, 32, 64];

const factor_chain = (input) =>
  input.filter((ele, i) => (i < input.length - 1 ? input[i + 1] % ele : true))
    .length === 1;

console.log(factor_chain(factor_chain_test));
