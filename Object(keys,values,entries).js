'use strict';

let salaries = {
  'Musa': 3500,
  'Sena': 5500,
  'Buse': 3500
}

let sumSalaries = (salaries) => {

  let sum = 0;
  for(let salary of Object.values(salaries)) {
    sum += salary
  }

  return sum;
}

alert( sumSalaries(salaries) );

let count = (obj) => {
  return Object.keys(obj).length;
}

let user = {
  name: 'Musa',
  age: 32
};

alert( count(user) );