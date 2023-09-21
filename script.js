// Changes value from blank and adds number to the end
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
  } else if (currVal == "") {
    document.getElementById('calc__input').innerHTML = 0;
  } else {
    document.getElementById('calc__input').innerHTML = "";
  }
}

// function clickOperations() {

// }

// function clickEquals() {

// }