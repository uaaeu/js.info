'use strict';

let head = {
  glasses: 1
};

let table = {
  pen: 3,
  __proto__: head
};

let bed = {
  sheet: 1,
  pillow: 2,
  __proto__: table
};

let pockets = {
  money: 2000,
  __proto__: bed
};

alert(pockets.pen);
alert(bed.glasses);

let hamster = {
  stomach: [],

  eat(food) {
    this.stomach.push(food);
  }
};

let speedy = {
  __proto__: hamster,
  stomach: []
};

let lazy = {
  __proto__: hamster,
  stomach: []
};

speedy.eat("apple");
alert( speedy.stomach );

alert( lazy.stomach );

function User(name) {
  this.name = name;
}

let user = new User('Musa');
let user2 = new user.constructor('Sena');

alert(user.name);
alert(user2.name);

function Admin(name) {
  this.name = name;
}

Admin.prototype = {
  isAdmin: true
};

let admin = new Admin('Buse');
let admin2 = new admin.constructor('Semine');

alert(admin.name);
alert(admin2.name);

function f() {
  alert("Hello!");
}

Function.prototype.defer = function(ms) {
  setTimeout(this, ms);
}

f.defer(1000);

function f(a, b) {
  alert(a + b);
}

Function.prototype.defer = function(ms) {
  return (...args) => {
    setTimeout(() => this.apply(this, args), ms);
  }
}

f.defer(1000)(1, 2);

let dictionary = Object.create(null, {
  toString: {
    value() {
      return Object.keys(this).join(',');
    }
  }
});


dictionary.apple = "Apple";
dictionary.__proto__ = "test";


for(let key in dictionary) {
  alert(key);
}

alert(dictionary);

