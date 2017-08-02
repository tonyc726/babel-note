import Promise from 'promise-polyfill';

const promiseTest = new Promise((resolve) => {
  console.log('inner promise'); // 1
  resolve('console in resolve');
});

promiseTest.then((value) => {
  console.log(value); // 3
});

console.log('outer promise'); // 2

// babel-runtime/helpers
class A {
}

class B extends A {
  constructor(props) {
    super(props);
  }
}

