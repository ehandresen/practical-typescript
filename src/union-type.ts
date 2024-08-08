// tax can now be either a number or a string
let tax: number | string = 100;

tax = tax + '$'; // this works

console.log(tax); // 100$

// provide literal values
let requestStatus: 'pending' | 'success' | 'error' = 'pending';
requestStatus = 'success';
// requestStatus = 'another value' this does not work
