'use strict';

let user = {};

user.name = 'Musa';
user.lastName = 'Yurt';
user.name = 'Sena';

delete user.name;

function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}

let schedule = {};

alert( isEmpty(schedule) );

schedule['8:30'] = 'wake up';

alert( isEmpty(schedule) );


const admin = {
  name: 'Musa'
};

admin.name = 'Sena';

let salaries = {
  Sena: 5500,
  Musa: 3500
}

function sumVal(obj) {
  let sum = 0;
  for (let key in obj) {
    sum += obj[key];
  }
  return sum;
}

alert( sumVal(salaries) );

function multiplyWithTwo(obj) {
  for (let key in obj) {
    if (typeof obj[key] == 'number') {
      obj[key] *= 2;
    }
  }
}

let menu = {
  width: 200,
  height: 300,
  title: 'Menu'
};

multiplyWithTwo(menu);

alert(menu.width);
alert(menu.height);
alert(menu.title);