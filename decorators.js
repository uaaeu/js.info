'use strict'; 

let work = (a, b) => {
  alert( a + b );
}

let spy = (func) => {

  let wrapper = (...args) => {
    wrapper.calls.push(args);
    return func.apply(this, args);
  }

  wrapper.calls = [];

  return wrapper;
}

work = spy(work);

work(1, 2);
work(4, 5);

for (let args of work.calls) {
  alert('call:' + args.join() );
}

function f(x) {
  alert(x);
}

let delay = (f, ms) => {
  
  return function() {
    setTimeout(() => f.apply(this, arguments), ms);
  };
}

let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

f1000("test");
f1500("test");

let debounce = (func, ms) => {
  let timeout;

  return function() {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, arguments), ms);
  };
}

let debounceLong = (f, ms) => {
  let isCooldown = false;

  return function() {
    if (isCooldown) return;

    f.apply(this, arguments);

    isCooldown = true;

    setTimeout(() => isCooldown = false, ms);
  }
}

let throttle = (func, ms) => {

  let isThrottled = false,
    savedArgs,
    savedThis;

  let wrapper = () => {

    if (isThrottled) {
      savedArgs = arguments;
      savedThis = this;
      return;
    }
    isThrottled = true;

    func.apply(this, arguments);

    setTimeout(function() {
      isThrottled = false;
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = savedThis = null;
      }
    }, ms);
  }

  return wrapper;
}