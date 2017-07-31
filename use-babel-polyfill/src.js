import 'babel-polyfill';

const promiseTest = new Promise((resolve) => {
  console.log('inner promise'); // 1
  resolve('console in resolve');
});

promiseTest.then((value) => {
  console.log(value); // 3
});

console.log('outer promise'); // 2
