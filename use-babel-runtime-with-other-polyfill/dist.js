import _possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import _inherits from 'babel-runtime/helpers/inherits';
import _classCallCheck from 'babel-runtime/helpers/classCallCheck';
import Promise from 'promise-polyfill';

var promiseTest = new Promise(function (resolve) {
  console.log('inner promise');
  resolve('console in resolve');
});

promiseTest.then(function (value) {
  console.log(value);
});

console.log('outer promise');
var A = function A() {
  _classCallCheck(this, A);
};

var B = function (_A) {
  _inherits(B, _A);

  function B(props) {
    _classCallCheck(this, B);

    return _possibleConstructorReturn(this, (B.__proto__ || Object.getPrototypeOf(B)).call(this, props));
  }

  return B;
}(A);
