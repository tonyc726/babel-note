"use strict";

require("core-js/modules/es.array.fill.js");

require("core-js");

require("regenerator-runtime/runtime");

var _promiseModule = _interopRequireDefault(require("./promise-module"));

var _printInBrowser = _interopRequireDefault(require("./print-in-browser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _printInBrowser.default)('THIS IS TEST FOR use-preset-useBuiltIns-usage', 'h1'); // TEST Promise

(0, _promiseModule.default)(['a', 'b', 'c']).then(function (val) {
  (0, _printInBrowser.default)(JSON.stringify(val, null, 2));
}); // TEST Array.fill

(0, _printInBrowser.default)(JSON.stringify(Array(5).fill('usage'), null, 2));