'use strict';

for (let i = 2; i <= 10; i++) {
    if (!(i % 2)) alert(i);
}

let i = 0;
while(i < 3) {
    alert(`number ${i}`);
    i++;
}

let number;

do {
    number = prompt('enter a number above 100', '');
} while (number <= 100 && number);

let n = prompt('enter a number above 1','');

nextPrime:
for (let i = 2; i <= n; i++) {
    for(let j = 2; j < i; j++) {
        if (!(i % j)) continue nextPrime;
    }
    alert(i);
}