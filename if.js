'use strict';

// if/else
let ecma = prompt('What is the official name of JavaScript?', '');

if (ecma == 'ECMAScript') {
    alert('Right!');
} else {
    alert('You dont know? ECMAScript!');
}

let a = prompt('a = ?', '');
let b = prompt('b = ?', '');

+a + +b < 4 ? alert('low') : alert('high');

let message;
let entry = prompt('what is your status?', '');
entry == 'user' ? message = 'hello' : 
entry == 'admin' ? message = 'welcome admin' :
message = 'forbidden';

alert(message);