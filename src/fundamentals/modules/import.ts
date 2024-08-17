import newStudent, { sayHello, person, type Student } from './modules';

sayHello('typescript');
console.log(newStudent);
console.log(person);

const anotherStudent: Student = {
  name: 'bob',
  age: 21,
};

console.log(anotherStudent);
