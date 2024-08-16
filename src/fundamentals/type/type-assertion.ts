let somValue: any = 'this is a string';

// typescript doesn't know its a string, but we do, so we are kinda saying, just trust us
let stringLength: number = (somValue as string).length;

type Bird = {
  name: string;
};

let birdString = '{"name": "Eagle"}';
let dogString = '{"breed": "Poodle"}';

let birdObj = JSON.parse(birdString);
let dogObj = JSON.parse(dogString);

let bird = birdObj as Bird;
let dog = dogObj as Bird;

console.log(bird.name);
console.log(dog.name);

enum Status {
  Pending = 'pending',
  Declined = 'declined',
}

type User = {
  name: string;
  status: Status;
};
// save Status.Pending in the DB as a string
// retrieve string from the DB
const statusValue = 'pending';

const user: User = { name: 'john', status: statusValue as Status };
