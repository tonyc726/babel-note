'use strict';

var _promisePolyfill = require('promise-polyfill');

var _promisePolyfill2 = _interopRequireDefault(_promisePolyfill);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var promiseTest = new _promisePolyfill2.default(function (resolve) {
  console.log('inner promise');
  resolve('console in resolve');
});

promiseTest.then(function (value) {
  console.log(value);
});

console.log('outer promise');

var arrayFindTest = Array.findIndex([1, 2, 3], function (i) {
  return i === 5;
});

console.log('arrayFindTest ' + (arrayFindTest < 0 ? 'not find' : 'find') + ' 5.');
