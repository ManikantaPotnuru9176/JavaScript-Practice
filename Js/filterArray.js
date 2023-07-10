// 24
const filter_test = [NaN, 0, 15, false, -22, "", undefined, 47, null];

const filter_array = (input) => input.filter(num => num ? true : false);

console.log(filter_array(filter_test));