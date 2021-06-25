"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default(text, elementName) {
  if (elementName === void 0) {
    elementName = 'pre';
  }

  var resultElem = document.createElement(elementName);
  resultElem.innerHTML = text;
  document.body.appendChild(resultElem);
};

exports.default = _default;