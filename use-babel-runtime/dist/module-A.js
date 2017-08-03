'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _find = require('babel-runtime/core-js/array/find');

var _find2 = _interopRequireDefault(_find);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var arrayTest = [1, 2, 3];
var arrayTestFindEqual1 = (0, _find2.default)(arrayTest, function (i) {
  return i === 1;
});
console.log('arrayTest.find(1) result: ' + arrayTestFindEqual1);

function t(x) {
  console.log(x);

  for (var _len = arguments.length, y = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    y[_key - 1] = arguments[_key];
  }

  console.log(y);
}

var objectA = {
  x: 1,
  y: 2
};

var objectB = {
  x: 0,
  z: 3
};

var objectC = (0, _assign2.default)({}, objectA, objectB);

var objectD = (0, _extends3.default)({
  xx: 9
}, objectC);

console.log('objectA:\n' + (0, _stringify2.default)(objectA, null, 2) + '\n--------');

console.log('objectB:\n' + (0, _stringify2.default)(objectB, null, 2) + '\n--------');

console.log('objectC:\n' + (0, _stringify2.default)(objectC, null, 2) + '\n--------');

console.log('objectD:\n' + (0, _stringify2.default)(objectD, null, 2) + '\n--------');

var newXX = objectD.xx;

console.log('objectD.xx as newXX: ' + newXX);

var A = function A(props) {
  (0, _classCallCheck3.default)(this, A);

  this.id = props.id ? props.id : 'A';
};

exports.default = A;
