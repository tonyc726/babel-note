"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.promise.js");

require("core-js/modules/es.array.map.js");

var _default = function _default(list) {
  return new Promise(function (resolve, reject) {
    if ((list === null || list === void 0 ? void 0 : list.length) === 0) {
      reject(new Error('list is invalided.'));
    }

    setTimeout(function () {
      resolve(list.map(function (val, index) {
        return "[" + (index + 1) + "/" + list.length + "]: " + JSON.stringify(val);
      }));
    }, 1000);
  });
};

exports.default = _default;