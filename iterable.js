'use strict';

let range = {
  start: 1,
  end: 5,

  [Symbol.iterator]() {
    this.current = this.start;
    return this;
  },

  next() {
    if (this.current <= this.end) {
      return { done: false, value: this.current++ };
    } else {
      return { done: true };
    }
  }
};

for(let num of range) {
  alert(num); // 1, 2, 3, 4, 5
}

for(let char of 'test') {
  alert(char); // t, e, s, t
}

let str = 'Hello';

let iterator = str[Symbol.iterator]();

while(true) {
  let result = iterator.next();
  if(result.done) break;
  alert(result.value); // H, e, l, l, o
}

let arrayLike = {
  0: 'Hello',
  1: 'World',
  length: 2
};

let arr = Array.from(arrayLike);
alert(arr.pop()); // 'World'

let arr = Array.from(range);
alert(arr); // 1, 2, 3, 4, 5

let arr = Array.from(range, num => num * num);
alert(arr); // 1, 4, 9, 16, 25

