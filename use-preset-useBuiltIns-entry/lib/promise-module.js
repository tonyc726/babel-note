"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default(list) {
  return new Promise(function (resolve, reject) {
    if ((list === null || list === void 0 ? void 0 : list.length) === 0) {
      reject(new Error('list is invalided.'));
    }

    resolve(list.map(function (val, index) {
      return "[" + (index + 1) + "/" + list.length + "]: " + JSON.stringify(val);
    }));
  });
};

exports.default = _default;