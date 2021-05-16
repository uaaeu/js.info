'use strict';

function makeCounter() {
  
  function counter() {
    return ++counter.count;
  };

  counter.count = 0;
  counter.set = value => counter.count = value;
  counter.decrease = () => --counter.count;

  return counter;
}

let counter = makeCounter();

alert(counter());
alert(counter());
alert(counter());
alert(counter.set(10));
alert(counter.decrease());
alert(counter.decrease());

function sum(a) {

  let currentSum = a;

  function f(b) {
    currentSum +=b;
    return f;
  }

  f.toString = function() {
    return currentSum;
  };

  return f;
}

alert(sum(1)(2)(-1)(-2));