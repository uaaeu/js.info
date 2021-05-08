'use strict';

let messages = [
  {text: "Hello", from: "John"},
  {text: "How goes?", from: "John"},
  {text: "See you soon", from: "Alice"}
];

let readMessages = new WeakSet();

readMessages.add(messages[0]);
readMessages.add(messages[1]);

readMessages.add(messages[0]);

alert("Read message 0: " + readMessages.has(messages[0]));

messages.shift();

alert("Read message 0: " + readMessages.has(messages[1]));

let readMap = new WeakMap();

readMap.set(messages[0], new Date(2021, 4, 8));
readMap.set(messages[1], new Date(2021, 4, 8));

alert("Message 0 has read on: " + readMap.get(messages[0]));