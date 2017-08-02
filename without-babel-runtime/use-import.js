import Promise from 'babel-runtime/core-js/promise';
import B from './module-B';

const promiseTest = new Promise((resolve) => {
  console.log('inner promise'); // 1
  resolve('console in resolve');
});

promiseTest.then((value) => {
  console.log(value); // 3
});

console.log('outer promise'); // 2

// test class helpers
const C = new B('c');
C.test();
