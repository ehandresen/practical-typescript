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

console.log(isNameInList('Tim')); // true
