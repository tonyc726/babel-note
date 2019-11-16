import { add } from './a';

console.log('Module B');

exports.name = 'b';
exports.testAdd = add(1, 2);
