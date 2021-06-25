"use strict";

require("core-js/modules/es.array.fill.js");

var _promiseModule = _interopRequireDefault(require("./promise-module"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
(0, _promiseModule.default)(['a', 'b', 'c']).then(function (val) {
  console.log(JSON.stringify(val, null, 2));
}); //

Array(10).fill('test');