'use strict';

// TYPE CONVERSIONS
// ToString
let num = 123;
String(num); // '123'

let value = true;
String(value); // 'true'

// ToNumber
let str = '123';
Number(str); // 123

Number(undefined); // NaN
Number(null); // 0
Number(true); // 1
Number(false); // 0
Number('   123   '); // 123

// ToBoolean
Boolean(1); // true
Boolean(0); // false
Boolean('text'); // true
Boolean('0'); // true
Boolean(' '); // true
