'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _moduleA = require('./module-A');

var _moduleA2 = _interopRequireDefault(_moduleA);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var B = function (_A) {
  (0, _inherits3.default)(B, _A);

  function B(props) {
    (0, _classCallCheck3.default)(this, B);

    var _this = (0, _possibleConstructorReturn3.default)(this, (B.__proto__ || (0, _getPrototypeOf2.default)(B)).call(this, props));

    _this.id = 'B';
    return _this;
  }

  (0, _createClass3.default)(B, [{
    key: 'test',
    value: function test() {
      console.log('This.id: ' + this.id);
    }
  }]);
  return B;
}(_moduleA2.default);

exports.default = B;
