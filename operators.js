'use strict';

// unary
let x = 1;
x = -x; // -1

// binary
let x = 1, y = 3;
y - x; // 2

// string binary
let s1 = 'my';
let s2 = 'string';
s1 + s2; // 'mystring

let s3 = '1';
let n1 = 2;
s3 + n1; // '12'
n1 - s3; // 1
n1 / s3; // 2

// unary +
let x = 1;
x = +x; // 1

let bool = true;
bool = +bool // 1

let s4 = '';
s4 = +s4; // 0

let apple = '2';
let orange = '3';
apple + orange; // '23'
+apple + +orange; // 5
Number(apple) + Number(orange); // 5

// assignment
let x = 2 * 2 + 1; // 5

let a, b, c;
a = b = c = 2 + 2; // a = b = c = 4

let a = 1;
let b = 2;
let c = 3 - (a = b + 1); // a = 3, c = 0

// modulus
let x = 5 % 2; // 1

//power
let x = 3 ** 2; // 9

// increment/decrement
let x = 3;
x++; // 4
x--; // 3

let counter = 1;
2 * ++counter; // 4

counter = 1;
2 * counter++ // 2

// modify in place
let n = 2;
n = n + 3; // 5
n = n * 2; // 10

n = 2;
n += 3; // 5
n *= 2; // 10

n = 2;
n *= 3 + 2; // 10