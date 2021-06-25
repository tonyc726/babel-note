"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js/promise"));

var _map = _interopRequireDefault(require("@babel/runtime-corejs3/core-js/instance/map"));

var _stringify = _interopRequireDefault(require("@babel/runtime-corejs3/core-js/json/stringify"));

var _default = function _default(list) {
  return new _promise.default(function (resolve, reject) {
    if ((list === null || list === void 0 ? void 0 : list.length) === 0) {
      reject(new Error('list is invalided.'));
    }

    resolve((0, _map.default)(list).call(list, function (val, index) {
      return "[" + (index + 1) + "/" + list.length + "]: " + (0, _stringify.default)(val);
    }));
  });
};

exports.default = _default;