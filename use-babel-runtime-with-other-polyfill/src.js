import Promise from 'promise-polyfill';

const promiseTest = new Promise((resolve) => {
  console.log('inner promise'); // 1
  resolve('console in resolve');
});

promiseTest.then((value) => {
  console.log(value); // 3
});

console.log('outer promise'); // 2

const arrayFindTest = Array.findIndex([1, 2, 3], ((i) => (
  i === 5
)));

console.log(`arrayFindTest ${(arrayFindTest < 0) ? 'not find' : 'find'} 5.`);
