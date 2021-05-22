'use strict';

let printNumbers = (from, to) => {
  let current = from;

  let timerId = setInterval(() => {
    alert(current);
    if (current == to) {
      clearInterval(timerId);
    }
    current++;
  }, 1000);
  console.log(timerId);
}

printNumbers(5,10);

let printNumbersTimeout = (from, to) => {
  let current = from;

  setTimeout(function go() {
    alert(current);
    if (current < to) {
      setTimeout(go, 1000);
    }
    current++;
  }, 1000);
}

printNumbersTimeout(5, 8);

let printNumbersInterval = (from, to) => {
  let current = from;

  let go = () => {
    alert(current);
    if (current == to) {
      clearInterval(timerId);
    }
    current++;
  }
  go();
  let timerId = setInterval(go, 1000);
}

printNumbersInterval(5, 8);

let i = 0;

let start = Date.now();

let timer = setInterval(count, 0);

let count = () => {

  for(let j = 0; j < 1000000; j++) {
    i++;
  }

  if (i == 1000000000) {
    alert((Date.now() - start) + ' ms passed');
    clearInterval(timer);
  }
}


