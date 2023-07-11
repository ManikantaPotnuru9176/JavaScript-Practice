// 47
const object_test = {
  a: null,
  b: false,
  c: true,
  d: 0,
  e: 1,
  f: "",
  g: "a",
  h: [null, [false, true, [false, true]], "", true, 1, "a"],
  i: { j: 0, k: false, l: "a" },
};

const compact_object = (input) =>
  Array.isArray(input)
    ? input.filter(Boolean).map(compact_object)
    : typeof input === "object" && input !== null
    ? Object.fromEntries(
        Object.entries(input)
          .filter(([_, value]) => value)
          .map(([key, value]) => [key, compact_object(value)])
      )
    : input;

console.log(compact_object(object_test));
