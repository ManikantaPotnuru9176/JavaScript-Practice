/*
- This JavaScript code is responsible for populating a
dropdown menu with JavaScript practice questions.
- When a question is selected, it dynamically generates
input fields based on the selected question and input type.
- The code also includes an "Answer" button that performs actions
based on the selected question and input, and displays the answer.
- Additionally, there is a "Code" button that displays the
code file corresponding to the selected question.
*/

// Get the list of file names for JavaScript practice questions
const fileNames = [
  "", // Placeholder option
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
  "sumAndProduct.js",
  "removeDuplicates.js",
  "ordinalWay.js",
  "leapYearRange.js",
  "arrayShuffle.js",
  "binarySearch.js",
  "sumOfTwoArrays.js",
  "duplicateValues.js",
  "flattenNested.js",
];

const file_dropdown = document.getElementById("file_dropdown");
// Get the "dropdown" select element from the HTML code
const select = document.createElement("select");

// Populate the dropdown select element with options
fileNames.forEach((optionText) => {
  const option = document.createElement("option");
  option.value = optionText;
  option.text = optionText;
  select.appendChild(option);
});

// Set the initial value and text for the first option in the dropdown
select[0].value = "";
select[0].text = "Select Question";

file_dropdown.appendChild(select);

// Get the necessary HTML elements for input, buttons, and answers
const inputs = document.getElementById("input_div");
const buttons = document.getElementById("button_div");
const answers = document.getElementById("answer_div");

// Create input, button, and answer elements
const input = document.createElement("input");
const button = document.createElement("button");
const answer = document.createElement("p");

// Set attributes and values for the input, button, and answer elements
button.innerHTML = "Answer";
input.type = "text";
input.id = "input";
input.placeholder = "Enter input here";
answer.id = "answer";

// Create an array of input types for the second dropdown select element
const types = [
  "", // Placeholder option
  "Number",
  "String",
  "Array",
  "Object",
];

const type_dropdown = document.getElementById("type_dropdown");
// Create the second dropdown select element for selecting input types
const select_type = document.createElement("select");

// Populate the input type dropdown select element with options
types.forEach((optionText) => {
  const option = document.createElement("option");
  option.value = optionText;
  option.text = optionText;
  select_type.appendChild(option);
});

// Set the initial value and text for the first option in the input type dropdown
select_type[0].value = "";
select_type[0].text = "Select Input Type";

// Event listener for the "dropdown" select element
select.addEventListener("change", () => {
  selectedFile = select.options[select.selectedIndex].value;
  console.log("Selected file:", selectedFile);
  resetElement();
  type_dropdown.appendChild(select_type);
});

// Create an additional input element for certain practice questions
const num_input = document.createElement("input");
num_input.type = "text";
num_input.placeholder = "Enter a number to print the number of elements";
num_input.id = "num_input";

// Event listener for the input type dropdown select element
select_type.addEventListener("change", () => {
  selectedType = select_type.options[select_type.selectedIndex].value;
  inputs.appendChild(input);

  // Add an additional input element for specific practice questions
  if (selectedFile === "first.js" || selectedFile === "last.js") {
    num_input.value = "3";
    inputs.appendChild(num_input);
  }

  // Set default values for input elements based on selected question and input type
  if (selectedFile === "leapYearRange.js") {
    num_input.value = "2023";
    inputs.appendChild(num_input);
  }
  switch (selectedType) {
    case "Number":
      selectedFile === "leapYearRange.js"
        ? (input.value = "1900")
        : (input.value = "123");
      break;
    case "String":
      selectedFile === "leapYearRange.js"
        ? (input.value = "1900")
        : (input.value = '"ManiKanta"');
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

// Get the code_div element from the HTML code
const code_div = document.getElementById("code_div");
// Get the input_error_div element from the HTML code
const input_error_div = document.getElementById("input_error_div");
// Get the dropdown_error_div element from the HTML code
const dropdown_error_div = document.getElementById("dropdown_error_div");

// Create a "Code" button element
const button_code = document.createElement("button");
button_code.innerHTML = "Code";

// Event listener for the "Answer" button
button.onclick = () => {
  answers.classList.add("clicked");
  const input = document.getElementById("input").value;
  console.log(input);
  console.log(selectedFile);

  // Perform actions based on the selected file and input
  switch (selectedFile) {
    case "isArray.js":
        answer.innerHTML =
          "Answer: " + JSON.stringify(is_array(JSON.parse(input)));
      break;
    case "arrayClone.js":
      answer.innerHTML =
        "Answer: " + JSON.stringify(array_clone(JSON.parse(input)));
      break;
    case "first.js":
      const first_num = document.getElementById("num_input").value;
      answer.innerHTML =
        "Answer: " +
        JSON.stringify(first(JSON.parse(input), JSON.parse(first_num)));
      break;
    case "last.js":
      const last_num = document.getElementById("num_input").value;
      answer.innerHTML =
        "Answer: " +
        JSON.stringify(last(JSON.parse(input), JSON.parse(last_num)));
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
    case "sumAndProduct.js":
      answer.innerHTML =
        "Answer: " + JSON.stringify(sum_and_product(JSON.parse(input)));
      break;
    case "removeDuplicates.js":
      answer.innerHTML =
        "Answer: " + JSON.stringify(remove_duplicates(JSON.parse(input)));
      break;
    case "ordinalWay.js":
      answer.innerHTML =
        "Answer: " + JSON.stringify(ordinal_way(JSON.parse(input)));
      break;
    case "leapYearRange.js":
      const end = document.getElementById("num_input").value;
      answer.innerHTML =
        "Answer: " +
        JSON.stringify(leap_year_range(JSON.parse(input), JSON.parse(end)));
      break;
    case "arrayShuffle.js":
      answer.innerHTML =
        "Answer: " + JSON.stringify(array_shuffle(JSON.parse(input)));
      break;
    case "binarySearch.js":
      answer.innerHTML =
        "Answer: " + JSON.stringify(binary_search(JSON.parse(input)));
      break;
    case "sumOfTwoArrays.js":
      answer.innerHTML =
        "Answer: " + JSON.stringify(sum_of_two_arrays(JSON.parse(input)));
      break;
    case "duplicateValues.js":
      answer.innerHTML =
        "Answer: " + JSON.stringify(duplicate_values(JSON.parse(input)));
      break;
    case "flattenNested.js":
      answer.innerHTML =
        "Answer: " + JSON.stringify(flatten_nested_array(JSON.parse(input)));
      break;
  }

  // Append the answer to the answer_div element
    answers.appendChild(answer);

    // Add the "Code" button if it's not already present
    if (!code_div.hasChildNodes()) code_div.appendChild(button_code);
};

// Create an embed element for displaying the code file
const embed = document.createElement("embed");

// Event listener for the "Code" button
button_code.onclick = () => {
  embed.src = "Js/" + selectedFile;
  code_div.appendChild(embed);
};

// Function to reset input elements
const resetElement = () => {
  select_type.value = "";
  input.remove();
  num_input.remove();
  embed.remove();
  button.remove();
  answer.remove();
  button_code.remove();
};
