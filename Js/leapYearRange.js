// 16
const test_start = 2008;
const test_end = 2020;

// function to find the leap years in a given range of years.
// using from, filter method
const leap_year_range = (start, end) =>
  Array.from({ length: end - start + 1 }, (_, i) => start + i).filter(
    (year) => year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)
  );

console.log(leap_year_range(test_start, test_end));
