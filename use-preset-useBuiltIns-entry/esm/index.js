import 'core-js';
import 'regenerator-runtime/runtime';
import promiseModule from './promise-module';
import printInBrowser from './print-in-browser';
printInBrowser('THIS IS TEST FOR use-preset-useBuiltIns-entry', 'h1');
// TEST Promise
promiseModule(['a', 'b', 'c']).then(function (val) {
    printInBrowser(JSON.stringify(val, null, 2));
});
// TEST Array.fill
printInBrowser(JSON.stringify(Array(5).fill('useBuiltIns-entry'), null, 2));
