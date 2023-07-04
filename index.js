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
let selectedFile;
button.innerHTML = "Answer";
input.type = "text";
input.id = "input";

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
select_type[0].text = "Select Type";



select.addEventListener("change", () => {
  selectedFile = select.options[select.selectedIndex].value;
  console.log("Selected file:", selectedFile);
  resetElement();
  inputs.appendChild(input);
  inputs.appendChild(select_type);
  buttons.appendChild(button);
});

select_type.addEventListener("change", () => {
  selectedFile = select_type.options[select_type.selectedIndex].value;
  input.value = selectedFile;
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
      if (input.contains(","))
        answers.innerHTML = "Answer: " + is_array(input.split(","));
      else if (input.contains(":"))
        answers.innerHTML = "Answer: " + is_array(JSON.parse(input));
      else
        answers.innerHTML = "Answer: " + is_array(input);
      break;
    case "arrayClone.js":
      break;
    case "first.js":
      break;
    case "last.js":
      break;
    case "arrayToString.js":
      break;
    case "insertDashes.js":
      break;
    case "arraySort.js":
      answers.innerHTML = "Answer: " + array_sort(input.split(","));
      break;
    case "mostFrequent.js":
      break;
    case "swapCase.js":
      break;
    case "printArray.js":
      break;
    case "sumOfSquares.js":
      break;
  }
  code_div.appendChild(button_code);
};

const embed = document.createElement("embed");

button_code.onclick = () => {
  embed.src = "Js/" + selectedFile;
  code_div.appendChild(embed);
};

const resetElement = () => {
  input.value = "";
  input_1.value = "";
  answers.innerHTML = "";
  embed.remove();
  button_code.remove();
};