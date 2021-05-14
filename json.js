'use strict'; 

let user = {
  name: 'Musa Yurt',
  age: 32
}

let userJSON = JSON.stringify(user);

alert(userJSON);

let userObj = JSON.parse(userJSON);

alert(userObj.name);

let room = {
  number: 23
};

let meetup = {
  title: 'Conference',
  occupiedBy: [{name: 'Musa'}, {name: 'Sena'}],
  place: room
};

room.occupiedBy = meetup;
meetup.self = meetup;

alert( JSON.stringify(meetup, function replacer(key, value) {
  return (key != '' && value == meetup) ? undefined : value;
}));