// Keydown functionality
document.addEventListener('keydown', (event) => {
  let keyName = event.key;
  console.log(keyName)
  
  if (keyName == '+') { 
    operation = 'sum';
    calcInit()
  } else if (keyName == '-' ) { 
    operation = 'sub';
    calcInit()
  } else if (keyName == 'x' ) { 
    operation = 'multiply';
    calcInit()
  } else if (keyName == '/' ) { 
    operation = 'division';
    calcInit()
  } else {
    val = keyName
    clickNumbers(val)
  }

  event.preventDefault();

}, false);


function clickNumbers(val) {
  const input = document.getElementById('calc__input').innerHTML;
  if (input === "") {
    document.getElementById('calc__input').innerHTML = val
  } else if (input.includes(".")) {
    transVal = input.concat(val);
    document.getElementById('calc__input').innerHTML = parseFloat(transVal);
  } else {
      if (input.length < 8) {
        transVal = input.toString() + val;
        document.getElementById('calc__input').innerHTML = parseInt(transVal);
      } 
  }
}

function clickClear() {
  const currVal = document.getElementById('calc__input').innerHTML;
  if (currVal > 0) {
    document.getElementById('calc__input').innerHTML = 0;
    numOne = 0;
    numTwo = 0;
  } else if (currVal == "") {
    document.getElementById('calc__input').innerHTML = 0;
  } else {
    document.getElementById('calc__input').innerHTML = "";
  }
}

// Handles decimal input
function makeFloat() {
  let currNum = document.getElementById('calc__input').innerHTML;
  currNum = currNum.toString();
  currNum = currNum.concat(".");
  document.getElementById('calc__input').innerHTML = currNum;
}

function calcInit() {
  let numOne = document.getElementById('calc__input').innerHTML;
  // console.log('numOne is equal to:', document.getElementById('calc__input').innerHTML)
  document.getElementById('calc__input').innerHTML = 0;
  document.getElementById('equals').addEventListener('click', () =>
    equalOperation(numOne, operation), { once: true }
  );
}

function equalOperation(numOne, operation) {
  // console.log('numTwo is equal to:', document.getElementById('calc__input').innerHTML)
  let numTwo = document.getElementById('calc__input').innerHTML;
  switch (operation) {
    case 'sum':
      let sum = parseFloat(numOne)+parseFloat(numTwo);
      check = sum.toString()
      if (check.length > 7) {
        document.getElementById('calc__input').innerHTML = sum;
        break;
      }
      document.getElementById('calc__input').innerHTML = sum;
      break;
    case 'sub':
      let sub = parseInt(numOne) - parseInt(numTwo);
      document.getElementById('calc__input').innerHTML = sub;
      break;
    case 'multiply':
      let multiply = parseFloat(numOne)*parseFloat(numTwo);
      check = multiply.toString();
      if (check.length > 7) {
        document.getElementById('calc__input').innerHTML = multiply.toFixed(6);
        break;
      }
      document.getElementById('calc__input').innerHTML = multiply;
      break;
    case 'division':
      if (parseFloat(numTwo) === 0) {
        alert('C\'mon... why would you want to do that?')
        break;
      } else {
        let division = parseFloat(numOne)/parseFloat(numTwo);
        check = division.toString();
        if (check.length > 7) {
          document.getElementById('calc__input').innerHTML = division.toFixed(6);
          break;
        }
        document.getElementById('calc__input').innerHTML = division;
        break;
      }
  }

}