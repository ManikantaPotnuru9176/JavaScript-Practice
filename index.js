const apiUrl =
  "https://asia-south1.gcp.data.mongodb-api.com/app/javascript-practice-kgupp/endpoint/js_50_questions";

// Function to retrieve data from the API endpoint
const retrieveData = async () => {
  try {
    // Make an HTTP GET request to the API endpoint
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error("Request failed with status " + response.status);
    }

    // Retrieve the data from the response
    const data = await response.json();
    console.log(data);
    return data;

    // This code will never execute as it's placed after the return statement
    console.log("Data retrieved and saved to questionsData.js");
  } catch (error) {
    console.error("Error:", error);
  }
};

retrieveData().then((fileNames) => {
  console.log(fileNames);

  const types = ["Number", "String", "Array", "Object"];

  // Create option element
  const createOption = (value, text) => {
    const optionElement = document.createElement("option");
    optionElement.value = value;
    optionElement.text = text;
    return optionElement;
  };

  // Create select element
  const createSelect = () => {
    const selectElement = document.createElement("select");
    return selectElement;
  };

  // Create input element
  const createInput = () => {
    const inputElement = document.createElement("input");
    return inputElement;
  };

  // Get DOM elements
  const fileDropdownDiv = document.getElementById("file_dropdown");
  const inputDiv = document.getElementById("input_div");
  const typeDropdownDiv = document.getElementById("type_dropdown");
  const answerButtonDiv = document.getElementById("answer_button_div");
  const answerDiv = document.getElementById("answer_div");
  const codeButtonDiv = document.getElementById("code_button_div");
  const codeDiv = document.getElementById("code_div");
  const questionDiv = document.getElementById("question_div");
  const fileSelectElement = createSelect();
  const typeSelectElements = [];

  // Add default options at the beginning
  const defaultFileOption = createOption("", "Select Question");
  fileSelectElement.appendChild(defaultFileOption);

  // Create file options and load scripts
  fileNames.forEach((file) => {
    const { name, inputCount } = file;
    const fileOptionElement = createOption(name, name);
    fileSelectElement.appendChild(fileOptionElement);

    if (name !== "") {
      const script = document.createElement("script");
      script.src = "./js/" + name;
      document.body.appendChild(script);
    }
  });

  // Add file select element to the DOM
  fileDropdownDiv.appendChild(fileSelectElement);

  // Function to reset the form
  const resetForm = () => {
    questionDiv.innerHTML = "";

    inputDiv.innerHTML = "";

    // Remove type dropdown
    typeDropdownDiv.innerHTML = "";

    // Remove answer button and answer display
    answerButtonDiv.innerHTML = "";
    answerDiv.innerHTML = "";

    answerDiv.classList.remove("clicked");

    // Remove code button and code display
    codeButtonDiv.innerHTML = "";
    codeDiv.innerHTML = "";
  };

  // Event listener for file select element
  fileSelectElement.addEventListener("change", () => {
    resetForm();

    const selectedFile = fileSelectElement.value;

    if (selectedFile !== "") {
      const selectedFileObj = fileNames.find(
        (file) => file.name === selectedFile
      );

      const questionElement = document.createElement("h4");
      questionElement.innerHTML = selectedFileObj.question;
      questionDiv.appendChild(questionElement);

      const { inputCount } = selectedFileObj;

      for (let i = 0; i < inputCount; i++) {
        const inputElement = createInput();
        const typeSelectElement = createSelect();
        const defaultTypeOption = createOption("", "Select Input Type");
        inputElement.placeholder =
          "Select input type to display basic input...";
        typeSelectElement.appendChild(defaultTypeOption);
        typeSelectElements.push(typeSelectElement);

        inputDiv.appendChild(typeSelectElement);
        inputDiv.appendChild(inputElement);

        // Create type options
        types.forEach((type) => {
          const typeOptionElement = createOption(type, type);
          typeSelectElement.appendChild(typeOptionElement);
        });

        // Set default input based on selected type
        typeSelectElement.addEventListener("change", () => {
          answerButtonDiv.innerHTML = "";
          answerDiv.innerHTML = "";
          answerDiv.classList.remove("clicked");

          // Remove code button and code display
          codeButtonDiv.innerHTML = "";
          codeDiv.innerHTML = "";
          const selectedType = typeSelectElement.value;
          if (selectedType === "Number") {
            inputElement.value = 32123;
          } else if (selectedType === "String") {
            inputElement.value = '"ManiKanta"';
          } else if (selectedType === "Array") {
            inputElement.value = "[1, 11, 2, 22, 3, 33, 4, 44, 5, 55]";
          } else if (selectedType === "Object") {
            inputElement.value =
              '{"name": "mani", "age": "21", "gender": "male"}';
          }
          checkInputsFilled();
        });
      }
    }
  });

  // Arrow function to check if all inputs are filled and valid
  const checkInputsFilled = () => {
    const inputElements = inputDiv.querySelectorAll("input");
    const typeSelectElements = inputDiv.querySelectorAll("select");

    const allInputsFilled = Array.from(inputElements).every(
      (inputElement) => inputElement.value.trim() !== ""
    );

    const allInputsValid = Array.from(typeSelectElements).every(
      (typeSelectElement, index) => {
        const inputElement = inputElements[index];
        const selectedType = typeSelectElement.value;
        const inputValue = inputElement.value.trim();

        // Arrow functions for input validation
        const isNumberInputValid = (value) => !isNaN(Number(value));
        const isStringInputValid = (value) => /^(['"])([^\1]*)\1$/.test(value);
        const isArrayInputValid = (value) => {
          try {
            const parsedInput = JSON.parse(value);
            return Array.isArray(parsedInput);
          } catch (error) {
            return false;
          }
        };
        const isObjectInputValid = (value) => {
          try {
            const parsedInput = JSON.parse(value);
            return (
              typeof parsedInput === "object" && !Array.isArray(parsedInput)
            );
          } catch (error) {
            return false;
          }
        };

        if (selectedType === "") {
          return false;
        } else if (selectedType === "Number") {
          return isNumberInputValid(inputValue);
        } else if (selectedType === "String") {
          return isStringInputValid(inputValue);
        } else if (selectedType === "Array") {
          return isArrayInputValid(inputValue);
        } else if (selectedType === "Object") {
          return isObjectInputValid(inputValue);
        }

        return true;
      }
    );

    if (allInputsFilled && allInputsValid) {
      // Create and display the answer button
      const answerButton = document.createElement("button");
      answerButton.innerText = "Run";
      answerButton.addEventListener("click", displayAnswer);
      answerButtonDiv.innerHTML = "";
      answerButtonDiv.appendChild(answerButton);
    } else {
      answerButtonDiv.innerHTML = "";
      answerDiv.innerHTML = "";
    }
  };

  // Add event listener to input elements
  inputDiv.addEventListener("input", checkInputsFilled);

  // Function to display the answer
  const displayAnswer = () => {
    const selectedFile = fileSelectElement.value;
    const inputElements = inputDiv.querySelectorAll("input");

    // Find the selected file object
    const selectedFileObj = fileNames.find(
      (file) => file.name === selectedFile
    );
    if (!selectedFileObj) return;

    // Get the corresponding function name and input count
    const { name, inputCount } = selectedFileObj;

    const functionName = name
      .slice(0, name.length - 3)
      .split("")
      .map((ele) => (ele.toUpperCase() === ele ? "_" + ele.toLowerCase() : ele))
      .join("");

    // Collect input values from input elements
    const inputValues = Array.from(inputElements)
      .slice(0, inputCount)
      .map((inputElement) => inputElement.value.trim());

    // Create a <code> element to display the result
    const resultElement = document.createElement("code");

    let result;
    try {
      // Call the function with the input values
      if (inputValues.length === 1)
        result = eval(functionName + "(JSON.parse(...inputValues))");
      else if (inputValues.length === 2)
        result = eval(
          functionName +
            "(JSON.parse(inputValues[0]), JSON.parse(inputValues[1]))"
        );
      else if (inputValues.length === 3)
        result = eval(
          functionName +
            "(JSON.parse(inputValues[0]), JSON.parse(inputValues[1]), JSON.parse(inputValues[2]))"
        );
    } catch (e) {
      result = "Error: " + e.message;
      resultElement.style.color = "red";
    }

    resultElement.textContent = JSON.stringify(result);

    // Append the result element to the answer div
    answerDiv.classList.add("clicked");
    answerDiv.innerHTML = "";
    answerDiv.appendChild(resultElement);

    if (!codeButtonDiv.hasChildNodes()) {
      // Create a new code button
      const newCodeButton = document.createElement("button");
      newCodeButton.innerText = "Code";
      newCodeButton.addEventListener("click", displayCode);

      // Append the new code button to the answer div
      codeButtonDiv.appendChild(newCodeButton);
    }
  };

  const displayCode = () => {
    const selectedFile = fileSelectElement.value;

    // Find the selected file object
    const selectedFileObj = fileNames.find(
      (file) => file.name === selectedFile
    );
    if (!selectedFileObj) return;

    // Get the file name and construct the file path
    const { name } = selectedFileObj;
    const filePath = "./js/" + name;

    // Create an <embed> element to display the code
    const embed = document.createElement("embed");
    embed.src = filePath;
    embed.type = "text/javascript";

    // Append the <embed> element to the code div
    codeDiv.innerHTML = "";
    codeDiv.appendChild(embed);
  };
});
