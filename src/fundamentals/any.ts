// this is like javascript works, be careful when to use any (it can spread like wildfire)
let notSure: any = 4;
notSure = 'maybe a string instead';
notSure = false;

console.log(typeof notSure); // boolean

let random; // type is any
