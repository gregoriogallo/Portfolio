const calculator = {
    displayValue: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null,
  };
  
function inputDecimal(dot) {
    
    if (!calculator.displayValue.includes(dot)) {
    
      calculator.displayValue += dot;
    }
}

function inputDigit(digit) {
    const { displayValue, waitingForSecondOperand } = calculator;

    if (waitingForSecondOperand === true) {
      calculator.displayValue = digit;
      calculator.waitingForSecondOperand = false;
    } else {
    
    calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
}}

function calculate(firstOperand, secondOperand, operator) {
    if (operator === '+') {
      return firstOperand + secondOperand;
    } else if (operator === '-') {
      return firstOperand - secondOperand;
    } else if (operator === '*') {
      return firstOperand * secondOperand;
    } else if (operator === '/') {
      return firstOperand / secondOperand;
    }
  
    return secondOperand;
  }
  
function updateDisplay() {
    const display = document.querySelector('.calculator-screen');
    
    display.value = calculator.displayValue;
}

function resetCalculator() {
    calculator.displayValue = '0';
    calculator.firstOperand = null;
    calculator.waitingForSecondOperand = false;
    calculator.operator = null;
    console.log(calculator);
  }

function handleOperator(nextOperator) {
    const { firstOperand, displayValue, operator } = calculator
    
    const inputValue = parseFloat(displayValue);

    if (operator && calculator.waitingForSecondOperand)  {
        calculator.operator = nextOperator;
        console.log(calculator);
        return;
      }
  
    if (firstOperand === null && !isNaN(inputValue)) {

      calculator.firstOperand = inputValue;
    }  else if (operator) {
        const result = calculate(firstOperand, inputValue, operator);
    
        calculator.displayValue = String(result);
        calculator.firstOperand = result;
      }
  
    calculator.waitingForSecondOperand = true;
    calculator.operator = nextOperator;
  }
  
updateDisplay();

const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {
  
    const { target } = event;

  if (!target.matches('button')) {
    return;
  }

  if (target.classList.contains('operator')) {
    handleOperator(target.value);
updateDisplay();
    return;
  }

  if (target.classList.contains('decimal')) {
    inputDecimal(target.value);
updateDisplay();
return;
  }

  if (target.classList.contains('all-clear')) {
    resetCalculator();
updateDisplay();
    return;
  }
  inputDigit(target.value);
updateDisplay();
});



  