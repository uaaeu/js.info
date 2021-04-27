'use strict';

let a = +prompt('a?', '');
let b = +prompt('b?', '');

alert ( a + b );

function readNumber() {
  let a;

  do {
    a = prompt('enter a number?', '');
  } while( !isFinite(a) );

  if (a === null || a === '') return null;

  return +a;
}

alert(`Read: ${readNumber()}`);

let random = (min, max) => {
  return min + Math.random() * (max - min);
}

alert( random(1, 5) );
alert( random(1, 5) );
alert( random(1, 5) );

let randomInteger = (min, max) => {
  return Math.floor(min + Math.random() * (max - min + 1));
}

alert( randomInteger(1, 5) );
alert( randomInteger(1, 5) );
alert( randomInteger(1, 5) );