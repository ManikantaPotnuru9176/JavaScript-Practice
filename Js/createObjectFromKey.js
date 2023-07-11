// 44
const array_object_test = [
  { id: 10, name: "apple" },
  { id: 20, name: "orange" },
];
const key_test = (x) => x.id;

const createObjectFromKey = (array, key) =>
  array.reduce((result, item) => {
    const { [key]: excludedValue, ...rest } = item;
    return { ...result, [excludedValue]: { ...rest } };
  }, {});

console.log(createObjectFromKey(array_object_test, key_test));
