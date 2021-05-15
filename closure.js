'use strict';

let sum = (a) => {
  return function(b) {
    return a + b;
  };
}

alert(sum(3)(5));
alert(sum(2)(-5));

let between = (a, b) => {
  return x => (x >= a && x <= b);
}

let arr = [1, 2, 3, 4, 5, 6, 7];

alert(arr.filter(between(3,5)));

let inArray = (arr) => {
  return x => arr.includes(x);
}

alert(arr.filter(inArray([1, 2, 10])));

let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" }
];

let byField = (fieldName) => {
  return (a, b) => a[fieldName] > b[fieldName] ? 1 : -1;
}

users.sort(byField('name'));
alert(users[0].name);
users.sort(byField('age'));
alert(users[0].name);

function makeArmy() {
  let shooters = [];

  let i = 0;
  while (i < 10) {
    let j = i;
    let shooter = function() {
      alert( j );
    };
    shooters.push(shooter);
    i++;
  }

  return shooters;
}

let army = makeArmy();

army[0]();
army[1]();
army[2]();

let makeArmyFor = () => {
  let shooters = [];

  for(let i = 0; i <= 10; i++) {
    let shooter = () => {
      alert(i);
    };
    shooters.push(shooter);
  }

  return shooters;
}

let army = makeArmyFor();

army[0]();
army[1]();
army[2]();