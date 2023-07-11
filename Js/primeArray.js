// 48
const prime_test = [2, 3, 5, 7, 13];

const prime_array = (input) =>
  input
    .map((num) =>
      num > 1
        ? Array.from(
            { length: Math.floor(Math.sqrt(num) - 1) },
            (_, i) => i + 2
          ).every((div) => num % div !== 0)
        : false
    )
    .reduce((_, prime) => prime);

console.log(prime_array(prime_test));
