import promiseModule from './promise-module';
import printInBrowser from './print-in-browser';
printInBrowser('THIS IS TEST FOR use-babel-plugin-transform-runtime', 'h1');
// TEST Promise
promiseModule(['a', 'b', 'c']).then(function (val) {
    printInBrowser(JSON.stringify(val, null, 2));
});
// TEST Array.fill
printInBrowser(JSON.stringify(Array(3).fill('use-babel-plugin-transform-runtime'), null, 2));
