'use strict';

let styles = ['Jazz', 'Blues'];

styles.push('Rock-n-Roll');

styles[Math.floor((styles.length - 1) / 2)] = 'Classics';

alert( styles.shift() );

styles.unshift('Rap', 'Reggae');

alert(styles);

let sumInput = () => {
  let numbers = [];

  while(true) {
    let value = prompt('enter a number', 0);

    if (value == '' || value == null || !isFinite(value)) break;

    numbers.push(value);
  }

  let result = 0
  for (let number of numbers) {
    result += +number;
  }
  return result;
}

alert( sumInput() );

let getMaxSubSum = (arr) => {
  let maxSum = 0;

  for (let i = 0; i < arr.length; i++) {
    let sumFixedStart = 0;
    for (let j = i; j < arr.length; j++) {
      sumFixedStart += arr[j];
      maxSum = Math.max(maxSum, sumFixedStart);
    }
  }

  return maxSum;
}

alert( getMaxSubSum([-1, 2, 3, -9]) );
alert( getMaxSubSum([-1, 2, 3, -9, 11]) );
alert( getMaxSubSum([-2, -1, 1, 2]) );
alert( getMaxSubSum([1, 2, 3]) );
alert( getMaxSubSum([100, -9, 2, -3, 5]) );

let getMaxSubSumShort = (arr) => {
  let maxSum = 0;
  let partialSum = 0;

  for (let item of arr) {
    partialSum += item;
    maxSum = Math.max(maxSum, partialSum);
    if (partialSum < 0) partialSum = 0;
  }

  return maxSum;
}

alert( getMaxSubSumShort([-1, 2, 3, -9]) );
alert( getMaxSubSumShort([-1, 2, 3, -9, 11]) );
alert( getMaxSubSumShort([-2, -1, 1, 2]) );
alert( getMaxSubSumShort([100, -9, 2, -3, 5]) );
alert( getMaxSubSumShort([1, 2, 3]) );
alert( getMaxSubSumShort([-1, -2, -3]) );

let camelize = (str) => {
  return str
    .split('-')
    .map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))
    .join('')
}

alert( camelize('background-color'));

let filterRange = (arr, a, b) => {
  return arr.filter(num => num >= a && num <= b);
}

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert(filtered);
alert(arr);

let filterRangeInPlace = (arr, a, b) => {

  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];

    if (val < a || val > b) {
      arr.splice(i, 1);
      i--;
    }
  }

}

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4);

alert(arr);

let compareNumeric = (a, b) => b - a;

let arr = [5, 2, 1, -10, 8];

alert( arr.sort(compareNumeric) );

let copySorted = (arr) => arr.slice().sort();

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

alert( sorted );
alert( arr );

function Calculator() {

  let methods = {
    '-': (a, b) => a - b,
    '+': (a, b) => a + b
  };

  this.calculate = (str) => {
    
    let split = str.split(' '),
      a = +split[0],
      op = split[1],
      b = +split[2]

    if (!methods[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }

    return methods[op](a, b);
  }

  this.addMethod = (op, func) => {
    methods[op] = func
  };
}

let calc = new Calculator;

alert( calc.calculate('3 + 7') );

let powerCalc = new Calculator;
powerCalc.addMethod('*', (a, b) => a * b);
powerCalc.addMethod('/', (a, b) => a / b);
powerCalc.addMethod('**', (a, b) => a ** b);

alert( powerCalc.calculate('3 ** 2') );

let musa  = { name: 'Musa', age: 32 };
let sena  = { name: 'Sena', age: 29 };
let buse  = { name: 'Buse', age: 27 };

let users = [ musa, sena, buse ];

let names = users.map(user => user.name);

alert( names );

let musa  = { name: 'Musa', lastName: 'Yurt', id: 1 };
let sena  = { name: 'Sena', lastName: 'Tan Yurt', id: 2 };
let buse  = { name: 'Buse', lastName: 'Yurt', id: 3 };

let users = [ musa, sena, buse ];

let usersMapped = users.map(user => ({
  fullName: `${user.name} ${user.lastName}`,
  id: user.id
}));

alert( usersMapped[1].fullName );

let sortByAge = (arr) => {
  arr.sort((a, b) => a.age - b.age);
}

let musa  = { name: 'Musa', age: 32 };
let sena  = { name: 'Sena', age: 29 };
let buse  = { name: 'Buse', age: 27 };

let users = [ musa, buse, sena ];
console.log(users);

sortByAge(users);
console.log(users);

alert(users[0].name);

let shuffle = (arr) => {
  arr.sort(() => Math.random() - 0.5);
}

let shuffleFY = (arr) => {
  for(let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

let averageAge = (arr) => {
  return arr.reduce((sum, current) => sum + current.age, 0) / arr.length;
}

let musa  = { name: 'Musa', age: 32 };
let sena  = { name: 'Sena', age: 29 };
let buse  = { name: 'Buse', age: 27 };

let users = [ musa, buse, sena ];

alert( averageAge(users) );

let unique = (arr) => {
  let result = [];

  for(let str of arr){
    if(!result.includes(str)){
      result.push(str);
    }
  }

  return result;
}