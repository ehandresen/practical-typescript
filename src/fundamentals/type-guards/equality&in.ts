type Cat = { type: 'cat'; name: string; meow: () => void };
type Dog = { type: 'dog'; name: string; bark: () => void };
type Animal = Dog | Cat;

function makeSound(animal: Animal): void {
  if (animal.type === 'dog') {
    //* kan also check for properties with: if ('bark' in animal)
    animal.bark();
    return;
  } else {
    animal.meow();
    return;
  }
}

const animal: Animal = {
  type: 'dog',
  name: 'rex',
  //   bark: () => console.log(`bark bark my name is ${animal.name}`),
  bark(): void {
    console.log(`bark bark my name is ${this.name}`);
  },
};

makeSound(animal);
