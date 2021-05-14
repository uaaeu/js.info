'use strict';

let date = new Date(2012, 1, 20, 3, 12);

alert(date);

let dayOfTheWeek = (date) => {
  let daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  return daysOfWeek[date.getDay()];
}

let date = new Date(2014, 0, 3);

alert(dayOfTheWeek(date));

let getDateAgo = (date, days) => {
  let dateCopy = new Date(date);
  
  dateCopy.setDate(date.getDate() - days);
  return dateCopy.getDate();
}

let date = new Date(2015, 0, 2);

alert(getDateAgo(date, 1));
alert(getDateAgo(date, 2));
alert(getDateAgo(date, 365));

let getLastDayOfMonth = (year, month) => {
  let date = new Date(year, month + 1, 0)
  return date.getDate();
}

alert(getLastDayOfMonth(2012, 1));

let getSecondsToday = () => {
  let now =  new Date();

  let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  let diff =  now - today;
  return Math.round(diff / 1000);
}

alert(getSecondsToday());

let getSecondsToTomorrow = () => {
  let now = new Date()

  let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);

  let diff = tomorrow - now;
  return Math.round(diff / 1000);
}

alert(getSecondsToTomorrow());

let formatDate = (date) => {
  let diff = new Date() - date;

  if (diff < 1000) {
    return 'right now';
  }

  let sec = Math.floor(diff / 1000);

  if (sec < 60) { 
    return sec + ' sec. ago';
  }

  let min = Math.floor(diff / 60000);

  if (min < 60) {
    return min + ' min. ago';
  }

  let d  = date;
  d = [
    ('0' + `${d.getDate()}`).slice(-2),
    ('0' + `${(d.getMonth() + 1)}`).slice(-2),
    `${d.getFullYear()}`,
    ('0' + `${d.getHours()}`).slice(-2),
    ('0' + `${d.getMinutes()}`).slice(-2)
  ];

  return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');
}

alert( formatDate(new Date(new Date - 1)) );
alert( formatDate(new Date(new Date - 30 * 1000)) );
alert( formatDate(new Date(new Date - 5 * 60 * 1000)) );
alert( formatDate(new Date(new Date - 86400 * 1000)) );