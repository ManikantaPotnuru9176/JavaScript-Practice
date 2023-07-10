// 29
const start_range_test = "a";
const end_range_test = "z";
const step = 1;

const num_string_range = (start, end, step) => {
  let temp = false;
  if (typeof start === "string") {
    temp = true;
    start = start.charCodeAt(0);
    end = end.charCodeAt(0);
  }
  return Array.from({ length: Math.floor((end - start) / step) + 1 }, (_, i) =>
    temp ? String.fromCharCode(start + i * step) : start + i * step
  );
};

console.log(num_string_range(start_range_test, end_range_test, step));
