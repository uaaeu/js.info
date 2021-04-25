'use strict';

// bad style
function ust(x,n)
{
  let sonuc=1;
  for(let i=0;i<=n;i++) {sonuc*=x;}
  return sonuc;
}

let x=prompt("x?",''), n=prompt("n?",'')
if (n<=0)
{
  alert(`${n} üssü alınamadı, kullandığınız sayı 0'dan küçük olamaz. Lütfen doğal sayıları kullanınız.`);
}
else
{
  alert(ust(x,n))
}

// good style
function ust(x, n) {
  let sonuc = 1;

  for (let i = 0; i <= n; i ++) {
    sonuc *= x;
  }

  return sonuc;
}

let x = prompt('x', '');
let n = prompt('n', '');

if (n <= 0) {
  alert(`${n} üssü alınamadı, kullandığınız sayı 0'dan küçük olamaz.
    Lütfen doğal sayıları kullanınız.`);
} else {
  alert( ust(x, n) );
}