'use strict';

let user = {
  name: 'Musa',
  years: 32
};

let {name, years: age, isAdmin = false} = user;

alert( name );
alert( age );
alert( isAdmin );

let topSalary = (salaries) => {
  let topSalary = 0;
  let topPaid = null;

  for(let [person, salary] of Object.entries(salaries)) {
    if (salary > topSalary) {
      topSalary = salary;
      topPaid = person;
    }
  }

  return topPaid;
}

let salaries = {
  'Musa': 3500,
  'Sena': 5500,
  'Buse': 3500
}

alert( topSalary(salaries) );