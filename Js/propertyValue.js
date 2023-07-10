// 27
const propery_test = [
  { author: "Bill Gates", title: "The Road Ahead", libraryID: 1254 },
  { author: "Steve Jobs", title: "Walter Isaacson", libraryID: 4264 },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    libraryID: 3245,
  },
];

const property_value = (input, property) =>
  input.map((ele) => ele[property]).filter((ele) => ele);

console.log(property_value(propery_test, "author"));
console.log(property_value(propery_test, "title"));