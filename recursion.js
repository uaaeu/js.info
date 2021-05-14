'use strict'; 

let sumLoop = (n) => {
  let sum = 0;

  for(let i = 0; i <= n; i++) {
    sum += i;
  }

  return sum;
}

alert(sumLoop(100));

let sumRec = (n) => {
  return (n != 1) ? n + sumRec(n - 1) : 1;
}

alert(sumRec(4));

let sum = (n) => {
  return n * (n + 1) / 2;
}

alert(sum(5));

let factorial = (n) => {
  return (n != 1) ? n * factorial(n - 1) : 1;
}

alert(factorial(4));

let fib = (n) => {
  return (n <= 1) ? n : fib(n - 1) + fib(n -2);
}

alert(fib(3));
alert(fib(7));

let fibLoop = (n) => {
  let a = 1;
  let b = 1;
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}

alert(fibLoop(77));

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

let printList = (list) => {
  alert(list.value);

  if (list.next) {
    printList(list.next);
  }
}

printList(list);

let printListLoop = (list) => {
  let tmp = list;

  while(tmp) {
    alert(tmp.value);
    tmp = tmp.next;
  }
}

printListLoop(list);

let printListReverse = (list) => {
  if (list.next) {
    printListReverse(list.next);
  }

  alert(list.value);
}

printListReverse(list);

let printListLoopReverse = (list) => {
  let arr = [];
  let tmp = list;

  while(tmp) {
    arr.push(tmp.value);
    tmp = tmp.next;
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    alert(arr[i]);
  }
}

printListLoopReverse(list);