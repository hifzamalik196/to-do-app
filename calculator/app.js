let currentInput = ''; 
let currentOperation = ''; 

const display = document.getElementById('display');


function appendNumber(number) {
  currentInput += number;
  display.value = currentInput;
}

function setOperation(operator) {
  if (currentInput === '') return; 
  currentOperation = operator;
  currentInput += ' ' + operator + ' ';  
  display.value = currentInput;
}

function clearDisplay() {
  currentInput = '';
  currentOperation = '';
  display.value = '';
}


function calculate() {
  try {
    
    const result = eval(currentInput);
    currentInput = result.toString(); 
    display.value = currentInput;
  } catch (error) {
    display.value = 'Error'; 
  }
}
