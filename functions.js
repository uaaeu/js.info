'use strict';

function yasKontrolu(yas) {
  if (yas > 18) {
    return true;
  } else {
    return confirm('Ebeveynlerin izin verdi mi?');
  }
}

let userAge = +prompt('age?', '');

function checkAge(age) {
  age > 18 ? true : confirm('do you have your parents permission?');
}

checkAge(userAge);

function checkAge(age) {
  return age > 18 || confirm('do you have your parents permission?');
}

checkAge(userAge);

function min(a, b) {
  if (a < b) return a;
  else return b;
}

function min(a, b) {
  return a < b ? a : b;
}

alert(min(2, 5));
alert(min(3, 1));
alert(min(2, 2));

function getPower(x, n) {
  return x ** n;
}

let x = prompt('x?', '');
let n = prompt('n?', '');

if (n < 1) {
  alert(`please enter above 0 for n`);
} else {
  alert(getPower(x, n));
}

