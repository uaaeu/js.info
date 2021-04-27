'use strict';

// let obj = {};

// function A() { return obj; }
// function B() { return obj; }

// alert ( new A() == new B() );

// function Calculator() {
//   this.read = function() {
//     this.a = +prompt('a?', '');
//     this.b = +prompt('b?', '');
//   };
//   this.sum = function() {
//     return this.a + this.b;
//   };
//   this.mul = function() {
//     return this.a * this.b;
//   };
// }

// let calculator = new Calculator();
// calculator.read();

// alert( 'sum=' + calculator.sum() );
// alert( 'mul=' + calculator.mul() );

function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = function() {
    this.value += +prompt('value?', 0);
  };
}

let accumulator = new Accumulator(1);

accumulator.read();
accumulator.read();

alert(accumulator.value);