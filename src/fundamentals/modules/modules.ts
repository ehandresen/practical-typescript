// If your TypeScript files aren't modules (i.e., they don't have any import or export statements), they're treated as scripts in the global scope. In this case, declaring the same variable in two different files would cause a conflict.

export function sayHello(name: string): void {
  console.log(`Hello ${name}`);
}

export let person = 'susan';

export type Student = {
  name: string;
  age: number;
};

const newStudent: Student = {
  name: 'peter',
  age: 23,
};

export default newStudent;
