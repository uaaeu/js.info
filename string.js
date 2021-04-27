'use strict';

let ucFirst = (str) => {
  return str[0].toUpperCase() + str.slice(1);
}

alert( ucFirst('musa') );

let checkSpam = (str) => {
  let spam1 = 'viagra';
  let spam2 = 'xxx';

  str = str.toLowerCase();

  if (str.includes(spam1) || str.includes(spam2)) return true;
  return false;
}

alert( checkSpam('buy ViAgRA now') );
alert( checkSpam('free xxxxx') )
alert( checkSpam("innocent rabbit") );

let truncate = (str, maxlength) => {
  return str.length < maxlength ? str :
    str.slice(0, maxlength - 3) + '...';
}

alert( truncate('a simple sentence', 11));
alert( truncate('hello', 7));

let extractCurrencyValue = (str) => {
  return +str.slice(1);
}

alert( extractCurrencyValue('$120') === 120 );