import A from './module-A';

export default class B extends A {
  constructor(props) {
    super(props);
    this.id = 'B';
  }

  test() {
    console.log(`This.id: ${this.id}`);
  }
}
