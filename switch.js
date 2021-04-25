'use strict';

let browser;

switch (browser) {
  case 'Edge':
    alert( "Edge browser kullanıyorsun" );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Tamam bunları destekliyoruz.' );
    break;

  default:
    alert( 'Umarım sayfanız güzel görünüyordur' );
}


if (browser == 'Edge') {
  alert('You are using Edge browser');
} else if (browser == 'Chrome' 
 || browser == 'Firefox' 
 || browser == 'Safari' 
 || browser == 'Opera') {
  alert('OK. We are support this browser');
} else {
  alert('We hope your page looks beautiful');
}

let a = +prompt('a?', '');

if (a == 0) {
  alert( 0 );
}
if (a == 1) {
  alert( 1 );
}

if (a == 2 || a == 3) {
  alert( '2,3' );
}

switch(a) {
  case 0:
    alert (0);
    break;
  
  case 1:
    alert(1);
    break;
  
    case 2:
    case 3:
      alert ('2,3');
      break;
}
