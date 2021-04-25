'use strict';

function sor(soru, evet, hayir) {
  if (confirm(soru)) evet()
  else hayir();
}

sor(
  "Kabul ediyor musun?",
  function() { alert("Kabul ettin"); },
  function() { alert("Çalışmasını durdurdun"); }
);

let ask = (question, yes, no) => {
  confirm(question) ? yes() : no();
}

ask(
  'do you accept?',
  () => alert('accepted'),
  () => alert('rejected')
);