// most likely would not set it up like this but its how it works under the hood
let car1: car = {
  brand: 'toyota',
  year: 2000,
  model: 'one',
  color: 'red',
  fourWD: true,
};

interface car {
  brand: string;
  model: string;
  year: number;
  color: string;
  fourWD: boolean;
}

console.log(car1);
