const books = ['Atomic Habits', 'Limitless', 'Homo Sapiens'];

// foundBook might be undefined at runtime. This is a good practice in TypeScript because it helps prevent bugs related to undefined values.
let foundBook: string | undefined;

for (let book of books) {
  if (book === 'Limitless') {
    foundBook = book;
    foundBook = foundBook.toUpperCase();
    break;
  }
}

// Optional Chaining
// foundBook.length will only run if its a string
// foundBook.length would cause runtime error if the value was undefined
console.log(foundBook, foundBook?.length);

// Challenges
// 1. Create a variable orderStatus of type 'processing' | 'shipped' | 'delivered' and assign it the value 'processing'. Then, try to assign it the values 'shipped' and 'delivered'.

let orderStatus: 'processing' | 'shipped' | 'delivered' = 'processing';
orderStatus = 'shipped';
orderStatus = 'delivered';

// 2. Create a variable discount of type number | string and assign it the value 20. Then, try to assign it the value '20%'.

let discount: number | string = 20;
discount = '20%';
