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

// optional parameters
function calculatePrice(price: number, discount?: number): number {
  return price - (discount || 0);
}

let book = calculatePrice(100, 20);
console.log('Price of book', book); // price of book 80

let book2 = calculatePrice(50);
console.log('Price of book', book2); // price of book 50

// default parameters
function calculateScore(
  initialScore: number,
  penaltyPoints: number = 0 // default value
): number {
  return initialScore - penaltyPoints;
}

let scoreAfterPenalty = calculateScore(100, 20); // 80
let scoreBeforePenalty = calculateScore(100); // 100

// rest parameter
function sum(message: string, ...numbers: number[]): string {
  const doubled = numbers.map((num) => num * 2);
  console.log(doubled);

  const total = numbers.reduce((previous, current) => {
    return previous + current;
  }, 0);

  return `${message}${total}`;
}

const result = sum(`the total is: `, 1 + 2 + 3 + 4 + 5 + 6 + 7);
console.log(result);
