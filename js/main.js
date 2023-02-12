





function calcIncomeTotal() {
  const currentIncome = document.getElementById('current-income');
  const userInput = document.getElementById('user-input');
  const userInputIncome = parseFloat(userInput.value);
  const errorText = document.getElementById('income-error-text');

  if (userInputIncome > 0) {
    errorText.style.display = "none";
    const newIncome = userInputIncome + parseFloat(currentIncome.innerHTML);
    currentIncome.innerHTML = String(newIncome);
  } else {
    // print out error text
    errorText.style.display = "block";
    userInput.placeholder = "Please enter a valid number.";    
    // remove user input
    userInput.value = "";
  }


  // to do
  // always end in .xx cents
}