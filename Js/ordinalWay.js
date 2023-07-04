// 15
const ordinal_way_test = [
  "Blue ",
  "Green",
  "Red",
  "Orange",
  "Violet",
  "Indigo",
  "Yellow ",
];
const o = ["th", "st", "nd", "rd"];

// function to display the colors in the way "1st choice is Blue.", "2nd choice is Green.", "3rd choice is Red."
// using map method
const ordinal_way = (input) =>
  input.map(
    (ele, i) =>
      i +
      1 +
      (o[(i + 1 - 20) % 10] || o[i + 1] || o[0]) +
      "  choice is " +
      ele +
      "."
  );

ordinal_way(ordinal_way_test).forEach((element) => {
  console.log(element);
});
