import promiseModule from './promise-module';

//
promiseModule(['a', 'b', 'c']).then((val) => {
  console.log(JSON.stringify(val, null, 2));
});

//
Array(10).fill('test');
