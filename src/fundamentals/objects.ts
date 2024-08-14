// most likely would not set it up like this but its how it works under the hood
let car: { brand: string; year: number } = {
  brand: 'toyota',
  year: 2000,
};

console.log(car);

let book = { title: 'book', cost: 20 };
let pen = { title: 'pen', cost: 10 };
let notebook = { title: 'notebook' };

// optional property (here 'cost')
let items: { readonly title: string; cost?: number }[] = [book, pen, notebook];
items[0].title = 'new book'; // cannot change read-only property

// Challenge

// 1. Create an object bike of type { brand: string, year: number } and assign it some values. Then, try to assign a string to the year property.

let bike: { brand: string; year: number } = {
  brand: 'MX',
  year: 2020,
};

bike.year = '2011';
console.log(bike);

// 2. Create an object laptop of type { brand: string, year: number } and try to assign an object with missing year property to it.

let laptop: { brand: string; year: number } = {
  brand: 'MacBook Air M1',
};

// 3. Create an array products of type { title: string, price?: number }[] and assign it some values. Then, try to add an object with a price property of type string to it.

const bed = { title: 'bed', price: 100 };
const tv = { title: 'tv' };

let products: { title: string; price?: number }[] = [bed, tv];
console.log(products);
products.push({ title: 'swimming pool', price: 'expensive' });

console.table(products);

// test github
