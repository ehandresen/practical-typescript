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
  if (!discount) return price;

  return price * discount;
}

let book = calculatePrice(100);
console.log('Price of book', book);
