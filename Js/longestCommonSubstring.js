// 28
const substring_test = ["SQLInjection", "SQLTutorial"];

const longest_common_substring = (input) =>
  input[0]
    .split("")
    .filter((ele, i) => (input[1].split("")[i] === ele ? true : false))
    .join("");

console.log(longest_common_substring(substring_test));
console.log(longest_common_substring(["go", "google"]));
console.log(longest_common_substring(["abcd", "1234"]));
