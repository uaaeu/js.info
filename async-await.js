'use strict';

async function loadJson(url) {
  let response = await fetch(url);

  if (response.status == 200) {
    let json = await response.json()
    return json;
  }

  throw new Error(response.status);
}


class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = 'HttpError';
    this.response = response;
  }
}

async function loadJson(url) {
  let response = await fetch(url);

  if (response.status == 200) {
    let json = await response.json();
    return json;
  }

  throw new HttpError(response);
}

async function demoGtihubUser() {

  let user;
  while(true) {
    let name = prompt('Enter a name?', 'uaaeu');

    try {
      user = await loadJson(`https://api.github.com/users/${name}`);
      break;
    } catch(err) {
      if (err instanceof HttpError && err.response.status == 404) {
        alert('No such user, please reenter.');
      } else {
        throw err;
      }
    }
  }
  alert(`Full name: ${user.name}.`);
  return user;
}

demoGtihubUser();

async function wait() {
  await new Promise(resolve => setTimeout(resolve, 1000));

  return 10
}

function f() {
  wait().then(result => alert(result));
}

f();