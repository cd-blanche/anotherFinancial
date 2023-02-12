



function calcIncomeTotal() {

  const currentIncome = document.getElementById('current-income');
  const incomeUserInput = document.getElementById('income-user-input');
  const userInputIncome = parseFloat(incomeUserInput.value);
  const errorText = document.getElementById('income-error-text');

  if (userInputIncome > 0) {
    // resets error visibility
    errorText.style.visibility = "hidden";
    const newIncome = userInputIncome + parseFloat(currentIncome.innerHTML);
    currentIncome.innerHTML = (Math.round(newIncome * 100) / 100).toFixed(2);
    // clears user input
    incomeUserInput.value = "";
  } else {
    // print out error text
    errorText.style.visibility = "visible";
    incomeUserInput.placeholder = "Try again";    
    // clears user input
    incomeUserInput.value = "";
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

