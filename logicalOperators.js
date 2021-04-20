'use strict';

// let age;
// if (age < 14 || age > 90);
// if (!(age >= 14 && age <= 90));
// if (age >= 14 && age <= 90);


let user = prompt('Who are you?', '');

if (user == 'admin') {
    let password = prompt('Password?' ,'');
    if (password == 'themaster') {
        alert('Welcome!');
    } else if (password == '' || password == null) {
        alert('Canceled');
    } else {
        alert('Wrong Password');
    }
} else if (user == '' || user == null) {
    alert('Canceled');
} else {
    alert('I dont know you');
}