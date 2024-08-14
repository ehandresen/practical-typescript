function calculateDiscount(price: number): number {
  return price * 0.9;
}

const finalPrice = calculateDiscount(48); // finalPrice is now inferred as a number

console.log(finalPrice);

// Challenge

let names = ['John', 'Tim', 'Veronica', 'Jessica'];

function isNameInList(name: string): boolean {
  return names.includes(name);
}

const nameToCheck = 'John';

if (isNameInList(nameToCheck)) {
  console.log(`${nameToCheck} is in list`);
} else {
  console.log(`${nameToCheck} is in NOT list`);
}

//* optional parameters
function calculatePrice(price: number, discount?: number): number {
  return price - (discount || 0);
}

let book = calculatePrice(100, 20);
console.log('Price of book', book); // price of book 80

let book2 = calculatePrice(50);
console.log('Price of book', book2); // price of book 50

//* default parameters
function calculateScore(
  initialScore: number,
  penaltyPoints: number = 0 // default value
): number {
  return initialScore - penaltyPoints;
}

let scoreAfterPenalty = calculateScore(100, 20); // 80
let scoreBeforePenalty = calculateScore(100); // 100

//* rest parameter
function sum(message: string, ...numbers: number[]): string {
  const doubled = numbers.map((num) => num * 2);
  console.log(doubled);

  const total = numbers.reduce((previous, current) => {
    return previous + current;
  }, 0);

  return `${message}${total}`;
}

const result = sum(`the total is: `, 1 + 2 + 3 + 4 + 5 + 6 + 7 + 9);
console.log(result);

//* void keyword
function logMessage(message: string): void {
  // typescript infers the void return type if no return type is set
  console.log(message);
}

logMessage('Hello, Typescript');

//* using union types as function parameter and type guards
// type guard checks parameter at runtime
function processInput(input: string | number): void {
  console.log(typeof input);
  if (typeof input === 'number') {
    console.log(input * 2);
  } else if (typeof input === 'string') {
    console.log(input.toUpperCase());
  }
}

processInput(10);
processInput('Hello');

//* objects are parameters
function createEmployee({ id }: { id: number }): {
  id: number;
  isActive: boolean;
} {
  return {
    id,
    isActive: id % 2 === 0,
  };
}

const employee = createEmployee({ id: 2 });
const employee2 = createEmployee({ id: 3 });
console.log(employee, employee2);

// alternative

function createStudent(student: { id: number; name: string }): void {
  console.log(`Welcome ${student.name.toUpperCase()}`);
}

const newStudent = {
  id: 1,
  name: 'John',
};

createStudent(newStudent);
