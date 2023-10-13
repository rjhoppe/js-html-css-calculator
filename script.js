// Working
function clickNumbers(val) {
  const input = document.getElementById('calc__input').innerHTML;

  if (input === "") {
    document.getElementById('calc__input').innerHTML = val
  } else {
      if (input.length < 8) {
        transVal = input.toString() + val;
        document.getElementById('calc__input').innerHTML = parseInt(transVal);
      } 
  }
}

// Working
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

// Working 
function calcInit() {
  let numOne = document.getElementById('calc__input').innerHTML;
  console.log('numOne is equal to:', document.getElementById('calc__input').innerHTML)
  document.getElementById('calc__input').innerHTML = 0;
  document.getElementById('equals').addEventListener('click', () =>
    equalOperation(numOne, operation), { once: true }
  );
}

function equalOperation(numOne, operation) {
  console.log('numTwo is equal to:', document.getElementById('calc__input').innerHTML)
  let numTwo = document.getElementById('calc__input').innerHTML;
  switch (operation) {
    case 'sum':
      let sum = parseInt(numOne)+parseInt(numTwo);
      document.getElementById('calc__input').innerHTML = sum;
      break;
    // Add other case statements below
    case 'sub':
      sub = parseInt(numOne) - parseInt(numTwo);
      document.getElementById('calc__input').innerHTML = sub;
      break;
    case 'multiply':
      multiply = parseInt(numOne)*parseInt(numTwo);
      document.getElementById('calc__input').innerHTML = multiply;
      break;
    case 'division':
      division = parseInt(numOne)/parseInt(numTwo);
      document.getElementById('calc__input').innerHTML = division;
      break;
  }

}