const fileNames = [
  "",
  "isArray.js",
  "arrayClone.js",
  "first.js",
  "last.js",
  "arrayToSting.js",
  "insertDashes.js",
  "arraySort.js",
  "mostFrequent.js",
  "swapCase.js",
  "printArray.js",
  "sumOfSquares.js",
];

const select = document.getElementById("dropdown");
fileNames.forEach((optionText) => {
  const option = document.createElement("option");
  option.value = optionText;
  option.text = optionText;
  select.appendChild(option);
});
select[0].value = "";
select[0].text = "Select Question";

const inputs = document.getElementById("input_div");
const buttons = document.getElementById("button_div");
const answers = document.getElementById("answer_div");
const input = document.createElement("input");
const input_1 = document.createElement("input");
const button = document.createElement("button");
const answer = document.createElement("p");
let selectedFile;
let selectedType;
button.innerHTML = "Answer";
input.type = "text";
input.id = "input";
input.placeholder = "enter input here"
answer.id = "answer";

const types = [
  "",
  "Number",
  "String",
  "Array",
  "Object"
];

const select_type = document.createElement("select");

types.forEach((optionText) => {
  const option = document.createElement("option");
  option.value = optionText;
  option.text = optionText;
  select_type.appendChild(option);
});
select_type[0].value = "";
select_type[0].text = "Select Input Type";



select.addEventListener("change", () => {
  selectedFile = select.options[select.selectedIndex].value;
  console.log("Selected file:", selectedFile);
  resetElement();
  inputs.appendChild(select_type);
});

const num_input = document.createElement("input");
num_input.type = "text";
num_input.placeholder = "enter a number to print no. of elements";
num_input.id = "num_input";

select_type.addEventListener("change", () => {
  selectedType = select_type.options[select_type.selectedIndex].value;
  inputs.appendChild(input);
  num_input.value = "3";
  if (selectedFile === "first.js" || selectedFile === "last.js")
    inputs.appendChild(num_input);
  switch (selectedType) {
    case "Number":
      input.value = "123";
      break;
    case "String":
      input.value = '"ManiKanta"';
      break;
    case "Array":
      input.value = "[1, 2, 3, 4, 5]";
      break;
    case "Object":
      input.value = '{"name":"Mani","gender":"male","age":"20"}';
      break;
  }
  buttons.appendChild(button);
});

const code_div = document.getElementById("code_div");
const button_code = document.createElement("button");
button_code.innerHTML = "Code";

button.onclick = () => {
  answers.classList.add("clicked");
  const input = document.getElementById("input").value;
  console.log(input);
  console.log(selectedFile);
  switch (selectedFile) {
    case "isArray.js":
      answer.innerHTML = "Answer: " + JSON.stringify(is_array(JSON.parse(input)));
      break;
    case "arrayClone.js":
      answer.innerHTML =
        "Answer: " + JSON.stringify(array_clone(JSON.parse(input)));
      break;
    case "first.js":
      const first_num = document.getElementById("num_input").value;
      answer.innerHTML = "Answer: " + JSON.stringify(first(JSON.parse(input), JSON.parse(first_num)));
      break;
    case "last.js":
      const last_num = document.getElementById("num_input").value;
      answer.innerHTML = "Answer: " + JSON.stringify(last(JSON.parse(input), JSON.parse(last_num)));
      break;
    case "arrayToString.js":
      answer.innerHTML =
        "Answer: " + JSON.stringify(array_to_string(JSON.parse(input)));
      break;
    case "insertDashes.js":
      answer.innerHTML =
        "Answer: " + JSON.stringify(insert_dashes(JSON.parse(input)));
      break;
    case "arraySort.js":
      answer.innerHTML =
        "Answer: " + JSON.stringify(array_sort(JSON.parse(input)));
      break;
    case "mostFrequent.js":
      answer.innerHTML =
        "Answer: " + JSON.stringify(most_frequent(JSON.parse(input)));
      break;
    case "swapCase.js":
      answer.innerHTML =
        "Answer: " + JSON.stringify(swap_case(JSON.parse(input)));
      break;
    case "printArray.js":
      answer.innerHTML =
        "Answer: " + JSON.stringify(print_array(JSON.parse(input)));
      break;
    case "sumOfSquares.js":
      answer.innerHTML =
        "Answer: " + JSON.stringify(sum_of_squares(JSON.parse(input)));
      break;
  }
  answers.appendChild(answer);
  if (!code_div.hasChildNodes())
    code_div.appendChild(button_code);
};

const embed = document.createElement("embed");

button_code.onclick = () => {
  embed.src = "Js/" + selectedFile;
  code_div.appendChild(embed);
};

const resetElement = () => {
  select_type.value = "";
  input.remove();
  num_input.remove();
  embed.remove();
  button.remove();
  answer.remove();
  button_code.remove();
};