



function calcTotal(current, userInput) {
  const currentTracking = document.getElementById(current);
  const currentInput = document.getElementById(userInput);
  const currentValue = parseFloat(currentInput.value);

  if (currentValue >= 0) {
    currentInput.value = "";
    currentInput.placeholder = "Enter net amount"
    const newValue = currentValue + parseFloat(currentTracking.innerHTML);
    currentTracking.innerHTML = (Math.round(newValue * 100) / 100).toFixed(2);
  } else {
    currentInput.value = "";
    currentInput.placeholder = "Please enter a numerical value"
  }
};

// Prevent user from entering more than 2 decimal place values
function validate(e) {
  // stores the initial value in a separate constant t
  const t = e.value;
  // checks whether or not there is "." located within the input
  // if true, it will grab all the characters until "." and then the first 3 characters from "." including "."
  // if false - aka no "." is found, then it will return the original input t
  e.value = (t.indexOf(".") >= 0) ? (t.substr(0, t.indexOf(".")) + t.substr(t.indexOf("."), 3)) : t;
};

// To do - Add custom light mode/dark mode

const themeMode = document.querySelector('#theme-mode');
const root = document.querySelector(':root');


themeMode.addEventListener('click', (e) => {
  const theme = e.target.getAttribute('data-theme');
  
  if (theme == 'light') {
    themeMode.dataset.theme = 'dark';
    themeMode.innerHTML = 'Switch to<br>Light Mode';
    root.style.setProperty('--main-radial-gradient', 'linear-gradient(to bottom, #414345, #232526)');
    root.style.setProperty('--h1-font-color', 'white');
  } else {
    themeMode.dataset.theme = 'light';
    themeMode.innerHTML = 'Switch to<br>Dark Mode';
    root.style.setProperty('--main-radial-gradient', 'linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)');
    root.style.setProperty('--h1-font-color', 'black');
  }
})

// To do - Add number validation - checks whether input is a numerical value or not