
const arrayTest = [1, 2, 3];

export default class A {
  constructor(props) {
    this.id = props.id ? props.id : 'A';
  }
  findTest(x) {
    return arrayTest.find(x);
  }
}

