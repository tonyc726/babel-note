"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _stringify = _interopRequireDefault(require("@babel/runtime-corejs3/core-js/json/stringify"));

var _fill = _interopRequireDefault(require("@babel/runtime-corejs3/core-js/instance/fill"));

var _promiseModule = _interopRequireDefault(require("./promise-module"));

var _printInBrowser = _interopRequireDefault(require("./print-in-browser"));

var _context;

(0, _printInBrowser.default)('THIS IS TEST FOR use-babel-plugin-transform-runtime', 'h1'); // TEST Promise

(0, _promiseModule.default)(['a', 'b', 'c']).then(function (val) {
  (0, _printInBrowser.default)((0, _stringify.default)(val, null, 2));
}); // TEST Array.fill

(0, _printInBrowser.default)((0, _stringify.default)((0, _fill.default)(_context = Array(3)).call(_context, 'use-babel-plugin-transform-runtime'), null, 2));