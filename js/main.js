



function calcTotal(current, userInput) {
  const currentTracking = document.getElementById(current);
  const currentInput = document.getElementById(userInput);
  const currentValue = parseFloat(currentInput.value);

  if (currentValue >= 0) {
    currentInput.value = "";
    const newValue = currentValue + parseFloat(currentTracking.innerHTML);
    currentTracking.innerHTML = (Math.round(newValue * 100) / 100).toFixed(2);
  } else {
    currentInput.value = "";
  }
}

// Prevent user from entering more than 2 decimal place values
function validate(e) {
  // stores the initial value in a separate constant t
  const t = e.value;
  // checks whether or not there is "." located within the input
  // if true, it will grab all the characters until "." and then the first 3 characters from "." including "."
  // if false - aka no "." is found, then it will return the original input t
  e.value = (t.indexOf(".") >= 0) ? (t.substr(0, t.indexOf(".")) + t.substr(t.indexOf("."), 3)) : t;
}

