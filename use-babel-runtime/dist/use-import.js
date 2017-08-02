'use strict';

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _moduleB = require('./module-B');

var _moduleB2 = _interopRequireDefault(_moduleB);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var promiseTest = new _promise2.default(function (resolve) {
  console.log('inner promise');
  resolve('console in resolve');
});

promiseTest.then(function (value) {
  console.log(value);
});

console.log('outer promise');
var C = new _moduleB2.default('c');
C.test();
