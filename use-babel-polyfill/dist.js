'use strict';

require('babel-polyfill');

var promiseTest = new Promise(function (resolve) {
  console.log('inner promise');
  resolve('console in resolve');
});

promiseTest.then(function (value) {
  console.log(value);
});

console.log('outer promise');
