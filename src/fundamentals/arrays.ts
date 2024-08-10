const prices: number[] = [100, 75, 42];

prices.push(5);

console.log(prices);

const fruit: string[] = ['apple', 'orange', 'kiwi'];
fruit.push('pear');
console.log(fruit);

let array: (string | boolean)[] = ['apple', true, 'orange'];

// Challenges

let temperatures: number[] = [10, 20, 100, 50];
temperatures.push('five'); // typescript error
console.log(temperatures);

let colors: string[] = ['ferrari', 'audi', 'ford'];
colors.push(false); // typescript error
console.log(colors);

let mixedArray: (number | string)[] = [10, 'banana', 5, 'apple'];
mixedArray.push(true); //typescript error
console.log(mixedArray);
