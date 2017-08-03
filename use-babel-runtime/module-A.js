
const arrayTest = [1, 2, 3];
const arrayTestFindEqual1 = Array.find(arrayTest, (i) => (
  i === 1
));
console.log(`arrayTest.find(1) result: ${arrayTestFindEqual1}`);

function t (x, ...y) {
  console.log(x);
  console.log(y);
}

const objectA = {
  x: 1,
  y: 2,
};

const objectB = {
  x: 0,
  z: 3,
};

const objectC = Object.assign({}, objectA, objectB);

const objectD = {
  xx: 9,
  ...objectC,
};

console.log(`objectA:
${JSON.stringify(objectA, null, 2)}
--------`);

console.log(`objectB:
${JSON.stringify(objectB, null, 2)}
--------`);

console.log(`objectC:
${JSON.stringify(objectC, null, 2)}
--------`);

console.log(`objectD:
${JSON.stringify(objectD, null, 2)}
--------`);

const { xx: newXX } = objectD;
console.log(`objectD.xx as newXX: ${newXX}`);

export default class A {
  constructor(props) {
    this.id = props.id ? props.id : 'A';
  }
}
