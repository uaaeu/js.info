'use strict';

let calculator = {
  read() {
    this.x = +prompt('x?', '');
    this.y = +prompt('y?', '');
  },
  sum() {
    return this.x + this.y;
  },
  mul() {
    return this.x * this.y;
  }
}

calculator.read();

alert( calculator.sum() );
alert( calculator.mul() );

// chaining
let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep() {
    alert( this.step );
    return this;
  }
}

ladder.up().up().down().showStep();