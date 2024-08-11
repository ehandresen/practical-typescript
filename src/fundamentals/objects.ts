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
let items: { title: string; cost?: number }[] = [book, pen, notebook];

console.log(items);
